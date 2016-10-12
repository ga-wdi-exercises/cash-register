

$( document ).ready(function() {

// declare variables

var total = 0;
//var balanceSheet = [];

//------------------------Captures User Input------------------------

  $("#entry" ).on('submit', function(evt) {
    evt.preventDefault();

    var amount = $('#newEntry').val();
    total += Number(amount);

    $("#entries").append("<tr><td></td><td contenteditable='true'>" + amount + ".00 </td></tr>"); //Appends line item

    $('#newEntry').val("");//Removes number from Entry field

    updateTotal();//Update Total field

  });

//------------------------Delete Button------------------------

  $("#delete" ).on('click', function(evt) {
    evt.preventDefault();

      $( "#entries tr" ).each(function( ) { // - Delete Button appears in column next to transaction
        $(this).children().first().html("<input type='submit' id='deleteRow' value='Delete Entry'>");
    });

//------------------------Delete Transaction------------------------
    $('#entries tr td').children().on('click',function(evt){
      evt.preventDefault();

      var numHolder = $(this).parent().next().text(); //Get the value from the row that was clicked on
      total -= Number(numHolder); //Deduct from total

      updateTotal(); //Update Total field

      $(this).closest('tr').remove(); //Delete Row
    })
  });

//------------------------Create Edit Buttons------------------------

  $("#edit" ).on('click', function(evt) {
    evt.preventDefault();

    $( "#entries tr" ).each(function( ) { //Adds edit button to transaction table
      $(this).children().first().html("<input type='submit' id='edit' value='Edit Entry'>");

    });

//------------------------Listener for Edit Buttons------------------------

    $('#entries tr td').children().on('click',function(evt){
      evt.preventDefault();

      //Edit Total
      var numHolder = $(this).parent().next().text(); //Gets the current value prior to editing
      $(this).parent().next().css('background-color', '#FAFAD2'); //highlights field you want to edit
      $(this).parent().html("<input type='submit' id='save' value='Save Entry'>") //Changes the edit button to a save button

//------------------------Listener for Saving the Edited transaction------------------------

        $('#save').on('click',function functionName(evt) { //Function to save the changes you made
          evt.preventDefault();
          var num2 = $(this).parent().next().text(); //setting the num var to your current total
          total += Number(num2); //Adds in the new change
          total -= Number(numHolder); //Removes old value
          updateTotal(); //Update Total field
          hideButtons();
        });
    })
  });

//------------------------Hides Buttons------------------------

function hideButtons(){
    $( "#entries tr" ).each(function( ) { // - Removes the edit buttons
      $(this).children().first().html("");
          });
}

//------------------------Updates the Total displayed to user------------------------

  function updateTotal() {
    $('#total').html("$" + total + ".00"); //Update Total field
  }

});
