// Main JavaScript functionality for Nemo's Raft

class NemosRaft {
    constructor() {
        this.init();
    }

    init() {
        this.setupEventListeners();
        this.setupScrollEffects();
        this.setupAnimations();
        this.setupAccordions();
        this.updateCurrentYear();
        this.setupMobileMenu();
        this.setupSpecialWafflesReveal();
        this.initAmbienceGallery();
    }

    setupEventListeners() {
        // Smooth scroll for navigation links
        document.querySelectorAll('a[href^="#"]').forEach(anchor => {
            anchor.addEventListener('click', (e) => {
                e.preventDefault();
                const target = document.querySelector(anchor.getAttribute('href'));
                if (target) {
                    const headerHeight = 80;
                    const offsetTop = target.offsetTop - headerHeight;
                    window.scrollTo({
                        top: offsetTop,
                        behavior: 'smooth'
                    });
                    
                    // Close mobile menu if open
                    this.closeMobileMenu();
                }
            });
        });

        // Handle scroll for header
        window.addEventListener('scroll', () => {
            this.handleHeaderScroll();
            this.handleParallaxEffects();
        });

        // Handle resize for responsive adjustments
        window.addEventListener('resize', () => {
            this.handleResize();
        });
    }

    setupScrollEffects() {
        // Intersection Observer for fade-in animations
        const observerOptions = {
            threshold: 0.1,
            rootMargin: '0px 0px -50px 0px'
        };

        const observer = new IntersectionObserver((entries) => {
            entries.forEach(entry => {
                if (entry.isIntersecting) {
                    entry.target.classList.add('fade-in');
                }
            });
        }, observerOptions);

        // Observe sections for animations
        document.querySelectorAll('section').forEach(section => {
            observer.observe(section);
        });

        // Special animations for waffle types
        const waffleObserver = new IntersectionObserver((entries) => {
            entries.forEach(entry => {
                if (entry.isIntersecting) {
                    const sweetWaffle = entry.target.querySelector('.waffle-type.sweet');
                    const savoryWaffle = entry.target.querySelector('.waffle-type.savory');
                    
                    if (sweetWaffle && savoryWaffle) {
                        setTimeout(() => {
                            sweetWaffle.classList.add('slide-in-left');
                        }, 100);
                        setTimeout(() => {
                            savoryWaffle.classList.add('slide-in-right');
                        }, 250);
                    }
                }
            });
        }, observerOptions);

        const waffleSection = document.querySelector('#waffle-types');
        if (waffleSection) {
            waffleObserver.observe(waffleSection);
        }
    }

    setupAnimations() {
        // Hero animations on load
        window.addEventListener('load', () => {
            setTimeout(() => {
                const heroText = document.querySelector('.hero-text');
                if (heroText) {
                    heroText.classList.add('fade-in');
                }
            }, 200);

            setTimeout(() => {
                const waffleCard = document.querySelector('.waffle-card');
                if (waffleCard) {
                    waffleCard.classList.add('fade-in');
                }
            }, 600);
        });
    }

    setupAccordions() {
        // Menu accordion
        const menuAccordion = document.querySelector('.menu-accordion');
        if (menuAccordion) {
            this.setupAccordionGroup(menuAccordion, true); // Single open
        }

        // FAQ accordion
        const faqAccordion = document.querySelector('.faq-accordion');
        if (faqAccordion) {
            this.setupAccordionGroup(faqAccordion, true); // Single open
        }
    }

    setupAccordionGroup(container, singleOpen = false) {
        const items = container.querySelectorAll('.accordion-item, .faq-item');
        
        items.forEach(item => {
            const header = item.querySelector('.accordion-header, .faq-question');
            if (!header) return;

            header.addEventListener('click', () => {
                const isActive = item.classList.contains('active');

                // If single open mode, close all others
                if (singleOpen && !isActive) {
                    items.forEach(otherItem => {
                        otherItem.classList.remove('active');
                    });
                }

                // Toggle current item
                item.classList.toggle('active');

            });
        });
    }

    setupMobileMenu() {
        const toggle = document.getElementById('mobileMenuToggle');
        const menu = document.getElementById('mobileMenu');

        if (!toggle || !menu) return;

        toggle.addEventListener('click', () => {
            menu.classList.toggle('show');
            toggle.classList.toggle('active');

            // Add animation to hamburger icon
            const spans = toggle.querySelectorAll('span');
            spans.forEach((span, index) => {
                if (toggle.classList.contains('active')) {
                    if (index === 0) span.style.transform = 'rotate(45deg) translate(5px, 5px)';
                    if (index === 1) span.style.opacity = '0';
                    if (index === 2) span.style.transform = 'rotate(-45deg) translate(7px, -6px)';
                } else {
                    span.style.transform = 'none';
                    span.style.opacity = '1';
                }
            });
        });

        // Close menu when clicking outside
        document.addEventListener('click', (e) => {
            if (!toggle.contains(e.target) && !menu.contains(e.target)) {
                this.closeMobileMenu();
            }
        });
    }

    closeMobileMenu() {
        const toggle = document.getElementById('mobileMenuToggle');
        const menu = document.getElementById('mobileMenu');
        
        if (menu && toggle) {
            menu.classList.remove('show');
            toggle.classList.remove('active');
            
            const spans = toggle.querySelectorAll('span');
            spans.forEach(span => {
                span.style.transform = 'none';
                span.style.opacity = '1';
            });
        }
    }

