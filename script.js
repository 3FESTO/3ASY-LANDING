/**
 * 3ASYAPPS Elegant 3D Effects
 * 
 * Subtle yet sophisticated 3D interactions that showcase our expertise
 * Built by 3Festo - 3D Future Experience
 * 
 * Philosophy: Elegance through precision, impact through subtlety
 */

class Elegant3D {
    constructor() {
        this.mouse = { x: 0, y: 0 };
        this.isInitialized = false;
        this.init();
    }
    
    init() {
        if (this.isInitialized) return;
        
        this.setupSubtleCardEffects();
        this.setupMouseTracking();
        this.setupFloatingGeometry();
        this.setupScrollEffects();
        this.setupLogoEnhancement();
        
        this.isInitialized = true;
        console.log('✨ 3ASYAPPS Elegant 3D - Precision in motion');
    }
    
    setupSubtleCardEffects() {
        const cards = document.querySelectorAll('.app-card');
        
        cards.forEach((card, index) => {
            // Stabilize with proper CSS
            card.style.transformStyle = 'preserve-3d';
            card.style.willChange = 'transform';
            card.style.backfaceVisibility = 'hidden';
            
            let isHovering = false;
            
            // Sophisticated hover effect - STABLE
            card.addEventListener('mouseenter', () => {
                isHovering = true;
                card.style.transition = 'all 0.5s cubic-bezier(0.23, 1, 0.320, 1)';
                card.style.transform = 'perspective(1200px) translateZ(20px) scale(1.03)';
                card.style.boxShadow = '0 20px 60px rgba(11, 178, 74, 0.2), 0 8px 25px rgba(0, 0, 0, 0.12)';
            });
            
            card.addEventListener('mousemove', (e) => {
                if (!isHovering) return;
                
                const rect = card.getBoundingClientRect();
                const x = (e.clientX - rect.left) / rect.width;
                const y = (e.clientY - rect.top) / rect.height;
                
                const rotateY = (x - 0.5) * 10;
                const rotateX = (0.5 - y) * 10;
                
                card.style.transition = 'none';
                card.style.transform = `
                    perspective(1200px) 
                    rotateX(${rotateX}deg) 
                    rotateY(${rotateY}deg) 
                    translateZ(20px) 
                    scale(1.03)
                `;
            });
            
            card.addEventListener('mouseleave', () => {
                isHovering = false;
                card.style.transition = 'all 0.5s cubic-bezier(0.23, 1, 0.320, 1)';
                card.style.transform = 'perspective(1200px) rotateX(0) rotateY(0) translateZ(0) scale(1)';
                card.style.boxShadow = '0 4px 20px rgba(0, 0, 0, 0.08)';
            });
        });
    }
    
    setupMouseTracking() {
        let ticking = false;
        
        const updateMouse = (e) => {
            this.mouse.x = (e.clientX / window.innerWidth) * 2 - 1;
            this.mouse.y = -((e.clientY / window.innerHeight) * 2 - 1);
            
            if (!ticking) {
                requestAnimationFrame(() => {
                    this.updateGlobalEffects();
                    ticking = false;
                });
                ticking = true;
            }
        };
        
        window.addEventListener('mousemove', updateMouse, { passive: true });
    }
    
    updateGlobalEffects() {
        // REMOVED - too unstable
        // Keep it simple and stable
    }
    
