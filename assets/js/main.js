(function ($) {
	"use strict";
    
// tooltip
    $('[data-toggle="tooltip"]').tooltip()

// data - background
    $("[data-background]").each(function () {
        $(this).css("background-image", "url(" + $(this).attr("data-background") + ")")
    });

// Start Slick Nav
    $('#mobile-menu').slicknav({
        prependTo: '.show-mobile-menu',
        allowParentLinks: true
    });
// End Slick Nav

// Sticky Menu
    $(window).on('scroll', function () {
        var scroll = $(window).scrollTop();
        if (scroll < 245) {
        $(".header-area").removeClass("sticky");
    } else {
        $(".header-area").addClass("sticky");
    }
  });
// Sticky Menu

  
// WOW active
  var wow = new WOW({
    boxClass:     'wow',      
    animateClass: 'animated', 
    offset:       0,         
    mobile:       true,       
    live:         true,  
});
    wow.init();
//  End Wow 

// Magnific Popup
    $(".video-popup").magnificPopup({
        type: 'iframe',
    });
// End  Magnific Popup

//  Scroll Up
    $.scrollUp({
        scrollName: 'scrollUp',
        topDistance: '300',
        topSpeed: 300, 
        animation: 'fade', 
        animationInSpeed: 200, 
        animationOutSpeed: 200, 
        scrollText: '<i class="fas fa-angle-up"></i>', 
        activeOverlay: false, 
    });
//   Scroll Up

// Start Owl-carousel
    $('.testimonial-carousel').owlCarousel({
        loop: true,
        dots: false,
        thumbs: false,
        nav: true,
        navText:['<img src="assets/img/left.png" alt="">','<img src="assets/img/right.png" alt="">'],
        autoplay: true,
                autoplayTimeout:3000,
            autoplayHoverPause:true,
        margin: 30,
        responsive: {
        0:{
            items:1
        },
        767:{
            items: 2
        },
        992:{
            items: 3
        },
    },
    });
// End Owl-carousel //

// Start Counter
    $('.counter').counterUp({
        delay: 3,
        time: 2000,
    });
// End Counter

//  Start IsoTope
    $('.grid').imagesLoaded(function () {
        // Start Init Isotope
        var $grid = $('.grid').isotope({
            itemSelector: '.grid-item',
            percentPosition: true,
            masonry: {
                // use outer width of grid-sizer for columnWidth
                columnWidth: 1
            }
        });
    // filter items on button click
            $('.portfolio-menu').on('click', 'button', function () {
                var filterValue = $(this).attr('data-filter');
                $grid.isotope({ filter: filterValue });
            });
        });
    // Init IsoTope
      //for menu active class
      $('.portfolio-menu button').on('click', function(event) {
         $(this).siblings('.active').removeClass('active');
         $(this).addClass('active');
         event.preventDefault();
      });
// End Isotope

// One Page Nav
    var top_offset = $('.header-main').height() - 10;
    $('.main-menu').onePageNav({
    currentClass: 'active',
    scrollOffset: top_offset,
    });

// side-bar
$('.header-bar').on("click", function() {
    $('.btn-menu-main').addClass('btn-menu-main-right');
});
$('.crose').on("click", function() {
    $('.btn-menu-main').removeClass('btn-menu-main-right');
});
// Side Bar

// Smooth Scroll for IE/ EDGE/ SAFARI
$('a').on('click', function(event){
    if (this.hash !==''){
        event.preventDefault();

        var hash = this.hash;

        $('html, body').animate({
            scrollTop: $(hash).offset().top
            }, 800, function(){
            window.location.hash = hash;
        });
    }
});
// End Smooth Scroll for IE/ EDGE/ SAFARI

// Google Map
    function basicmap() {
        // Basic options for a simple Google Map
        // For more options see: https://developers.google.com/maps/documentation/javascript/reference#MapOptions
        var mapOptions = {
            // How zoomed in you want the map to start at (always required)
            zoom: 11,
            scrollwheel: false,
            // The latitude and longitude to center the map (always required)
            center: new google.maps.LatLng(40.6700, -73.9400), // New York
            // This is where you would paste any style found on Snazzy Maps.
            styles: [
                { "featureType": "water", "elementType": "geometry", "stylers": [{ "color": "#e9e9e9" }, { "lightness": 17 }] }, 
                { "featureType": "landscape", "elementType": "geometry", "stylers": [{ "color": "#f5f5f5" }, { "lightness": 20 }] }, 
                { "featureType": "road.highway", "elementType": "geometry.fill", "stylers": [{ "color": "#ffffff" }, { "lightness": 17 }] }, 
                { "featureType": "road.highway", "elementType": "geometry.stroke", "stylers": [{ "color": "#ffffff" }, { "lightness": 29 }, { "weight": .2 }] }, 
                { "featureType": "road.arterial", "elementType": "geometry", "stylers": [{ "color": "#ffffff" }, { "lightness": 18 }] }, 
                { "featureType": "road.local", "elementType": "geometry", "stylers": [{ "color": "#ffffff" }, { "lightness": 16 }] }, 
                { "featureType": "poi", "elementType": "geometry", "stylers": [{ "color": "#f5f5f5" }, { "lightness": 21 }] }, 
                { "featureType": "poi.park", "elementType": "geometry", "stylers": [{ "color": "#dedede" }, { "lightness": 21 }] }, 
                { "elementType": "labels.text.stroke", "stylers": [{ "visibility": "on" }, { "color": "#ffffff" }, { "lightness": 16 }] }, 
                { "elementType": "labels.text.fill", "stylers": [{ "saturation": 36 }, { "color": "#333333" }, { "lightness": 40 }] }, 
                { "elementType": "labels.icon", "stylers": [{ "visibility": "off" }] }, 
                { "featureType": "transit", "elementType": "geometry", "stylers": [{ "color": "#f2f2f2" }, { "lightness": 19 }] }, 
                { "featureType": "administrative", "elementType": "geometry.fill", "stylers": [{ "color": "#fefefe" }, { "lightness": 20 }] }, 
                { "featureType": "administrative", "elementType": "geometry.stroke", "stylers": [{ "color": "#fefefe" }, { "lightness": 17 }, { "weight": 1.2 }] }]
        };
        // Get the HTML DOM element that will contain your map 
        // We are using a div with id="map" seen below in the <body>
        var mapElement = document.getElementById('contact-map');

        // Create the Google Map using our element and options defined above
        var map = new google.maps.Map(mapElement, mapOptions);

        // Let's also add a marker while we're at it
        var marker = new google.maps.Marker({
            position: new google.maps.LatLng(40.6700, -73.9400),
            map: map,
            animation:google.maps.Animation.BOUNCE,
            icon: '../assets/img/map-marker.png',
            title: 'Cryptox',
        });
    }
    if ($('#contact-map').length != 0) {
        google.maps.event.addDomListener(window, 'load', basicmap);
    }
// Google Map
})(jQuery);
