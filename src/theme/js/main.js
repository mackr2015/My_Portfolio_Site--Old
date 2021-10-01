$(function () {

	// $(window).on('load', function(){
	// alert('window loaded');
	$('#loader').fadeOut(900);


	$('.main-nav_list li a').each(function () {

		$(this).on('click', function (e) {
			e.preventDefault();
			// console.log($('.btn-scroll a'));
			// console.log($(this));
			let target = $(this).attr('href');
			// console.log(typeof(target));
			$('html, body').animate({
				scrollTop: $(target).offset().top
			}, 1000);
		});

	});

	$('.main-nav_footer li a').each(function () {
		// console.log(el);
		$(this).on('click', function (event) {
			event.preventDefault();
			console.log('footer links');
			// console.log($(this));
			let target = $(this).attr('href');
			// console.log(typeof(target));
			$('html, body').animate({
				scrollTop: $(target).offset().top
			}, 1000);
		});

	});




	$('.btn-scroll a').click(function (e) {
		e.preventDefault();
		// console.log($('.btn-scroll a'));
		// console.log($(this));
		let target = $(this).attr('href');
		// console.log(typeof(target));
		$('html, body').animate({
			scrollTop: $(target).offset().top
		}, 1200);
	});

	$('.btn-reveal').click(function (e) {
		e.preventDefault();
		let $form = $('#potential_lead');
		if ($form.hasClass('isOpen')) {
			$form.slideUp('slow', function () {
				$form.removeClass('isOpen');
				$('.btn-reveal').html('Get in touch');
			});
		} else {
			$form.slideDown('slow', function () {
				$form.addClass('isOpen');
				$('.btn-reveal').html('Great!! Now click that email, I dear you?!?');
				// console.log($(this));
			});
		}


	});

	// });

});