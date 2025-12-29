// Header and Scroll Indicator Logic
// Handles header visibility on scroll and smooth scroll behavior

function initializeHeader() {
    const header = document.querySelector('header');
    const scrollIndicator = document.getElementById('scrollIndicator');
    let lastScroll = 0;

    if (!header) {
        console.warn('Header element not found');
        return;
    }

    // Handle scroll events
    window.addEventListener('scroll', function() {
        const currentScroll = window.pageYOffset;

        // Show header after scrolling 200px
        if (currentScroll > 200) {
            header.classList.add('visible');
            if (scrollIndicator) {
                scrollIndicator.classList.remove('visible');
            }
        } else {
            header.classList.remove('visible');
            if (scrollIndicator) {
                scrollIndicator.classList.add('visible');
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
