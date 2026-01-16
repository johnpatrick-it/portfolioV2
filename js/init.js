// Initialization Script
// Initializes all components after they've been loaded

// Initialize all components
function initializeComponents() {
    console.log('Initializing components...');

    // Initialize Feather icons
    if (typeof feather !== 'undefined') {
        feather.replace();
    }

    // Initialize header and scroll functionality
    if (typeof window.initializeHeader === 'function') {
        window.initializeHeader();
    }

    // Initialize dark mode toggle
    if (typeof window.initializeDarkMode === 'function') {
        window.initializeDarkMode();
    }

    // Initialize image carousel in about section
    if (typeof window.initializeImageCarousel === 'function') {
        window.initializeImageCarousel();
    }

    // Initialize project modals
    if (typeof window.initializeProjectModals === 'function') {
        window.initializeProjectModals();
    }

    // Initialize skills dropdowns
    if (typeof window.initializeSkillDropdowns === 'function') {
        window.initializeSkillDropdowns();
    }

    // Initialize mobile warning
    initializeMobileWarning();

    // Set current year in footer
    setCurrentYear();

    // Initialize generic modal
    initializeGenericModal();

    console.log('All components initialized');
}

// Mobile Warning Popup
function initializeMobileWarning() {
    const mobileWarning = document.getElementById('mobileWarning');
    if (!mobileWarning) return;

    const hasSeenWarning = sessionStorage.getItem('mobileWarningShown');

    if (!hasSeenWarning) {
        mobileWarning.classList.add('show');
    }

    // Attach close button handler
    const closeButton = mobileWarning.querySelector('.warning-close-btn');
    if (closeButton) {
        closeButton.addEventListener('click', closeMobileWarning);
    }
}

function closeMobileWarning() {
    const mobileWarning = document.getElementById('mobileWarning');
    if (mobileWarning) {
        mobileWarning.classList.remove('show');
        sessionStorage.setItem('mobileWarningShown', 'true');
    }
}

// Set current year in footer
function setCurrentYear() {
    const currentYearElement = document.getElementById('currentYear');
    if (currentYearElement) {
        const currentDate = new Date();
        const currentYear = currentDate.getFullYear();
        currentYearElement.innerText = currentYear;
    }
}

// Initialize generic modal
function initializeGenericModal() {
    const modal = document.getElementById('modal');
    const closeButton = document.getElementById('btnClose');

    if (closeButton) {
        closeButton.addEventListener('click', function() {
            if (modal) {
                modal.style.display = 'none';
            }
        });
    }
}

// Resume download function (currently commented out in original)
function downloadResume() {
    alert('Resume download feature coming soon! For now, please contact me directly via email or LinkedIn for my latest resume.');
}

// Make functions available globally
if (typeof window !== 'undefined') {
    window.initializeComponents = initializeComponents;
    window.closeMobileWarning = closeMobileWarning;
    window.downloadResume = downloadResume;
}
