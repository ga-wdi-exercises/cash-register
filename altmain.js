$(document).ready(function(){
  //listen for form submission
  $('#entry').on('submit', function(evt){
    // prevent default action
    evt.preventDefault();
    //get user input && convert to float w/ 2 decimal places
    var amount = $('#newEntry').val();
    var floatAmount = parseFloat(amount).toFixed(2);
    console.log(floatAmount);
    //place user input in table
      // One tr, containing 2 td', final td has amount
      var newRow = $("<tr></tr>");
    newRow.append($('<td></td>'));
    newRow.append($('<td>' + floatAmount + '</td>'));
    $('#entries').append(newRow);



    $('input').val('');
  })
  //update total
    //get current total
})
