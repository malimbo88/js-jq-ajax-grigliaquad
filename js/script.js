//myJavaScript
//JQuery
$(document).ready(function() {
  //On click
  $(document).on("click", ".quad", function(){
    var thisElement = $(this);
    //richiesta AJAX che prende un numero random da 1 a 9.
    $.ajax({
      url: "https://flynn.boolean.careers/exercises/api/random/int",
      method: "GET",
      success: function (data, state) {
        var number = data.response;
        console.log(number)
        thisElement.children().text(number)
        if (number <= 5) {
          thisElement.removeClass("green");
          thisElement.removeClass("yellow");
          thisElement.addClass("green")
        }else {
          thisElement.removeClass("green");
          thisElement.removeClass("yellow");
          thisElement.addClass("yellow")
        }
      },
      error: function (request, state, error) {
        alert("Warning error: " + error)
      }
    })
  })
  //end On click
});
//end Jquery
