$(document).ready(function() {
  var form = $("form#entry");
  var amntField = $("input#newEntry");
  var entries = 0;
  var entriesTable = $("tbody#entries");
  var totalDisplay = $("th#total");
  var total = 0;

  console.log('hello world')


  form.on("submit", updateTotal);

  //amntField.on("keyPress", updateTotal)
  function updateTotal(evt) {
    evt.preventDefault();
      console.log("hello")
      var input = parseFloat(amntField.val());
      total += input;
      totalDisplay.text(`\$${total.toFixed(2)}`);
      addEntry(total);
    }

  function addEntry(amount) {
    console.log(entriesTable);
    entriesTable.append(`<tr><td>\$${amount.toFixed(2)}</td></tr>`);
  }

});
