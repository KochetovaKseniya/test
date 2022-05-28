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

    const menu = $('.menu'),
    burger = $('.header__burger');
    burger.on('click', function () {
        if($(this).hasClass('active')) {
            menu.removeClass('active');
            $(this).removeClass('active');
            $('body').removeClass('no-scroll');
            $('html').removeClass('no-scroll');
        } else {
            menu.addClass('active');
            $(this).addClass('active');
            header.removeClass('header--fixed');
            $('body').addClass('no-scroll');
            $('html').addClass('no-scroll');
        }
    });
    
    
    $('.main__btn').on('click', function () {
        let elem = $(this).attr('href'),
        target = $(elem).offset().top;
        $('html, body').animate({ scrollTop: target }, 1100);
    });

    $('.header__menu li').on('mouseenter click', function () {
        $(this).find('.sub-menu').fadeIn();
        if($(this).find('.sub-menu')) {
            $(this).addClass('hover');
        }
    });
    $('.header__menu li').on('mouseleave', function() {
        $(this).removeClass('hover');
    });
    $('.sub-menu').on('mouseleave click', function () {
        $('.sub-menu').fadeOut();
        $(this).parent().removeClass('hover');
    });
    
    // email validation
    var mailv = 0;
    var mail = $('[name="mail"]');
    var pattern = /^([\w-]+(?:\.[\w-]+)*)@((?:[\w-]+\.)*\w[\w-]{0,66})\.([a-z]{2,6}(?:\.[a-z]{2})?)$/i;
    mail.bind("change paste keyup", function () {
        if (mail.val() != '') {
            if (mail.val().search(pattern) == 0) {
                $(mail).removeClass('error');
                return mailv = 1;
            } else {
                $(mail).addClass('error');
                return mailv = 0;
            }
        } else {
            return mailv = 0;
        }
    });


    document.addEventListener( 'wpcf7mailsent', function( event ) {
        var id = event.detail.contactFormId;
        $('.contacts__form--btn').addClass('disabled');
        $('[name="name"]').addClass('disabled');
        $('[name="mail"]').addClass('disabled');
        $('textarea').addClass('disabled');
        console.log('submit')
    }, false );

});
