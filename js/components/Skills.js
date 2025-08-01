class Skills {
    constructor() {
        this.skillCategories = [
            {
                title: "Mobile Development",
                icon: `<svg width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2">
                        <rect x="5" y="2" width="14" height="20" rx="2" ry="2"></rect>
                        <line x1="12" y1="18" x2="12.01" y2="18"></line>
                      </svg>`,
                skills: [
                    { name: "React Native", level: 95, category: "expert" },
                    { name: "React Native Reanimated", level: 90, category: "expert" },
                    { name: "Redux Saga", level: 90, category: "expert" },
                    { name: "React JS", level: 75, category: "intermediate" },
                    { name: "NextJS", level: 70, category: "intermediate" }
                ]
            },
            {
                title: "Native Development",
                icon: `<svg width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2">
                        <polygon points="13,2 3,14 12,14 11,22 21,10 12,10 13,2"></polygon>
                      </svg>`,
                skills: [
                    { name: "Java (Android)", level: 70, category: "intermediate" },
                    { name: "Swift (iOS)", level: 65, category: "intermediate" },
                    { name: "Native Modules", level: 85, category: "advanced" }
                ]
            },
            {
                title: "Backend & Database",
                icon: `<svg width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2">
                        <ellipse cx="12" cy="5" rx="9" ry="3"></ellipse>
                        <path d="M21 12c0 1.66-4 3-9 3s-9-1.34-9-3"></path>
                        <path d="M3 5v14c0 1.66 4 3 9 3s9-1.34 9-3V5"></path>
                      </svg>`,
                skills: [
                    { name: "Firebase", level: 90, category: "expert" },
                    { name: "GraphQL", level: 75, category: "intermediate" },
                    { name: "REST APIs", level: 85, category: "advanced" },
                    { name: "Socket.IO", level: 80, category: "advanced" }
                ]
            },
            {
                title: "DevOps & Tools",
                icon: `<svg width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2">
                        <circle cx="12" cy="12" r="3"></circle>
                        <path d="M19.4 15a1.65 1.65 0 0 0 .33 1.82l.06.06a2 2 0 0 1 0 2.83 2 2 0 0 1-2.83 0l-.06-.06a1.65 1.65 0 0 0-1.82-.33 1.65 1.65 0 0 0-1 1.51V21a2 2 0 0 1-2 2 2 2 0 0 1-2-2v-.09A1.65 1.65 0 0 0 9 19.4a1.65 1.65 0 0 0-1.82.33l-.06.06a2 2 0 0 1-2.83 0 2 2 0 0 1 0-2.83l.06-.06a1.65 1.65 0 0 0 .33-1.82 1.65 1.65 0 0 0-1.51-1H3a2 2 0 0 1-2-2 2 2 0 0 1 2-2h.09A1.65 1.65 0 0 0 4.6 9a1.65 1.65 0 0 0-.33-1.82l-.06-.06a2 2 0 0 1 0-2.83 2 2 0 0 1 2.83 0l.06.06a1.65 1.65 0 0 0 1.82.33H9a1.65 1.65 0 0 0 1-1.51V3a2 2 0 0 1 2-2 2 2 0 0 1 2 2v.09a1.65 1.65 0 0 0 1 1.51 1.65 1.65 0 0 0 1.82-.33l.06-.06a2 2 0 0 1 2.83 0 2 2 0 0 1 0 2.83l-.06.06a1.65 1.65 0 0 0-.33 1.82V9a1.65 1.65 0 0 0 1.51 1H21a2 2 0 0 1 2 2 2 2 0 0 1-2 2h-.09a1.65 1.65 0 0 0-1.51 1z"></path>
                      </svg>`,
                skills: [
                    { name: "CI/CD AppCenter", level: 80, category: "advanced" },
                    { name: "Fastlane", level: 75, category: "intermediate" },
                    { name: "Git", level: 85, category: "advanced" },
                    { name: "NPM Publishing", level: 85, category: "advanced" }
                ]
            },
            {
                title: "Specialized Skills",
                icon: `<svg width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2">
                        <path d="M12 2L2 7v10c0 5.55 3.84 10 9 9s9-4.45 9-9V7z"></path>
                        <path d="M12 22s8-4 8-10V7l-8-5-8 5v5c0 6 8 10 8 10z"></path>
                      </svg>`,
                skills: [
                    { name: "Blockchain for Mobile", level: 80, category: "advanced" },
                    { name: "Mini App / Super App", level: 85, category: "advanced" },
                    { name: "Performance Optimization", level: 90, category: "expert" },
                    { name: "A/B Testing", level: 75, category: "intermediate" }
                ]
            }
        ];
        this.init();
    }

    init() {
        // Component will be rendered by main app
    }

    render() {
        return `
            <section id="skills" class="section section-alt">
                <div class="container">
                    <div class="section-header text-center mb-6">
                        <h2 class="section-title">Technical Skills</h2>
                        <p class="section-subtitle">
                            Comprehensive expertise across mobile development stack and modern technologies
                        </p>
                    </div>
                    
                    <div class="skills-grid grid grid-2">
                        ${this.skillCategories.map(category => this.renderSkillCategory(category)).join('')}
                    </div>
                    
                    <div class="skills-summary">
                        <div class="summary-stats grid grid-4">
                            <div class="stat-card">
                                <div class="stat-icon expert">
                                    <svg width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2">
                                        <polygon points="12,2 15.09,8.26 22,9 17,14.14 18.18,21.02 12,17.77 5.82,21.02 7,14.14 2,9 8.91,8.26"></polygon>
                                    </svg>
                                </div>
                                <div class="stat-content">
                                    <span class="stat-number">${this.getSkillCountByCategory('expert')}</span>
                                    <span class="stat-label">Expert Level</span>
                                </div>
                            </div>
                            
                            <div class="stat-card">
                                <div class="stat-icon advanced">
                                    <svg width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2">
                                        <path d="M13 2L3 14h9l-1 8 10-12h-9l1-8z"></path>
                                    </svg>
                                </div>
                                <div class="stat-content">
                                    <span class="stat-number">${this.getSkillCountByCategory('advanced')}</span>
                                    <span class="stat-label">Advanced</span>
                                </div>
                            </div>
                            
                            <div class="stat-card">
                                <div class="stat-icon intermediate">
                                    <svg width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2">
                                        <path d="M9 11l3 3L22 4"></path>
                                        <path d="M21 12v7a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2V5a2 2 0 0 1 2-2h11"></path>
                                    </svg>
                                </div>
                                <div class="stat-content">
                                    <span class="stat-number">${this.getSkillCountByCategory('intermediate')}</span>
                                    <span class="stat-label">Intermediate</span>
                                </div>
                            </div>
                            
                            <div class="stat-card">
                                <div class="stat-icon total">
                                    <svg width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2">
                                        <path d="M17 21v-2a4 4 0 0 0-4-4H5a4 4 0 0 0-4 4v2"></path>
                                        <circle cx="9" cy="7" r="4"></circle>
                                        <path d="M23 21v-2a4 4 0 0 0-3-3.87"></path>
                                        <path d="M16 3.13a4 4 0 0 1 0 7.75"></path>
                                    </svg>
                                </div>
                                <div class="stat-content">
                                    <span class="stat-number">${this.getTotalSkillCount()}</span>
                                    <span class="stat-label">Total Skills</span>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </section>
        `;
    }

    renderSkillCategory(category) {
        return `
            <div class="skill-category card">
                <div class="category-header">
                    <div class="category-icon">
                        ${category.icon}
                    </div>
                    <h3 class="category-title">${category.title}</h3>
                </div>
                
                <div class="skills-list">
                    ${category.skills.map(skill => this.renderSkill(skill)).join('')}
                </div>
            </div>
        `;
    }

    renderSkill(skill) {
        return `
            <div class="skill-item" data-skill="${skill.name}" data-level="${skill.level}">
                <div class="skill-header">
                    <span class="skill-name">${skill.name}</span>
                    <span class="skill-badge badge-${skill.category}">${skill.category}</span>
                </div>
                <div class="skill-progress">
                    <div class="progress-bar">
                        <div class="progress-fill" style="width: 0%" data-width="${skill.level}%"></div>
                    </div>
                    <span class="skill-percentage">${skill.level}%</span>
                </div>
            </div>
        `;
    }

    getSkillCountByCategory(category) {
        return this.skillCategories.reduce((count, skillCategory) => {
            return count + skillCategory.skills.filter(skill => skill.category === category).length;
        }, 0);
    }

    getTotalSkillCount() {
        return this.skillCategories.reduce((count, category) => count + category.skills.length, 0);
    }

    attachEventListeners() {
        // Intersection Observer for skill animations
        const skillItems = document.querySelectorAll('.skill-item');
        
        const observer = new IntersectionObserver((entries) => {
            entries.forEach(entry => {
                if (entry.isIntersecting) {
                    this.animateSkillProgress(entry.target);
                }
            });
        }, {
            threshold: 0.5,
            rootMargin: '0px 0px -100px 0px'
        });

        skillItems.forEach(item => {
            observer.observe(item);
        });

        // Skill category filter (if you want to add this feature later)
        this.attachFilterListeners();
    }

    animateSkillProgress(skillElement) {
        const progressFill = skillElement.querySelector('.progress-fill');
        const targetWidth = progressFill.getAttribute('data-width');
        
        setTimeout(() => {
            progressFill.style.width = targetWidth;
            skillElement.classList.add('animated');
        }, Math.random() * 500); // Random delay for staggered animation
    }

    attachFilterListeners() {
        // This could be extended to add filtering functionality
        const categoryCards = document.querySelectorAll('.skill-category');
        
        categoryCards.forEach(card => {
            card.addEventListener('mouseenter', () => {
                card.classList.add('hovered');
            });
            
            card.addEventListener('mouseleave', () => {
                card.classList.remove('hovered');
            });
        });
    }

    getStyles() {
        return `
            .skills-grid {
                margin-bottom: 4rem;
            }

            .skill-category {
                padding: 2rem;
                height: fit-content;
                transition: all 0.3s ease;
            }

            .skill-category:hover {
                transform: translateY(-5px);
            }

            .category-header {
                display: flex;
                align-items: center;
                gap: 1rem;
                margin-bottom: 2rem;
                padding-bottom: 1rem;
                border-bottom: 2px solid var(--bg-tertiary);
            }

            .category-icon {
                width: 50px;
                height: 50px;
                background: var(--gradient-primary);
                border-radius: 12px;
                display: flex;
                align-items: center;
                justify-content: center;
                color: white;
                flex-shrink: 0;
            }

            .category-title {
                font-size: var(--font-size-xl);
                font-weight: 600;
                color: var(--text-primary);
                margin: 0;
            }

            .skills-list {
                display: flex;
                flex-direction: column;
                gap: 1.5rem;
            }

            .skill-item {
                transition: all 0.3s ease;
                opacity: 0.8;
            }

            .skill-item.animated {
                opacity: 1;
            }

            .skill-header {
                display: flex;
                justify-content: space-between;
                align-items: center;
                margin-bottom: 0.5rem;
            }

            .skill-name {
                font-weight: 500;
                color: var(--text-primary);
            }

            .skill-badge {
                font-size: var(--font-size-xs);
                text-transform: uppercase;
                letter-spacing: 0.5px;
                padding: 0.25rem 0.75rem;
                border-radius: 20px;
            }

            .badge-expert {
                background: linear-gradient(135deg, #667eea 0%, #764ba2 100%);
                color: white;
            }

            .badge-advanced {
                background: linear-gradient(135deg, #f093fb 0%, #f5576c 100%);
                color: white;
            }

            .badge-intermediate {
                background: linear-gradient(135deg, #4facfe 0%, #00f2fe 100%);
                color: white;
            }

            .skill-progress {
                display: flex;
                align-items: center;
                gap: 1rem;
            }

            .progress-bar {
                flex: 1;
                height: 8px;
                background: var(--bg-tertiary);
                border-radius: 4px;
                overflow: hidden;
            }

            .progress-fill {
                height: 100%;
                background: var(--gradient-primary);
                border-radius: 4px;
                transition: width 1s ease-in-out;
                position: relative;
            }

            .progress-fill::after {
                content: '';
                position: absolute;
                top: 0;
                left: 0;
                right: 0;
                bottom: 0;
                background: linear-gradient(90deg, transparent, rgba(255,255,255,0.3), transparent);
                animation: shimmer 2s infinite;
            }

            @keyframes shimmer {
                0% { transform: translateX(-100%); }
                100% { transform: translateX(100%); }
            }

            .skill-percentage {
                font-size: var(--font-size-sm);
                font-weight: 600;
                color: var(--text-secondary);
                min-width: 40px;
                text-align: right;
            }

            .skills-summary {
                margin-top: 4rem;
                padding-top: 4rem;
                border-top: 1px solid var(--border-color);
            }

            .summary-stats {
                gap: 2rem;
            }

            .stat-card {
                background: var(--bg-primary);
                border-radius: 12px;
                padding: 2rem;
                display: flex;
                align-items: center;
                gap: 1rem;
                box-shadow: var(--shadow-sm);
                border: 1px solid var(--border-color);
                transition: all 0.3s ease;
            }

            .stat-card:hover {
                transform: translateY(-2px);
                box-shadow: var(--shadow-md);
            }

            .stat-icon {
                width: 50px;
                height: 50px;
                border-radius: 12px;
                display: flex;
                align-items: center;
                justify-content: center;
                color: white;
                flex-shrink: 0;
            }

            .stat-icon.expert {
                background: linear-gradient(135deg, #667eea 0%, #764ba2 100%);
            }

            .stat-icon.advanced {
                background: linear-gradient(135deg, #f093fb 0%, #f5576c 100%);
            }

            .stat-icon.intermediate {
                background: linear-gradient(135deg, #4facfe 0%, #00f2fe 100%);
            }

            .stat-icon.total {
                background: linear-gradient(135deg, #11998e 0%, #38ef7d 100%);
            }

            .stat-content {
                display: flex;
                flex-direction: column;
            }

            .stat-number {
                font-size: var(--font-size-2xl);
                font-weight: 700;
                color: var(--text-primary);
                line-height: 1;
            }

            .stat-label {
                font-size: var(--font-size-sm);
                color: var(--text-secondary);
                font-weight: 500;
            }

            @media (max-width: 768px) {
                .skills-grid {
                    grid-template-columns: 1fr;
                }

                .summary-stats {
                    grid-template-columns: repeat(2, 1fr);
                }

                .stat-card {
                    padding: 1.5rem;
                }

                .category-header {
                    flex-direction: column;
                    text-align: center;
                    gap: 0.5rem;
                }
            }

            @media (max-width: 480px) {
                .summary-stats {
                    grid-template-columns: 1fr;
                }
            }
        `;
    }
}
