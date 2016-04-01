var entries = $("#entries");

var form = $("form");
var inputBox = $("#newEntry");

var totalEl = $("#total");
var total = 0.00;

form.on("submit", updateRegister);

function updateRegister() {
  event.preventDefault();

  // get the amount and clear the box
  var amount = parseFloat(inputBox.val());
  inputBox.val("");

  // make the new element and add it to the list of entries
  var newEl = $("<tr>");
  newEl.append("<td></td>");
  newEl.append("<td>" + "$" + amount.toFixed(2) + "</td>");

  entries.append(newEl);

  // update the total
  total = total + amount;
  totalEl.text("$" + total.toFixed(2));
}
