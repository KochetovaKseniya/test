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

    $('.main__btn').on('click', function () {
        let elem = $(this).attr('href'),
        target = $(elem).offset().top;
        $('html, body').animate({ scrollTop: target }, 1100);
    });

    $('.header__menu li').on('mouseenter click', function () {
        $(this).find('.sub-menu').fadeIn();
    });
    $('.sub-menu').on('mouseleave click', function () {
        $('.sub-menu').fadeOut();
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
        btn.addClass('disabled');
        name.addClass('disabled');
        mail.addClass('disabled');
        text.addClass('disabled');
        console.log('submit')
    }, false );

});
