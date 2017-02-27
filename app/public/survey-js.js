$(document).ready(function() {

	alert("hi")
	// With JQuery
	$('.question-slider').slider({
		formatter: function(value) {
			return 'Current value: ' + value;
		}
	});
});