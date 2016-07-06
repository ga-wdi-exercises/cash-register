$(document).on("ready", function(){
  //listen for form submission
  console.log("hi");
  $("#entry").on("submit", function(evt){
    //prevent default action
    evt.preventDefault();
    //get user iput && convert to float with 2 decimals
    var amount = $("#newEntry").val()
    var floatAmount = parseFloat(amount).toFixed(2); //toFixed makes it a string even if you parseFloat
    console.log(floatAmount);

    //console.log(typeof(floatAmount));
    //console.log(typeof(parseFloat(floatAmount).toFixed(2)));

    //place user input in table
    //One tr, containing 2 td's, final td has amount
    var newRow=$("<tr></tr>");
    newRow.append($("<td></td>"));
    newRow.append($("<td>" + floatAmount + "</td>"));
    $("#entries").append(newRow);
    floatAmount = parseFloat(floatAmount);
    console.log(floatAmount);

    //update total
    //get current total
    var total = $("#total").html();
    var numericTotal = parseFloat(total.split("$")[1]) //numeric total is total without dollar sign and turn into a floatAmount
    var actualTotal = floatAmount + numericTotal;

    actualTotal = actualTotal.toFixed(2);
    // console.log(typeof(actualTotal));
    // console.log(actualTotal);


    $("#total").html("$" + actualTotal);





    $("input#newEntry").val('');
  });

});
