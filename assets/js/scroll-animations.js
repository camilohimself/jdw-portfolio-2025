/**
 * ================================================================
 * ANIMATIONS DE SCROLL FLUIDES - JEAN-DAVID WAEBER PORTFOLIO
 * Fade-up naturel avec Intersection Observer + Performance optimisée
 * ================================================================
 */

class ScrollAnimations {
    constructor() {
        this.observers = new Map();
        this.reducedMotion = window.matchMedia('(prefers-reduced-motion: reduce)').matches;
        this.isInitialized = false;
        
        this.init();
    }
    
    init() {
        if (this.isInitialized || this.reducedMotion) return;
        
        // Attendre que le DOM soit prêt
        if (document.readyState === 'loading') {
            document.addEventListener('DOMContentLoaded', () => this.setupAnimations());
        } else {
            this.setupAnimations();
        }
        
        this.isInitialized = true;
    }
    
    setupAnimations() {
        // Configuration des observers avec différents seuils
        const observerConfigs = {
            fadeUp: {
                threshold: 0.15,
                rootMargin: '0px 0px -50px 0px'
            },
            gallery: {
                threshold: 0.1,
                rootMargin: '0px 0px -20px 0px'
            },
            sections: {
                threshold: 0.1,
                rootMargin: '0px 0px -100px 0px'
            }
        };
        
        // Setup des différents types d'animations
        this.setupFadeUpAnimations(observerConfigs.fadeUp);
        this.setupGalleryAnimations(observerConfigs.gallery);
        this.setupSectionAnimations(observerConfigs.sections);
        
        // Gestion du parallax léger sur les heroes
        this.setupHeroParallax();
        
        // Cleanup au unload pour éviter les fuites mémoire
        window.addEventListener('beforeunload', () => this.cleanup());
    }
    
    setupFadeUpAnimations(config) {
        // Sélection des éléments à animer
        const fadeUpElements = document.querySelectorAll(`
            .section-header,
            .card,
            .bio-content > *,
            .timeline-item,
            .stats-item,
            .ensemble-card,
            .media-item,
            .contact-info,
            .gallery-item,
            p:not(.hero-subtitle),
            h2:not(.hero-title),
            h3,
            h4,
            .btn-group,
            .feature-list li
        `);
        
        if (fadeUpElements.length === 0) return;
        
        // Ajouter la classe fade-up-element
        fadeUpElements.forEach((element, index) => {
            element.classList.add('fade-up-element');
            
            // Stagger effect pour les éléments dans le même container
            const siblings = [...element.parentNode.children].filter(el => 
                el.classList.contains('fade-up-element')
            );
            
            if (siblings.length > 1) {
                element.classList.add('fade-up-stagger');
                element.style.transitionDelay = `${siblings.indexOf(element) * 100}ms`;
            }
        });
        
        // Observer pour fade-up
        const fadeUpObserver = new IntersectionObserver((entries) => {
            entries.forEach(entry => {
                if (entry.isIntersecting) {
                    entry.target.classList.add('in-view');
                    // Une fois animé, on stop d'observer pour la performance
                    fadeUpObserver.unobserve(entry.target);
                }
            });
        }, config);
        
        fadeUpElements.forEach(element => fadeUpObserver.observe(element));
        this.observers.set('fadeUp', fadeUpObserver);
    }
    
    setupGalleryAnimations(config) {
        const galleryItems = document.querySelectorAll('.gallery-item');
        
        if (galleryItems.length === 0) return;
        
        // Lazy loading des images + animation d'entrée
        const galleryObserver = new IntersectionObserver((entries) => {
            entries.forEach(entry => {
                if (entry.isIntersecting) {
                    const item = entry.target;
                    const img = item.querySelector('img');
                    
                    // Lazy loading
                    if (img && img.dataset.src) {
                        img.src = img.dataset.src;
                        img.removeAttribute('data-src');
                    }
                    
                    // Animation d'entrée
                    requestAnimationFrame(() => {
                        item.classList.add('fade-up-element', 'in-view');
                    });
                    
                    galleryObserver.unobserve(item);
                }
            });
        }, config);
        
        galleryItems.forEach(item => {
            item.classList.add('fade-up-element');
            galleryObserver.observe(item);
        });
        
        this.observers.set('gallery', galleryObserver);
    }
    
    setupSectionAnimations(config) {
        const sections = document.querySelectorAll('.section');
        
        if (sections.length === 0) return;
        
        const sectionObserver = new IntersectionObserver((entries) => {
            entries.forEach(entry => {
                if (entry.isIntersecting) {
                    entry.target.classList.add('section-visible');
                    
                    // Animer tous les enfants en stagger
                    const children = entry.target.querySelectorAll('.fade-up-element:not(.in-view)');
                    children.forEach((child, index) => {
                        setTimeout(() => {
                            child.classList.add('in-view');
                        }, index * 100);
                    });
                }
            });
        }, config);
        
        sections.forEach(section => sectionObserver.observe(section));
        this.observers.set('sections', sectionObserver);
    }
    
    setupHeroParallax() {
        const heroElements = document.querySelectorAll('.hero-background, .page-header-background');
        
        if (heroElements.length === 0 || this.reducedMotion) return;
        
        let ticking = false;
        
        const updateParallax = () => {
            const scrollY = window.pageYOffset;
            
            heroElements.forEach(element => {
                if (scrollY < window.innerHeight * 1.2) {
                    // Parallax très léger (0.2 factor)
                    const parallaxValue = scrollY * 0.2;
                    element.style.transform = `translateY(${parallaxValue}px) scale(1.05)`;
                }
            });
            
            ticking = false;
        };
        
        const requestParallax = () => {
            if (!ticking) {
                requestAnimationFrame(updateParallax);
                ticking = true;
            }
        };
        
        // Throttled scroll listener
        window.addEventListener('scroll', requestParallax, { passive: true });
    }
    
    // Méthodes utilitaires
    
    addFadeUpElement(element) {
        if (this.reducedMotion || element.classList.contains('fade-up-element')) return;
        
        element.classList.add('fade-up-element');
        
        const observer = this.observers.get('fadeUp');
        if (observer) {
            observer.observe(element);
        }
    }
    
    triggerAnimation(element) {
        if (this.reducedMotion) return;
        
        element.classList.add('in-view');
    }
    
    cleanup() {
        this.observers.forEach(observer => observer.disconnect());
        this.observers.clear();
    }
}

// Auto-initialize with error handling
document.addEventListener('DOMContentLoaded', () => {
    try {
        window.scrollAnimations = new ScrollAnimations();
    } catch (error) {
        console.warn('Scroll animations initialization failed:', error);
    }
});

// Export pour usage externe si nécessaire
if (typeof module !== 'undefined' && module.exports) {
    module.exports = ScrollAnimations;
}