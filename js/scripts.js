// ============================================
// GSAP ANIMATIONS - ADVANCED EFFECTS
// ============================================
$(document).ready(function() {
    
    // Register GSAP plugins (only if GSAP is loaded)
    if (typeof gsap !== 'undefined' && typeof ScrollTrigger !== 'undefined') {
        gsap.registerPlugin(ScrollTrigger);
    }
    
    // ============================================
    // HERO SECTION - SPECIAL ANIMATIONS
    // ============================================
    
    // Check if GSAP is loaded
    if (typeof gsap !== 'undefined') {
        // Set initial state for GSAP animation
        gsap.set('.title-word-1', { 
            opacity: 0, 
            y: 100, 
            scale: 0.8,
            rotationX: -90
        });
        gsap.set('.title-word-2', { 
            opacity: 0, 
            y: 100, 
            scale: 0.8,
            rotationX: -90
        });
        gsap.set('.title-underline', { width: 0, opacity: 0 });
        gsap.set('.title-glow', { scale: 0, opacity: 0 });
        gsap.set('.hero-quote', { opacity: 0, y: 50, scale: 0.95 });
        gsap.set('.hero-description', { opacity: 0, y: 30 });
        gsap.set('.scroll-indicator', { opacity: 0, y: 20 });
        
        const heroTl = gsap.timeline({ defaults: { ease: "power3.out" } });
        
        heroTl
            .to('.title-word-1', {
                duration: 1,
                y: 0,
                opacity: 1,
                scale: 1,
                rotationX: 0,
                transformOrigin: "center bottom"
            })
            .to('.title-word-2', {
                duration: 1,
                y: 0,
                opacity: 1,
                scale: 1,
                rotationX: 0,
                transformOrigin: "center bottom"
            }, "-=0.7")
            .to('.title-glow', {
                duration: 1.5,
                scale: 1,
                opacity: 1,
                ease: "power2.out"
            }, "-=1")
            .to('.title-underline', {
                duration: 1,
                width: "60%",
                opacity: 1
            }, "-=0.5")
            .to('.hero-quote', {
                duration: 1,
                y: 0,
                opacity: 1,
                scale: 1
            }, "-=0.3")
            .to('.hero-description', {
                duration: 0.8,
                y: 0,
                opacity: 1,
                stagger: 0.2
            }, "-=0.5")
            .to('.scroll-indicator', {
                duration: 0.8,
                y: 0,
                opacity: 1
            }, "-=0.3");
    } else {
        // Fallback if GSAP doesn't load
        $('.hero-text').addClass('no-gsap');
        $('.hero-title, .hero-quote, .hero-description, .scroll-indicator').css({
            'opacity': '1',
            'transform': 'translateY(0)'
        });
    }
    
    // Hero title glow animation (only if GSAP loaded)
    if (typeof gsap !== 'undefined') {
        // Title word glow animations
        gsap.to('.title-word-1', {
            textShadow: "0 0 40px rgba(196, 154, 108, 0.8), 0 0 80px rgba(196, 154, 108, 0.5), 0 0 120px rgba(196, 154, 108, 0.3)",
            duration: 2,
            repeat: -1,
            yoyo: true,
            ease: "power2.inOut"
        });
        
        gsap.to('.title-word-2', {
            textShadow: "0 0 50px rgba(245, 242, 235, 0.8), 0 0 100px rgba(245, 242, 235, 0.5), 0 0 150px rgba(245, 242, 235, 0.3)",
            duration: 2.5,
            repeat: -1,
            yoyo: true,
            ease: "power2.inOut",
            delay: 0.3
        });
        
        // Title glow orb animation
        gsap.to('.title-glow', {
            scale: 1.2,
            opacity: 0.6,
            duration: 3,
            repeat: -1,
            yoyo: true,
            ease: "power2.inOut"
        });
        
        // Hero shapes animation
        gsap.to('.shape-1', {
            x: 100,
            y: -100,
            rotation: 360,
            duration: 20,
            repeat: -1,
            yoyo: true,
            ease: "power1.inOut"
        });
        
        gsap.to('.shape-2', {
            x: -150,
            y: 150,
            rotation: -360,
            duration: 25,
            repeat: -1,
            yoyo: true,
            ease: "power1.inOut"
        });
        
        gsap.to('.shape-3', {
            x: 50,
            y: -50,
            rotation: 180,
            duration: 15,
            repeat: -1,
            yoyo: true,
            ease: "power1.inOut"
        });
        
        // Enhanced parallax with GSAP
        gsap.to('.parallax-bg', {
            yPercent: 50,
            ease: "none",
            scrollTrigger: {
                trigger: '#hero',
                start: "top top",
                end: "bottom top",
                scrub: true
            }
        });
        
        // Parallax particles
        gsap.to('.particles', {
            yPercent: 30,
            ease: "none",
            scrollTrigger: {
                trigger: '#hero',
                start: "top top",
                end: "bottom top",
                scrub: true
            }
        });
        
        // Mouse parallax effect for orbs
        $(document).on('mousemove', function(e) {
            const mouseX = e.clientX / window.innerWidth;
            const mouseY = e.clientY / window.innerHeight;
            
            gsap.to('.orb-1', {
                x: (mouseX - 0.5) * 100,
                y: (mouseY - 0.5) * 100,
                duration: 2,
                ease: "power2.out"
            });
            
            gsap.to('.orb-2', {
                x: (mouseX - 0.5) * -80,
                y: (mouseY - 0.5) * -80,
                duration: 2.5,
                ease: "power2.out"
            });
            
            gsap.to('.orb-3', {
                x: (mouseX - 0.5) * 60,
                y: (mouseY - 0.5) * 60,
                duration: 2.2,
                ease: "power2.out"
            });
        });
        
        // Animate glow orbs independently
        gsap.to('.orb-1', {
            scale: 1.2,
            opacity: 0.5,
            duration: 4,
            repeat: -1,
            yoyo: true,
            ease: "power1.inOut"
        });
        
        gsap.to('.orb-2', {
            scale: 1.3,
            opacity: 0.4,
            duration: 5,
            repeat: -1,
            yoyo: true,
            ease: "power1.inOut",
            delay: 1
        });
        
        gsap.to('.orb-3', {
            scale: 1.15,
            opacity: 0.45,
            duration: 4.5,
            repeat: -1,
            yoyo: true,
            ease: "power1.inOut",
            delay: 2
        });
    }

    // ============================================
    // SECTION 2: EARLY REBELS - COLUMN ANIMATIONS
    // ============================================
    if (typeof gsap !== 'undefined' && typeof ScrollTrigger !== 'undefined') {
        // Set initial state for animations
        gsap.set('.early-rebels-section .section-header, .early-rebels-section .quote-block, .early-rebels-section .text-column', {
            opacity: 0,
            y: 60
        });
        gsap.set('.section-number', { opacity: 0, scale: 0 });
        gsap.set('.quote-icon', { opacity: 0, scale: 0 });
        gsap.set('.text-column', { opacity: 0, x: -100 });
        
        gsap.utils.toArray('.early-rebels-section .section-header, .early-rebels-section .quote-block, .early-rebels-section .text-column, .early-rebels-section .heroine-cards').forEach((elem, i) => {
            gsap.to(elem, {
                scrollTrigger: {
                    trigger: elem,
                    start: "top 80%",
                    toggleActions: "play none none reverse"
                },
                duration: 1,
                y: 0,
                opacity: 1,
                stagger: 0.2,
                ease: "power3.out"
            });
        });
        
        // Section number animation
        gsap.to('.section-number', {
            scrollTrigger: {
                trigger: '.section-number',
                start: "top 80%"
            },
            duration: 1.5,
            scale: 1,
            opacity: 1,
            rotation: 0,
            ease: "back.out(1.7)"
        });
        
        // Quote icon animation
        gsap.to('.quote-icon', {
            scrollTrigger: {
                trigger: '.quote-block',
                start: "top 80%"
            },
            duration: 1,
            scale: 1,
            opacity: 1,
            ease: "elastic.out(1, 0.5)"
        });
        
        // Text columns stagger
        gsap.to('.text-column', {
            scrollTrigger: {
                trigger: '.content-text',
                start: "top 75%"
            },
            duration: 1,
            x: 0,
            opacity: 1,
            stagger: 0.3,
            ease: "power3.out"
        });
    } else {
        // Fallback if GSAP doesn't load - ensure visibility
        $('.early-rebels-section .section-header, .early-rebels-section .quote-block, .early-rebels-section .text-column').css({
            'opacity': '1',
            'transform': 'translateY(0)'
        });
        $('.section-number, .quote-icon').css({
            'opacity': '1',
            'transform': 'scale(1)'
        });
    }
    
    // ============================================
    // SECTION 3: RESISTANCE - HIGHLIGHT ANIMATIONS
    // ============================================
    if (typeof gsap !== 'undefined' && typeof ScrollTrigger !== 'undefined') {
    // Set initial states
    gsap.set('.resistance-section .section-header', { opacity: 0, y: 80 });
    gsap.set('.text-highlight', { opacity: 0, scale: 0.9, y: 50 });
    gsap.set('.highlight-text', { opacity: 0, scale: 1.2 });
    gsap.set('.resistance-section .content-text p', { opacity: 0, x: 100 });
    gsap.set('.gallery-item', { opacity: 0, x: 200 });
    
    gsap.to('.resistance-section .section-header', {
        scrollTrigger: {
            trigger: '.resistance-section',
            start: "top 80%"
        },
        duration: 1.2,
        y: 0,
        opacity: 1,
        ease: "power3.out"
    });
    
    gsap.to('.text-highlight', {
        scrollTrigger: {
            trigger: '.text-highlight',
            start: "top 80%"
        },
        duration: 1,
        scale: 1,
        opacity: 1,
        y: 0,
        ease: "power3.out"
    });
    
    gsap.to('.highlight-text', {
        scrollTrigger: {
            trigger: '.highlight-text',
            start: "top 80%"
        },
        duration: 1.5,
        scale: 1,
        opacity: 1,
        ease: "elastic.out(1, 0.5)"
    });
    
    gsap.to('.resistance-section .content-text p', {
        scrollTrigger: {
            trigger: '.resistance-section .content-text',
            start: "top 75%"
        },
        duration: 0.8,
        x: 0,
        opacity: 1,
        stagger: 0.2,
        ease: "power3.out"
    });
    
    // Gallery items animation
    gsap.to('.gallery-item', {
        scrollTrigger: {
            trigger: '.gallery-container',
            start: "top 80%"
        },
        duration: 1,
        x: 0,
        opacity: 1,
        stagger: 0.3,
        ease: "power3.out"
    });
    } else {
        // Fallback for resistance section
        $('.resistance-section .section-header, .text-highlight, .resistance-section .content-text p, .gallery-item').css({
            'opacity': '1',
            'transform': 'translate(0, 0)'
        });
    }
    
    // ============================================
    // SECTION 4: SISTERHOOD - TIMELINE ANIMATIONS
    // ============================================
    if (typeof gsap !== 'undefined' && typeof ScrollTrigger !== 'undefined') {
    // Set initial states
    gsap.set('.timeline-item', { opacity: 0, x: -150 });
    gsap.set('.timeline-dot', { opacity: 0, scale: 0 });
    
    gsap.to('.timeline-item', {
        scrollTrigger: {
            trigger: '.text-timeline',
            start: "top 75%"
        },
        duration: 1,
        x: 0,
        opacity: 1,
        stagger: 0.3,
        ease: "power3.out"
    });
    
    gsap.to('.timeline-dot', {
        scrollTrigger: {
            trigger: '.timeline-item',
            start: "top 80%"
        },
        duration: 0.8,
        scale: 1,
        opacity: 1,
        stagger: 0.2,
        ease: "back.out(1.7)"
    });
    } else {
        // Fallback for timeline
        $('.timeline-item, .timeline-dot').css({
            'opacity': '1',
            'transform': 'translate(0, 0) scale(1)'
        });
    }
    
    // ============================================
    // SECTION 5: LEGACY - GRID ANIMATIONS
    // ============================================
    if (typeof gsap !== 'undefined' && typeof ScrollTrigger !== 'undefined') {
    // Set initial states
    gsap.set('.grid-item', { opacity: 0, y: 80, scale: 0.9 });
    gsap.set('.grid-label', { opacity: 0, x: -30 });
    
    gsap.to('.grid-item', {
        scrollTrigger: {
            trigger: '.text-grid',
            start: "top 80%"
        },
        duration: 1,
        y: 0,
        opacity: 1,
        scale: 1,
        stagger: {
            amount: 0.6,
            from: "start"
        },
        ease: "power3.out"
    });
    
    gsap.to('.grid-label', {
        scrollTrigger: {
            trigger: '.grid-item',
            start: "top 80%"
        },
        duration: 0.8,
        x: 0,
        opacity: 1,
        stagger: 0.1,
        ease: "power3.out"
    });
    } else {
        // Fallback for grid
        $('.grid-item, .grid-label').css({
            'opacity': '1',
            'transform': 'translate(0, 0) scale(1)'
        });
    }
    
    // ============================================
    // ENHANCED SCROLL ANIMATIONS WITH GSAP
    // ============================================
    if (typeof gsap !== 'undefined' && typeof ScrollTrigger !== 'undefined') {
        // Set initial states
        gsap.set('.section-title, .section-subtitle', { opacity: 0, y: 50 });
        gsap.set('.heroine-card', { opacity: 0, y: 100, scale: 0.8 });
        gsap.set('.modern-card', { opacity: 0, y: 60 });
        gsap.set('.slideshow-container', { opacity: 0, scale: 0.95 });
        
        gsap.utils.toArray('.section-title, .section-subtitle').forEach((elem) => {
            gsap.to(elem, {
                scrollTrigger: {
                    trigger: elem,
                    start: "top 85%"
                },
                duration: 1,
                y: 0,
                opacity: 1,
                ease: "power3.out"
            });
        });
        
        // Heroine cards stagger animation
        gsap.to('.heroine-card', {
            scrollTrigger: {
                trigger: '.heroine-cards',
                start: "top 80%"
            },
            duration: 1,
            y: 0,
            opacity: 1,
            scale: 1,
            stagger: 0.2,
            ease: "back.out(1.7)"
        });
        
        // Modern cards animation
        gsap.to('.modern-card', {
            scrollTrigger: {
                trigger: '.modern-cards',
                start: "top 80%"
            },
            duration: 1,
            y: 0,
            opacity: 1,
            stagger: 0.15,
            ease: "power3.out"
        });
        
        // Slideshow animation
        gsap.to('.slideshow-container', {
            scrollTrigger: {
                trigger: '.slideshow-container',
                start: "top 80%"
            },
            duration: 1.2,
            scale: 1,
            opacity: 1,
            ease: "power3.out"
        });
    } else {
        // Fallback for all sections
        $('.section-title, .section-subtitle, .heroine-card, .modern-card, .slideshow-container').css({
            'opacity': '1',
            'transform': 'translate(0, 0) scale(1)'
        });
    } // End GSAP check

    // ============================================
    // HEROINE CARDS - MODAL FUNCTIONALITY
    // ============================================
    $('.heroine-card').on('click', function(e) {
        e.preventDefault();
        e.stopPropagation();
        
        // Close any other open modals first
        $('.card-modal.active, .gallery-modal.active, .takeaways-modal.active').removeClass('active');
        
        // Open the clicked card's modal with slight delay for smooth animation
        const modal = $(this).find('.card-modal');
        
        // Use requestAnimationFrame for smooth animation
        requestAnimationFrame(function() {
            modal.addClass('active');
        });
        
        // Prevent body scroll when modal is open
        $('body').css({
            'overflow': 'hidden',
            'position': 'fixed',
            'width': '100%'
        });
    });

    $('.modal-close').on('click', function(e) {
        e.preventDefault();
        e.stopPropagation();
        
        const modal = $(this).closest('.card-modal, .gallery-modal, .takeaways-modal, .modal, #attribution-modal');
        
        // Use requestAnimationFrame for smooth close animation
        requestAnimationFrame(function() {
            modal.removeClass('active');
        });
        
        // Restore body scroll after animation
        setTimeout(function() {
            $('body').css({
                'overflow': '',
                'position': '',
                'width': ''
            });
        }, 300);
    });

    // Close modal when clicking outside (on backdrop)
    $(document).on('click', '.card-modal.active, .gallery-modal.active, .takeaways-modal.active, .modal.active, #attribution-modal.active', function(e) {
        if ($(e.target).is(this)) {
            $(this).removeClass('active');
            $('body').css('overflow', '');
        }
    });
    
    // Prevent modal content clicks from closing modal
    $(document).on('click', '.modal-content', function(e) {
        e.stopPropagation();
    });

    // ============================================
    // GALLERY SLIDER INTERACTIVITY
    // ============================================
    const galleryData = {
        'vo-thi-sau': {
            title: 'Võ Thị Sáu',
            content: `
                <h3>Võ Thị Sáu</h3>
                <p>At seventeen, Võ Thị Sáu faced her executioners without a blindfold. The colonial soldiers offered her one last chance to plead for life — she smiled instead. The shots that ended her life could not silence her name; they echoed into every village, every generation that learned courage from a child.</p>
                <p>To this day, flowers are still placed at her grave in Côn Đảo — not as ritual, but as remembrance.</p>
            `
        },
        'nguyen-thi-dinh': {
            title: 'Nguyễn Thị Định',
            content: `
                <h3>Nguyễn Thị Định - The Long-Haired General</h3>
                <p>Nguyễn Thị Định — known as the "Long-Haired General" — led thousands of unarmed women in the Đồng Khởi movement. They confronted armed soldiers with songs, flags, and bare hands, proving that resistance could be both fierce and tender.</p>
                <p>Her army of women became the embodiment of the phrase "soft power" long before the term was invented.</p>
                <p>"We fought not for glory, but so our children could sleep without fear."</p>
            `
        }
    };

    $('.gallery-item').on('click', function() {
        const id = $(this).data('id');
        const data = galleryData[id];
        
        if (data) {
            $('.gallery-modal .modal-body').html(data.content);
            $('.gallery-modal').addClass('active');
        }
    });

    // ============================================
    // SLIDESHOW AUTO-PLAY
    // ============================================
    let currentSlide = 0;
    const slides = $('.slide');
    const totalSlides = slides.length;

    function showSlide(index) {
        slides.removeClass('active');
        slides.eq(index).addClass('active');
    }

    function nextSlide() {
        currentSlide = (currentSlide + 1) % totalSlides;
        showSlide(currentSlide);
    }

    // Auto-advance slides every 4 seconds
    setInterval(nextSlide, 4000);

    // Manual navigation
    $('.slide-btn.next').on('click', function() {
        nextSlide();
    });

    $('.slide-btn.prev').on('click', function() {
        currentSlide = (currentSlide - 1 + totalSlides) % totalSlides;
        showSlide(currentSlide);
    });

    // ============================================
    // MODERN CARDS HOVER EFFECTS
    // ============================================
    $('.modern-card').on('mouseenter', function() {
        $(this).css('background', '#F5F2EB');
    }).on('mouseleave', function() {
        $(this).css('background', 'white');
    });

    // ============================================
    // TAKEAWAYS MODAL
    // ============================================
    $('.takeaways-btn').on('click', function() {
        $('.takeaways-modal').addClass('active');
    });

    // ============================================
    // SMOOTH SCROLL FOR NAVIGATION
    // ============================================
    $('a[href^="#"]').on('click', function(e) {
        e.preventDefault();
        const target = $(this.getAttribute('href'));
        if (target.length) {
            $('html, body').animate({
                scrollTop: target.offset().top
            }, 800);
        }
    });

    // ============================================
    // ATTRIBUTION MODAL
    // ============================================
    $('a[href="#sources"], a[href="#credits"], a[href="#about"]').on('click', function(e) {
        e.preventDefault();
        $('#attribution-modal').addClass('active');
    });

    $('#attribution-modal .modal-close').on('click', function() {
        $('#attribution-modal').removeClass('active');
    });

    // ============================================
    // ADD ANIMATION CLASSES TO ELEMENTS
    // ============================================
    $('.section-header').addClass('fade-in-on-scroll');
    $('.quote-block').addClass('fade-in-on-scroll');
    $('.content-text').addClass('blur-in');
    $('.heroine-cards').addClass('scale-in');
    $('.gallery-container').addClass('slide-in-left');
    $('.slideshow-container').addClass('fade-in-on-scroll');
    $('.modern-cards').addClass('fade-in-on-scroll');
    
    // Stagger animation for cards
    $('.heroine-cards .heroine-card').each(function(index) {
        $(this).addClass('fade-in-on-scroll');
        $(this).css('animation-delay', (index * 0.2) + 's');
    });
    
    $('.modern-cards .modern-card').each(function(index) {
        $(this).addClass('fade-in-on-scroll');
        $(this).css('animation-delay', (index * 0.15) + 's');
    });

    // ============================================
    // KEYBOARD NAVIGATION FOR MODALS
    // ============================================
    $(document).on('keydown', function(e) {
        if (e.key === 'Escape') {
            $('.card-modal.active, .gallery-modal.active, .takeaways-modal.active, .modal.active').removeClass('active');
        }
    });
    
    // ============================================
    // ENHANCED CARD INTERACTIONS
    // ============================================
    $('.heroine-card').on('mouseenter', function() {
        $(this).find('.card-image').css('transform', 'scale(1.05)');
    }).on('mouseleave', function() {
        $(this).find('.card-image').css('transform', 'scale(1)');
    });
    
    // ============================================
    // SMOOTH SCROLL TO SECTION
    // ============================================
    $('a[href^="#"]').on('click', function(e) {
        e.preventDefault();
        const target = $(this.getAttribute('href'));
        if (target.length) {
            $('html, body').animate({
                scrollTop: target.offset().top - 20
            }, 1000, 'swing');
        }
    });
    
    // ============================================
    // INTERSECTION OBSERVER FOR BETTER PERFORMANCE
    // ============================================
    if ('IntersectionObserver' in window) {
        const observerOptions = {
            threshold: 0.1,
            rootMargin: '0px 0px -100px 0px'
        };
        
        const observer = new IntersectionObserver(function(entries) {
            entries.forEach(function(entry) {
                if (entry.isIntersecting) {
                    $(entry.target).addClass('visible');
                    observer.unobserve(entry.target);
                }
            });
        }, observerOptions);
        
        // Observe all animated elements
        $('.fade-in-on-scroll, .slide-in-left, .slide-in-right, .scale-in, .rotate-in, .blur-in').each(function() {
            observer.observe(this);
        });
    }
    
    // ============================================
    // PARTICLE ANIMATION
    // ============================================
    function createParticles() {
        const particlesContainer = $('.particles');
        if (particlesContainer.length === 0) return;
        
        for (let i = 0; i < 20; i++) {
            const particle = $('<div class="particle"></div>');
            const size = Math.random() * 3 + 1;
            const left = Math.random() * 100;
            const delay = Math.random() * 20;
            const duration = Math.random() * 10 + 15;
            
            particle.css({
                position: 'absolute',
                width: size + 'px',
                height: size + 'px',
                background: 'rgba(196, 154, 108, ' + (Math.random() * 0.5 + 0.2) + ')',
                borderRadius: '50%',
                left: left + '%',
                bottom: '-10px',
                animation: 'float ' + duration + 's infinite ease-in-out',
                animationDelay: delay + 's'
            });
            
            particlesContainer.append(particle);
        }
    }
    
    createParticles();

});

// ============================================
// SCROLL INDICATOR FADE OUT
// ============================================
$(window).on('scroll', function() {
    const scrollTop = $(window).scrollTop();
    if (scrollTop > 300) {
        $('.scroll-indicator').fadeOut();
    } else {
        $('.scroll-indicator').fadeIn();
    }
});

