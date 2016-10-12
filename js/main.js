// global variable to hold running total or register
var total = 0;

//listen for form submission
$("#entry").on("submit", function(evt){
  //prevent the default action
  event.preventDefault();

  //capture user input
  userInput = $("#newEntry").val();
  console.log(userInput);

  //turns user input from string to float
  userInput = parseFloat(userInput);
  userInput = userInput.toFixed(2);

  //adds the entries into the body of the receipt
  $("#entries").append("<tr><td></td><td>" + "$" + userInput + "</td></tr>");

  //creates a running total of entries--broken
  total = total + userInput;

  //prints total to total field of receipt and adds 2 demical places
  $("#total").html("$" + total);

  //clear entry box of user input
  $("#newEntry").val("");

});
