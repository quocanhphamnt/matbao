$( document ).ready(function() {

    var headBannerAds = new Swiper(".headBannerAds", {
        loop: true,
        autoplay: {
            delay: 2500,
            disableOnInteraction: false,
          },
    });

    $('#navbarCollapse .nav-link').on('click', event => {
        $(event.currentTarget).next().toggle();
        $(event.currentTarget).parents().siblings().find('.subMenu').hide();
    });

    $('.main-nav .nav-link').on('click', event => {
        $(event.currentTarget).parents().siblings().find('.subMenu').hide();
        $(event.currentTarget).parents().siblings().find('.nav-link').removeClass('active');
        $(event.currentTarget).next().toggle();
        $(event.currentTarget).toggleClass('active');
    });

    $('.main-nav').on('mouseleave', event => {
        $(event.currentTarget).find('.subMenu').hide();
        $(event.currentTarget).find('.nav-link').removeClass('active');
    });

    $('.lable').on('click', event => {
        $(event.currentTarget).parents().siblings().find('.lable').next().hide();
        $(event.currentTarget).next().toggle();
    });

    $( window ).on( "resize", function() {
        if ($(window).width() > 768) {
            $('.lable').next().show();
        } else {
            $('.lable').next().hide();
        }
    });

    $('.lazyRead .item .text strong').on('click', event => {
        $(event.currentTarget).next().toggle();
    });
});