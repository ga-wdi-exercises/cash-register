$(document).ready(function(){
  console.log("hello");
  var newbill = 0;
  var oldbill ;
  var entry = $("#entries")
  var total = $("#total");
  var bill;
  var amount;

  $("form").submit(function(evt){
    // event.preventDefault of form submission
    evt.preventDefault();

    //  gives current user input submission
    newbill = newbill + parseInt($("#newEntry").val());
    bill = parseInt($("#newEntry").val());

    console.log(bill)

    //  adds new element - row
    oldbill = entry.append("<tr>" +
    "<td></td>" +
    "<td>"+bill.toFixed(2)+"</td>"+
    "</tr>")


    // sets new total for the bill
    total.text("$" + newbill.toFixed(2))
    $("#newEntry").val('');


  })




//   $("input").on("change", function(){
//      amount = parseInt(input);
//      console.log(amount);
//
// })

})
