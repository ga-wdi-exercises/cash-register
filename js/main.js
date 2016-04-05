// adapt variable definitions below to be encapsulated in the correct object

// var entries = $(".entries");
// var form = $("form");
// var inputBox = $(".new-entry");
// var totalEl = $(".total");
// form.on("submit", updateRegister);

function Register(){
  this.domElement = null;
  this.total = 0.00;
}

Register.prototype.initialize = function(containerEl) {
  // $ is actually creating an element in the case below
  this.domElement = $("<div class='register'></div>");
  containerEl.append(this.domElement);
};

Register.prototype.render = function(){

  var templateString =

  "<div class='ticket'>"+
			"<h1>Thank You!</h1>"+
			"<table>"+
				"<tbody class='entries'>"+
				"</tbody>"+
				"<tfoot>"+
					"<tr>"+
						"<th>Total</th>"+
						"<th class='total'>$0.00</th>"+
					"</tr>"+
				"</tfoot>"+
			"</table>"+
		"</div>"+
		"<form class='entry'>"+
			"<input class='new-entry' autofocus='' placeholder='How Much?'>"+
		"</form>";

  this.domElement.html(templateString);
  this.domElement.find();

  var form = this.domElement.find("form");
  form.on("submit", this.update.bind(this));
};

//non-functional. convert DOM selection method to find
Register.prototype.update = function(){
  event.preventDefault();
  var entries = this.domElement.find(".entries");
  var inputBox = this.domElement.find(".new-entry");
  var totalEl = this.domElement.find(".total");

  // get the amount and clear the box
  var amount = parseFloat(inputBox.val());
  inputBox.val("");

  // make the new element and add it to the list of entries
  var newEl = $("<tr>");
  newEl.append("<td></td>");
  newEl.append("<td>" + "$" + amount.toFixed(2) + "</td>");

  entries.append(newEl);

  // update the total
  this.total = this.total + amount;
  totalEl.text("$" + this.total.toFixed(2));
};

var register = new Register();
register.initialize($("#register-container"));
register.render();

var register2 = new Register();
register2.initialize($("#register-container2"));
register2.render();
