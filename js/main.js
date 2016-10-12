$(document).ready(function(){

//listen for form submission

//how could i restructure code without muddying up global variable space?

var total = 0;
$("#entry").on("submit", function(evt){
	
	//check input is a number
if(isNaN($("input").val()) || $("input").val() === ""){
	alert("Please enter numbers only");
	$("input").val("");
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
	$("#entries").append("<tr class='newValue'><td></td><td>" + amount.toFixed(2) + "</td></tr>");

	// //update total
	total += amount;
	$("#total").html("$"+total.toFixed(2));

	//clear input
	$("input").val("");


	//add click event to table rows
	$(".newValue").on("click", deleteValue);
}

})

//this occasionally deletes the value twice.. not sure why..
function deleteValue(){
	console.log($(this).text());
	var deletedAmount = parseFloat($(this).text());
	console.log(deletedAmount);
	total -= deletedAmount;
	console.log(total);
	$("#total").html("$"+total.toFixed(2));
	$(this).remove();

}
})