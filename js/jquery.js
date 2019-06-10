//  
//     
//$(window).load(function() {
//
//    if($(window).width()<761){
//        $('video').get(0).pause();
//        $('#intro').remove();
//    }
//    else{
//    //only add markup when screen size is large enough
//    $(document).append('<video style="display:none" width="320" height="240" controls><source src="img/binaryintro.mp4" type="video/mp4"><\/video>');
//
//    $('#intro').fadeIn(10000, function() {
//    });
//
//    $('video').bind('ended', function(){
//
//        $('#intro').fadeOut(5000, function() {
//        });
//     });
//
//     $('button').click(function() {
//                $('video').get(0).pause();
//                $('#intro').css('display', 'none');
//
//     });
//});
//}

document.getElementById('intro').onended = function(){
    window.location.href = "./unused.html";
}

$(function() {
      menu = $('nav ul');
    
    	jQuery('.skillbar').each(function(){
		jQuery(this).find('.skillbar-bar').animate({
			width:jQuery(this).attr('data-percent')
		},6000);
	});
});

      $('#toggle-btn').on('click', function(e) {
            e.preventDefault();
            menu.slideToggle();
      });

      $(window).resize(function() {
            var w = $(this).width();
            if(w > 580 && menu.is(':hidden')) {
                  menu.removeAttr('style');
            }
      });

      $('nav li').on('click', function(e) {
            var w = $(window).width();
            if(w < 580) {
                  menu.slideToggle();
            }
      });
      $('.open-menu').height($(window).height());
});


// animated skill bars



// smooth scrolling

$('a[href*="#"]')
.not('[href="#"]')
.not('[href="#0"]')
      .click(function(event) {
            if (
            location.pathname.replace(/^\//, '') == this.pathname.replace(/^\//, '')
            &&
            location.hostname == this.hostname
      ) {
            var target = $(this.hash);
            target = target.length ? target : $('[name=' + this.hash.slice(1) + ']');
            if (target.length) {
                  event.preventDefault();
                  $('html, body').animate({
                        scrollTop: target.offset().top
                  }, 1000, function() {
                        var $target = $(target);
                        $target.focus();
                        if($target.is(":focus")) {
                              return false;
                        } else {
                              $target.attr('tabindex', '-1');
                              $target.focus();
                        };
                  });
            }
      }
      });
