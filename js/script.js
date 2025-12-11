// ===== VARIABLES GLOBALES =====
let currentPage = 'home';

console.log('🚀 Début du chargement du script...');

// ===== FONCTIONS PRINCIPALES =====

// Navigation entre les pages
function showPage(pageName) {
    console.log('📄 showPage() appelée avec:', pageName);
    
    // Cacher toutes les pages
    const allPages = document.querySelectorAll('.page');
    allPages.forEach(function(page) {
        page.classList.remove('active');
    });
    
    // Afficher la page demandée
    const selectedPage = document.getElementById(pageName + '-page');
    if (selectedPage) {
        selectedPage.classList.add('active');
        currentPage = pageName;
        console.log('✅ Page affichée:', pageName);
    } else {
        console.error('❌ Page non trouvée:', pageName + '-page');
    }
    
    // Mettre à jour les boutons de navigation
    updateNavButtons(pageName);
    
    // Scroller en haut
    window.scrollTo({ top: 0, behavior: 'smooth' });
    
    // Fermer le menu mobile si ouvert
    const mobileMenu = document.getElementById('mobile-menu');
    if (mobileMenu && !mobileMenu.classList.contains('hidden')) {
        toggleMobileMenu();
    }
    
    // Réinitialiser les animations
    setTimeout(function() {
        initScrollAnimations();
        checkScrollAnimations();
    }, 100);
}

// Mise à jour des boutons de navigation
function updateNavButtons(activePage) {
    // Boutons desktop
    const navButtons = document.querySelectorAll('.nav-btn');
    navButtons.forEach(function(btn) {
        if (btn.dataset.page === activePage) {
            btn.classList.add('active');
        } else {
            btn.classList.remove('active');
        }
    });
    
    // Boutons mobile
    const mobileButtons = document.querySelectorAll('.mobile-nav-btn');
    mobileButtons.forEach(function(btn) {
        if (btn.dataset.page === activePage) {
            btn.classList.add('active');
        } else {
            btn.classList.remove('active');
        }
    });
}

// Menu mobile
function toggleMobileMenu() {
    console.log('📱 toggleMobileMenu() appelée');
    const mobileMenu = document.getElementById('mobile-menu');
    const menuIcon = document.querySelector('.menu-icon');
    const closeIcon = document.querySelector('.close-icon');
    
    if (!mobileMenu) {
        console.error('❌ Mobile menu non trouvé');
        return;
    }
    
    if (mobileMenu.classList.contains('hidden')) {
        // Ouvrir le menu
        mobileMenu.classList.remove('hidden');
        if (menuIcon) menuIcon.classList.add('hidden');
        if (closeIcon) closeIcon.classList.remove('hidden');
        console.log('✅ Menu ouvert');
    } else {
        // Fermer le menu
        mobileMenu.classList.add('hidden');
        if (menuIcon) menuIcon.classList.remove('hidden');
        if (closeIcon) closeIcon.classList.add('hidden');
        console.log('✅ Menu fermé');
    }
}

// Scroll vers contact
function scrollToContact() {
    console.log('📧 scrollToContact() appelée');
    const contactSection = document.getElementById('contact-section');
    if (contactSection) {
        const offsetTop = contactSection.offsetTop - 100;
        window.scrollTo({ top: offsetTop, behavior: 'smooth' });
        console.log('✅ Scroll vers contact');
    } else {
        console.error('❌ Section contact non trouvée');
    }
}

// Scroll vers section
function scrollToSection(sectionId) {
    console.log('📍 scrollToSection() appelée avec:', sectionId);
    const section = document.getElementById(sectionId);
    if (section) {
        const offsetTop = section.offsetTop - 100;
        window.scrollTo({ top: offsetTop, behavior: 'smooth' });
        console.log('✅ Scroll vers:', sectionId);
    } else {
        console.error('❌ Section non trouvée:', sectionId);
    }
}

// Effet de scroll sur la navbar
function handleScroll() {
    const navbar = document.getElementById('navbar');
    if (!navbar) return;
    
    if (window.scrollY > 50) {
        navbar.classList.add('scrolled');
    } else {
        navbar.classList.remove('scrolled');
    }
    
    checkScrollAnimations();
}

// Animations au scroll
function initScrollAnimations() {
    const elements = document.querySelectorAll(
        '.service-card, .demo-card, .stat-item, .visual-card, ' +
        '.product-card, .value-item, .process-step, .about-description'
    );
    
    elements.forEach(function(el) {
        if (!el.classList.contains('fade-in') && 
            !el.classList.contains('scale-in') && 
            !el.classList.contains('slide-in-left') && 
            !el.classList.contains('slide-in-right')) {
            el.classList.add('fade-in');
        }
    });
}

function checkScrollAnimations() {
    const animated = document.querySelectorAll('.fade-in, .slide-in-left, .slide-in-right, .scale-in');
    const windowHeight = window.innerHeight;
    
    animated.forEach(function(element) {
        const rect = element.getBoundingClientRect();
        if (rect.top < windowHeight * 0.85) {
            element.classList.add('visible');
        }
    });
}

// ===== EXPORT EXPLICITE DES FONCTIONS =====
console.log('📤 Export des fonctions...');
window.showPage = showPage;
window.toggleMobileMenu = toggleMobileMenu;
window.scrollToContact = scrollToContact;
window.scrollToSection = scrollToSection;
console.log('✅ Fonctions exportées');

// ===== INITIALISATION AU CHARGEMENT =====
document.addEventListener('DOMContentLoaded', function() {
    console.log('📄 DOM chargé, initialisation...');
    
    // Afficher la page d'accueil
    showPage('home');
    
    // Ajouter l'écouteur de scroll
    window.addEventListener('scroll', handleScroll);
    
    // Initialiser les animations
    setTimeout(function() {
        initScrollAnimations();
        checkScrollAnimations();
    }, 200);
    
    console.log('✅ Initialisation terminée !');
    console.log('✅ showPage disponible:', typeof window.showPage);
    console.log('✅ toggleMobileMenu disponible:', typeof window.toggleMobileMenu);
});

console.log('✅ Script chargé et prêt !');