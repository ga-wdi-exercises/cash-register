$( document ).ready(function() {
  // get user input && convert to float
  var $form = $("#entry");
  var $entries = $("#entries");
  var total = 0;

  $form.on("submit", cashRegisterIt);

  function cashRegisterIt(e) {
    e.preventDefault();
    var $amount = $("#newEntry").val();
    var $amountToInteger = parseInt($amount);
    total += $amountToInteger;
    $entries.append("<tr><td></td><td> $" + ($amountToInteger.toFixed(2)) + "</td></tr>");
    var $totalText = $("#total");
    $totalText.html("$" + (total.toFixed(2)));
    // var numericTotal = parseFloat($total.split("$")[1]);
    $("input").val("");

  }

});
