(function ($) {
    "use strict";
    
    // loader
    var loader = function () {
        setTimeout(function () {
            if ($('#loader').length > 0) {
                $('#loader').removeClass('show');
            }
        }, 1);
    };
    loader();
    
    
    // Initiate the wowjs
    new WOW().init();
    
    
    // Back to top button
    $(window).scroll(function () {
        if ($(this).scrollTop() > 200) {
            $('.back-to-top').fadeIn('slow');
        } else {
            $('.back-to-top').fadeOut('slow');
        }
    });
    $('.back-to-top').click(function () {
        $('html, body').animate({scrollTop: 0}, 1500, 'easeInOutExpo');
        return false;
    });
    
    
    // Sticky Navbar
    $(window).scroll(function () {
        if ($(this).scrollTop() > 0) {
            $('.navbar').addClass('nav-sticky');
        } else {
            $('.navbar').removeClass('nav-sticky');
        }
    });
    
    
    // Smooth scrolling on the navbar links
    $(".navbar-nav a").on('click', function (event) {
        if (this.hash !== "") {
            event.preventDefault();
            
            $('html, body').animate({
                scrollTop: $(this.hash).offset().top - 45
            }, 1500, 'easeInOutExpo');
            
            // Remove active class from all nav links
            $('.navbar-nav .nav-link').removeClass('active');
            // Add active class to clicked link
            $(this).addClass('active');
        }
    });
    
    // Update active nav link on scroll
    $(window).scroll(function() {
        var scrollPos = $(document).scrollTop() + 100;
        
        $('.navbar-nav .nav-link').each(function() {
            var currLink = $(this);
            var refElement = $(currLink.attr("href"));
            
            if (refElement.length && refElement.position().top <= scrollPos && refElement.position().top + refElement.height() > scrollPos) {
                $('.navbar-nav .nav-link').removeClass('active');
                currLink.addClass('active');
            }
        });
    });
    
    
    // Typed Initiate
    if ($('.hero .hero-text h2').length == 1) {
        var typed_strings = $('.hero .hero-text .typed-text').text();
        var typed = new Typed('.hero .hero-text h2', {
            strings: typed_strings.split(', '),
            typeSpeed: 100,
            backSpeed: 20,
            smartBackspace: false,
            loop: true
        });
    }
    
 // Skills   
$(document).ready(function() {
    // Déclenche quand la section .skills est visible
    $('.skills').waypoint(function(direction) {
        if(direction === 'down') { // seulement quand on descend
            // cible uniquement les barres à l'intérieur de cette section
            $(this.element).find('.progress-bar').each(function() {
                var val = $(this).attr('aria-valuenow');
                $(this).css('width', val + '%');
            });
            this.destroy(); // pour ne pas répéter l'animation
        }
    }, { offset: '80%' });
});





    // Testimonials carousel
    $(".testimonials-carousel").owlCarousel({
        center: true,
        autoplay: true,
        dots: true,
        loop: true,
        responsive: {
            0:{
                items:1
            }
        }
    });
    
    
    
    // Portfolio filter
    var portfolioIsotope = $('.portfolio-container').isotope({
        itemSelector: '.portfolio-item',
        layoutMode: 'fitRows'
    });

    $('#portfolio-filter li').on('click', function () {
        $("#portfolio-filter li").removeClass('filter-active');
        $(this).addClass('filter-active');
        portfolioIsotope.isotope({filter: $(this).data('filter')});
    });
    
})(jQuery);

// Fonctions pour changer la couleur au survol des compétences
function changerCouleur() {
    // Trouver l'élément survolé et changer la couleur de ses enfants
    var hoveredElement = event.currentTarget;
    var h3Element = hoveredElement.querySelector('h3');
    var iconElement = hoveredElement.querySelector('.icon-skill');
    var listItems = hoveredElement.querySelectorAll('li');
    
    if (h3Element) {
        h3Element.style.color = "white";
    }
    if (iconElement) {
        iconElement.style.color = "white";
    }
    listItems.forEach(function(li) {
        li.style.color = "white";
    });
}

function revenirCouleur() {
    // Revenir à la couleur initiale pour l'élément qui n'est plus survolé
    var hoveredElement = event.currentTarget;
    var h3Element = hoveredElement.querySelector('h3');
    var iconElement = hoveredElement.querySelector('.icon-skill');
    var listItems = hoveredElement.querySelectorAll('li');
    
    if (h3Element) {
        h3Element.style.color = "#a35536";
    }
    if (iconElement) {
        iconElement.style.color = "#a35536";
    }
    listItems.forEach(function(li) {
        li.style.color = "#444";
    });
}
// contact form
document.getElementById('contactForm').addEventListener('submit', function(event) {
    setTimeout(() => {
        alert('Message envoyé !');
        this.reset();
    }, 100); // léger délai pour que l'envoi se fasse
});

