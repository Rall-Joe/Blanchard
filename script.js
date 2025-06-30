document.addEventListener('DOMContentLoaded', () => {
    // Exemple simple : gestion d'un menu de navigation mobile (si vous en implémentez un)
    const navToggle = document.querySelector('.nav-toggle'); // Vous devrez ajouter ce bouton dans votre HTML
    const navMenu = document.querySelector('header nav ul');

    if (navToggle && navMenu) {
        navToggle.addEventListener('click', () => {
            navMenu.classList.toggle('active');
        });
    }

    // Autres scripts JavaScript ici, par exemple pour des carrousels, des effets d'animation, etc.
});

//Pour dectecter les liens active dans la nav: Acueil, A propose, etc..

document.addEventListener('DOMContentLoaded', () => {
    // --- GESTION DU LIEN DE NAVIGATION ACTIF ---
    const currentPath = window.location.pathname; // Récupère le chemin de l'URL actuelle (ex: "/about.html")
    const navLinks = document.querySelectorAll('header nav ul li a'); // Sélectionne tous les liens de navigation

    navLinks.forEach(link => {
        // Obtenir le chemin du lien (ex: "index.html", "about.html")
        // On prend le dernier segment de l'URL (par exemple, "index.html" à partir de "http://monsite.com/index.html")
        const linkPath = link.getAttribute('href').split('/').pop();

        // Si le chemin actuel de la page correspond au chemin du lien, ajoute la classe 'active'
        // Cas particulier pour la page d'accueil si elle est à la racine ("/")
        if (currentPath.includes(linkPath) && linkPath !== '') {
            link.classList.add('active');
        } else if (currentPath === '/' || currentPath === '/index.html' && linkPath === 'index.html') {
            // Gérer le cas où l'URL est juste la racine "/" ou "/index.html"
            if (linkPath === 'index.html') {
                link.classList.add('active');
            }
        }
    });

    // --- AUTRES SCRIPTS EXISTANTS (si tu as déjà un menu mobile, par exemple) ---
    const navToggle = document.querySelector('.nav-toggle');
    const navMenu = document.querySelector('header nav ul');

    if (navToggle && navMenu) {
        navToggle.addEventListener('click', () => {
            navMenu.classList.toggle('active');
        });
    }
});