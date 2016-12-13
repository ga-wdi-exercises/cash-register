$(document).ready(function()  {
  console.log("Your Mom");
$("#entry").on("submit", function(evt)  {
    evt.preventDefault();
    var numberNow = $("#newEntry").val();
    var currency = parseFloat(numberNow);
    var moneyToAdd = currencyVal(currency);
    console.log(numberNow);

    function currencyVal()  {

      var rounded = Math.round(numberNow * 100) / 100;
      return rounded;
    }

    var newRow = $("<tr></tr>");
    newRow.append($("<td></td>"));
    newRow.append($("<td>" + numberNow + "</td>"));
    $("#entries").append(newRow);

    var total = $("#total").html();
    var rounded = total.split("$")[1];
    // console.log(finalTotal);


  $("#newEntry").val("");

});





});
