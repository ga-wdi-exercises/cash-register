$(document).ready(function() {
  //listen to form submission
  console.log("JQuery working");

  $("#entry").on("submit", function (evt){
    // console.log("submission event working");
    //get user input && convert to float with two decimal places
    evt.preventDefault()
    var amount = $("#newEntry").val()
    var floatAmount = parseFloat(amount).toFixed(2)
    console.log(floatAmount);
    // place user input in table
    //One tr, containging 2 td's, final td has amount
    var newRow = $("<tr></tr>")
    newRow.append($("<td></td>"))
    newRow.append($("<td>" + floatAmount + "</td>"))
    $("#entries").append(newRow)


    var total = $("#total").html()
    var numericTotal = parseFloat(total.split("$")[1])
    var actualTotal = floatAmount + numericTotal;
    var fixParse = parseFloat(floatAmount + actualTotal)
    console.log("new entry working");
    $("input#newEntry").val("")

    //  var newTotal = $("<tfoot></tfoot>")
    //   total.append($("<th></th>"))
    //   total.append($("<th>" + actualTotal + "</th>"))


    // ("<th>" + actualTotal + "</th>")

    $("#total").html(actualTotal).total


  });







  //prevent default action
  //place user input in table
  //add the input to table
  //make sure 2 decimal places











});
