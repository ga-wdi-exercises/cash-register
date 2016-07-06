$(document).ready(function(){
  // listen for form submission
  $("#entry").on("submit", function(evt){
    // prevent default action
    evt.preventDefault();
    // get user input && convert to float with 2 decimal placess
    var amount = $("#newEntry").val();
    var floatAmount = parseFloat(amount).toFixed(2);
    console.log(floatAmount);
    // place user input in table
    // One tr, containing 2 td's, final td has amount
    var newRow = $("<tr></tr>");
    newRow.append($("<td></td>"));
    newRow.append($("<td>" + floatAmount + "</td>"));
    $("#entries").append(newRow);
    // update total
    //  get current total
    var total = $("#total").html();
    var numericTotal = parseFloat(total.split("$")[1]);
    var actualTotal = parseFloat(floatAmount) + numericTotal;

    //actualTotal = Math.round(actualTotal * 1e2);
    
    //actualTotal = actualTotal.toFixed(2);

    $("#total").html("$"+ actualTotal.toFixed(2));

    //if (isNaN(balance)) {
    //  balance = 0;
    //}

    $("input#newEntry").val("")
  })
  // make sure dollar signs are there

})
