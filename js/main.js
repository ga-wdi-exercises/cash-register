$(document).ready(function(){
  // listen for form submission
  $("#entry").on("submit", function(evt){
    // prevents reloading of the page and loss of data
    evt.preventDefault();
    // get value of id #newEntry and is taking the .val of it && convert to float with 2 decimal placess
    var amount = $("#newEntry").val();
    var floatAmount = parseFloat(amount).toFixed(2);
    console.log(typeof(floatAmount));
    // place user input in table
    // One tr, containing 2 td's, final td has amount
    //add table row and append data cells to that row
    var newRow = $("<tr></tr>")
    //we are adding a table row, and use td because it's adding a row to table cell data, an empty data cell.
    newRow.append($("<td></td>"))
    //data cell that includes the floatAmount
    newRow.append($("<td>" + "$" + floatAmount + "</td>"))
    //adds rows to entries in the tbody(the ledger part of the body), shows the ledger, line by line
    $("#entries").append(newRow)
    // update total
    //  get current total
    //.html gets the contents of the first element, innerHTML property, total is going to the id of total in the html and , to get the contents of the what's in id of total
    var total = $("#total").html()
    //.split is making the total an array, so we can have a dollar sign and a number, take the total, split it to array, access the part we want. index 0 is the dollar sign
    var numericTotal = parseFloat(total.split("$")[1])
    //Final final total aka (floatAmount)new entry amount + running total
    var actualTotal = parseFloat(floatAmount) + numericTotal
    //take actualTotal and changing the innerHTML for the #total
    $("#total").html("$" + actualTotal.toFixed(2));
    //clear field
    $("input#newEntry").val("")
  })

  // make sure dollar signs are there

})
