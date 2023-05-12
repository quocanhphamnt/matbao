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
        $(event.currentTarget).parents().siblings().find('.nav-link').removeClass('active-nav-link');
        $(event.currentTarget).next().toggle();
        $(event.currentTarget).toggleClass('active-nav-link');
    });

    $('.main-nav').on('mouseleave', event => {
        $(event.currentTarget).find('.subMenu').hide();
        $(event.currentTarget).find('.nav-link').removeClass('active');
    });

    $('.lable').on('click', event => {
        $(event.currentTarget).parents().siblings().find('.lable').next().hide();
        $(event.currentTarget).next().toggle();
    });

    $( window ).on( "resize", () => {
        if ($(window).width() > 768) {
            $('.lable').next().show();
        } else {
            $('.lable').next().hide();
        }
    });

    $('.lazyRead .item .text strong').on('click', event => {
        $(event.currentTarget).parents('.lazyRead').find('.active').removeClass('active');
        $(event.currentTarget).parents('.lazyRead').find('.inprocess').removeClass('inprocess');
        $(event.currentTarget).parents('.item').siblings().find('ul').hide();
        $(event.currentTarget).parents('.item').siblings().find('span').removeClass('stop');
        $(event.currentTarget).next().show();
        $(event.currentTarget).prev().addClass('stop');
        $(event.currentTarget).parents('.lazyRead').children('.img').find('img').hide()
        $currently_inndex = $(event.currentTarget).parents('.item').index();
        $(event.currentTarget).parents('.lazyRead').children('.img').find('img').eq($currently_inndex).show();
    });

    setInterval(() => {
        $currently_selected = $('.lazyRead-1 li.active');
        if ($currently_selected.next().length == 0) {
            $next_selected = $currently_selected.siblings().first();
        } else {
            $next_selected = $currently_selected.next();
        }
        $currently_selected.removeClass('active');
        $next_selected.addClass('active');

        $currently_selected.find('span').removeClass('inprocess');
        $next_selected.find('span').addClass('inprocess');

        $currently_selected.find('ul').hide();
        $next_selected.find('ul').show();

        $currently_selected = $('.lazyRead-1 img.active');
        if ($currently_selected.next().length == 0) {
            $next_selected = $currently_selected.siblings().first();
        } else {
            $next_selected = $currently_selected.next();
        }
        $currently_selected.removeClass('active');
        $next_selected.addClass('active');

        $currently_selected.hide();
        $next_selected.show();
    },3000);

    setInterval(() => {
        $currently_selected = $('.lazyRead-2 li.active');
        if ($currently_selected.next().length == 0) {
            $next_selected = $currently_selected.siblings().first();
        } else {
            $next_selected = $currently_selected.next();
        }
        $currently_selected.removeClass('active');
        $next_selected.addClass('active');

        $currently_selected.find('span').removeClass('inprocess');
        $next_selected.find('span').addClass('inprocess');

        $currently_selected.find('ul').hide();
        $next_selected.find('ul').show();

        $currently_selected = $('.lazyRead-2 img.active');
        if ($currently_selected.next().length == 0) {
            $next_selected = $currently_selected.siblings().first();
        } else {
            $next_selected = $currently_selected.next();
        }
        $currently_selected.removeClass('active');
        $next_selected.addClass('active');

        $currently_selected.hide();
        $next_selected.show();
    },3000);

    $('.tableCompare .toggle-area .toggle').on('click', event => {
        if ($(event.currentTarget).hasClass('open')) {
            $(event.currentTarget).parents().find('.tr-hide').show();
            $(event.currentTarget).text('Thu gọn tất cả');
            $('.tableCompare .compare tbody .morong-thugon').text('Ẩn bớt tính năng');
            $('.tableCompare .compare tbody .morong-thugon').toggleClass('morong');
            $('.tableCompare .compare tbody .morong-thugon').toggleClass('thugon');
        } else {
            $(event.currentTarget).parents().find('.tr-hide').hide();
            $(event.currentTarget).text('Mở rộng tất cả');
            $('.tableCompare .compare tbody .morong-thugon').text('Xem thêm tính năng');
            $('.tableCompare .compare tbody .morong-thugon').toggleClass('morong');
            $('.tableCompare .compare tbody .morong-thugon').toggleClass('thugon');
        }
        $(event.currentTarget).toggleClass('open');
        $(event.currentTarget).toggleClass('close');
    });

    $('.tableCompare .compare tbody .morong-thugon').on('click', event => {
        if ($(event.currentTarget).hasClass('morong')) {
            $(event.currentTarget).text('Ẩn bớt tính năng');
        } else {
            $(event.currentTarget).text('Xem thêm tính năng');
        }
        $(event.currentTarget).toggleClass('morong');
        $(event.currentTarget).toggleClass('thugon');
    });

    $('.faq strong').on('click', event => {
        $(event.currentTarget).children().toggleClass('active')
        $(event.currentTarget).next().toggle();
    });

    var link = $('.stickyMenu a');
    $(document).scroll( () => {
        link.each(function() {

            var section = $(this).attr('href');
            var offset = $(section).offset().top;
            var height = $(section).outerHeight();
            var bottom = offset + height;
            var scrollPosition = $(document).scrollTop();
            var stickyHeight = 77;
    
            if(scrollPosition < bottom - stickyHeight && scrollPosition >= offset - stickyHeight){
                $(this).addClass('active');
            } else{
                $(this).removeClass('active');
            }    
        });
    });
});