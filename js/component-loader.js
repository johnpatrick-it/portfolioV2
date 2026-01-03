// Component Loader - Dynamically loads HTML components
// This file loads separate HTML files into designated containers

/**
 * Load a single HTML component into a container
 * @param {string} url - Path to the HTML component file
 * @param {string} containerId - ID of the container element
 * @returns {Promise<void>}
 */
async function loadComponent(url, containerId) {
    try {
        const response = await fetch(url);
        if (!response.ok) {
            throw new Error(`Failed to load ${url}: ${response.status}`);
        }
        const html = await response.text();
        const container = document.getElementById(containerId);
        if (container) {
            container.innerHTML = html;
        } else {
            console.error(`Container #${containerId} not found`);
        }
    } catch (error) {
        console.error(`Error loading component from ${url}:`, error);
    }
}

/**
 * Load all portfolio components in parallel for better performance
 * Components are loaded simultaneously using Promise.all
 * @returns {Promise<void>}
 */
async function loadAllComponents() {
    try {
        // Load all components in parallel for faster page load
        await Promise.all([
            loadComponent('components/header.html', 'header-container'),
            loadComponent('components/scroll-indicator.html', 'scroll-indicator-container'),
            loadComponent('components/mobile-warning.html', 'mobile-warning-container'),
            loadComponent('components/mantra.html', 'mantra-container'),
            loadComponent('components/about.html', 'about-container'),
            loadComponent('components/skills.html', 'skills-container'),
            loadComponent('components/projects.html', 'projects-container'),
            loadComponent('components/contact.html', 'contact-container'),
            loadComponent('components/footer.html', 'footer-container'),
            loadComponent('components/modals.html', 'modals-container')
        ]);

        // All components loaded successfully
        console.log('All components loaded successfully');

        // Initialize components after loading
        if (typeof window.initializeComponents === 'function') {
            window.initializeComponents();
        }
    } catch (error) {
        console.error('Error loading components:', error);
    }
}

// Auto-load components when DOM is ready
if (document.readyState === 'loading') {
    document.addEventListener('DOMContentLoaded', loadAllComponents);
} else {
    // DOM already loaded
    loadAllComponents();
}
