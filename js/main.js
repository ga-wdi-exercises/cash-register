//listen for form submission

var amount = 0;
var total = 0;

$("#entry").on("submit", function(evt){
    //prevent the default application
    evt.preventDefault();
    //capture user input
    amount = Number($("#newEntry").val())
    $("#entries").append("<tr><td></td><td>" + amount.toFixed(2) + "</td></tr>");
    total += amount
    $("#total").text("$" + total.toFixed(2))
    $("#entry").trigger("reset")
});

$("#deleteButton").on("click", function(evt){
  $("#entries").html("");
})
