$(document).ready(function()  {
  //console.log("Your Mom");

$("#entry").on("submit", function(e) {
  e.preventDefault();
  var itemOne = $("#input").val();
  var nItemOne = parseFloat(itemOne).toFixed(2);

// console.log(nItemOne, typeof(nItemOne));


  var newRow = $("<tr></tr>");
  newRow.append($("<td></td>"));
  newRow.append($("<td>" + nItemOne + "</td>"));
  $("#entries").append(newRow);

  nItemOne = parseFloat(nItemOne);

// console.log(nItemOne, typeof(nItemOne));
//
// console.log($("#total").html(), typeof($("#total").html()));

  var totalString = $("#total").html().split("$")[1];

// console.log(totalString);

  var totalNumber = parseFloat(totalString);

  totalNumber = totalNumber + nItemOne;

// console.log(totalNumber, typeof(totalNumber));

  $("#total").html("$" + totalNumber.toFixed(2));




// var entries = $("#entries").html();
//
// $("#total").html("$" + (entries + nItemOne)).toFixed(2);
// var nTotal = parsefloat(total);

$("#input").val("");

});


});
