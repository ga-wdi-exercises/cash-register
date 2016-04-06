//this is what i did for homework but they said that the master origin and my documents are identical.
function Register() {
  this.domElement = null;
  this.initialize = function(container) {
    // create an el for this instance
    // append it to the provided container
    // set initial attributes (just total)
    this.initialize = function(container) {
    this.domElement = $('<div class="$ "></div>');
    container.append(this.domElement);
    this.total = "";
  };
}

Register.prototype.render = function() {
  var reen templateString = '<div class="ticket">' +
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

this.domElement.html(templateString);
this.domElement.find(".ticket").text("");

var button = this.domElement.find("button");
button.on("click", this.update.bind(this));
};

Register.prototype.update = function() {
  event.preventDefault();
  var inputBox = this.el.find($(".newEntry"));

};

var hello = new Register();
hello.initialize($("#r1"));
hello.render("This is a test!");

var goodbye = new Register();
hello.initialize($("#r2"));
hello.render("This is a test again!");
