// Dark Mode Toggle Functionality
// Handles theme switching between light and dark modes

function toggleDarkMode() {
    const html = document.documentElement;
    const currentTheme = html.getAttribute('data-theme') || 'dark';
    const newTheme = currentTheme === 'dark' ? 'light' : 'dark';

    console.log('Toggling from', currentTheme, 'to', newTheme);

    // Apply the new theme
    html.setAttribute('data-theme', newTheme);
    localStorage.setItem('theme', newTheme);

    // Force refresh styles
    html.style.display = 'none';
    html.offsetHeight; // trigger reflow
    html.style.display = '';

    // Update the icon
    const iconElement = document.querySelector('.dark-mode-button i');
    if (iconElement) {
        if (newTheme === 'dark') {
            iconElement.setAttribute('data-feather', 'sun');
        } else {
            iconElement.setAttribute('data-feather', 'moon');
        }
        if (typeof feather !== 'undefined') {
            feather.replace();
        }
    }

    console.log('Theme switched to:', html.getAttribute('data-theme'));
}

function initializeDarkMode() {
    // Set initial theme - DEFAULT TO DARK MODE
    const savedTheme = localStorage.getItem('theme') || 'dark';
    console.log('Initializing with theme:', savedTheme);

    document.documentElement.setAttribute('data-theme', savedTheme);

    // Set initial icon
    const iconElement = document.querySelector('.dark-mode-button i');
    if (iconElement) {
        if (savedTheme === 'dark') {
            iconElement.setAttribute('data-feather', 'sun');
        } else {
            iconElement.setAttribute('data-feather', 'moon');
        }
        if (typeof feather !== 'undefined') {
            feather.replace();
        }
    }

    // Add event listener to dark mode button
    const darkModeButton = document.querySelector('.dark-mode-button');
    if (darkModeButton) {
        darkModeButton.addEventListener('click', toggleDarkMode);
    }

    // Debug: Add keyboard shortcuts
    document.addEventListener('keydown', function(e) {
        if (e.key === 'l' || e.key === 'L') {
            console.log('Forcing light mode...');
            document.documentElement.setAttribute('data-theme', 'light');
            document.body.setAttribute('data-theme', 'light');
            localStorage.setItem('theme', 'light');
            const iconElement = document.querySelector('.dark-mode-button i');
            if (iconElement) {
                iconElement.setAttribute('data-feather', 'moon');
                if (typeof feather !== 'undefined') {
                    feather.replace();
                }
            }
            location.reload(); // Force refresh
        }
        if (e.key === 'd' || e.key === 'D') {
            console.log('Forcing dark mode...');
            document.documentElement.setAttribute('data-theme', 'dark');
            document.body.setAttribute('data-theme', 'dark');
            localStorage.setItem('theme', 'dark');
            const iconElement = document.querySelector('.dark-mode-button i');
            if (iconElement) {
                iconElement.setAttribute('data-feather', 'sun');
                if (typeof feather !== 'undefined') {
                    feather.replace();
                }
            }
        }
        if (e.key === 'r' || e.key === 'R') {
            console.log('Clearing localStorage and resetting...');
            localStorage.removeItem('theme');
            document.documentElement.removeAttribute('data-theme');
            document.body.removeAttribute('data-theme');
            location.reload();
        }
    });
}

// Initialize dark mode early
if (document.readyState === 'loading') {
    document.addEventListener('DOMContentLoaded', initializeDarkMode);
} else {
    initializeDarkMode();
}
