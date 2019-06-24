


  $( function() {
    $("#carousel").owlCarousel({
        autoplay: true,
        lazyLoad: true,
        loop: true,
        margin: 20,
         /*
        animateOut: 'fadeOut',
        animateIn: 'fadeIn',
        */
        singleItem:true,
        responsiveClass: true,
        autoHeight: true,
        autoplayTimeout: 7000,
        smartSpeed: 800,
        nav: true,
        items : 1,
      });
      
      $("#carousel-1").owlCarousel({
        autoplay: true,
        lazyLoad: true,
        loop: true,
        margin: 20,
         /*
        animateOut: 'fadeOut',
        animateIn: 'fadeIn',
        */
        singleItem:true,
        responsiveClass: true,
        autoHeight: true,
        autoplayTimeout: 7000,
        smartSpeed: 800,
        nav: true,
        items : 1,
      });
  } );