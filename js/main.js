

// $(document).ready(function(){

//set total to zero
totalAmount = 0

//listen for form submission

$("#entry").on("submit", function(evt){
  //prevent the default action
  evt.preventDefault();
// capture user input
  var amount = Number($("#newEntry").val());
  if (isNaN(amount)){
    console.log("error")} else {
totalAmount = amount + totalAmount;
$("tbody").append("<tr><td></td><td>" + amount.toFixed(2) + "</td></tr>")
$("#total").html("$" + totalAmount.toFixed(2));
$("#newEntry").val(null);}


// } else {
//   console.log("error")
// }
;


})

// take output of submit and append an entry with that amount
// add this number to the total
// make an array
