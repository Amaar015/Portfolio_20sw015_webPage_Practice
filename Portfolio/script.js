$(document).ready(function () {

    $('#menu').click(function () {
        $(this).toggleClass('fa-times');
        $('.navbar').toggleClass('nav-toggle');
    });

    $(window).on('scroll load', function () {

        $('#menu').removeClass('fa-times');
        $('.navbar').removeClass('nav-toggle');

        if ($(window).scrollTop() > 0) {
            $('.scroll-top').show();
        } else {
            $('.scroll-top').hide();
        }
        $(window).scroll(function () {
            // sticky navbar on scroll script
            if (this.scrollY > 90) {
                $('.header').addClass("active");
            } else {
                $('.header').removeClass("active");
            }


        });


        // scroll spy 


        $('section').each(function () {

            let height = $(this).height();
            let offset = $(this).offset().top - 200;
            let id = $(this).attr('id');
            let top = $(window).scrollTop();

            if (top > offset && top < offset + height) {
                $('.navbar ul li a').removeClass('active')
                $('.navbar').find(`[href="#${id}"]`).addClass('active');
            }

        });

    });

});