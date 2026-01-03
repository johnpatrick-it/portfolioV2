// Skills Dropdown Functionality
// Handles expanding and collapsing skill domain sections

/**
 * Toggle skill domain visibility
 * @param {HTMLElement} headerElement - The clicked header element
 */
function toggleSkillDomain(headerElement) {
    // Get the content element (next sibling of header)
    const content = headerElement.nextElementSibling;

    // Toggle active class on header (for icon rotation)
    headerElement.classList.toggle('active');

    // Toggle expanded class on content (for smooth animation)
    content.classList.toggle('expanded');
}

/**
 * Initialize all skill domains to be collapsed on page load
 * Optionally expand the first domain for better UX
 */
function initializeSkillDropdowns() {
    const allDomains = document.querySelectorAll('.skill-domain');

    // Optional: Expand the first domain by default
    if (allDomains.length > 0) {
        const firstHeader = allDomains[0].querySelector('.skill-domain-header');
        const firstContent = allDomains[0].querySelector('.skill-domain-content');

        if (firstHeader && firstContent) {
            firstHeader.classList.add('active');
            firstContent.classList.add('expanded');
        }
    }

    console.log('Skills dropdown initialized');
}

// Make functions available globally
if (typeof window !== 'undefined') {
    window.toggleSkillDomain = toggleSkillDomain;
    window.initializeSkillDropdowns = initializeSkillDropdowns;
}
