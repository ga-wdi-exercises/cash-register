$( document ).ready(function() {
  // get user input && convert to float
  var $form = $("#entry");
  var $entries = $("#entries");
  var total = 0;
  var $tbody = $('tbody');

  $form.on("submit", cashRegisterIt);

  function cashRegisterIt(e) {
    e.preventDefault();
    var $amount = $("#newEntry").val();
    var $amountToInteger = parseInt($amount);
    total += $amountToInteger;
    $entries.append("<tr><td></td><td> $<span class='entry'>" + ($amountToInteger.toFixed(2)) + "</span><a href='#'>x</a></td></tr>");
    var $totalText = $("#total");
    $totalText.html("$" + (total.toFixed(2)));

    // delete entries
    var $a = $("a");
    $a.on("click", function(e) {
      e.preventDefault();
      $(this).closest('tr').remove();
    });

    // editing previous entries
      // can edit but unable to make clickaway work
    $tbody.on('click','td',function() {
        var fieldText = $(this).text();
        var input = $('<input value="'+fieldText+'"/>');
        $(this).text('').append(input);
        input.focus();
    });

    $tbody.on('blur','input',function() {
        $(this).text($(this).val());
    });

    $("input").val("");
  }

});
