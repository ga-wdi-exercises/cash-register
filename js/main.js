$(document).ready(function() {

    var registerBalance = 0; //set global register Balance variable


    $("#entry").on("submit", function(evt) { //listen for form submission
        evt.preventDefault(); //prevent the default application
        var entry = Number($("#newEntry").val()); //Captures user entry, turns it into a number
        registerBalance += entry; //Updates registerBalance variable
        $("#entries").append("<tr><th></th><th>" + "$" + entry.toFixed(2) + "</th></tr>"); // Appends line item
        $('#newEntry').val(""); // Clears value from input entry
        $('#total').html("$" + registerBalance.toFixed(2)); // updates total to registerBalance


    });
});
