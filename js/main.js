var entries = $("#entries");
var form = $("form");
var inputBox = $("#newEntry");
var totalEl = $("#total");
var total = 0.00;

form.on("submit", updateRegister);

function Register() {
  this.domElement = null;
  this.total = 0.00;
  this.initialize = function(container){
    this.domElement = $('<div class="register"></div>');
    container.append(this.domElement);
  };
  this.render = function(){
    var registerFrontEnd =  '<div class="ticket">'
    '<h1>Thank You!</h1>' +
    '<table>' +
    '<tbody class="entries">' +
    '</tbody>' +
    '<tfoot>' +
    '<tr>' +
    '<th>Total</th>' +
    '<th class="total">$0.00</th>' +
    '</tr> '+
    '</tfoot>' +
    '</table>' +
    '</div>'+
    '<form class="entry">' +
    '<input class="newEntry" autofocus placeholder="How Much?">' +
    '</form>';
    this.domElement.html = registerFrontEnd
  }

  this.updateRegister = function () {
    event.preventDefault();
    // get the amount
    var amount = parseFloat(inputBox.val());
    inputBox.val(""); //...and clear the box
    // make the new element and add it to the list of entries
    var newEl = $("<tr>");
    newEl.append("<td></td>");
    newEl.append("<td>" + "$" + amount.toFixed(2) + "</td>");
    entries.append(newEl);
    // update the total
    total = total + amount;
    totalEl.text("$" + total.toFixed(2));
  }
}
var comp = new Register();
comp.initialize($("#container"));
comp.render();

var comp2 = new Register();
comp2.initialize($("#container2"));
comp2.render();
