$(window).ready(() => {
    setTimeout(() => {
        let overlayEvent = new CustomEvent("overlayLoaded");
        $(".overlay").fadeOut(500, function () {
            document.dispatchEvent(overlayEvent);
        });
    //     AOS.init({
    //         duration: 800,
    //         offset: 0,
    //         easing: 'ease-out',
    //         once: true,
    //     });
    }, 300);

    const header = $('.header');
    let scroll = 200;
    $(window).on('scroll', function () {
        currentScroll = $(window).scrollTop();
        if (currentScroll > scroll && currentScroll > 50) {
            if( !$('.menu').hasClass('active')) {
                header.css('transform', 'translateY(-100%)');
            }
        } else if (currentScroll <= 50) {
            header.css('transform', 'translateY(0)');
            header.removeClass('header--fixed');
        } else {
            header.css('transform', 'translateY(0)');
            header.addClass('header--fixed');
        }
        scroll = currentScroll;
    });

    // // header menu
    // const menu = $('.menu'),
    // burger = $('.header__burger');
    // burger.on('click', function () {
    //     if($(this).hasClass('active')) {
    //         menu.removeClass('active');
    //         $(this).removeClass('active');
    //         $('.header__logo').removeClass('active');
    //         $('body').removeClass('no-scroll');
    //         $('html').removeClass('no-scroll');
    //     } else {
    //         menu.addClass('active');
    //         $(this).addClass('active');
    //         header.removeClass('header--fixed');
    //         $('.header__logo').addClass('active');
    //         $('body').addClass('no-scroll');
    //         $('html').addClass('no-scroll');
    //     }
    // });


    var galleryThumbs = new Swiper('.slider__review', {
        spaceBetween: 10,
        slidesPerView: 1,
        freeMode: true,
        watchSlidesProgress: true,
        speed: 800,
        effect: 'fade',
        fadeEffect: {
          crossFade: true
        },
    });
    var galleryTop = new Swiper('.slider__gallery', {
        spaceBetween: 10,
        slidesPerView: 3,
        centeredSlides: true,
        speed: 800,
        navigation: {
            nextEl: '.slider__next',
            prevEl: '.slider__prev',
        },
        thumbs: {
            swiper: galleryThumbs
        },
        breakpoints: {
            768: {
                slidesPerView: 3,
                spaceBetween: 56
            },
        }
    });
    galleryTop.slideTo(1, 800);
});
