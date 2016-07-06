$(document).ready(function(){
// get user input && convert to float
  $("#entry").on("submit", function(evt){
    evt.preventDefault()

    var amount = $("#newEntry").val()
    var floatAmount = parseFloat(amount).toFixed(2)
    console.log(amount);
    var newRow = $("<tr></tr>")
    newRow.append($("<td></td>"))
    newRow.append($("<td>" + floatAmount + "</td>"))
    $("#entries").append(newRow)

    var total = $("#total").html();
    var numericTotal = parseFloat(total.split("$")[1]);
    var actualTotal = parseFloat(floatAmount) + numericTotal;

    $("#total").html("$"+ actualTotal.toFixed(2));

    $("input#newEntry").val("");
  })
// place user input into the table
// add the input table
// make sure dollar signs are there





})
