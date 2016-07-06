$(document).ready(function() {
	$("#entry").on('submit', function(e) {
		e.preventDefault();
		var amount = parseFloat($('#newEntry').val()).toFixed(2);
		if (!isNaN(amount)) {
			$("#entries").append((($("<tr><td></td></tr>")).append("<td>$" + amount + "</td>")));
			$('#total').html("$" + (parseFloat($('#total').html().split('$')[1]) + parseFloat(amount)).toFixed(2));
		}
		$("input#newEntry").val("");
	})
	$("#clear").on("click", function() {
		$("input#newEntry").val("");
		$("#total").html("$0.00");
		$("#entries").html("")
	})
	$('#entry').on('keypress', function(e) {
		$('body').css('background-color', '#' + (e.keyCode * 13371337).toString().slice(0, 6));
	})
})