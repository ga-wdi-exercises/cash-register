$(document).ready(function() {
    //basic homework
    $('#entry').on('submit', function(event) {
        event.preventDefault();
        newPrice = parseFloat($('#newEntry').val()).toFixed(2)
        if(!isNaN(newPrice)){
            $('#entries').append('<tr><td><a href="#" class="close">x</a></td><td>$' + newPrice + '</td></tr>')
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
        $('body').css('background', '#660000');
        setTimeout(function(){
            $('body').css('background', '#001a66')
        }, 200)
    });
    //edit table
    $('#entries').on('click', 'td:odd', function(event) {
        $(this).attr('contenteditable', 'true');
    });
    //updates total on keyup
    $('#entries').on('keyup', 'td', function(event) {
        ammountArray = $('td:odd').text().split('$').splice(1) //looks like this ["50.00", "50.00", "50.00"]
        newTotal = ammountArray.reduce(function(a, b) {
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

/*things we learned .on delegated events (see on events with selector), event.preventDefault, .toFixed should be called LAST since it converts things back to a string (can divide by 1 to hack back into number), .html method. .reset method, .split method, selectors like .closest, setting attributes of elements with .attr, using split and splice to get contents of an array consisting of elements (line 28), correct use of reduce method (adding array values but WAAAAY more to use with it)*/

//EVERYTIME THE ENTRY EVENT FIRED the 'a' element would get a click handeler. The original one would have eventually had 3 click handelers if you submiited 3 items. WTF JAVASCRIPT!! PLEASE NOTE THIS COMMENT WAS BEFORE I LEARNED ABOUT EVENT DELEGATION. I HAD MY REMOVE TABLE LINES OF CODE LISTED UNDER THE IF STATEMENT IN LINE 6 SINCE I DIDN'T KNOW ABOUT EVENT DELEGATION!! LORD!!
