// .append
// .html('text')
// .html()
// .submit (function())
// $(<div></div>)
// $('#newEntry').prop('value')

var rekt = {
  userInput:[],
  total:0,
};


$(document).ready(function(){
          $('#entry').submit(function(){
            event.preventDefault();

            if (isNaN(parseInt($('#newEntry').prop('value'))) === false) {
                rekt.userInput = parseInt($('#newEntry').prop('value'));
              } else {
                alert("Input must be a number");
              }

            $('tbody').append('<tr> <td></td> <td>$' + parseFloat(Math.round(rekt.userInput * 100) / 100).toFixed(2) + '</td> </tr>');

            rekt.total += rekt.userInput;
            $('#total').html('$' + parseFloat(Math.round(rekt.total * 100) / 100).toFixed(2));

            $('#entry')[0].reset();

          });

});
