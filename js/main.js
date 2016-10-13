


var entryForm = $("#entry")
var newEntry = $("#newEntry")
var jThis = $(this)
var inputAmount
var localTotal = 0
var totalAmount
var total = $("#total")
var entry = $("#entries")


var submitData = function(evt) {
  evt.preventDefault();
  inputAmount = newEntry.val();
  localTotal = parseInt(inputAmount) + parseInt(localTotal);
  total.text("$" + localTotal + ".00")
  entry.prepend("</td></tr>")
  entry.prepend(".00")
  entry.prepend(inputAmount)
  entry.prepend("$")
  entry.prepend("<tr><td>")
  document.getElementById("entry").reset();
}

entryForm.on("submit",submitData)
