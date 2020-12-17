
$(document).ready(function () {
    // owl-carousel-activation
   // Hero-image-slider-area start----
    var heroSlider = $('.heroSlide');
    
    heroSlider.owlCarousel({
        items: 1,
        loop: true,
        autoplay: true,
        dots:false
    });
    // owl-carousel-caption-animation
    heroSlider.on('changed.owl.carousel', function (event) {
        var item = event.item.index - 2;
        $('.single-left h2,b,span,a').removeClass('animate__animated animate__fadeInDown');
        $('.owl-item').not('.cloned').eq(item).find('.single-left h2,b,span,a').addClass('animate__animated animate__fadeInDown');
         $('.single-right img').removeClass('animate__animated animate__backInUp');
        $('.owl-item').not('.cloned').eq(item).find('.single-right img').addClass('animate__animated animate__backInUp');
    });
    // Hero-image-slider-area end----
  
// owl-carousel-dots-into-number
  $('.owl-dot').each(function(){
  $(this).children('span').text($(this).index()+1);
   });  
       // sticky nav-area-start
    $(window).scroll(function () {
        var topPosition = $(document).scrollTop();
        if (topPosition > 50) {
            $('#header').addClass("fixedNav");
        }
        else {
            $('#header').removeClass("fixedNav");
        }
    });
    // best-seller-owl-slider-active------
    $('.best-seller-slider-wrapper').owlCarousel({
    loop:true,
    margin:10,
    responsiveClass:true,
    responsive:{
        0:{
            items:1,
            nav:true,
            dots:false
        },
        600:{
            items:1,
            nav: false,
            dots:false
        },
        1000:{
            items:1,
            nav:true,
            loop: false,
            dots:false
        }
    }
    });
     // Recently-owl-slider-active------
    $('.recently-viewed-slider-wrapper').owlCarousel({
    loop:true,
    margin:0,
    responsiveClass: true,
    responsive:{
        0:{
            items:2,
            nav: true,
            dots:false
        },
        600:{
            items:3,
            nav: false,
            dots:false
        },
        1000:{
            items:5,
            nav:true,
            loop: false,
            dots:false
        }
    }
});
     // single-product-view-owl-slider-active------
    $('.single-product-view-slider-wrapper').owlCarousel({
    loop:true,
    margin:0,
    responsiveClass:true,
    responsive:{
        0:{
            items:1,
            nav:true,
            dots:false
        },
        600:{
            items:1,
            nav:false
        },
        1000:{
            items:1,
            nav:false,
            loop: false,
            dots:true
        }
    }
});
//tooltip activation
    $(function () {
        $('[data-toggle="tooltip"]').tooltip()
    });

    $('.toggleBtn').click(function () {
        $('.searchbar-collapse-top').toggleClass('d-none');
        $('#sbar-show').toggleClass('d-none');
        $('#sbarClose').toggleClass('d-none');
    });

    



    // filter-gallery-activation
    // As A jQuery Plugin -->
    // responsive-navbar-toggle----------------------
    // $('.threebarBtn').click(function () {
    //     $('.nav-header').toggleClass('displayNav');
    // });


    // // top-scroll-button-active---------------------
    // $(window).scroll(function () {
    //     if ($(window).scrollTop() > 200) {
    //         $(".scroll-top-indicator").fadeIn();
            
    //     }
    //     else {
    //         $(".scroll-top-indicator").fadeOut();
    //     }
    // });
    // parallax-------------
    // $('.parallax-window').parallax({
    //     imageSrc: 'assets/img/bg/1.jpg',

    // });
    //   $('.client-bg').parallax({
    //     imageSrc: 'assets/img/bg/2.jpg',

    // });
    // $(".scroll-top-indicator").click(function () {
    //     $("html").animate({ scrollTop: 0 },2000);
    // });
    // Filter Gallery---------------
    // $('.itm-list').click(function () {
    //     const value = $(this).attr('data-filter');
    //     if (value == 'all') {
    //         $('.single-room-wrapper').show('1000');
    //     }
    //     else {
    //         $('.single-room-wrapper').not('.' + value).hide('1000');
    //         $('.single-room-wrapper').filter('.' + value).show('1000');
    //     }
    // });
    // $('.itm-list').click(function () {
    //     $(this).addClass('active').siblings().removeClass('active');
    // });
    // previous-date-disable---------------------
    // var dateToday = new Date();    
    // $(function () {
    //     $("#date").datepicker({ 
    //         minDate: dateToday 
    //     });
    // });
    // preloader-activation------------------------
    $('.preloader').css('display', 'none');
    // nivo-slider-activation
    // $('#slider').nivoSlider();
    
});

