function Register() {

    // create an el for this instance
    // append it to the provided container
    // set initial attributes (just total)
}

Register.prototype.initialize = function(container){
  this.el = $('<div class="register"></div>');
  $(container).append(this.el);
  this.render();
};

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

  // insert content into `el`
  this.el.html(templateString);
  // add any event listeners
  var entry = this.el.find('.entry');
  entry.on('submit', this.update.bind(this));
};

Register.prototype.update = function(event) {
  event.preventDefault();
  var inputBox = this.el.find('.newEntry');
  var entries = this.el.find('.entries');
  var total = this.el.find('.total');

  var userInput = parseFloat(inputBox.val());
  inputBox.val('');

  var newEntry = $('<tr> <td></td> </td>');
  newEntry.append('<td>$' + userInput.toFixed(2) + '</td>');

  entries.append(newEntry);

  this.total += userInput;
  total.text('$' + this.total.toFixed(2));

};
