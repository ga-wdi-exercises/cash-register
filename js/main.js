$(document).ready(function() {
  //Listen for form submission
  $('#entry').on("submit", function(evt){
    //prevent default action (it's a form, forms auto-submit)
    evt.preventDefault();
    //Get user input && convert to float(anything in input is automatically made a string, float changes that)
    var amount = $("#newEntry").val();
    //parseFloat changes strings into numbers with 2 decimal places
    var floatAmount = parseFloat(amount).toFixed(2);
    console.log(floatAmount);

    //place user input in table
    //One tr, containing 2 td's, final td has amount
      //2 tr's needed because the 1st is blank & pushes data to the right
    //add the input to table
    var newRow = $("<tr></tr>");
    newRow.append($("<td></td>"));
    newRow.append($("<td>" + floatAmount + "</td>"));
    $("#entries").append(newRow);
    //update total
    //make sure dollar signs are there
    var total = $("#total").html();
    console.log(total);
    //.split() converts an empty string into an array
    var numericTotal = total.split("$");
    numericTotal = parseFloat(numericTotal[1]);
    console.log(numericTotal);
    var actualTotal = floatAmount + numericTotal;
    $("#total").html("$" + parseFloat(actualTotal).toFixed(2));
    console.log(actualTotal);

    $("#newEntry").val("");


  })
});
