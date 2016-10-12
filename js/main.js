// global variable to hold running total or register
var total = 0;

//listen for form submission
$("#entry").on("submit", function(evt){

  //prevent the default action
  event.preventDefault();

  //capture user input
  var userInput = $("#newEntry").val();
  console.log(userInput);

  //turns user input from string to float
  userInput = parseFloat(userInput);
  console.log(userInput);

  //adds the entries into the body of the receipt and fixes decimal point
  $("#entries").append("<tr><td></td><td>" + "$" + userInput.toFixed(2) + "</td></tr>");

  //creates a running total of entries
  total = total + userInput;

  //prints total to total field of receipt and adds 2 demical places
  $("#total").html("$" + currencyFormat(total));

  //clear entry box of user input
  $("#newEntry").val("");

});
  //properly formats userInput in total view
  function currencyFormat(arguement) {
    var currency = parseFloat(arguement); //converts to float
    currency = currency.toFixed(2); //adds 2 decimal places
    return currency; //returns converted value
  }
