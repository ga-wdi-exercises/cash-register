

$( document ).ready(function() {

// declare variables

var total = 0;
//var balanceSheet = [];

  //Captures User Input
  $("#entry" ).on('submit', function(evt) {
    evt.preventDefault();

    var amount = $('#newEntry').val();
    total += Number(amount);

    //Appends line item
    $("#entries").append("<tr><td></td><td>" + amount + ".00 </td></tr>");

    //Removes number from Entry field
    $('#newEntry').val("");

    //Update Total field
    $('#total').html("$" + total + ".00");

  });
  // - User clicks button
  $("#delete" ).on('click', function(evt) {
    evt.preventDefault();

    // - Delete Button appears in column next to transaction

    $( "#entries tr" ).each(function( ) {
      //Put the button next to the transaction
      $(this).children().first().html("<input type='submit' id='stuff' value='Delete Entries'>");

      //var number = $( this ).text(); //figure out if you can pull the number with .text - yes, need to convert to #
      //console.log(Number(number));


    });

    //Create Event for deleting transaction
    $('#entries tr td').children().on('click',function(evt){
      evt.preventDefault();
      //Delete Total
      var numHolder = $(this).parent().next().text(); //'#entries tr td'
      console.log(numHolder);
      total -= Number(numHolder);
      //Update Total field
      $('#total').html("$" + total + ".00");
      //Delete Row
      $(this).closest('tr').remove();
    })


    // - Need to query the row # and capture it
    // - When delete button is pressed, the row is removed based on the index captured
    // - total is edited to reflect the new total


  });



});
