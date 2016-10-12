// A $( document ).ready() block.
$( document ).ready(function() {

var registerBalance = 0;

//listen for form submission
$("#entry").on("submit", function(evt){
    //prevent the default application
    evt.preventDefault();
    //capture user input
    var amount = Number($("#newEntry").val()); //Captures user input, turns it into a number
    registerBalance += amount; // Updates registerBalance variable
    $("#total").html("$ " + registerBalance);

});













});
