class Experience {
    constructor() {
        this.experiences = [
            {
                id: 1,
                title: "React Native Team Leader",
                company: "Viettel Software",
                period: "May 2024 - Present",
                location: "Mosan",
                description: "Leading development of Mosan e-wallet application for Timor market",
                achievements: [
                    "Managing team of 8 members (3 backend, 3 frontend, 2 testers)",
                    "Optimized application performance with callback, memo techniques",
                    "Published reusable libraries on NPM",
                    "Mentored and trained team members on best practices"
                ],
                technologies: ["React Native", "Redux Saga", "React Native Reanimated", "NPM"],
                type: "current"
            },
            {
                id: 2,
                title: "React Native Team Leader",
                company: "Step Up",
                period: "Apr 2022 - May 2024",
                location: "The Coach",
                description: "Led development of The Coach app with 1M+ downloads and 4.85/5 rating",
                achievements: [
                    "Achieved 1M+ downloads with 4.85/5 star rating",
                    "Integrated Jitsi for video/audio calls with performance optimization",
                    "Developed Mini App Club for social chatting and gaming",
                    "Integrated multiple payment methods (Momo, Apple Pay, Google Play)",
                    "Conducted A/B Testing and Alpha Testing for feature optimization"
                ],
                technologies: ["React Native", "Redux Saga", "React Native Reanimated", "Victory Chart", "Socket", "Firebase", "Jitsi"],
                type: "leadership"
            },
            {
                id: 3,
                title: "React Native Developer",
                company: "Sotatek",
                period: "Dec 2021 - Apr 2022",
                location: "Remote",
                description: "Developed cryptocurrency applications including Super Wallet and Flock Trade",
                achievements: [
                    "Built Super Wallet with multi-network cryptocurrency support",
                    "Integrated NFT viewing functionality with OpenSea",
                    "Implemented copy trading features using Binance API",
                    "Optimized app performance for handling large datasets"
                ],
                technologies: ["React Native", "Redux Saga", "React Native Reanimated", "GraphQL", "Victory Chart", "i18n"],
                type: "development"
            },
            {
                id: 4,
                title: "React Native Developer",
                company: "Fabbi JSC",
                period: "Oct 2020 - Feb 2021",
                location: "Vietnam",
                description: "Developed livestreaming applications and digital business card solutions",
                achievements: [
                    "Built Liver Kick livestreaming app with real-time features",
                    "Integrated Agora SDK for live streaming functionality",
                    "Implemented in-app purchase system for gift packages",
                    "Created comprehensive payment integration documentation"
                ],
                technologies: ["React Native", "Agora", "Redux Saga", "Firebase", "In-app Purchase"],
                type: "development"
            }
        ];
        this.init();
    }

    init() {
        // Component will be rendered by main app
    }

    render() {
        return `
            <section id="experience" class="section">
                <div class="container">
                    <div class="section-header text-center mb-6">
                        <h2 class="section-title">Professional Experience</h2>
                        <p class="section-subtitle">
                            5+ years of mobile development expertise across various industries
                        </p>
                    </div>
                    
                    <div class="experience-timeline">
                        ${this.experiences.map((exp, index) => this.renderExperienceItem(exp, index)).join('')}
                    </div>
                </div>
            </section>
        `;
    }

    renderExperienceItem(experience, index) {
        const isEven = index % 2 === 0;
        return `
            <div class="timeline-item ${isEven ? 'timeline-left' : 'timeline-right'}" data-experience="${experience.id}">
                <div class="timeline-content">
                    <div class="timeline-card card">

                        
                        <div class="card-header">
                            <h3 class="card-title">${experience.title}</h3>
                            <div class="company-info">
                                <span class="company-name">${experience.company}</span>
                                <span class="company-location">${experience.location}</span>
                            </div>
                            <span class="period">${experience.period}</span>
                        </div>
                        
                        <div class="card-content">
                            <p class="experience-description">${experience.description}</p>
                            
                            <div class="achievements">
                                <h4 class="achievements-title">Key Achievements</h4>
                                <ul class="achievements-list">
                                    ${experience.achievements.map(achievement => 
                                        `<li class="achievement-item">${achievement}</li>`
                                    ).join('')}
                                </ul>
                            </div>
                            
                            <div class="technologies">
                                <h4 class="tech-title">Technologies Used</h4>
                                <div class="tech-badges">
                                    ${experience.technologies.map(tech => 
                                        `<span class="badge badge-primary">${tech}</span>`
                                    ).join('')}
                                </div>
                            </div>
                        </div>
                        <div class="timeline-badge ${experience.type}">
                            ${this.getIcon(experience.type)}
                        </div>
                    </div>
                </div>
            </div>
        `;
    }

