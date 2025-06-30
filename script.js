document.addEventListener('DOMContentLoaded', () => {
    // --- GESTION DU LIEN DE NAVIGATION ACTIF ---
    // Sélectionne tous les liens de navigation dans l'en-tête
    const navLinks = document.querySelectorAll('header nav ul li a');
    // Récupère le chemin de l'URL actuelle du navigateur (ex: "/about.html")
    const currentPath = window.location.pathname;

    navLinks.forEach(link => {
        // Extrait le nom du fichier du lien (ex: "index.html" de "http://monsite.com/index.html")
        const linkPath = link.getAttribute('href').split('/').pop();

        // Vérifie si le chemin actuel de la page contient le chemin du lien
        // et que le chemin du lien n'est pas vide (pour éviter les problèmes avec les liens vides)
        if (currentPath.includes(linkPath) && linkPath !== '') {
            link.classList.add('active');
        }
        // Gère le cas spécifique de la page d'accueil dont l'URL peut être "/" ou "/index.html"
        else if ((currentPath === '/' || currentPath === '/index.html' || currentPath.endsWith('/')) && linkPath === 'index.html') {
            link.classList.add('active');
        }
    });

    // --- GESTION DU MENU BURGER MOBILE ---
    // Sélectionne le bouton du menu burger
    const navToggle = document.querySelector('.nav-toggle');
    // Sélectionne la liste de liens de navigation
    const navMenu = document.querySelector('header nav ul');

    // Vérifie si les éléments existent avant d'ajouter les écouteurs d'événements
    if (navToggle && navMenu) {
        // Quand le bouton burger est cliqué
        navToggle.addEventListener('click', () => {
            // Bascule la classe 'active' sur la liste de liens (pour l'afficher/la cacher)
            navMenu.classList.toggle('active');
            // Bascule la classe 'active' sur le bouton burger (pour l'animation en croix)
            navToggle.classList.toggle('active');
        });

        // Fermer le menu si un lien est cliqué (particulièrement utile sur mobile)
        navLinks.forEach(link => {
            link.addEventListener('click', () => {
                // Si le menu est ouvert (contient la classe 'active')
                if (navMenu.classList.contains('active')) {
                    // Retire la classe 'active' pour fermer le menu
                    navMenu.classList.remove('active');
                    // Retire la classe 'active' du bouton pour rétablir l'icône burger
                    navToggle.classList.remove('active');
                }
            });
        });
    }
});