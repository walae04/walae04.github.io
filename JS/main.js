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
        h3Element.style.color = "#152db3";
    }
    if (iconElement) {
        iconElement.style.color = "#152db3";
    }
    listItems.forEach(function(li) {
        li.style.color = "#444";
    });
}
function filtrer(categorie) {
    var items = document.querySelectorAll('.skill-item');
    items.forEach(function(item) {
        if (categorie === "all") {
            item.style.display = "block";
        } else if (item.classList.contains(categorie)) {
            item.style.display = "block";
        } else {
            item.style.display = "none";
        }
    });
}   

function ouvrirRapport(url, titre) {
    document.getElementById('rapportIframe').src = url;
    document.getElementById('rapportModalTitre').innerText = titre;
    document.getElementById('rapportModal').style.display = 'flex';
    document.body.style.overflow = 'hidden';
  }
  
  function fermerRapport() {
    document.getElementById('rapportModal').style.display = 'none';
    document.getElementById('rapportIframe').src = '';
    document.body.style.overflow = '';
  }
  
  // Fermer en cliquant sur l'overlay
  document.getElementById('rapportModal').addEventListener('click', function(e) {
    if (e.target === this) fermerRapport();
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
    const projetsData = {
        geoworld: {
          titre: "Geoworld",
          sousTitre: "Application web — Quiz géographique",
          badge: "Jeu interactif",
          img: "img/world-logo.png",
          github: "https://github.com/walae04/geoworld-02042025",
          description: "Geoworld est une application web de quiz géographique interactif qui permet aux utilisateurs de tester et améliorer leurs connaissances sur les pays du monde. L'application propose différents niveaux de difficulté et couvre les capitales, drapeaux et localisations géographiques à travers une interface ludique et intuitive.",
          techs: [
            { nom: "PHP", icon: "fab fa-js-square" },
            { nom: "HTML5", icon: "fab fa-html5" },
            { nom: "CSS3", icon: "fab fa-css3-alt" },
            { nom: "API REST", icon: "fas fa-plug" },
            { nom: "SQL", icon: "fas fa-paint-brush" }
          ],
          fonctionnalites: [
            "Quiz sur les capitales, drapeaux et pays du monde",
            "Système de score et de progression",
            "Différents niveaux de difficulté",
            "Consommation d'une API géographique externe",
            "Interface responsive et animations interactives"
          ]
        },
        moviedb: {
          titre: "MovieDb",
          sousTitre: "Application web — Base de données cinéma",
          badge: "Application web",
          img: "img/movie1.png",
          github: "https://github.com/walae04/projet-ap",
          description: "MovieDb est une application web connectée à l'API TMDB (The Movie Database) permettant aux utilisateurs de rechercher des films, consulter leurs fiches détaillées (synopsis, casting, notes), et gérer une liste de films favoris. Le projet met en avant la consommation d'API REST et la manipulation dynamique du DOM.",
          techs: [
            { nom: "PHP", icon: "fab fa-js-square" },
            { nom: "HTML5", icon: "fab fa-html5" },
            { nom: "CSS3", icon: "fab fa-css3-alt" },
            { nom: "API TMDB", icon: "fas fa-film" },
            { nom: "Fetch API", icon: "fas fa-plug" }
          ],
          fonctionnalites: [
            "Recherche de films en temps réel via l'API TMDB",
            "Affichage des détails : synopsis, acteurs, note moyenne",
            "Système de films favoris (stockage local)",
            "Filtrage par genre, année et popularité",
            "Design responsive adapté mobile et desktop"
          ]
        },
        ecommerce: {
          titre: "E-commerce — Maison Célisandre",
          sousTitre: "Site web — Boutique de fragrances en ligne",
          badge: "E-commerce",
          img: "img/Maison_Célisandre_BlackLogo.png",
          github: "https://github.com/walae04/walae04.github.io",
          description: "Maison Célisandre est un site e-commerce complet développé pour une boutique de parfums. Il intègre un catalogue produits dynamique, un système de panier, une gestion des commandes, ainsi qu'une interface d'administration pour gérer les produits et les stocks. Le projet suit une architecture MVC en PHP avec une base de données MySQL.",
          techs: [
            { nom: "Kotlin", icon: "fab fa-php" },
            { nom: "HTML5", icon: "fab fa-html5" },
            { nom: "CSS3 / Bootstrap", icon: "fab fa-css3-alt" },
            { nom: "Spring Boot", icon: "fas fa-database" },
            { nom: "Architecture MVC", icon: "fas fa-layer-group" }
          ],
          fonctionnalites: [
            "Catalogue produits avec filtres et recherche",
            "Panier d'achat dynamique avec gestion des quantités",
            "Système d'inscription et connexion utilisateur",
            "Interface d'administration (CRUD produits/commandes)",
            
          ]
        },
        savonapp: {
          titre: "Savon-app",
          sousTitre: "Application mobile — Gestion savonnerie",
          badge: "Application mobile",
          img: "img/Logo-Sav-App-02.jpeg",
          github: "https://github.com/walae04/Savon-app",
          description: "Savon-app est une application web développée en Angular pour aider une savonnerie artisanale à gérer ses recettes, ses stocks de matières premières et ses productions. L'application communique avec un back-end Spring Boot via une API REST. Elle vise à digitaliser et simplifier le suivi de production.",
          techs: [
            { nom: "Angular", icon: "fas fa-mobile-alt" },
            { nom: "Spring Boot", icon: "fas fa-leaf" },
            { nom: "API REST", icon: "fas fa-plug" },
            { nom: "Architecture MVC", icon: "fas fa-layer-group" }
          ],
          fonctionnalites: [
            "Gestion des recettes de savons (ingrédients, dosages)",
            "Suivi des stocks de matières premières",
            "Enregistrement et historique des productions",
            "Connexion avec un back-end Spring Boot via API REST",
          ]
        }
      };
       
      function ouvrirProjet(id) {
        const p = projetsData[id];
        if (!p) return;
       
        document.getElementById('projetModalBadge').innerText = p.badge;
        document.getElementById('projetModalTitre').innerText = p.titre;
        document.getElementById('projetModalSousTitre').innerText = p.sousTitre;
        document.getElementById('projetModalImg').src = p.img;
        document.getElementById('projetModalImg').alt = p.titre;
        document.getElementById('projetModalDesc').innerText = p.description;
        document.getElementById('projetModalGithub').href = p.github;
       
        // Technologies
        const techContainer = document.getElementById('projetModalTechs');
        techContainer.innerHTML = '';
        p.techs.forEach(t => {
          techContainer.innerHTML += `<span class="modal-tech-item"><i class="${t.icon}"></i> ${t.nom}</span>`;
        });
       
        // Fonctionnalités
        const foncList = document.getElementById('projetModalFonc');
        foncList.innerHTML = '';
        p.fonctionnalites.forEach(f => {
          foncList.innerHTML += `<li>${f}</li>`;
        });
       
        document.getElementById('projetModalBackdrop').style.display = 'block';
        document.getElementById('projetModal').style.display = 'block';
        document.body.style.overflow = 'hidden';
      }
       
      function fermerProjet() {
        document.getElementById('projetModalBackdrop').style.display = 'none';
        document.getElementById('projetModal').style.display = 'none';
        document.body.style.overflow = '';
      }
       
      // Fermer avec Echap
      document.addEventListener('keydown', function(e) {
        if (e.key === 'Escape') fermerProjet();
      });
// contact form
document.getElementById('contactForm').addEventListener('submit', function(event) {
    setTimeout(() => {
        alert('Message envoyé !');
        this.reset();
    }, 100); // léger délai pour que l'envoi se fasse
});


