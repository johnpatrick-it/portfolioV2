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
 * Load all portfolio components in the correct order
 * Components are loaded sequentially to ensure proper DOM structure
 * @returns {Promise<void>}
 */
async function loadAllComponents() {
    try {
        // Load components in order
        await loadComponent('components/header.html', 'header-container');
        await loadComponent('components/scroll-indicator.html', 'scroll-indicator-container');
        await loadComponent('components/mobile-warning.html', 'mobile-warning-container');
        await loadComponent('components/mantra.html', 'mantra-container');
        await loadComponent('components/about.html', 'about-container');
        await loadComponent('components/skills.html', 'skills-container');
        await loadComponent('components/projects.html', 'projects-container');
        await loadComponent('components/contact.html', 'contact-container');
        await loadComponent('components/footer.html', 'footer-container');
        await loadComponent('components/modals.html', 'modals-container');

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
