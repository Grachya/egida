$(document).ready(function(){
	//icons opacity
	$('.uslugaItem').hover(function(){
		$(this).find(".uslIcon").stop().animate({"opacity":1},300)
	},
	function(){
		$(this).find(".uslIcon").stop().animate({"opacity":0.7},300)
	})
	// slider
	$(".owl-carousel").owlCarousel({
		items: 1,
		mouseDrag: false,
		touchDrag: false,
		nav: true,
		navText:['<i class="fa fa-chevron-left"></i>','<i class="fa fa-chevron-right"></i>'],
		autoplay: true,
		autoplayTimeout:4000,
		autoplayHoverPause:true

	});
	//orderButonClick
	$('.orderBut').mousedown(function(){
		$(this).addClass('orderButOnClick')
	});
	$('.orderBut').mouseup(function(){
		$(this).removeClass('orderButOnClick')
	});
	//navActive
	$('.navItems li a').on('click', function(){
		$('.navSpan').removeClass('activeSpan')
		$(this).find('.navSpan').addClass('activeSpan')
	})
	//dropdounlist
	$('.innerNavUsl li').hover(function(){
		$(this).find('ul').css({'display':'block'})
	},function(){
		$(this).find('ul').css({'display':'none'})
	})

	//fancybox
	$('.orderBut').on('click', function(){
	    $.fancybox({
	        href: '/send.html',
	        type: 'ajax'
	    });
	});

	
})