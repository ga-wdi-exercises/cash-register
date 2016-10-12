$(document).ready(function() {
var total = 0;

  function register() {
    $("#entry").on("submit", function(pd){
    pd.preventDefault();
    var userInput = Number($("#newEntry").val());
    total += userInput;
    var newEntry = $("<tr><td><td>"+userInput.toFixed(2)+"</td></td></tr>");
    $("#entries").append(newEntry);
    $("#total").html("$"+total.toFixed(2));
    $("#entry").trigger("reset");
    });
  }

register();
});
