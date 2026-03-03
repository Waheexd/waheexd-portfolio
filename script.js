// Mobile Menu Toggle
const hamburger = document.querySelector('.hamburger');
const navLinks = document.querySelector('.nav-links');
const links = document.querySelectorAll('.nav-links a');

hamburger.addEventListener('click', () => {
    hamburger.classList.toggle('active');
    navLinks.classList.toggle('active');
});

// Close mobile menu when a link is clicked
links.forEach(link => {
    link.addEventListener('click', () => {
        hamburger.classList.remove('active');
        navLinks.classList.remove('active');
    });
});

// Navbar background change on scroll
const navbar = document.querySelector('.navbar');

window.addEventListener('scroll', () => {
    if (window.scrollY > 50) {
        navbar.classList.add('scrolled');
    } else {
        navbar.classList.remove('scrolled');
    }

    // Highlight Active Link on Scroll
    let current = '';
    const sections = document.querySelectorAll('section');

    sections.forEach(section => {
        const sectionTop = section.offsetTop;
        const sectionHeight = section.clientHeight;
        if (pageYOffset >= (sectionTop - sectionHeight / 3)) {
            current = section.getAttribute('id');
        }
    });

    links.forEach(link => {
        link.classList.remove('active');
        if (link.getAttribute('href').includes(current) && current !== '') {
            link.classList.add('active');
        }
    });
});

// Intersection Observer for Reveal Animations
const observerOptions = {
    root: null,
    rootMargin: '0px',
    threshold: 0.15
};

const observer = new IntersectionObserver((entries, observer) => {
    entries.forEach(entry => {
        if (entry.isIntersecting) {
            entry.target.classList.add('show');
            observer.unobserve(entry.target);
        }
    });
}, observerOptions);

const hiddenElements = document.querySelectorAll('.hidden');
hiddenElements.forEach((el) => observer.observe(el));

// Infinite Project Carousel Navigation
const track = document.getElementById('carousel-track');
const prevBtn = document.querySelector('.prev-btn');
const nextBtn = document.querySelector('.next-btn');

if (track) {
    const cards = Array.from(track.children);

    // Clone cards for seamless looping
    cards.forEach(card => {
        const clone = card.cloneNode(true);
        track.appendChild(clone);
    });

    let scrollPos = 0;
    let isHovered = false;

    // Pause on hover
    track.addEventListener('mouseenter', () => isHovered = true);
    track.addEventListener('mouseleave', () => isHovered = false);

    if (prevBtn && nextBtn) {
        prevBtn.addEventListener('mouseenter', () => isHovered = true);
        prevBtn.addEventListener('mouseleave', () => isHovered = false);
        nextBtn.addEventListener('mouseenter', () => isHovered = true);
        nextBtn.addEventListener('mouseleave', () => isHovered = false);
    }

    function scrollCarousel() {
        if (!isHovered) {
            scrollPos += 1; // Speed (pixels per frame)

            // The scrollWidth includes the original and cloned cards + gaps. 
            const maxScroll = track.scrollWidth / 2;

            if (scrollPos >= maxScroll) {
                scrollPos = 0; // Seamless reset
            } else if (scrollPos < 0) {
                scrollPos = maxScroll - 1; // Reverse loop handling
            }

            track.style.transform = `translateX(-${scrollPos}px)`;
        }
        requestAnimationFrame(scrollCarousel);
    }

    scrollCarousel();

    // Manual Navigation Overrides
    if (prevBtn && nextBtn) {
        nextBtn.addEventListener('click', () => {
            // Get exact gap value from the track
            const gap = parseFloat(window.getComputedStyle(track).gap) || 0;
            const scrollAmount = track.children[0].offsetWidth > 0 ? track.children[0].offsetWidth + gap : 0;

            if (scrollAmount > 0) {
                scrollPos += scrollAmount;
                const maxScroll = track.scrollWidth / 2;
                if (scrollPos >= maxScroll) {
                    scrollPos = scrollPos % maxScroll;
                }
                track.style.transform = `translateX(-${scrollPos}px)`;
            }
        });

        prevBtn.addEventListener('click', () => {
            // Get exact gap value from the track
            const gap = parseFloat(window.getComputedStyle(track).gap) || 0;
            const scrollAmount = track.children[0].offsetWidth > 0 ? track.children[0].offsetWidth + gap : 0;

            if (scrollAmount > 0) {
                scrollPos -= scrollAmount;
                if (scrollPos < 0) {
                    scrollPos = (track.scrollWidth / 2) - Math.abs(scrollPos);
                }
                track.style.transform = `translateX(-${scrollPos}px)`;
            }
        });
    }
}

