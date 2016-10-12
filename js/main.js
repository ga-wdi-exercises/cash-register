//listen for form submission
$("#entry").on("submit", function(evt){
  //prevent the default action
  evt.preventDefault()

  //capture user input
  var amount = $("#newEntry").val();
  var entry = $("#total");
  var pastEntries = $("#entries");
  console.log(amount);

  //converted to a number
  amount = parseFloat(amount).toFixed(2);
  console.log(amount)

  entry.html("$ " + amount);
console.log("this amount is " +amount)


  pastEntries.append("<tr><td></td><td class=past>" + amount + "</td></tr>");






  // $(entry).append($("<td>"+ amount +"</td>"));
});
