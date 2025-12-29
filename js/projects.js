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

        case 'webdev':
            content = `
                <div class="project-modal-header">
                    <h2>Web Development Project</h2>
                </div>
                <div class="project-modal-body">
                    <div style="background: linear-gradient(135deg, #667eea 0%, #764ba2 100%); height: 200px; border-radius: 8px; display: flex; align-items: center; justify-content: center; margin-bottom: 20px;">
                        <div style="text-align: center; color: white;">
                            <i class="fi fi-br-clock" style="font-size: 3rem; margin-bottom: 1rem;"></i>
                            <h3>Coming Soon!</h3>
                        </div>
                    </div>

                    <p>Currently in development! This will be a full-stack web application showcasing advanced development skills.</p>

                    <div class="project-features">
                        <h3>Planned Features:</h3>
                        <ul>
                            <li>User authentication and authorization</li>
                            <li>Database integration with MySQL</li>
                            <li>RESTful API design</li>
                            <li>Responsive frontend interface</li>
                            <li>Admin dashboard functionality</li>
                            <li>Security best practices implementation</li>
                        </ul>
                    </div>

                    <div class="project-features">
                        <h3>Technology Stack:</h3>
                        <ul>
                            <li>PHP with Laravel framework</li>
                            <li>MySQL database</li>
                            <li>Bootstrap for responsive design</li>
                            <li>JavaScript for dynamic interactions</li>
                        </ul>
                    </div>

                    <p><strong>Status:</strong> In planning and early development phase. Expected completion by Q2 2024.</p>
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
