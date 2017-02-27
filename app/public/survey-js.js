$(document).ready(function() {
	// With JQuery
	$('.question-slider').slider({
		formatter: function(value) {
			return 'Current value: ' + value;
		}
	});
});