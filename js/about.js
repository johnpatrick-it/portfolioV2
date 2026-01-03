// About Section - Image Carousel
// Handles the rotating image carousel in the about section

let imageIndex = 0;
const images = ["PNG/mev1.jpg", "PNG/mev2.jpeg", "PNG/mev3.png"];
let imageContainer;
let dots;
let carouselInterval;

function showImage() {
    if (!imageContainer || !dots || dots.length === 0) {
        console.warn('Image carousel elements not found');
        return;
    }

    imageContainer.src = images[imageIndex];
    dots.forEach(dot => dot.classList.remove('active'));
    if (dots[imageIndex]) {
        dots[imageIndex].classList.add('active');
    }
}

function initializeImageCarousel() {
    imageContainer = document.querySelector(".column .image-container img");
    dots = Array.from(document.querySelectorAll('.dot'));

    if (!imageContainer || dots.length === 0) {
        console.warn('Image carousel elements not initialized yet');
        return;
    }

    // Show initial image
    showImage();

    // Auto-rotate every 3 seconds
    if (carouselInterval) {
        clearInterval(carouselInterval);
    }

    carouselInterval = setInterval(() => {
        imageIndex = (imageIndex + 1) % images.length;
        showImage();
    }, 3000);
}

// About Section Dropdown Functionality
/**
 * Toggle about section visibility
 * @param {HTMLElement} headerElement - The clicked header element
 */
function toggleAboutSection(headerElement) {
    // Get the content element (next sibling of header)
    const content = headerElement.nextElementSibling;

    // Toggle active class on header (for icon rotation)
    headerElement.classList.toggle('active');

    // Toggle expanded class on content (for smooth animation)
    content.classList.toggle('expanded');
}

/**
 * Initialize about dropdowns - expand first section by default
 */
function initializeAboutDropdowns() {
    const allSections = document.querySelectorAll('.about-dropdown-section');

    // Expand the first section (Education) by default
    if (allSections.length > 0) {
        const firstHeader = allSections[0].querySelector('.about-dropdown-header');
        const firstContent = allSections[0].querySelector('.about-dropdown-content');

        if (firstHeader && firstContent) {
            firstHeader.classList.add('active');
            firstContent.classList.add('expanded');
        }
    }

    console.log('About dropdowns initialized');
}

// Export for use in init.js
if (typeof window !== 'undefined') {
    window.initializeImageCarousel = initializeImageCarousel;
    window.toggleAboutSection = toggleAboutSection;
    window.initializeAboutDropdowns = initializeAboutDropdowns;
}
