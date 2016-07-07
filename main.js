$(document).ready(function() {
    //basic homework
    $('#entry').on('submit', function(event) {
        event.preventDefault();
        newPrice = parseFloat($('#newEntry').val()).toFixed(2)
        //EVERYTIME THIS FIRE'S the a element gets a click handeler so the original one will have 3 click handelers if you have 3 items WTF JAVASCRIPT PLEASE NOTE THIS COMMENT WAS BEFORE I LEARNED ABOUT EVENT DELEGATION. I HAD MY REMOVE TABLE LINES CODE HERE LISTED UNDER THE IF STATEMENT!! LORD!!
        if(!isNaN(newPrice)){
            $('#entries').append('<tr><td><a href="#" class="close">x</a></td><td>$'+ newPrice + '</td></tr>')
            oldTotal = parseFloat($('#total').html().split('$')[1])
            $('#total').html('$'+ (parseFloat(newPrice) + oldTotal).toFixed(2));
            $('#entry')[0].reset();
        }
    })
    //remove table lines
    $('#entries').on('click',"a", function(event) {
        target = $(event.target)
        removedPrice = parseFloat($(target).closest('td').next().html().split('$')[1]).toFixed(2)
        currentTotal = parseFloat($('#total').html().split('$')[1]).toFixed(2)
        $('#total').html('$' + (parseFloat(currentTotal)-parseFloat(removedPrice)).toFixed(2));
        $(this).closest('tr').remove()
    });
    //edit table
    $('#entries').on('click', 'td', function(event) {
        $(this).attr('contenteditable', 'true');
    });
    //updates total on blur
    $('#entries').on('blur', 'td', function(event) {
        ammountArray = $('td:odd').text().split('$').splice(1) //looks like this ["50.00", "50.00", "50.00"]
        var newTotal = ammountArray.reduce(function(a, b) {
            return parseFloat(a) + parseFloat(b);
        }, 0);
        $('#total').html('$' + newTotal.toFixed(2))
    });
    //Clears Everything
    $('.clear').on('click', function(event) {
        $('#total').html('$0.00');
        $('#entries').empty();
    });
});
