$(document).ready(function(){
console.log("hello world");

var cashRegister = [0];

$("form").on("submit", function(event){
  event.preventDefault();
  var amount = parseFloat($("input#newEntry").val());

  if ($("input#newEntry").val() !=="" && !isNaN(amount) ){
      var total = amount + cashRegister[0];
      cashRegister.splice(0, 1, total);
      $("input#newEntry").val("");

      $("tbody#entries").append("<tr><td><button>remove item</button></td><td contenteditable='true'>" + "$" + amount.toFixed(2) + "</td></tr>");

      $("#total").text("$" + total.toFixed(2));

      $("button").last().on("click", function(){
          var item = $(this).parent()
                            .siblings()
                            .last()
                            .text()
                            .replace("$","");

          var number = parseFloat(item);
          var newTotal = cashRegister[0] - number;
          cashRegister.splice(0, 1, newTotal);
          $("#total").text("$" + newTotal.toFixed(2));
        $(this).parent().parent().remove();
        });
}
  else {
    alert("Please enter a number");
    $("input#newEntry").val("");
  }
});



});
