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
 */
function initializeSkillDropdowns() {
    const allDomains = document.querySelectorAll('.skill-domain');

    // All domains start collapsed - users can expand as needed

    console.log('Skills dropdown initialized - all domains collapsed');
}

// Make functions available globally
if (typeof window !== 'undefined') {
    window.toggleSkillDomain = toggleSkillDomain;
    window.initializeSkillDropdowns = initializeSkillDropdowns;
}
