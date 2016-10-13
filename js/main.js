  //evt is the event object. can be any name/word, but cant actually be "event"
  //capture user input javascript (google "get value of user input")
var total = [0];

$("#entry").on("submit", function(evt){
    evt.preventDefault();
    var amount = $("#newEntry").val();
    total += Number(amount); //adds to the input number
    $("#total").html("$" + total);
    $("#entries").append("<tr><td></td><td>" + amount +".00 </td></tr>");
    //adds table row!
    console.log(amount);
  });





// "submit event form"
