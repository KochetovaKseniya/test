$(window).ready(() => {
    setTimeout(() => {
        let overlayEvent = new CustomEvent("overlayLoaded");
        $(".overlay").fadeOut(500, function () {
            document.dispatchEvent(overlayEvent);
        });
        autosize($('textarea'));
    }, 300);

    var swiper = new Swiper('.reviews__slider', {
        effect: 'fade',
        speed: 800,
        fadeEffect: {
            crossFade: true
        },
        pagination: {
          el: '.swiper-pagination',
          dynamicBullets: true,
        },
        navigation: {
            nextEl: '.reviews__next',
            prevEl: '.reviews__prev',
        },
    });

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

});
