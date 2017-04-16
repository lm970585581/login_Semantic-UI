$(document).ready(function() {
	$('#loginbtn').click(function() {
		var username = $('#username').val();
		var password = $('#password').val();
		if(username != '' && username != null && password != '' && password != null) {
			$('#login').hide();
			$('#note').show();
		}
	});
});