    getIcon(type) {
        const icons = {
            current: `<svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2">
                        <path d="M12 2L2 7v10c0 5.55 3.84 10 9 9s9-4.45 9-9V7z"></path>
                      </svg>`,
            leadership: `<svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2">
                          <path d="M17 21v-2a4 4 0 0 0-4-4H5a4 4 0 0 0-4 4v2"></path>
                          <circle cx="9" cy="7" r="4"></circle>
                          <path d="M23 21v-2a4 4 0 0 0-3-3.87"></path>
                          <path d="M16 3.13a4 4 0 0 1 0 7.75"></path>
                        </svg>`,
            development: `<svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2">
                           <polyline points="16,18 22,12 16,6"></polyline>
                           <polyline points="8,6 2,12 8,18"></polyline>
                         </svg>`
        };
        return icons[type] || icons.development;
    }

    attachEventListeners() {
        // Intersection Observer for animations
        const timelineItems = document.querySelectorAll('.timeline-item');

        const observer = new IntersectionObserver((entries) => {
            entries.forEach(entry => {
                if (entry.isIntersecting) {
                    entry.target.classList.add('animate-in');
                }
            });
        }, {
            threshold: 0.3,
            rootMargin: '0px 0px -50px 0px'
        });

        timelineItems.forEach(item => {
            observer.observe(item);
        });
    }

