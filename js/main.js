$(document).ready(function() {
	// Listen for form submission
		costLog = []
		newTotal = 0;
	$('#entry').on("submit", function(){
		event.preventDefault();
		// add stuff
		var amount = $('#newEntry').val();
		var floatAmount = parseFloat(amount).toFixed(2);
		var newRow = $('<tr></tr>');
		newRow.append($('<td></td>'));
		newRow.append($('<td>' + floatAmount + '<td>'));
		$('#entries').append(newRow);
		$('input#newEntry').val('')
		var total = $('#total').html()
		console.log(total);
		var numericTotal = parseFloat(total.split('$')[1]);
		var actualTotal = floatAmount + numericTotal;
		console.log(actualTotal);
		costLog.push(floatAmount);
		console.log(costLog);
		for(i = 0; i < costLog.length; i++) {
			newTotal += parseFloat(costLog[i]);
			console.log(i)
			}
		console.log(newTotal);
		$('#total').html('$' + newTotal);
		newTotal = 0;
		});
	$('input').on('keypress', function(e) {
		$('body').css('background', '#' + (e.keyCode * 19741070).toString().slice(0, 6))});
			
});
