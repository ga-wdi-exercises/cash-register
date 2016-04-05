// adapt variable definitions below to be encapsulated in the correct object

var entries = $(".entries");
var form = $("form");
var inputBox = $(".newEntry");
var totalEl = $(".total");
form.on("submit", updateRegister);

function Register(){
  this.domElement = null;
  var total = 0.00;
}

Register.prototype.initialize = function(containerEl) {

};

Register.prototype.render = function(){

};

//non-functional. convert DOM selection method to find
Register.prototype.update = function(){
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
};
