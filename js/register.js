function Register() {
  this.initialize = function(container) {
    // create an el for this instance
    // append it to the provided container
    // set initial attributes (just total)
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

  // insert content into `el`
  // add any event listeners
};

Register.prototype.update = function() {
  event.preventDefault();
  var inputBox = this.el.find($(".newEntry"));
  
};
