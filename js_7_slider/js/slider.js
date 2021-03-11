$(document).ready(function () {
    $('.slider').slick({
        arrows: true,
        dots: true,
        adaptiveHeight: true,
        slidesToShow: 3,
        slidesToScroll: 2,
        speed: 1000,
        easing: 'ease',
        infinite: true,
        initialSlide: 0,
        // перелистує слайди 
        autoplay: true,
        autoplaySpeed: 1000,
        pauseOnFocus: true,
        pauseOnHover: true,
        pauseOnDotsHover: true,
        draggable: true,
        swipe: true,
        touchThreshold: 10,
        touchMove: true,
        waitForAnimate: true,
        centerMode: true,
        variableWidth: false,
        // rows:2,
        // slidesPerRow:2,
        // asNavFor:'sliderBig',
        responsive: [{
            breakpoint: 768,
            settings: {
                slidesToShow: 2
            }
        }, {
            breakpoint: 480,
            settings: {
                slidesToShow: 1
            }
        }],
        mobileFirst:false
    });
    $('.sliderbig').slick({
        arrows:false,
        fade: true,
        // asNavFor:'.slider'

    });
});