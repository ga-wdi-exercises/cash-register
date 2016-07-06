$('document').ready(function(){
  $('#entry').on('submit', function(evt){
    evt.preventDefault();

    var amountIn = parseFloat($('#newEntry').val());
    var amount = parseFloat(amountIn);
    var newRow = $('<tr></tr>');
    newRow.append($('<td></td>'));
    newRow.append($('<td>' + amount.toFixed(2) + '</td>'));
    $('#entries').append(newRow);
    var total = $('#total').html();
    var numericTotal = parseFloat(total.split('$')[1]);
    var actualTotal = (numericTotal + amount).toFixed(2);
    $('#total').text('$' + actualTotal);
    $('input#newEntry').val("");
  })

});
