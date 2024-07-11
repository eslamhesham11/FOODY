$(document).ready(function () {
    $('.nav-link').click(function () {
        $('.nav-link').removeClass('active');
        $(this).addClass('active');
    });

    var counter = 0;
    var quantity1 = $(".quantity1").val();
    var quantity2 = $(".quantity2").val();
    $(".btn-order").click(function () {
        counter++;
        $(".counter").text(counter);
    });
    $(".increase-quantity1").click(function () {
        quantity1++;
        $(".quantity1").text(quantity1);
    });
    $(".decrease-quantity1").click(function () {

        quantity1--;
        $(".quantity1").text(quantity1);
    });
    $(".increase-quantity2").click(function () {
        quantity2++;
        $(".quantity2").text(quantity2);
    });
    $(".decrease-quantity2").click(function () {
        quantity2--;
        $(".quantity2").text(quantity2);
    });

    $(".icon").click(function () {
        $(this).toggleClass("far fa-heart fas fa-heart");
    });

    $(".reg").click(function () {
        var password = $(".pass").val();
        var confirmPassword = $("confirm-pass")
        var minLength = 8;
        if (password.length >= minLength) {
            $(".password-message").text("")
        } else {
            $(".password-message").text("your password must be greater than 8 caharactar");
            $(".register-form").submit(function (event) {
                event.preventDefault();
            });
        }
        if (password === confirmPassword) {
            $(".password-message").text("")
        } else {
            $(".message").text("not correct");
        }
    })

    $('.slick-slider').slick({
        dots: false,
        infinite: true,
        speed: 300,
        slidesToShow: 4,
        slidesToScroll: 4,
        autoplay: true,
        autoplaySpeed: 2000,
        responsive: [
            {
                breakpoint: 1400,
                settings: {
                    slidesToShow: 3,
                    slidesToScroll: 3,
                    infinite: true,
                    dots: false
                }
            },
            {
                breakpoint: 1024,
                settings: {
                    slidesToShow: 2,
                    slidesToScroll: 2,
                    infinite: true,
                    dots: false
                }
            },
            {
                breakpoint: 767,
                settings: {
                    slidesToShow: 1,
                    slidesToScroll: 1
                }
            }
        ]
    });


    $(window).scroll(function () {
        if ($(this).scrollTop() > 100) {
            $("#scrollButton").fadeIn();
        } else {
            $("#scrollButton").fadeOut();
        }
    });

    $('.login-btn').click(function () {
        $('.login-form').addClass('active');
        $('.register-form').removeClass('active');
        $('.login-btn').addClass('d-none')
        $('.register-btn').removeClass('d-none')
    });

    $('.register-btn').click(function () {
        $('.register-form').addClass('active');
        $('.login-form').removeClass('active');
        $('.register-btn').addClass('d-none')
        $('.login-btn').removeClass('d-none')
    });
    $("#burgerButton").click(function () {
        $("#burgerDiv").removeClass("d-none");
        $("#pizzaDiv").addClass("d-none");
        $("#saladDiv").addClass("d-none");
        $("#drinksDiv").addClass("d-none");
        $("#dessertDiv").addClass("d-none");

    });

    $("#pizzaButton").click(function () {
        $("#burgerDiv").addClass("d-none");
        $("#pizzaDiv").removeClass("d-none");
        $("#saladDiv").addClass("d-none");
        $("#drinksDiv").addClass("d-none");
        $("#dessertDiv").addClass("d-none");
    });
    $("#saladButton").click(function () {
        $("#burgerDiv").addClass("d-none");
        $("#pizzaDiv").addClass("d-none");
        $("#saladDiv").removeClass("d-none");
        $("#drinksDiv").addClass("d-none");
        $("#dessertDiv").addClass("d-none");
    });
    $("#drinksButton").click(function () {
        $("#burgerDiv").addClass("d-none");
        $("#pizzaDiv").addClass("d-none");
        $("#saladDiv").addClass("d-none");
        $("#drinksDiv").removeClass("d-none");
        $("#dessertDiv").addClass("d-none");
    });
    $("#dessertButton").click(function () {
        $("#burgerDiv").addClass("d-none");
        $("#pizzaDiv").addClass("d-none");
        $("#saladDiv").addClass("d-none");
        $("#drinksDiv").addClass("d-none");
        $("#dessertDiv").removeClass("d-none");
    });

    $("#scrollButton").click(function () {
        $("html, body").animate({ scrollTop: 0 }, 500);
        return false;
    });



    $('.slick-center').slick({
        dots: true,
        slidesToShow: 1,
        slidesToScroll: 1,
        autoplay: true,
        autoplaySpeed: 2000,
    });

    var currentYear = new Date().getFullYear();
    $(".current-year").text(currentYear);
});








