$(document).ready(function() {
	try {
		$('body').ripples({
			resolution: 512,
			dropRadius: 20, //px
			perturbance: 0.04,
		});
		
	}
	catch (e) {
		$('.error').show().text(e);
	}

	$('.js-ripples-disable').on('click', function() {
		$('body, body').ripples('destroy');
		$(this).hide();
	});

	$('.js-ripples-play').on('click', function() {
		$('body, body').ripples('play');
	});

	$('.js-ripples-pause').on('click', function() {
		$('body, body').ripples('pause');
	});

	// Automatic drops
	setInterval(function() {
		var $el = $('body');
		var x = Math.random() * $el.outerWidth()
		var y = Math.random() * $el.outerHeight();
		var dropRadius = 20;
		var strength = 0.01 + Math.random() * 0.04;

		$el.ripples('drop', x, y, dropRadius, strength);
	}, 900);
});
