$(function(){

	let typedTitle = new Typed(".typedTitle h1", {
	  strings: ["Welcome to my ^500 portfolio site ^500"],
	  typeSpeed: 30,
	  // showCursor: false,
	  onStringTyped: () => {
	    return $('.typedTitle').find('.typed-cursor').remove();
	  },
	  onComplete: (self) => {
	  	firstTx();
	  }
	});

	let firstTx = () => {
		new Typed(".firstTx p", {
		  strings: ["Feel free to look around,^500 click things,^50 inquire... ^1000"],
		  typeSpeed: 30,
		  onStringTyped: () => {
	    	return $('.firstTx').find('.typed-cursor').remove();
	  	},
		  onComplete: (self) => {

		  	secondTx();
		  }
		});
	}

	let secondTx = () => {
		new Typed(".secondTx p", {
		  strings: ["If you need me, ^600 I'll be just an email away."],
		  typeSpeed: 20,
		  onComplete: () => {
		  	showScrollBtn();
		  }
		  // onStringTyped: function() {
	   //  	return $('.secondTx').find('.typed-cursor').remove();
	  	// }
		});
	}
	let showScrollBtn = () => {
		return $('.btn-scroll.animate a').animate({
			opacity: 1,
			bottom: 0
			}, 800, function(){
				// callback
		});
	}


}); // end for jQuery
