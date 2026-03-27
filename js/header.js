// Header and Scroll Indicator Logic
// Handles header visibility on scroll and smooth scroll behavior

function initializeHeader() {
    const header = document.querySelector('header');
    const scrollIndicator = document.getElementById('scrollIndicator');
    let lastScroll = 0;
    let scrollTimer = null;

    if (!header) {
        console.warn('Header element not found');
        return;
    }

    // Start the delayed reveal of scroll indicator
    function startScrollTimer() {
        clearTimeout(scrollTimer);
        scrollTimer = setTimeout(function() {
            if (scrollIndicator && window.pageYOffset < 200) {
                scrollIndicator.classList.add('visible');
            }
        }, 3000);
    }

    // Kick off initial timer
    if (scrollIndicator && window.pageYOffset < 200) {
        startScrollTimer();
    }

    // Handle scroll events
    window.addEventListener('scroll', function() {
        const currentScroll = window.pageYOffset;

        if (currentScroll > 200) {
            header.classList.add('visible');
            if (scrollIndicator) {
                scrollIndicator.classList.remove('visible');
                clearTimeout(scrollTimer);
            }
        } else {
            header.classList.remove('visible');
            // Reset timer when scrolling back to top
            if (scrollIndicator && !scrollIndicator.classList.contains('visible')) {
                startScrollTimer();
            }
        }

        lastScroll = currentScroll;
    });

    // Smooth scroll when clicking the indicator
    if (scrollIndicator) {
        scrollIndicator.addEventListener('click', function() {
            window.scrollTo({
                top: window.innerHeight,
                behavior: 'smooth'
            });
        });
    }
}

// Export for use in init.js
if (typeof window !== 'undefined') {
    window.initializeHeader = initializeHeader;
}
