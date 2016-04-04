function Register() {
  this.initialize = function(container) {
    this.el = $('<div class="register">');
    $(container).append(this.el);
    this.total = 0;
    this.render();
  };
}

Register.prototype.render = function() {
  var templateString = '<div class="ticket">' +
		'<h1>Thank You!</h1>' +
		'<table>' +
			'<tbody class="entries">' +
			'</tbody>' +
			'<tfoot>' +
				'<tr>' +
					'<th>Total</th>' +
					'<th class="total">$0.00</th>' +
				'</tr>' +
			'</tfoot>' +
		'</table>' +
	'</div>' +
	'<form class="entry">' +
		'<input class="newEntry" autofocus placeholder="How Much?">' +
	'</form>';

  this.el.html(templateString);
  var form = this.el.find("form.entry");
  form.on("submit", this.update.bind(this));
};

Register.prototype.update = function() {
  event.preventDefault();

  var inputBox = this.el.find($(".newEntry"));
  var entries  = this.el.find($(".entries"));
  var totalEl  = this.el.find($(".total"));

  // get the amount and clear the box
  var amount = parseFloat(inputBox.val());
  inputBox.val("");

  // make the new element and add it to the list of entries
  var newRow = $("<tr>");
  newRow.append("<td></td>");
  newRow.append("<td>" + "$" + amount.toFixed(2) + "</td>");

  entries.append(newRow);

  // update the total
  this.total = this.total + amount;
  totalEl.text("$" + this.total.toFixed(2));
};
