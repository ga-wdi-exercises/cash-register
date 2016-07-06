/*pseudo:
take the input, store that input value as a variable (to reuse)
append a new <paragraph> with content = variable + existing value*/

//listen for form submission
$("#entry").on("submit", function(e){
  //prevent default action (because its a form, wants to clear)
  e.preventDefault();
//get user input
var amount = $("#newEntry").val();
//convert to 2 decimal places
var floatAmount = parseFloat(amount).toFixed(2);

//place user input in table
  // one tr, containing 2 td's, final td has amount
var newRow = $("<tr></tr>")
newRow.append( $("<td></td>") )
//make sure dollar signs are there
newRow.append( $("<td>" + "$" + floatAmount + "</td>") )
$("#entries").append(newRow)
//converting back to float
floatAmount = parseFloat(floatAmount);
//checking to make sure it's a number, not a string
console.log(typeof(floatAmount));
//get and update total
var total = $("#total").html()
var numericalTotal = parseFloat(total.split("$")[1])
console.log(typeof(numericalTotal));
var actualTotal = floatAmount + numericalTotal
console.log(typeof(actualTotal));
actualTotal = actualTotal.toFixed(2);
console.log(typeof(actualTotal), actualTotal);
$("#total").html("$" + actualTotal);


//clear field
$("#newEntry").val("")
})
