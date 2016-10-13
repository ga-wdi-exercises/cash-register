//listen for form submission
$(document).ready(function(){

var total = 0;


$("#entry").on("submit", function(evt){
//Prevent the default action
  evt.preventDefault();
//Takes user input
  var inputAmount = parseFloat($("#newEntry").val());
//Append new rows for input
  $("#entries").append("<tr class='newValue'><td></td><td>" + "$" + inputAmount.toFixed(2) + "</td></tr>");
  total = total + inputAmount;
  $("#total").html("$" + total.toFixed(2));
//Clear input box
  $("#newEntry").val("");
  })

})
