$(document).ready(function() {
var total = 0;

  function register() {
    $("#entry").on("submit", function(pd){
    pd.preventDefault();
    var userInput = Number($("#newEntry").val());
      if (userInput > 0) {
        total += userInput;
        var newEntry = $("<tr><td><td>"+userInput.toFixed(2)+"</td></td></tr>");
        $("#entries").append(newEntry);
        $("#total").html("$"+total.toFixed(2));
        $("#entry").trigger("reset");
      } else {
        $("#entry").trigger("reset");
      }
    });
  }

  function dltButtons() {
    $("#dlt").on("click", function(pd) {
      pd.preventDefault();
      $("#entries tr").each(function() {
        $(this).children().first().html("<input type='submit' id='dlts' value='Delete Entry'>");
      });
    });
  }

  function dltEntry() {
    $('#dlts').on('click',function(pd){
        pd.preventDefault();
        console.log("it works");
      });
  }

register();
dltButtons();
dltEntry();
});
