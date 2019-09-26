(function($) {
  "use strict"; // Start of use strict

  // Smooth scrolling using jQuery easing
  $('a.js-scroll-trigger[href*="#"]:not([href="#"])').click(function() {
    if (location.pathname.replace(/^\//, '') == this.pathname.replace(/^\//, '') && location.hostname == this.hostname) {
      var target = $(this.hash);
      target = target.length ? target : $('[name=' + this.hash.slice(1) + ']');
      if (target.length) {
        $('html, body').animate({
          scrollTop: (target.offset().top - 72)
        }, 1000, "easeInOutExpo");
        return false;
      }
    }
  });

  // Closes responsive menu when a scroll trigger link is clicked
  $('.js-scroll-trigger').click(function() {
    $('.navbar-collapse').collapse('hide');
  });

  // Activate scrollspy to add active class to navbar items on scroll
  $('body').scrollspy({
    target: '#mainNav',
    offset: 75
  });

  // Collapse Navbar
  var navbarCollapse = function() {
    if ($("#mainNav").offset().top > 100) {
      $("#mainNav").addClass("navbar-scrolled");
    } else {
      $("#mainNav").removeClass("navbar-scrolled");
    }
  };
  // Collapse now if page is not at top
  navbarCollapse();
  // Collapse the navbar when page is scrolled
  $(window).scroll(navbarCollapse);

  // Magnific popup calls
  $('#portfolio').magnificPopup({
    delegate: 'a',
    type: 'image',
    tLoading: 'Loading image #%curr%...',
    mainClass: 'mfp-img-mobile',
    gallery: {
      enabled: true,
      navigateByImgClick: true,
      preload: [0, 1]
    },
    image: {
      tError: '<a href="%url%">The image #%curr%</a> could not be loaded.'
    }
  });

  // Accordion Collapse Control
  var $group = $('#accordion-parent');
  var moveArrows = function() {
    $group.find('.drop-arrow').each(function(index, element) {
      if ($(element).hasClass('upping')) {
        $(element).removeClass('down');
        $(element).parent().removeClass('selected');
      }
      if ($(element).hasClass('downing')) {
        $(element).addClass('down');
        $(element).parent().addClass('selected');
      }
      $(element).removeClass('downing');
      $(element).removeClass('upping');
    });
  }

  $group.on('show.bs.collapse', '.collapse', function() {
    $group.find('.collapse.show').collapse('hide');
    $group.find('.drop-arrow.down').addClass('upping');
  });

  $(".experience-header").click(function() {
    if (!$(this).find('.drop-arrow').hasClass('down')){
      $(this).find('.drop-arrow').addClass('downing');
    }
    moveArrows();
  });


})(jQuery); // End of use strict