    getStyles() {
        return `
            .section-header {
                margin-bottom: 4rem;
            }

            .section-title {
                font-size: var(--font-size-4xl);
                font-weight: 700;
                color: var(--text-primary);
                margin-bottom: 1rem;
            }

            .section-subtitle {
                font-size: var(--font-size-lg);
                color: var(--text-secondary);
                max-width: 600px;
                margin: 0 auto;
            }

            .experience-timeline {
                position: relative;
                max-width: 1000px;
                margin: 0 auto;
            }

            .experience-timeline::before {
                content: '';
                position: absolute;
                top: 0;
                left: 50%;
                transform: translateX(-50%);
                width: 2px;
                height: 100%;
                background: var(--gradient-primary);
                z-index: 0;
            }

            .timeline-item {
                position: relative;
                margin-bottom: 4rem;
                opacity: 0;
                transform: translateY(50px);
                transition: all 0.6s ease;
            }

            .timeline-item.animate-in {
                opacity: 1;
                transform: translateY(0);
            }

            .timeline-left .timeline-content {
                margin-right: 55%;
                text-align: right;
            }

            .timeline-right .timeline-content {
                margin-left: 55%;
                text-align: left;
            }

            .timeline-card {
                position: relative;
                background: var(--bg-primary);
                border: 1px solid var(--border-color);
                border-radius: 12px;
                padding: 2rem;
                box-shadow: var(--shadow-md);
                transition: all 0.3s ease;
            }

            .timeline-card:hover {
                transform: translateY(-4px);
                box-shadow: var(--shadow-lg);
            }

            .timeline-badge {
                position: absolute;
                top: 50%;
                width: 50px;
                height: 50px;
                border-radius: 50%;
                display: flex;
                align-items: center;
                justify-content: center;
                color: white;
                z-index: 10;
                box-shadow: var(--shadow-md);
                border: 3px solid var(--bg-primary);
            }

            .timeline-left .timeline-badge {
                right: -75px;
                transform: translateY(-50%);
            }

            .timeline-right .timeline-badge {
                left: -75px;
                transform: translateY(-50%);
            }

            .timeline-badge.current {
                background: var(--gradient-primary);
            }

            .timeline-badge.leadership {
                background: var(--gradient-secondary);
            }

            .timeline-badge.development {
                background: linear-gradient(135deg, #11998e 0%, #38ef7d 100%);
            }

            .company-info {
                display: flex;
                flex-direction: column;
                gap: 0.25rem;
                margin: 0.5rem 0;
            }

            .company-name {
                font-size: var(--font-size-lg);
                font-weight: 600;
                color: var(--primary-color);
            }

            .company-location {
                font-size: var(--font-size-sm);
                color: var(--text-secondary);
                font-style: italic;
            }

            .period {
                display: inline-block;
                padding: 0.25rem 0.75rem;
                background: var(--bg-tertiary);
                color: var(--text-secondary);
                border-radius: 20px;
                font-size: var(--font-size-sm);
                font-weight: 500;
                margin-top: 0.5rem;
            }

            .experience-description {
                color: var(--text-secondary);
                margin-bottom: 1.5rem;
                line-height: 1.6;
            }

            .achievements {
                margin-bottom: 1.5rem;
            }

            .achievements-title, .tech-title {
                font-size: var(--font-size-base);
                font-weight: 600;
                color: var(--text-primary);
                margin-bottom: 0.75rem;
            }

            .achievements-list {
                list-style: none;
                padding: 0;
            }

            .achievement-item {
                position: relative;
                padding-left: 1.5rem;
                margin-bottom: 0.5rem;
                color: var(--text-secondary);
                line-height: 1.5;
            }

            .achievement-item::before {
                content: '→';
                position: absolute;
                left: 0;
                color: var(--primary-color);
                font-weight: bold;
            }

            .tech-badges {
                display: flex;
                flex-wrap: wrap;
                gap: 0.5rem;
            }

            /* Tablet styles */
            @media (max-width: 1024px) {
                .experience-timeline {
                    max-width: 800px;
                }
                
                .timeline-card {
                    padding: 1.75rem;
                }
            }

            /* Mobile styles */
            @media (max-width: 768px) {
                .section {
                    padding: var(--space-4xl) 0;
                }
                
                .section-header {
                    margin-bottom: 3rem;
                }
                
                .section-title {
                    font-size: var(--font-size-3xl);
                }
                
                .section-subtitle {
                    font-size: var(--font-size-base);
                }

                .experience-timeline::before {
                    left: 20px;
                    width: 3px;
                }

                .timeline-item {
                    margin-bottom: 3rem;
                }

                .timeline-left .timeline-content,
                .timeline-right .timeline-content {
                    margin-left: 60px;
                    margin-right: 0;
                    text-align: left;
                }

                .timeline-left .timeline-badge,
                .timeline-right .timeline-badge {
                    left: 21.5px;
                    right: auto;
                    transform: translateX(-50%) translateY(-50%);
                    width: 40px;
                    height: 40px;
                    border-width: 2px;
                }

                .timeline-card {
                    padding: 1.5rem;
                    border-radius: 8px;
                }

                .card-title {
                    font-size: var(--font-size-lg);
                }
                
                .company-name {
                    font-size: var(--font-size-base);
                }
                
                .achievements-title, .tech-title {
                    font-size: var(--font-size-sm);
                    font-weight: 700;
                }
                
                .tech-badges {
                    gap: 0.25rem;
                }
                
                .badge {
                    font-size: var(--font-size-xs);
                    padding: 0.25rem 0.5rem;
                }
            }
            
            /* Small mobile styles */
            @media (max-width: 480px) {
                .section {
                    padding: var(--space-3xl) 0;
                }
                
                .section-title {
                    font-size: var(--font-size-2xl);
                }
                
                .experience-timeline::before {
                    left: 15px;
                }
                
                .timeline-left .timeline-content,
                .timeline-right .timeline-content {
                    margin-left: 50px;
                }
                
                .timeline-left .timeline-badge,
                .timeline-right .timeline-badge {
                    left: 16.5px;
                    transform: translateX(-50%) translateY(-50%);
                    width: 32px;
                    height: 32px;
                }
                
                .timeline-badge svg {
                    width: 16px;
                    height: 16px;
                }
                
                .timeline-card {
                    padding: 1rem;
                }
                
                .card-title {
                    font-size: var(--font-size-base);
                    line-height: 1.3;
                }
                
                .company-name {
                    font-size: var(--font-size-sm);
                }
                
                .experience-description {
                    font-size: var(--font-size-sm);
                }
                
                .achievement-item {
                    font-size: var(--font-size-sm);
                    padding-left: 1rem;
                }
            }
        `;
    }
}
