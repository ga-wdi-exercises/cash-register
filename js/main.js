$('document').ready(function(){

var numbers = [];

  $('#entry').submit(function(evt){
    evt.preventDefault();

    var enteredNum = $('#newEntry').val();

// clears register on empty carriage return

    if (enteredNum == ""){

      numbers = [];
      $('#total').html('$0.00');
      $('#entries').html('');

    } else {

      var dollarNum = getDollars(enteredNum);

      var newRow = $("<tr></tr>");
      newRow.append($('<td></td>'));
      newRow.append($('<td>' + dollarNum + '</td>'));
      $('#entries').append(newRow);

      numbers.push(dollarNum);
      $('#newEntry').val('');

      var sum = 0;
      for (i=0; i<numbers.length; i++) {
        sum += numbers[i];
      }

      $('#total').html("$" + sum);

      function getDollars(num) {
        var convertedNum = parseFloat(num);
        var finalNum = Math.round(convertedNum * 100) / 100;
        return finalNum;
      }
    }
  })
})
