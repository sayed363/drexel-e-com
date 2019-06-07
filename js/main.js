$(document).ready(function(){
	//main slider
	$(".owl-one").owlCarousel({
		items:1,
		loop:true,
		navText:['Back','Next'],
		autoplay:true,
		nav:true,
		// responsive{
			// 0:{items:1},
			// 600:{items:3},
			// 1000:{items:5},
		// }
	});
	
	
	//product tab
	$('.owl-two').owlCarousel({
		items:1,
		navText:['Back','Next'],
		nav:true,
		autoplay:false,
		loop:true
	});
	
	//product tab 2
	$('.owl-three').owlCarousel({
		items:1,
		navText:['Back','Next'],
		nav:true,
		autoplay:false,
		loop:true
	});
	
		//our users' brand logo
	$('.owl-four').owlCarousel({
		items:6,
		autoplay:true,
		loop:true,
		nav:true,
		margin:30,
		navText:['Back','Next'],
		// responsive{
			// 0:{
				// items:1
			// },
			// 600:{
				// items:3
			// },
			// 1000:{
				// items:6
			// },
			// 1350:{
				// items:6
			// },
		// }
	});
});