    handleHeaderScroll() {
        const header = document.getElementById('header');
        if (!header) return;

        const scrolled = window.scrollY > 50;
        header.classList.toggle('scrolled', scrolled);
    }

    handleParallaxEffects() {
        const scrollY = window.scrollY;
        
        // Hero video parallax
        const heroVideo = document.querySelector('.hero-bg-video');
        if (heroVideo && scrollY < window.innerHeight) {
            const speed = 0.2;
            heroVideo.style.transform = `translateY(${scrollY * speed}px)`;
        }

        // Drinks background parallax
        const drinksSection = document.querySelector('.drinks-bg');
        if (drinksSection) {
            const rect = drinksSection.getBoundingClientRect();
            if (rect.top < window.innerHeight && rect.bottom > 0) {
                const speed = 0.2;
                const yPos = -(scrollY - drinksSection.offsetTop) * speed;
                drinksSection.style.backgroundPosition = `center ${yPos}px`;
            }
        }
    }

    handleResize() {
        // Update gallery on resize
        const galleryScroll = document.getElementById('galleryScroll');
        if (galleryScroll) {
            const currentSlide = Math.round(galleryScroll.scrollLeft / galleryScroll.clientWidth);
            const newScrollPosition = currentSlide * galleryScroll.clientWidth;
            galleryScroll.scrollLeft = newScrollPosition;
        }
    }

    updateCurrentYear() {
        const yearElement = document.getElementById('currentYear');
        if (yearElement) {
            yearElement.textContent = new Date().getFullYear();
        }
    }

    setupSpecialWafflesReveal() {
        const observerOptions = {
            threshold: 0.3,
            rootMargin: '0px 0px -50px 0px'
        };

        const observer = new IntersectionObserver((entries) => {
            entries.forEach((entry, index) => {
                if (entry.isIntersecting) {
                    setTimeout(() => {
                        entry.target.classList.add('revealed');
                    }, index * 200);
                }
            });
        }, observerOptions);

        const specialCards = document.querySelectorAll('.special-card[data-reveal]');
        specialCards.forEach(card => {
            observer.observe(card);
        });
    }

    initAmbienceGallery() {
        const slides = document.querySelectorAll('.gallery-slide');
        const prevBtn = document.querySelector('.gallery-btn[data-direction="prev"]');
        const nextBtn = document.querySelector('.gallery-btn[data-direction="next"]');
        const dots = document.querySelectorAll('.dot');
        let currentSlide = 0;

        if (!slides.length) return;

        function showSlide(index) {
            slides.forEach(slide => slide.classList.remove('active'));
            dots.forEach(dot => dot.classList.remove('active'));

            slides[index].classList.add('active');
            dots[index].classList.add('active');
            currentSlide = index;
        }

        function nextSlide() {
            const next = (currentSlide + 1) % slides.length;
            showSlide(next);
        }

        function prevSlide() {
            const prev = currentSlide === 0 ? slides.length - 1 : currentSlide - 1;
            showSlide(prev);
        }

        // Navigation buttons
        if (nextBtn) {
            nextBtn.addEventListener('click', nextSlide);
        }
        if (prevBtn) {
            prevBtn.addEventListener('click', prevSlide);
        }

        // Dot navigation
        dots.forEach((dot, index) => {
            dot.addEventListener('click', () => showSlide(index));
        });

        // Auto-advance slides
        setInterval(nextSlide, 5000);

        // Touch/swipe support
        let startX = 0;
        let endX = 0;

        const gallery = document.querySelector('.gallery-container');
        if (gallery) {
            gallery.addEventListener('touchstart', (e) => {
                startX = e.touches[0].clientX;
            });

            gallery.addEventListener('touchend', (e) => {
                endX = e.changedTouches[0].clientX;
                const diff = startX - endX;

                if (Math.abs(diff) > 50) {
                    if (diff > 0) {
                        nextSlide();
                    } else {
                        prevSlide();
                    }
                }
            });
        }
    }
}

// Initialize the application
document.addEventListener('DOMContentLoaded', () => {
    new NemosRaft();
});

// Handle prefers-reduced-motion
if (window.matchMedia('(prefers-reduced-motion: reduce)').matches) {
    document.documentElement.style.scrollBehavior = 'auto';
}

// Error handling for images
document.addEventListener('DOMContentLoaded', () => {
    const images = document.querySelectorAll('img');
    images.forEach(img => {
        img.addEventListener('error', function() {
            // Fallback for broken images
            this.style.opacity = '0.3';
            this.alt = 'Image unavailable';
        });
    });
});

// Lazy loading for images (if needed)
if ('IntersectionObserver' in window) {
    const imageObserver = new IntersectionObserver((entries, observer) => {
        entries.forEach(entry => {
            if (entry.isIntersecting) {
                const img = entry.target;
                img.src = img.dataset.src || img.src;
                img.classList.remove('lazy');
                observer.unobserve(img);
            }
        });
    });

    document.querySelectorAll('img[data-src]').forEach(img => {
        imageObserver.observe(img);
    });
}