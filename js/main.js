

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
      $(this).children().first().html("<input type='submit' id='stuff' value='Delete Entry'>");

    });

    //Create Event for deleting transaction
    $('#entries tr td').children().on('click',function(evt){
      evt.preventDefault();
      //Delete Total
      var numHolder = $(this).parent().next().text(); //'#entries tr td'

      total -= Number(numHolder);
      //Update Total field
      $('#total').html("$" + total + ".00");
      //Delete Row
      $(this).closest('tr').remove();
    })
  });

//Create Event for Editing Transaction

$("#edit" ).on('click', function(evt) {
  evt.preventDefault();

  // - Edit Button appears in column next to transaction

  $( "#entries tr" ).each(function( ) {
    //Put the button next to the transaction
    $(this).children().first().html("<input type='submit' id='stuff' value='Edit Entry'>");

  });

  //Create Event for editing transaction
  $('#entries tr td').children().on('click',function(evt){
    evt.preventDefault();

    //Edit Total
    var numHolder = $(this).parent().next().text(); //'#entries tr td'

    total -= Number(numHolder); //Need to fix

    //Update Total field
    $('#total').html("$" + total + ".00");

    //Edit the total in the same column

  })
});


});
