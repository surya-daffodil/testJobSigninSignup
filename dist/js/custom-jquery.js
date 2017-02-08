$(document).ready(function() {

	$('ul li:first-child').addClass('first');
	$('ul li:last-child').addClass('last');

	$('.right-sidebar').clone().appendTo('.mobile-header .icn1 .icnin');
	$('header .rt .rt1 .icon').clone().appendTo('.mobile-header .icn2 .icnin');
	$('header .mt').clone().appendTo('.mobile-header .icn3 .icnin');
	$('header .rt .rt2 h6').clone().appendTo('.mobile-header .icn4 .icnin');
	$('header .rt .rt3 h6').clone().appendTo('.mobile-header .icn5 .icnin');
	$('header .lt .nav-wrap').clone().appendTo('.mobile-header .icn6 .icnin');
	
	
	$('.filter-wrap .filtersw').click(function () {
		
		$('.filter-wrap ul').slideToggle();
		return false;
		
	});
	
	$('.nav-wrap .menubtn').click(function () {
		
		$('.navin').toggleClass('opened');
		return false;
		
	});
	
	
	$('.iconrs').click(function () {
		
		$('main .right-sidebar').toggleClass('opened');
		return false;
		
	});
	
	
	$('header .mobile-header .icn1 .icon').click(function () {
		
		$('header .mobile-header .right-sidebar').toggleClass('opened');
		return false;
		
	});
	
	
	$('select').selectBox({
		mobile: true
	});
	
	
	
	var owl1 = $("#owl1");
    owl1.owlCarousel({
        items: 1,
        loop: true,
		smartSpeed:650,
        responsive: {
            1: {
                items: 1
            },
            480: {
                items: 1
            },
            768: {
                items: 1
            },
            991: {
                items: 1
            },
            1169: {
                items: 1
            }
        }
    });
	
	
	var owl2 = $("#owl2");
    owl2.owlCarousel({
        items: 1,
        loop: true,
		smartSpeed:650,
        responsive: {
            1: {
                items: 1
            },
            480: {
                items: 1
            },
            768: {
                items: 1
            },
            991: {
                items: 1
            },
            1169: {
                items: 1
            }
        }
    });
	
	
	if ($(window).width() > 767) {
	$('.bxslider').bxSlider({
	  mode: 'vertical',
	  slideMargin: 5,
	  minSlides: 3,
	  moveSlides: 3,
		
	});
	}
	
	
	$('.iconw .icon-more').click(function () {
		
		$('.iconw .contw').slideToggle();
		
		return false;
		
	});
	
	
	
	$('.vslink').click(function(){
	
	  var popup_id = $(this).attr("href");
		
	
		
	  $(popup_id).addClass('openp');
		
	  return false;
   
  });
  

	
	
	$('.viewstage-popup .closeicon').click(function(){
	
		
		$('.viewstage-popup').removeClass('openp');
		
		return false;
		
  });

  

	$('.create-post-pageo .lt').clone().appendTo('.mobile-page1 .tabcont1');
	$('.create-post-pageo .section4').clone().appendTo('.mobile-page1 .tabcont2');
	$('.create-post-pageo .section4').clone().appendTo('.mobile-page1 .tabcont3');

	
	
	$('.post-detail-page .deskw .lt').clone().appendTo('.mobile-page2 .tabcont1');
	$('.post-detail-page .deskw .lt').clone().appendTo('.mobile-page2 .tabcont2');
	$('.post-detail-page .section4').clone().appendTo('.mobile-page2 .tabcont3');
	 
	
	$('header .mobile-header .icn3 .icon').click(function () {
		
		$('header .mobile-header .icn.icn3 form').slideToggle();
		
	});
	
	
	 
	
	

});

	

function wResize() {
	var h1 = $('.login-page .rt').outerHeight();
	$('.login-page .lt').css('height', h1);
	
}
	$(window).resize(function() {
        wResize();
    });
	
	$(window).load(function() {
        wResize();
    });
    
	


