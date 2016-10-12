$(document).ready(function(){

//listen for form submission
var total = 0;
$("#entry").on("submit", function(evt){
	
	//check input is a number
if(isNaN($("input").val()) || $("input").val() === ""){
	alert("Please enter numbers only");
	evt.preventDefault();

} else{

	//prevent default form refresh
	evt.preventDefault();
	
	//capture user input
	var amount = $("input").val();
	amount = parseFloat(amount);
	// console.log(amount);
	amount = Math.round(amount * 100)/100
	// console.log(amount)

	//log entry
	$("#entries").append("<tr><td></td><td>" + amount.toFixed(2) + "</td></tr>");

	// //update total
	total += amount;
	$("#total").html("$"+total.toFixed(2));

	//clear input
	$("input").val("");
}

})})