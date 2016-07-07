$(document).ready(function(){
//Gets the doc ready for JQuery to load
console.log("JQ is working");
$("#entry").on("submit", function(evt){
//("#entry") = submission field, our selector
//.on = an action, connecting it to "submit"
//submit = whenever something is submitted in the submission field, a function will take place.
//function = the WHOLE CODE; what we are putting in to work
//evt= whenever this event happens, create a function
evt.preventDefault()
//.preventDefault()
  var amount = $("#newEntry").val()
  var floatAmount = parseFloat(amount).toFixed(2)
  //console.log(typeof(floatAmount));
  var newRow = $("<tr></tr>")
  newRow.append($("<td><td>"))
  newRow.append($("<td>" + floatAmount +
"</td>"))
  $("#entries").append(newRow)
  floatAmount = parseFloat(floatAmount)
  //console.log(floatAmount, typeof(floatAmount));

  var total = $("#total").html().split("$")[1]
  console.log(total, typeof(total));
  total = parseFloat(total);
  console.log(total, typeof(total));

  actualTotal = total + floatAmount;
  console.log(actualTotal, typeof(actualTotal));
  $("#total").html("$" + actualTotal.toFixed(2))
  $("input").val("")
  //place user input in table
    //One tr containting 2 td's, final td has amount
  })
});
//add the input to table
  //make sure 2 decimal places
//update total
//make sure dollar signs are there
