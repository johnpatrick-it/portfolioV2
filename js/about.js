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

// Export for use in init.js
if (typeof window !== 'undefined') {
    window.initializeImageCarousel = initializeImageCarousel;
}
