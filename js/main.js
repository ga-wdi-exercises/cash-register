function Register() {
    this.domElement = null;
    this.entries = $(".entries");
    this.inputBox = $(".newEntry");
    this.totalEl = $(".total");
    this.total = 0.00;
    this.form = $("form");
    this.form.on("submit", this.updateRegister);


    this.initialize = function(container) {
      this.domElement = $('<div class="register"></div>');
      container.append(this.domElement);
  };

    this.render = function() {

      var templateString =
      "<div class='ticket'>" +
      "<h1>Thank You!</h1>" +
      "<table><tbody class='entries'></tbody>" +
      "<tfoot>" +
      "<tr>" +
      "<th>Total</th>" +
      "<th class='total'>$0.00</th>" +
      "</tr>" +
      "</tfoot>" +
      "</table>" +
      "</div>" +
      "<form class='entry'>" +
      "<input class='newEntry' autofocus placeholder='How Much?''>" +
      "</form>" +
      "<div>";

      this.domElement.html(templateString);

      this.updateRegister = function() {
        event.preventDefault();

        // get the amount and clear the box
        var amount = parseFloat(this.inputBox.val());
        inputBox.val("");

        // make the new element and add it to the list of entries
        var newEl = $("<tr>");
        newEl.append("<td></td>");
        newEl.append("<td>" + "$" + this.amount.toFixed(2) + "</td>");

        this.entries.append(newEl);

        // update the total
        this.total = this.total + this.amount;
        totalEl.text("$" + total.toFixed(2));
      };
    };
}

var reg1 = new Register();
reg1.initialize($("#register1"));
reg1.render();

var reg2 = new Register();
reg2.initialize($("#register2"));
reg2.render();





// function Register() {
//   this.entries = $("#entries");
//   this.form = $("form");
//   this.inputBox = $("#newEntry");
//   this.totalEl = $("#total");
//   this.total = 0.00;
//
//   this.form.on("submit", updateRegister);
//
//   this.initialize = function updateRegister() {
//     event.preventDefault();
//
//     // get the amount and clear the box
//     this.amount = parseFloat(this.inputBox.val());
//     this.inputBox.val("");
//
//     // make the new element and add it to the list of entries
//     this.newEl = $("<tr>");
//     newEl.append("<td></td>");
//     newEl.append("<td>" + "$" + amount.toFixed(2) + "</td>");
//
//     this.entries.append(this.newEl);
//
//     // update the total
//     this.total = this.total + this.amount;
//     this.totalEl.text("$" + total.toFixed(2));
//   };
// }
//
// var reg1 = new Register();
// reg1.initialize("#register2");
