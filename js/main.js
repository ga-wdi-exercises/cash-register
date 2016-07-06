/*pseudo:
take the input, store that input value as a variable (to reuse)
append a new <paragraph> with content = variable + existing value*/

//listen for form submission
$("#entry").on("submit", function(e){
  //prevent default action (because its a form, wants to reload and you'd lose data)
  e.preventDefault();
//get user input
var amount = $("#newEntry").val();
//convert to 2 decimal places
var floatAmount = parseFloat(amount).toFixed(2);

//place user input in table
  // add table row, and append data cells to that row
var newRow = $("<tr></tr>");
//empty data cell
newRow.append( $("<td></td>") );
//data cell that includes the $ float amount
newRow.append( $("<td>" + "$" + floatAmount + "</td>") )
//give that table body the new row
$("#entries").append(newRow)
//converting back to float
floatAmount = parseFloat(floatAmount);
//checking to make sure it's a number, not a string
console.log(typeof(floatAmount));
//getting the inner html of the #total
var total = $("#total").html()
//taking that total, split it out to an array, access only the part we want)
var numericalTotal = parseFloat(total.split("$")[1]);
console.log(typeof(numericalTotal));
// take the new entry that we formatted, add it to the numericaltotal which is the running total
var actualTotal = floatAmount + numericalTotal
console.log(typeof(actualTotal));
//take what we just added, convert to string
actualTotal = actualTotal.toFixed(2);
console.log(typeof(actualTotal), actualTotal);
//change the inner html for #total
$("#total").html("$" + actualTotal);
//clear field
$("#newEntry").val("")
})
