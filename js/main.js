$(document).ready(function (){

//set total to zero
var total = 0;

//listen for form submission
$("#entry").on("submit", function(evt){

   //prevent the default application
   evt.preventDefault();

   //capture user input
   var amount = parseInt($("#newEntry").val());
   console.log(amount);
   console.log(typeof amount);

   total += amount;
   console.log(total.toFixed(2));


$("tbody").append("<tr><td></<td><td>" + amount + "</td></tr>");
  $("#total").html("$" + totalAmount);
  $("#newEntry").va();
})

});
