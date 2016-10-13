$(document).ready(function(){
//stores form submission
var entry = $("#entry");
var total = 0;
entry.on("submit", function(evt){
  //prevents default refresh
  evt.preventDefault();
//   //stores user input to var amount
  var amount = Number($("input").val());
  //adds amount value to total variable
    total += amount;
    //displays new total in #total div
  $("#total").html("$" + total.toFixed(2));
  //adds item prices to list
  $("#entries").append("<tr><td></td><td>" +amount.toFixed(2)+ "</td></tr>");
  //clear input field after entry
  $("input").val("");
  // test cases
  // console.log(amount);
  // console.log(typeof amount);
  // console.log(total);
  // return;
});
})
