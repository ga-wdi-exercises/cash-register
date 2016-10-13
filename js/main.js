  //evt is the event object. can be any name/word, but cant actually be "event"
  //capture user input javascript (google "get value of user input")
var total = [0];

$("#entry").on("submit", function(evt){
    evt.preventDefault();
    var amount = $("#newEntry").val();
    total += amount;
    $("#total").html(total);
    $("#entry").on("reset");
    console.log(amount);
  });





// "submit event form"
