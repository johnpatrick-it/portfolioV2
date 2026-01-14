// Project Modal Functions
// Handles opening and closing project detail modals

function openProjectModal(projectId) {
    const modal = document.getElementById('project-modal');
    const modalBody = document.getElementById('project-modal-body');

    if (!modal || !modalBody) {
        console.warn('Modal elements not found');
        return;
    }

    let content = '';

    switch(projectId) {
        case 'portfolio':
            content = `
                <div class="project-modal-header">
                    <h2>Personal Portfolio Website</h2>
                </div>
                <div class="project-modal-body">
                    <img src="PNG/profile.jpg" alt="Portfolio Website" class="project-modal-image">
                    <p>This is the website you're currently viewing! A modern, responsive portfolio built from scratch to showcase my skills and projects.</p>

                    <div class="project-features">
                        <h3>Key Features:</h3>
                        <ul>
                            <li>Responsive design that works on all devices</li>
                            <li>Dark/Light mode toggle with smooth transitions</li>
                            <li>Interactive project cards with modal displays</li>
                            <li>Animated "Trust the Process" section</li>
                            <li>Professional skills showcase with technology cards</li>
                            <li>Clean, modern CSS with custom variables</li>
                            <li>Organized, maintainable code structure</li>
                        </ul>
                    </div>

                    <div class="project-features">
                        <h3>Technologies Used:</h3>
                        <ul>
                            <li>HTML5 for semantic structure</li>
                            <li>CSS3 with custom properties and animations</li>
                            <li>Vanilla JavaScript for interactivity</li>
                            <li>Feather Icons for consistent iconography</li>
                            <li>Google Fonts for typography</li>
                        </ul>
                    </div>

                    <p><strong>Development Process:</strong> Built with mobile-first approach, focusing on clean code, accessibility, and user experience. Features modular CSS architecture for easy maintenance and updates.</p>
                </div>
            `;
            break;

        case 'password-checker':
            content = `
                <div class="project-modal-header">
                    <h2>Password Security Checker</h2>
                </div>
                <div class="project-modal-body">
                    <img src="PNG/password-checker.png" alt="Password Security Checker" class="project-modal-image">
                    <p>A high-performance Flask application that analyzes password strength in real-time, providing instant feedback on password security and checking against known data breaches.</p>

                    <div class="project-features">
                        <h3>Key Features:</h3>
                        <ul>
                            <li>Real-time password strength analysis</li>
                            <li>Breach checking via HaveIBeenPwned API</li>
                            <li>Fast response times with optimized performance</li>
                            <li>Clean, modern UI built with Tailwind CSS</li>
                            <li>Secure password handling with best practices</li>
                            <li>Visual strength indicators and feedback</li>
                            <li>Deployed on Fly.io for high availability</li>
                        </ul>
                    </div>

                    <div class="project-features">
                        <h3>Technologies Used:</h3>
                        <ul>
                            <li>Python 3.14.0 for backend logic</li>
                            <li>Flask 3.1.2 web framework</li>
                            <li>HTML5 for semantic structure</li>
                            <li>Tailwind CSS for responsive design</li>
                            <li>Vanilla JavaScript for interactivity</li>
                            <li>HaveIBeenPwned API integration</li>
                        </ul>
                    </div>

                    <p><strong>Development Highlights:</strong> Built with security and performance in mind, this project demonstrates practical cybersecurity knowledge and full-stack development skills. The application is deployed and accessible for live testing.</p>
                </div>
            `;
            break;

        case 'cybersecurity':
            content = `
                <div class="project-modal-header">
                    <h2>Cybersecurity Project</h2>
                </div>
                <div class="project-modal-body">
                    <div style="background: linear-gradient(135deg, #4a5568 0%, #553c9a 100%); height: 200px; border-radius: 8px; display: flex; align-items: center; justify-content: center; margin-bottom: 20px;">
                        <div style="text-align: center; color: white;">
                            <i class="fi fi-br-shield" style="font-size: 3rem; margin-bottom: 1rem;"></i>
                            <h3>Security Focused</h3>
                        </div>
                    </div>

                    <p>A cybersecurity-focused project that demonstrates knowledge of security principles, threat analysis, and defensive measures.</p>

                    <div class="project-features">
                        <h3>Planned Components:</h3>
                        <ul>
                            <li>Network security analysis tools</li>
                            <li>Vulnerability assessment scripts</li>
                            <li>Log analysis and monitoring</li>
                            <li>Security policy documentation</li>
                            <li>Incident response procedures</li>
                            <li>Educational security awareness content</li>
                        </ul>
                    </div>

                    <div class="project-features">
                        <h3>Skills Demonstrated:</h3>
                        <ul>
                            <li>Python scripting for security automation</li>
                            <li>Linux command line proficiency</li>
                            <li>Network protocol understanding</li>
                            <li>Risk assessment methodologies</li>
                            <li>Ethical hacking principles</li>
                        </ul>
                    </div>

                    <p><strong>Academic Context:</strong> This project aligns with my Google Cybersecurity Certificate coursework and practical application of security concepts learned in my IT program.</p>
                </div>
            `;
            break;
    }

    modalBody.innerHTML = content;
    modal.style.display = 'block';
}

function closeProjectModal() {
    const modal = document.getElementById('project-modal');
    if (modal) {
        modal.style.display = 'none';
    }
}

function initializeProjectModals() {
    // Event listeners for project modal close button
    const closeButton = document.querySelector('.close-project-modal');
    if (closeButton) {
        closeButton.addEventListener('click', closeProjectModal);
    }

    // Close modal when clicking outside
    window.addEventListener('click', function(event) {
        const modal = document.getElementById('project-modal');
        if (event.target === modal) {
            closeProjectModal();
        }
    });

    // Attach click handlers to project cards
    const projectCards = document.querySelectorAll('.project-card');
    projectCards.forEach(card => {
        card.addEventListener('click', function() {
            const projectId = this.getAttribute('data-project-id');
            if (projectId) {
                openProjectModal(projectId);
            }
        });
    });

    // Stop propagation on project links
    const projectLinks = document.querySelectorAll('.project-links');
    projectLinks.forEach(linkContainer => {
        linkContainer.addEventListener('click', function(event) {
            event.stopPropagation();
        });
    });
}

// Make functions available globally
if (typeof window !== 'undefined') {
    window.openProjectModal = openProjectModal;
    window.closeProjectModal = closeProjectModal;
    window.initializeProjectModals = initializeProjectModals;
}
