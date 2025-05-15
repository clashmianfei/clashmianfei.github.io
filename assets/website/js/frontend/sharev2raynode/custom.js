$(function($){
	
	"use strict";     

	/*
	|----------------------------------------------------------------------------
	| STICKY NAVBAR
	|----------------------------------------------------------------------------
	*/
	
	if ( matchMedia( 'only screen and (min-width: 992px)' ).matches ) {
		$(document).on('scroll', function() {
			var scrollPos = $(this).scrollTop();
			if( scrollPos > 50 ) {
				$('.navbar').addClass('navbar-fixed-top');
			} else {
				$('.navbar').removeClass('navbar-fixed-top');
			}
		});
	}

	/*
	|----------------------------------------------------------------------------
	| SCROLL TO TOP
	|----------------------------------------------------------------------------
	*/
	$(window).scroll(function() {
		if ($(this).scrollTop() > 50 ) {
			$('.scrolltop:hidden').stop(true, true).fadeIn();
		} else {
			$('.scrolltop').stop(true, true).fadeOut();
		}
	});
	$(".scroll").on('click',function(){
		$("html,body").animate({scrollTop:$("body").offset().top},"1000");
		return false
	});

	/*
	|----------------------------------------------------------------------------
	| MAIN SLIDER REVOLUTION
	|----------------------------------------------------------------------------
	*/
	  var revapi; 
	  revapi = jQuery("#rev_slider_1").revolution({
		sliderType:"standard",
		sliderLayout:"fullwidth",
		responsiveLevels:[4096,1400,992,768],
		delay:9000,
		navigation: {
		  touch:{
			touchenabled:"on",
			swipe_threshold: 75,
			swipe_min_touches: 1,
			swipe_direction: "horizontal",
			drag_block_vertical: false,
			tmp:''
		  },
		  arrows:{
		  style: "hades",
			enable: false,
			hide_onmobile: false,
			hide_onleave: false,
			tmp: '<div class="tp-arr-allwrapper"> <div class="tp-arr-imgholder"></div></div>',
			left: {
			  h_align: "left",
			  v_align: "bottom",
			  h_offset: 265,
			  v_offset: 50
			},
			right: {
			  h_align: "left",
			  v_align: "bottom",
			  h_offset: 210,
			  v_offset: 50
			}
		  },
		  bullets:{
			enable:false,
		  }     
		},      
		gridwidth:[1140,930,750,300],
		gridheight:[700,650,500,400]    
	  });

	/*
	|----------------------------------------------------------------------------
	| CLIENT-CAROUSEL
	|----------------------------------------------------------------------------
	*/
	
	$(".client-carousel").owlCarousel({
		navigation : true, // Show next and prev buttons
		slideSpeed : 300,
		paginationSpeed : 400,
		singleItem:true,
		navigation: false
	});

	/*
	|----------------------------------------------------------------------------
	| TESTIMONIAL CAROUSEL
	|----------------------------------------------------------------------------
	*/
	$(".testimonial-carousel").owlCarousel({
		navigation : true, // Show next and prev buttons
		slideSpeed : 300,
		paginationSpeed : 400,
		singleItem:true,
		navigation: false
	});

	/*
	|----------------------------------------------------------------------------
	| REVIEW CAROUSEL
	|----------------------------------------------------------------------------
	*/
	
	$(".review-carousel").owlCarousel({
		navigation : true, // Show next and prev buttons
		slideSpeed : 300,
		paginationSpeed : 400,
		singleItem:true,
		navigation: false
	});
 
	/*
	|----------------------------------------------------------------------------
	| SERVICE CAROUSEL
	|----------------------------------------------------------------------------
	*/
	
	$(".service-carousel").owlCarousel({
		navigation : true, // Show next and prev buttons
		slideSpeed : 300,
		paginationSpeed : 400,
		singleItem:true,
		navigation: false

	});

	/*
	|----------------------------------------------------------------------------
	| PARTNER CAROUSEL
	|----------------------------------------------------------------------------
	*/
	
	var owlPartner = $(".partner-carousel");
	owlPartner.owlCarousel({
		items : 5, //10 items above 1000px browser width
		itemsDesktop : [1000,5], //5 items between 1000px and 901px
		itemsDesktopSmall : [900,3], // betweem 900px and 601px
		itemsTablet: [600,2], //2 items between 600 and 0
		itemsMobile : [440,1], // itemsMobile disabled - inherit from itemsTablet option
		pagination: false
	});

	// Custom Navigation Events
	
	$(".partner-next").on('click',function(){
		owlPartner.trigger('owl.next');
	});
	$(".partner-prev").on('click',function(){
		owlPartner.trigger('owl.prev');
	});

	/*
	|----------------------------------------------------------------------------
	| PORTFOLIO CAROUSEL
	|----------------------------------------------------------------------------
	*/
	var owlPortfolio = $(".portfolio-carousel");

	owlPortfolio.owlCarousel({
		items : 4, //10 items above 1000px browser width
		itemsDesktop : [1000,4], //5 items between 1000px and 901px
		itemsDesktopSmall : [900,3], // betweem 900px and 601px
		itemsTablet: [600,2], //2 items between 600 and 0
		itemsMobile : [440,1], // itemsMobile disabled - inherit from itemsTablet option
		pagination: false
	});

	// Custom Navigation Events
	$(".next").on('click',function(){
	  owlPortfolio.trigger('owl.next');
	});
	$(".prev").on('click',function(){
	  owlPortfolio.trigger('owl.prev');
	});
	/*
	|----------------------------------------------------------------------------
	|   COUNTERUP JS
	|----------------------------------------------------------------------------
	*/
	$('.counter').counterUp({
		delay: 10,
		time: 1000
	});

	/*
	|----------------------------------------------------------------------------
	|   MAGNIFIC JS
	|----------------------------------------------------------------------------
	*/
	
	$('.image-large').magnificPopup({
		type: 'image'
	});
	
	$('.play-video').magnificPopup({
		type: 'iframe'
	});
	
	$.extend(true, $.magnificPopup.defaults, {
    iframe: {
        patterns: {
           youtube: {
              index: 'youtube.com/', 
              id: 'v=', 
              src: 'http://www.youtube.com/embed/%id%?autoplay=1' 
          }
        }
    }
	});

}(jQuery));


	

