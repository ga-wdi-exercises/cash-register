$(document).ready(function () {
    // Get user input
    $('#entry').on("submit", function (evt) {
        // Prevent default (for empty submission?)
        evt.preventDefault();
        console.log("submission worked");

        // Get the value out of the field
        var amount = $(newEntry).val();
        console.log(amount);

        // Force the amount to a float
        var floatAmount = parseFloat(amount);
        console.log(floatAmount);

        if (isNaN(floatAmount) == false) {

            // Create a new row for the amount to go in
            var newRow = $("<tr></tr>");
            newRow.append($("<td></td>"));
            newRow.append($("<td>" + floatAmount + "</td>"));

            // Append newRow to the table
            $("#entries").append(newRow);

          // Calculate and set the total value
            var rawTotal = $("#total").html();

            // Remove the $ sign; get only the numerical portion
            var total = rawTotal.split("$")[1];
            total = parseFloat(total);

            // Add and format
            total += floatAmount;
            total = "$" + total.toFixed(2);

            // Set the new value in the table
            $("#total").html(total);

        }
        // Reset the entry in the field
        $(newEntry).val("");
    })

})
