// ============================================
// PARALLAX EFFECT FOR HERO SECTION
// ============================================
$(document).ready(function() {
    
    // Enhanced parallax with smooth scrolling
    let ticking = false;
    
    function updateParallax() {
        const scrolled = $(window).scrollTop();
        const parallax = $('.parallax-bg');
        const speed = scrolled * 0.3;
        parallax.css('transform', 'translateY(' + speed + 'px) scale(1.1)');
        ticking = false;
    }
    
    $(window).on('scroll', function() {
        if (!ticking) {
            requestAnimationFrame(updateParallax);
            ticking = true;
        }
    });

    // ============================================
    // ADVANCED SCROLL ANIMATIONS
    // ============================================
    function checkScroll() {
        const scrollTop = $(window).scrollTop();
        const windowHeight = $(window).height();
        const triggerPoint = windowHeight * 0.75; // Trigger when 75% visible
        
        // Check all animation classes
        $('.fade-in-on-scroll, .slide-in-left, .slide-in-right, .scale-in, .rotate-in, .blur-in').each(function() {
            const elementTop = $(this).offset().top;
            const elementHeight = $(this).outerHeight();
            const elementBottom = elementTop + elementHeight;
            
            // Check if element is in viewport
            if (elementTop < scrollTop + triggerPoint && elementBottom > scrollTop) {
                $(this).addClass('visible');
            }
        });
        
        // Parallax effect for hero section
        const heroSection = $('#hero');
        if (heroSection.length) {
            const heroTop = heroSection.offset().top;
            const heroHeight = heroSection.outerHeight();
            const scrollRatio = Math.max(0, Math.min(1, (scrollTop - heroTop + windowHeight) / (heroHeight + windowHeight)));
            
            // Parallax background
            $('.parallax-bg').css('transform', 'translateY(' + (scrollRatio * 100) + 'px)');
        }
    }

    $(window).on('scroll', checkScroll);
    checkScroll(); // Check on page load

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