    setupFloatingGeometry() {
        // Simplified stable geometric shapes
        const shapes = [
            { char: '◆', size: 30, color: 'rgba(11, 178, 74, 0.08)' },
            { char: '▲', size: 25, color: 'rgba(11, 178, 74, 0.06)' },
            { char: '●', size: 20, color: 'rgba(11, 178, 74, 0.05)' }
        ];
        
        const container = document.querySelector('.container');
        
        shapes.forEach((shapeData, i) => {
            const shape = document.createElement('div');
            shape.className = 'floating-shape';
            shape.textContent = shapeData.char;
            
            shape.style.cssText = `
                position: fixed;
                font-size: ${shapeData.size}px;
                color: ${shapeData.color};
                pointer-events: none;
                z-index: 0;
                left: ${20 + i * 30}%;
                top: ${15 + i * 25}%;
                animation: simpleFloat ${12 + i * 4}s infinite ease-in-out;
                will-change: transform;
            `;
        });
        
        // Single stable animation
        const style = document.createElement('style');
        style.textContent = `
            @keyframes simpleFloat {
                0%, 100% { 
                    transform: translateY(0px) rotate(0deg);
                    opacity: 0.4;
                }
                50% { 
                    transform: translateY(-30px) rotate(180deg);
                    opacity: 0.8;
                }
            }
        `;
        document.head.appendChild(style);
    }
    
    setupScrollEffects() {
        // Minimal stable scroll effects
        const cards = document.querySelectorAll('.app-card');
        
        const observer = new IntersectionObserver((entries) => {
            entries.forEach(entry => {
                if (entry.isIntersecting) {
                    entry.target.style.opacity = '1';
                    entry.target.style.transform = 'translateY(0)';
                }
            });
        }, { threshold: 0.1 });
        
        cards.forEach(card => {
            card.style.opacity = '0';
            card.style.transform = 'translateY(20px)';
            card.style.transition = 'opacity 0.6s ease, transform 0.6s ease';
            observer.observe(card);
        });
    }
    
    setupLogoEnhancement() {
        const logo = document.querySelector('header img');
        if (!logo) return;
        
        logo.style.transition = 'all 0.4s cubic-bezier(0.23, 1, 0.320, 1)';
        
        logo.addEventListener('mouseenter', () => {
            logo.style.transform = 'scale(1.08) rotate(5deg)';
            logo.style.filter = 'drop-shadow(0 8px 16px rgba(11, 178, 74, 0.25))';
        });
        
        logo.addEventListener('mouseleave', () => {
            logo.style.transform = 'scale(1) rotate(0deg)';
            logo.style.filter = 'none';
        });
    }
    
}

// Initialize when DOM is loaded
document.addEventListener('DOMContentLoaded', () => {
    // Initialize elegant 3D effects
    window.elegant3D = new Elegant3D();
    
    // Language toggle functionality
    window.toggleLanguage = function() {
        const elements = document.querySelectorAll('[data-en]');
        const button = document.querySelector('.language-toggle');
        
        elements.forEach(element => {
            if (element.style.display === 'none') {
                element.textContent = element.getAttribute('data-en');
                element.style.display = '';
                const itElement = element.nextElementSibling || element.previousElementSibling;
                if (itElement && itElement.hasAttribute('data-it')) {
                    itElement.style.display = 'none';
                }
            } else {
                element.textContent = element.getAttribute('data-it');
                element.style.display = '';
                const enElement = element.nextElementSibling || element.previousElementSibling;
                if (enElement && enElement.hasAttribute('data-en')) {
                    enElement.style.display = 'none';
                }
            }
        });
        
        // Update button text
        button.textContent = button.textContent === 'EN' ? 'IT' : 'EN';
    };
    
    // Performance monitoring
    let frameCount = 0;
    let lastTime = performance.now();
    
    const monitorPerformance = () => {
        frameCount++;
        const currentTime = performance.now();
        
        if (currentTime - lastTime >= 2000) {
            const fps = Math.round((frameCount * 1000) / (currentTime - lastTime));
            
            if (fps < 45) {
                // Reduce animations for better performance
                document.querySelectorAll('.floating-shape').forEach((shape, index) => {
                    if (index > 5) shape.style.display = 'none';
                });
                console.log('🔧 Optimized for performance');
            }
            
            frameCount = 0;
            lastTime = currentTime;
        }
        
        requestAnimationFrame(monitorPerformance);
    };
    
    monitorPerformance();
    
    console.log('✨ 3ASYAPPS - Where elegance meets innovation');
});