$(document).ready(function () {
    $('#menu').click(function () {
        $(this).toggleClass('fa-times');
        $('.item').toggleClass('nav-toggle');
    });

    // $('#menu').click(function () {
    //     $(this).toggleClass('fa-times');
    //     $('.navbar').toggleClass('nav-toggle');
    // });

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

let body = document.querySelector("body"),
    lightBox = document.querySelector(".lightBox"),
    img = document.querySelectorAll(".gImg"),
    showImg = lightBox.querySelector(".showImg img"),
    close = lightBox.querySelector(".close");

for (let image of img) {
    image.addEventListener("click", () => {
        showImg.src = image.src;
        lightBox.style.display = "block";
        body.style.overflow = "hidden";
        close.onclick = () => {
            lightBox.style.display = "none";
            body.style.overflow = "visible";
        };
    });
}

const text = document.querySelector(".sec-text");

const textLoad = () => {
    setTimeout(() => {
        text.textContent = "Freelancer";
    }, 0);
    setTimeout(() => {
        text.textContent = "Blogger";
    }, 4000);
    setTimeout(() => {
        text.textContent = "YouTuber";
    }, 8000); //1s = 1000 milliseconds
}

textLoad();
setInterval(textLoad, 12000);