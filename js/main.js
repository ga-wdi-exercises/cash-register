// listen for submission
$(document).ready(function(){

  var amount = 0;
  var total = 0;

$("#entry").on("submit", function(evt){
  //prevent the default application
  evt.preventDefault();
  //capture user input
  amount = Number($("#newEntry").val());
  console.log(amount);
  // save user input to <th>
$("#entries").append("<tr><td></td><td>" + amount.toFixed(2) + "</td></tr>");
  total += amount
  // var displayValue = $("#newEntry")
  // displayValue.text("#entries")
  $("#total").html("$" + total.toFixed(2))
  $("#entry").trigger("reset")
});
$("#deleteButton").on("click", function(evt){
 $("#entries").html("");



})
