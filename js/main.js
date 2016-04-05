///////////////////////////////////////////////////////////////
///////////   ORIGINAL CODE ////////////////////
///////////////////////////////////////////////////////////////
///////////////////////////////////////////////////////////////
///////////////////////////////////////////////////////////////
// var entries = $(".entries");
//
// var form = $("form");
// var inputBox = $(".newEntry");
//
// var totalEl = $(".total");
// var total = 0.00;
//
// form.on("submit", updateRegister);
//
// function updateRegister() {
//   event.preventDefault();
//
//   // get the amount and clear the box
//   var amount = parseFloat(inputBox.val());
//   inputBox.val("");
//
//   // make the new element and add it to the list of entries
//   var newEl = $("<tr>");
//   newEl.append("<td></td>");
//   newEl.append("<td>" + "$" + amount.toFixed(2) + "</td>");
//
//   entries.append(newEl);
//
//   // update the total
//   total = total + amount;
//   totalEl.text("$" + total.toFixed(2));
// }
///////////////////////////////////////////////////////////////
///////////////////////////////////////////////////////////////
///////////////////////////////////////////////////////////////
function Register(){
    this.domElement = null;
    this.total = 0.00;

    this.initialize = function(container){
        this.domElement = $('<div class="register"></div>');
        container.append(this.domElement);
    };
    this.render = function(){
      var templateString =
          '<div class="ticket">' +
          '<h1>Thank You!</h1>' +
          '<table>' +
    			'	<tbody class="entries"></tbody>' +
    				'<tfoot><tr><th>Total</th><th class="total">$0.00</th></tr></tfoot>' +
    			'</table></div>' +
    	    '<form class="entry"><input class="newEntry" autofocus placeholder="How Much?"></form>' +
    	    '</div>';
      this.domElement.html(templateString);

      var form = this.domElement.find("form");
      form.on("submit", this.updateRegister.bind(this));
    };
    this.updateRegister = function() {
        event.preventDefault();

        // get the amount and clear the box
        var inputBox = this.domElement.find(".newEntry");
        var amount = parseFloat(inputBox.val());
        inputBox.val("");

        // make the new element and add it to the list of entries
        var newEl = $("<tr>");
        newEl.append("<td></td>");
        newEl.append("<td>" + "$" + amount.toFixed(2) + "</td>");

        var entries = this.domElement.find(".entries");
        entries.append(newEl);

        var totalEl = this.domElement.find(".total");
        // update the total
        this.total = this.total + amount;
        totalEl.text("$" + this.total.toFixed(2));
    };
} // ends constructor function Register()

var comp = new Register();
comp.initialize($("#container"));
comp.render();

var comp2 = new Register();
comp2.initialize($("#container2"));
comp2.render();
