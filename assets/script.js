/**
 * 3ASY Landing Page - JavaScript
 * Funzionalità aggiuntive per migliorare l'esperienza utente
 */

(function() {
    'use strict';

    // Inizializza quando il DOM è caricato
    document.addEventListener('DOMContentLoaded', function() {
        
        // Smooth scrolling per link interni
        initSmoothScrolling();
        
        // Animazioni in scroll
        initScrollAnimations();
        
        // Lazy loading delle immagini
        initLazyLoading();
        
        // Analytics eventi (se configurato)
        initAnalyticsTracking();
        
        console.log('3ASY Landing Page initialized');
    });

    /**
     * Smooth scrolling per i link che iniziano con #
     */
    function initSmoothScrolling() {
        const links = document.querySelectorAll('a[href^="#"]');
        
        links.forEach(function(link) {
            link.addEventListener('click', function(e) {
                e.preventDefault();
                
                const targetId = this.getAttribute('href').substring(1);
                const targetElement = document.getElementById(targetId);
                
                if (targetElement) {
                    const offsetTop = targetElement.offsetTop - 70; // Account for fixed header
                    
                    window.scrollTo({
                        top: offsetTop,
                        behavior: 'smooth'
                    });
                }
            });
        });
    }

    /**
     * Animazioni quando gli elementi entrano nel viewport
     */
    function initScrollAnimations() {
        // Intersection Observer per animazioni
        if ('IntersectionObserver' in window) {
            const observer = new IntersectionObserver(function(entries) {
                entries.forEach(function(entry) {
                    if (entry.isIntersecting) {
                        entry.target.classList.add('fade-in');
                        observer.unobserve(entry.target);
                    }
                });
            }, {
                threshold: 0.1,
                rootMargin: '0px 0px -50px 0px'
            });

            // Osserva elementi con classe animate-on-scroll
            const elements = document.querySelectorAll('.animate-on-scroll');
            elements.forEach(function(el) {
                observer.observe(el);
            });
        }
    }

    /**
     * Lazy loading per le immagini
     */
    function initLazyLoading() {
        if ('IntersectionObserver' in window) {
            const imageObserver = new IntersectionObserver(function(entries) {
                entries.forEach(function(entry) {
                    if (entry.isIntersecting) {
                        const img = entry.target;
                        img.src = img.dataset.src;
                        img.classList.remove('lazy');
                        imageObserver.unobserve(img);
                    }
                });
            });

            const lazyImages = document.querySelectorAll('img[data-src]');
            lazyImages.forEach(function(img) {
                imageObserver.observe(img);
            });
        }
    }

    /**
     * Analytics tracking per eventi importanti
     */
    function initAnalyticsTracking() {
        // Tracking click sui CTA buttons
        const ctaButtons = document.querySelectorAll('.cta-button');
        ctaButtons.forEach(function(button) {
            button.addEventListener('click', function() {
                // Google Analytics 4
                if (typeof gtag !== 'undefined') {
                    gtag('event', 'click', {
                        event_category: 'CTA',
                        event_label: this.textContent.trim(),
                        value: 1
                    });
                }
                
                console.log('CTA clicked:', this.textContent.trim());
            });
        });

        // Tracking form submissions (se presenti)
        const forms = document.querySelectorAll('form');
        forms.forEach(function(form) {
            form.addEventListener('submit', function() {
                if (typeof gtag !== 'undefined') {
                    gtag('event', 'form_submit', {
                        event_category: 'Contact',
                        event_label: 'Landing Page Form',
                        value: 1
                    });
                }
            });
        });

        // Tracking scroll depth
        let scrollDepthTracked = [];
        window.addEventListener('scroll', function() {
            const scrollPercent = Math.round(
                (window.scrollY / (document.body.scrollHeight - window.innerHeight)) * 100
            );
            
            [25, 50, 75, 100].forEach(function(milestone) {
                if (scrollPercent >= milestone && !scrollDepthTracked.includes(milestone)) {
                    scrollDepthTracked.push(milestone);
                    
                    if (typeof gtag !== 'undefined') {
                        gtag('event', 'scroll', {
                            event_category: 'Scroll Depth',
                            event_label: milestone + '%',
                            value: milestone
                        });
                    }
                }
            });
        });
    }

    /**
     * Utility: Throttle function per performance
     */
    function throttle(func, limit) {
        let inThrottle;
        return function() {
            const args = arguments;
            const context = this;
            if (!inThrottle) {
                func.apply(context, args);
                inThrottle = true;
                setTimeout(() => inThrottle = false, limit);
            }
        }
    }

    /**
     * Utility: Debounce function per performance
     */
    function debounce(func, delay) {
        let timeoutId;
        return function() {
            const context = this;
            const args = arguments;
            clearTimeout(timeoutId);
            timeoutId = setTimeout(() => func.apply(context, args), delay);
        }
    }

    // Export utilities globalmente se necessario
    window.ThreeAsyUtils = {
        throttle: throttle,
        debounce: debounce
    };

})();