// Experience / Education Tab Toggle
function switchTab(tabId) {
    const expTab = document.getElementById('experience-tab');
    const eduTab = document.getElementById('education-tab');
    const btns = document.querySelectorAll('.toggle-btn');

    // Reset buttons
    btns.forEach(btn => btn.classList.remove('active'));

    // Hide both tabs
    expTab.style.display = 'none';
    eduTab.style.display = 'none';

    // Show correct tab and activate button
    if (tabId === 'experience') {
        expTab.style.display = 'flex';
        btns[0].classList.add('active');
    } else {
        eduTab.style.display = 'flex';
        btns[1].classList.add('active');
    }
}

// Hero Button Interactive Highlighting
const heroBtns = document.querySelectorAll('.cta-buttons .btn');

heroBtns.forEach(btn => {
    btn.addEventListener('click', function () {
        // First, reset all buttons in this group to secondary
        heroBtns.forEach(b => {
            b.classList.remove('primary');
            b.classList.add('secondary');
        });

        // Then, set the clicked button to primary
        this.classList.remove('secondary');
        this.classList.add('primary');
    });
});

// Typing Effect for Hero Title
const typingElement = document.querySelector('.typing-text');
if (typingElement) {
    const textToType = typingElement.textContent; // E.g. "Mohammed Waheed"
    // Clear the text content initially so it can be typed
    typingElement.textContent = '';

    let charIndex = 0;

    // Wait for the hero section to slide up and fade in (approx 800ms)
    setTimeout(() => {
        const typeInterval = setInterval(() => {
            if (charIndex < textToType.length) {
                typingElement.textContent += textToType.charAt(charIndex);
                charIndex++;
            } else {
                clearInterval(typeInterval); // Done typing
                typingElement.style.borderRight = 'none';
                typingElement.style.animation = 'none';
            }
        }, 120); // Speed: 120ms per character
    }, 800);
}

// Netlify Contact Form AJAX Submission
const contactForm = document.querySelector('.contact-form');
const formFeedback = document.getElementById('form-feedback');

if (contactForm && formFeedback) {
    contactForm.addEventListener('submit', function (e) {
        e.preventDefault(); // Prevent full page reload

        // --- Custom Validation Check ---
        if (!contactForm.checkValidity()) {
            formFeedback.textContent = "Please fill out all required fields with valid information (e.g. a valid email address).";
            formFeedback.classList.remove('hidden-msg', 'success');
            formFeedback.classList.add('error');
            return; // Stop the submission process
        }
        // -------------------------------

        const submitBtn = contactForm.querySelector('.submit-btn');
        const originalBtnText = submitBtn.textContent;
        submitBtn.textContent = "Sending...";
        submitBtn.disabled = true;

        const formData = new FormData(contactForm);

        fetch('/', {
            method: 'POST',
            headers: { "Content-Type": "application/x-www-form-urlencoded" },
            body: new URLSearchParams(formData).toString()
        })
            .then(() => {
                // Success State
                formFeedback.textContent = "Thank you! Your message has been sent successfully.";
                formFeedback.classList.remove('hidden-msg', 'error');
                formFeedback.classList.add('success');

                contactForm.reset(); // Clear the form

                // Hide the success message after 5 seconds
                setTimeout(() => {
                    formFeedback.classList.add('hidden-msg');
                }, 5000);
            })
            .catch(error => {
                // Error State
                formFeedback.textContent = "Oops! There was a problem submitting your form.";
                formFeedback.classList.remove('hidden-msg', 'success');
                formFeedback.classList.add('error');
            })
            .finally(() => {
                // Restore button
                submitBtn.textContent = originalBtnText;
                submitBtn.disabled = false;
            });
    });
}

