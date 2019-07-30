$(document).ready(function(){
	  $(window).on('scroll',function() {    
   var scroll = $(window).scrollTop();
   if (scroll < 1) {
    $(".sticky").removeClass("scroll-header");
   }else{
    $(".sticky").addClass("scroll-header");
   }
  });


	$('#bar1').barfiller({
		duration: 2000,
	});
	$('#bar2').barfiller({
		duration: 2000,
	});
	$('#bar3').barfiller({
		duration: 2000,
	});
	$('#bar4').barfiller({
		duration: 2000,
	});
	$('#bar5').barfiller({
		duration: 3000,
	});


	  ityped.init(document.querySelector(".itype"), {
      showCursor: true,
      loop: true,
      strings: ['I am Web Developer', 'I am Web Designer', 'I am Web Programmer'],
    });

	 $('.counter').counterUp({
    delay: 10,
    time: 1000
});
	 var mixer = mixitup('.portfolio-list');
	 var mixer = mixitup(containerEl, {
    selectors: {
        target: '.blog-item'
    },
    animation: {
        duration: 300
    }

});


});