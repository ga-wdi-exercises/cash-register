// A $( document ).ready() block.
$( document ).ready(function() {

var registerBalance = 0;


$("#entry").on("submit", function(evt){ //listen for form submission
    evt.preventDefault(); //prevent the default application
    var entry = Number($("#newEntry").val()); //Captures user entry, turns it into a number
    registerBalance += entry; //Updates registerBalance variable
    $("#total").html("$ " + registerBalance.toFixed(2)); //Displays registerBalance



    // registerBalance += amount; // Updates registerBalance variable
    // $("#total").html("$ " + registerBalance);
});















});
