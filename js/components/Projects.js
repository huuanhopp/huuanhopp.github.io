// Projects Component - Simple Implementation
class Projects {
    constructor() {
        this.projects = [
            {
                id: 1,
                title: "The Coach - English Learning App",
                category: "Mobile App",
                description: "1M+ downloads English learning app with 4.85/5 rating",
                technologies: ["React Native", "Redux Saga", "Firebase", "Jitsi"],
                status: "live",
                role: "Team Leader"
            },
            {
                id: 2,
                title: "Mosan E-Wallet",
                category: "Fintech", 
                description: "E-wallet for Timor market with dual modules",
                technologies: ["React Native", "Redux Saga", "Performance Optimization"],
                status: "development",
                role: "Team Leader"
            },
            {
                id: 3,
                title: "Super Wallet - Crypto",
                category: "Blockchain",
                description: "Multi-network crypto wallet with NFT support",
                technologies: ["React Native", "Web3", "Blockchain"],
                status: "completed",
                role: "Developer"
            }
        ];
    }

    render() {
        return `
            <section id="projects" class="section">
                <div class="container">
                    <div class="section-header text-center mb-6">
                        <h2 class="section-title">Featured Projects</h2>
                        <p class="section-subtitle">Showcase of mobile applications I've built</p>
                    </div>
                    
                    <div class="projects-grid grid grid-3">
                        ${this.projects.map(project => `
                            <div class="project-card card">
                                <div class="project-content">
                                    <span class="project-category badge badge-primary">${project.category}</span>
                                    <h3 class="project-title">${project.title}</h3>
                                    <p class="project-description">${project.description}</p>
                                    <div class="project-tech">
                                        ${project.technologies.slice(0,3).map(tech => 
                                            `<span class="tech-tag">${tech}</span>`
                                        ).join('')}
                                    </div>
                                    <div class="project-meta">
                                        <span class="project-role">${project.role}</span>
                                        <span class="project-status status-${project.status}">${project.status}</span>
                                    </div>
                                </div>
                            </div>
                        `).join('')}
                    </div>
                </div>
            </section>
        `;
    }

    attachEventListeners() {
        // Simple animations
        const cards = document.querySelectorAll('.project-card');
        cards.forEach((card, index) => {
            setTimeout(() => {
                card.style.opacity = '1';
                card.style.transform = 'translateY(0)';
            }, index * 200);
        });
    }

    getStyles() {
        return `
            .projects-grid {
                gap: 2rem;
            }
            
            .project-card {
                opacity: 0;
                transform: translateY(30px);
                transition: all 0.6s ease;
                padding: 2rem;
            }
            
            .project-card:hover {
                transform: translateY(-5px);
                box-shadow: var(--shadow-lg);
            }
            
            .project-category {
                margin-bottom: 1rem;
            }
            
            .project-title {
                font-size: var(--font-size-xl);
                font-weight: 600;
                margin-bottom: 1rem;
                color: var(--text-primary);
            }
            
            .project-description {
                color: var(--text-secondary);
                margin-bottom: 1.5rem;
                line-height: 1.6;
            }
            
            .project-tech {
                display: flex;
                flex-wrap: wrap;
                gap: 0.5rem;
                margin-bottom: 1.5rem;
            }
            
            .tech-tag {
                padding: 0.25rem 0.75rem;
                background: var(--bg-tertiary);
                color: var(--text-secondary);
                border-radius: 15px;
                font-size: var(--font-size-xs);
            }
            
            .project-meta {
                display: flex;
                justify-content: space-between;
                align-items: center;
                padding-top: 1rem;
                border-top: 1px solid var(--border-color);
            }
            
            .project-role {
                font-weight: 500;
                color: var(--text-primary);
            }
            
            .project-status {
                padding: 0.25rem 0.75rem;
                border-radius: 15px;
                font-size: var(--font-size-xs);
                font-weight: 500;
            }
            
            .status-live { background: #10b981; color: white; }
            .status-development { background: #f59e0b; color: white; }
            .status-completed { background: var(--bg-tertiary); color: var(--text-secondary); }
            
            @media (max-width: 768px) {
                .projects-grid { grid-template-columns: 1fr; }
            }
        `;
    }
}
