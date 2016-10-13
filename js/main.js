

// $(document).ready(function(){

//set total to zero
totalAmount = 0

//listen for form submission

$("#entry").on("submit", function(evt){
  //prevent the default action
  evt.preventDefault();
// capture user input
  var amount = parseInt($("#newEntry").val());
  if (isNaN(amount)){
    console.log("error")} else {
totalAmount = amount + totalAmount;
$("tbody").append("<tr><td></td><td>" + amount + "</td></tr>")
$("#total").html("$" + totalAmount);
$("#newEntry").val(null);}



// } else {
//   console.log("error")
// }
;






})

// take output of submit and append an entry with that amount
// add this number to the total
// make an array
