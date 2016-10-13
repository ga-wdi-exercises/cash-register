//listen for form submission
var total = 0;

$("#entry").on("submit", function(evt){
  //prevent the default action
  evt.preventDefault()

  //capture user input
  // var amount = $("#newEntry").val();
  var entry = $("#total");
  var pastEntries = $("#entries");


  console.log(amount);

  //converted to a number
  var amount = parseFloat($("#newEntry").val());
  console.log(amount)
  pastEntries.append("<tr><td></td><td class=past>" + amount + "</td></tr>");

  total = total + amount

  entry.html("$ " + total.toFixed(2));

console.log("this amount is " +amount)










  // $(entry).append($("<td>"+ amount +"</td>"));
});
