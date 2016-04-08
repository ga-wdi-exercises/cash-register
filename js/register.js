function Register() {
  this.domElement = null;
    // create an el for this instance
    // append it to the provided container
    // set initial attributes (just total)
  this.initialize = function(container) {
    console.log(container)
    this.domElement = $('<div class="register"></div>');
    container.append(this.domElement);
    this.total = "";
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


  this.domElement.html(templateString);
  // this.domElement.find(".ticket").text("");


};

Register.prototype.update = function() {
  event.preventDefault();
  var inputBox = this.el.find($(".newEntry"));

};

var hello = new Register();
hello.initialize($("#r1"));
hello.render();

var goodbye = new Register();
hello.initialize($("#r2"));
hello.render();
