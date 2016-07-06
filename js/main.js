$(document).ready(function(){
  // listen for form submission
  $("#entry").on("submit", function(evt){
    // prevent default action
    evt.preventDefault()
    // get user input && convert to float with 2 decimal placess
    var amount = $("#newEntry").val()
    var floatAmount = parseFloat(amount).toFixed(2)
    console.log(floatAmount);
    // place user input in table
    // One tr, containing 2 td's, final td has amount
    var newRow = $("<tr></tr>")
    newRow.append($("<td></td>"))
    newRow.append($("<td>" + floatAmount + "</td>"))
    $("#entries").append(newRow)
    // update total
      //  get current total

    var totalCost = $("#total").html();
    var numericTotal = parseFloat(totalCost.split("$")[1])
    console.log(typeof(floatAmount))
    console.log(typeof(numericTotal))
    var actualTotal = parseFloat(floatAmount) + numericTotal;
    $("#total").html("$" + actualTotal.toFixed(2));

    $("input#newEntry").val("");
  })



})
