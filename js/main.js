function Register() {
  this.domElement = null;
  this.total = 0.00;

  this.initialize = function(cont) {
    this.domElement = $('<div>');
    cont.append(this.domElement);
  }

  this.render = function() {
    var templateString = '<div class="ticket"><h1>Thank You!</h1><table><tbody class="entries"></tbody><tfoot><tr><th>Total</th><th class="total">$0.00</th></tr></tfoot></table></div><form class="entry"><input class="newEntry" autofocus placeholder="How Much?"></form>'
    this.domElement.html(templateString);
    this.entries = this.domElement.find($(".entries"));
    this.form = this.domElement.find("form");
    this.inputBox = this.domElement.find($(".newEntry"))
    this.totalEl = this.domElement.find($(".total"));
    this.form.on("submit", this.updateRegister.bind(this));
  };

  this.updateRegister = function() {
    event.preventDefault();
    var amount = parseFloat(this.inputBox.val());
    this.total += amount;
    console.log(this.total)
    this.inputBox.val("")
    var newEl = $("<tr>");
    newEl.append("<td></td>");
    newEl.append("<td>" + "$" + amount.toFixed(2) + "</td>");
    this.entries.append(newEl);
    this.totalEl.text("$" + this.total.toFixed(2));
  };
}

register1 = new Register();
register1.initialize($(".reg-1"));
register1.render();

register2 = new Register();
register2.initialize($(".reg-2"));
register2.render();
