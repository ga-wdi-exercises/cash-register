$(document).ready(function(){
// Uh oh -- it's saying `$` is undefined! Something's missing from `index.html`...
$("#entry").on("submit", function(evt)
{
  evt.preventDefault();
  console.log("submit works");

  var amount = $("#newEntry").val();
  var floatAmount = parseFloat(amount).toFixed(2);
  console.log(floatAmount);
//defines and limits new entry to floatAmount
  var newRow = $("<tr></tr>");
  newRow.append($("<td></td>"));
  newRow.append($("<td>"+ floatAmount +"</td>"));
  $("#entries").append(newRow);
//user input placed in table

  var total = $("#total").html();
//only inputs have val() use HTML because you are finding the inner HTML
  var tot = total.split("$")[1];
//total == 0.00 places the number after the dollar sign as the second number in an array
  var displayTotal = parseFloat(floatAmount + tot);
  console.log(displayTotal);

  $("input").on("keypress", function()
{
  $('#total').html(parseFloat(total) + parseFloat(displayTotal));
})

  $("input#newEntry").val("");
});
});
