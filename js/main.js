var totalAmount = 0;

$("#entry").on("submit", function(evt) {
  evt.preventDefault();
  var inputAmount = Number($("#newEntry").val());
  var previousEntries = "<tr> + <td></td> + <td>$ " +inputAmount.toFixed(2)+ "</td> + <tr>";
  totalAmount += inputAmount;
  $("#entries").append(previousEntries);
  $("#total").html("$" + (totalAmount.toFixed(2)));
});
