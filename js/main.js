$(window).on('load', function () {
    var popup = localStorage.getItem('newsletter-popup');
    if (popup != 0) {
        $("body").addClass("overflow");
        $(".mo-modal-overlay").fadeIn(500)
        $(".mo-modal").addClass("mo-modal-in");
    }
});
$(document).ready(function () {
    ///////// **modal** /////////
    $('.mo-modal-overlay').click(function () {
        $(".mo-modal-overlay").fadeOut(400);
        $(".mo-modal").removeClass("mo-modal-in");
        $("body").removeClass("overflow");
        localStorage.setItem('newsletter-popup', 0);
    });
    $('.mo-modal').click(function (e) {
        e.stopPropagation();
    });
    $('.mo-modal-close').click(function () {
        $(".mo-modal-overlay").fadeOut(400);
        $(".mo-modal").removeClass("mo-modal-in");
        $("body").removeClass("overflow");
        localStorage.setItem('newsletter-popup', 0);
    });
    //////////** fixed **//////////
    $(".static-header").height($('header').outerHeight());
    if ($(this).scrollTop() >= 50) {
        $("body").addClass("header-scroll");
        $(".header-message").hide();
    } else {
        $("body").removeClass("header-scroll");
        $(".header-message").show();
    }
    $(window).scroll(function () {
        if ($(this).scrollTop() >= 50) {
            $("body").addClass("header-scroll");
            $(".header-message").slideUp(300);
        } else {
            $("body").removeClass("header-scroll");
            $(".header-message").slideDown(300);
        }
    });
    //////////** arrow top **//////////
    $(".arrow-top").click(function () {
        $("html,body").animate({
            scrollTop: 0
        }, 1500);
    });
    $(this).scrollTop() >= 500 ? $(".arrow-top").fadeIn(300) : $(".arrow-top").fadeOut(300);

    $(window).scroll(function () {
        $(this).scrollTop() >= 500 ? $(".arrow-top").fadeIn(300) : $(".arrow-top").fadeOut(300);
    });
    //////////** header msg **//////////
    $(".header-message span.msg-close").click(function () {
        $(".header-message").slideUp(function () {
            $(".header-message").remove();
            $(".static-header").height($('header').outerHeight());
        });
        localStorage.setItem('header_comment', 'off');
        localStorage.setItem('header_comment_exp', Date.now() + (3600000 * 24));
    });
    //////////** search **//////////
    $('.search-btn').click(function () {
        $(".search-overlay, .search-cont").slideDown(300);
        $(this).addClass("active");
    });

    $('.search-overlay').click(function () {
        $(".search-overlay, .search-cont").slideUp(400);
        $(this).removeClass("active");
    });
    //////////** main slider **//////////
    var mainswiper = new Swiper('.main-slider .swiper-container', {
        spaceBetween: 10,
        loop: true,
        // autoplay: {
        //     delay: 5000,
        // },
        pagination: {
            el: '.main-slider .swiper-pagination',
            clickable: true,
        },
        navigation: {
            nextEl: '.main-slider .swiper-btn-next',
            prevEl: '.main-slider .swiper-btn-prev',
        },
    });
    //////////** cats slider **//////////
    var catswiper = new Swiper('.cats-slider .swiper-container', {
        loop: true,
        breakpoints: {
            0: {
                slidesPerView: 2,
                spaceBetween: 8,
            },
            768: {
                slidesPerView: 3,
                spaceBetween: 15,
            },
            992: {
                slidesPerView: 4,
                spaceBetween: 20,
            },
            1200: {
                slidesPerView: 5,
                spaceBetween: 25,
            },
        },
    });
    //////////** product slider **//////////
    sliderinit('.cat-slide-1')
    sliderinit('.cat-slide-2')
    sliderinit('.cat-slide-3')
    //////////** menu **//////////
    $('.setting-anchor').click(function () {
        $(".setting-anchor").not(this).removeClass("active");
        $(this).toggleClass("active");
        if ($(this).siblings().css('display') == 'none') {
            $(this).siblings().slideDown(300);
        } else {
            $(this).siblings().slideUp(300);
        }
        $(".setting-anchor").not(this).siblings().slideUp(300);
    })
    $('.have_sub>a').click(function () {
        $(this).toggleClass("active");
        if ($(this).siblings().css('display') == 'none') {
            $(this).siblings().slideDown(300);
        } else {
            $(this).siblings().slideUp(300);
        }
        $(".setting-anchor").not(this).siblings().slideUp(300);
    })
    $('.menu-btn').click(function () {
        $("nav").addClass("active");
        $(".overlay").fadeIn(300);
        $("body").addClass("overflow");
    })
    $('.overlay,.close-btn').click(function () {
        $("nav").removeClass("active");
        $(".overlay").fadeOut(400);
        $("body").removeClass("overflow");
    })
    ///////// **footer** /////////
    if ($(window).width() <= 767) {
        $(".nav-foot-head").addClass("mo-accordion");
        $(".foot-nav").addClass("mo-panel");
    }
    ///////// **ACC** /////////
    $('.mo-accordion').click(function () {
        $(".mo-accordion").not(this).removeClass("active");
        $(this).toggleClass("active");
        if ($(this).siblings().css('display') == 'none') {
            $(this).siblings().slideDown(500);
        } else {
            $(this).siblings().slideUp(500);
        }
        $(".mo-accordion").not(this).siblings().slideUp(500);
    })
});

sliderinit = function (section_name) {
    var productswiper = new Swiper(section_name + ' .swiper-container', {

        loop: true,
        pagination: {
            el: section_name + ' .swiper-pagination',
            clickable: true,
        },
        navigation: {
            nextEl: section_name + ' .swiper-btn-next',
            prevEl: section_name + ' .swiper-btn-prev',
        },
        breakpoints: {
            0: {
                slidesPerView: 2,
                spaceBetween: 10,
            },
            767: {
                slidesPerView: 2,
                spaceBetween: 30,
            },
            992: {
                slidesPerView: 3,
                spaceBetween: 30,
            },
            1199: {
                slidesPerView: 4,
                spaceBetween: 30,
            },
        },
    });
}