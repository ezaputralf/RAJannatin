$(document).ready(function(){
    $("a[href^='#']").on('click', function(event) {
        if (this.hash !== "" && $(this.hash).length) {
            event.preventDefault();
            var hash = this.hash;
            $('html, body').animate({
                scrollTop: $(hash).offset().top
            }, 800, function(){
                window.location.hash = hash;
            });
        }
    });

    $(window).on('scroll', function() {
        var navbar = $('#mainNavbar');
        if ($(window).scrollTop() > 100) {
            navbar.addClass('bg-white');
        } else {
            navbar.removeClass('bg-white');
        }
    });

    $('.navbar-toggler').on('click', function() {
        $('.navbar-collapse').toggleClass('show');
    });

    $('.navbar-nav>li>a').on('click', function(){
        $('.navbar-collapse').removeClass('show');
    });

    window.addEventListener("scroll", function() {
        var navbar = document.querySelector(".navbar");
        if (window.scrollY > 0 && window.innerWidth <= 576) {
            navbar.classList.add("navbar-scrolled");
        } else {
            navbar.classList.remove("navbar-scrolled");
        }
    });
});