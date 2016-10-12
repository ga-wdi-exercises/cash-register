$(document).ready(function(){
  //initialize total variable to zero
  var total = 0
//listen for form submission
var entry = $("#entry");
entry.on("submit", function(evt){
  //prevent the default application
  evt.preventDefault();
  //capture user input
  var amount = parseFloat($("input").val());
  console.log(typeof amount);
//add item prices to list
  $("#entries").append("<tr><td></td><td>" +amount.toFixed(2)+ "</td></tr>");
//clear input field after entry
  total =+ amount;
  $("#total").html(total);
  $("input").val("");
  return total;
});
})
