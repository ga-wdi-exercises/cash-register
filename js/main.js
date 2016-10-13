$(document).ready(function(){

var entries = $("#entries");

var form = $("form");
var userInput = $("#newEntry");

var cashRegister = $("#total");
var total = 0.00;

form.on("submit", updateRegister);

// if (userInput > 0) {
function updateRegister() {
  event.preventDefault();

  var amount = parseFloat(userInput.val());
  userInput.val("");

  var newRow = $("<tr>");
  newRow.append("<td></td>");
  newRow.append("<td>" + "$" + amount.toFixed(2) + "</td>");

  entries.append(newRow);

  total = total + amount;
  cashRegister.text("$" + total.toFixed(2));
  };

//   $("#entry").trigger("reset");
// };
 // else {
//   $(#entry).trigger("reset");
// };


//first attempt - array method - did not work as planned
// var cashRegister = [0];
//
// // evt.preventDefault();
// $("#entry").on("submit", function(evt){
//   //prevent the default action
//   evt.preventDefault();
//   var amount = parseFloat($("input").val()); //
//   var total = amount + cashRegister[0];
//   cashRegister.splice(0, 1, total);
//   console.log(cashRegister);
//   // console.log(amount);
//   // console.log(total);
//
//   $("#entries").append("<tr><td></td><td>" + "$" +amount+ "</td></tr>"); // adds user input to the "entries" table
//   total =+ cashRegister;
//   // $("#total").text("$" + total.toFixed(2));
//
//   amount = $("input").val("");
// });

});
