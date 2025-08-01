class Hero {
    constructor() {
        this.typewriterText = [
            "React Native Team Leader",
            "Mobile App Developer", 
            "Frontend Developer",
            "Tech Innovator"
        ];
        this.currentTextIndex = 0;
        this.currentCharIndex = 0;
        this.isDeleting = false;
        this.init();
    }

    init() {
        // Component will be rendered by main app
        // Typewriter and event listeners will be attached after render
    }

    render() {
        return `
            <section id="home" class="hero">
                <div class="hero-background">
                    <div class="hero-particles"></div>
                </div>
                <div class="container">
                    <div class="hero-content">
                        <div class="hero-text">
                            <h1 class="hero-title animate-fadeInUp">
                                Hi, I'm <span class="hero-name">Luong Huu Anh</span>
                            </h1>
                            <div class="hero-subtitle">
                                <span class="typewriter-text" id="typewriter-text"></span>
                                <span class="typewriter-cursor">|</span>
                            </div>
                            <p class="hero-description animate-fadeInUp">
                                Experienced React Native developer with 5+ years of expertise in mobile app development,
                                team leadership, and system architecture. Passionate about creating scalable, 
                                user-friendly applications that make a difference.
                            </p>
                            <div class="hero-cta animate-fadeInUp">
                                <a href="#contact" class="btn btn-primary">
                                    <svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2">
                                        <path d="M4 4h16c1.1 0 2 .9 2 2v12c0 1.1-.9 2-2 2H4c-1.1 0-2-.9-2-2V6c0-1.1.9-2 2-2z"></path>
                                        <polyline points="22,6 12,13 2,6"></polyline>
                                    </svg>
                                    Get In Touch
                                </a>
                                <a href="#projects" class="btn btn-secondary">
                                    <svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2">
                                        <path d="M13 2L3 14h9l-1 8 10-12h-9l1-8z"></path>
                                    </svg>
                                    View Projects
                                </a>
                            </div>
                            
                            <div class="hero-stats">
                                <div class="stat">
                                    <span class="stat-number">5+</span>
                                    <span class="stat-label">Years Experience</span>
                                </div>
                                <div class="stat">
                                    <span class="stat-number">1M+</span>
                                    <span class="stat-label">App Downloads</span>
                                </div>
                                <div class="stat">
                                    <span class="stat-number">15+</span>
                                    <span class="stat-label">Projects Completed</span>
                                </div>
                            </div>
                        </div>
                        
                        <div class="hero-image">
                            <div class="hero-avatar">
                                <div class="avatar-placeholder">
                                    <svg width="120" height="120" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="1">
                                        <path d="M20 21v-2a4 4 0 0 0-4-4H8a4 4 0 0 0-4 4v2"></path>
                                        <circle cx="12" cy="7" r="4"></circle>
                                    </svg>
                                </div>
                                <div class="avatar-ring"></div>
                            </div>
                        </div>
                    </div>
                </div>
                
                <div class="hero-scroll-indicator">
                    <div class="scroll-arrow">
                        <svg width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2">
                            <path d="M7 13l3 3 7-7"></path>
                            <path d="M12 3v9"></path>
                        </svg>
                    </div>
                </div>
            </section>
        `;
    }

    startTypewriter() {
        const typewriterElement = document.getElementById('typewriter-text');
        if (!typewriterElement) return;

        const currentText = this.typewriterText[this.currentTextIndex];
        
        if (this.isDeleting) {
            typewriterElement.textContent = currentText.substring(0, this.currentCharIndex - 1);
            this.currentCharIndex--;
            
            if (this.currentCharIndex === 0) {
                this.isDeleting = false;
                this.currentTextIndex = (this.currentTextIndex + 1) % this.typewriterText.length;
                setTimeout(() => this.startTypewriter(), 500);
            } else {
                setTimeout(() => this.startTypewriter(), 50);
            }
        } else {
            typewriterElement.textContent = currentText.substring(0, this.currentCharIndex + 1);
            this.currentCharIndex++;
            
            if (this.currentCharIndex === currentText.length) {
                setTimeout(() => {
                    this.isDeleting = true;
                    this.startTypewriter();
                }, 2000);
            } else {
                setTimeout(() => this.startTypewriter(), 100);
            }
        }
    }

    attachEventListeners() {
        // Start typewriter effect
        this.startTypewriter();
        
        // Scroll indicator click
        const scrollIndicator = document.querySelector('.hero-scroll-indicator');
        if (scrollIndicator) {
            scrollIndicator.addEventListener('click', () => {
                document.querySelector('#about').scrollIntoView({
                    behavior: 'smooth'
                });
            });
        }

        // Parallax effect for hero background
        window.addEventListener('scroll', () => {
            const scrolled = window.pageYOffset;
            const heroBackground = document.querySelector('.hero-background');
            if (heroBackground) {
                heroBackground.style.transform = `translateY(${scrolled * 0.5}px)`;
            }
        });
    }

    getStyles() {
        return `
            .hero {
                min-height: 100vh;
                display: flex;
                align-items: center;
                position: relative;
                overflow: hidden;
                padding-top: 80px;
            }

            .hero-background {
                position: absolute;
                top: 0;
                left: 0;
                right: 0;
                bottom: 0;
                background: linear-gradient(135deg, #667eea 0%, #764ba2 100%);
                opacity: 0.05;
                z-index: -1;
            }

            .hero-content {
                display: grid;
                grid-template-columns: 1fr 1fr;
                gap: 4rem;
                align-items: center;
                width: 100%;
            }

            .hero-title {
                font-size: var(--font-size-5xl);
                font-weight: 700;
                margin-bottom: 1rem;
                line-height: 1.2;
            }

            .hero-name {
                background: var(--gradient-primary);
                -webkit-background-clip: text;
                -webkit-text-fill-color: transparent;
                background-clip: text;
            }

            .hero-subtitle {
                font-size: var(--font-size-2xl);
                color: var(--text-secondary);
                margin-bottom: 2rem;
                min-height: 3rem;
                display: flex;
                align-items: center;
            }

            .typewriter-text {
                font-weight: 600;
                color: var(--primary-color);
            }

            .typewriter-cursor {
                animation: blink 1s infinite;
                color: var(--primary-color);
                font-weight: 300;
            }

            @keyframes blink {
                0%, 50% { opacity: 1; }
                51%, 100% { opacity: 0; }
            }

            .hero-description {
                font-size: var(--font-size-lg);
                color: var(--text-secondary);
                margin-bottom: 3rem;
                line-height: 1.7;
                max-width: 90%;
            }

            .hero-cta {
                display: flex;
                gap: 1rem;
                margin-bottom: 3rem;
            }

            .hero-stats {
                display: flex;
                gap: 3rem;
                padding-top: 2rem;
                border-top: 1px solid var(--border-color);
            }

            .stat {
                text-align: center;
            }

            .stat-number {
                display: block;
                font-size: var(--font-size-3xl);
                font-weight: 700;
                color: var(--primary-color);
                line-height: 1;
            }

            .stat-label {
                font-size: var(--font-size-sm);
                color: var(--text-secondary);
                font-weight: 500;
                margin-top: 0.25rem;
            }

            .hero-image {
                display: flex;
                justify-content: center;
                align-items: center;
            }

            .hero-avatar {
                position: relative;
                width: 300px;
                height: 300px;
                display: flex;
                align-items: center;
                justify-content: center;
            }

            .avatar-placeholder {
                width: 200px;
                height: 200px;
                background: var(--gradient-primary);
                border-radius: 50%;
                display: flex;
                align-items: center;
                justify-content: center;
                color: white;
                position: relative;
                z-index: 2;
            }

            .avatar-ring {
                position: absolute;
                width: 100%;
                height: 100%;
                border: 3px solid var(--primary-color);
                border-radius: 50%;
                opacity: 0.3;
                animation: rotate 20s linear infinite;
            }

            @keyframes rotate {
                from { transform: rotate(0deg); }
                to { transform: rotate(360deg); }
            }

            .hero-scroll-indicator {
                position: absolute;
                bottom: 2rem;
                left: 50%;
                transform: translateX(-50%);
                cursor: pointer;
                animation: bounce 2s infinite;
            }

            .scroll-arrow {
                color: var(--text-secondary);
                transition: color 0.3s ease;
            }

            .hero-scroll-indicator:hover .scroll-arrow {
                color: var(--primary-color);
            }

            @keyframes bounce {
                0%, 20%, 50%, 80%, 100% {
                    transform: translateX(-50%) translateY(0);
                }
                40% {
                    transform: translateX(-50%) translateY(-10px);
                }
                60% {
                    transform: translateX(-50%) translateY(-5px);
                }
            }

            /* Tablet styles */
            @media (max-width: 1024px) {
                .hero-content {
                    gap: 3rem;
                }
                
                .hero-title {
                    font-size: var(--font-size-4xl);
                }
                
                .hero-description {
                    max-width: 100%;
                }
            }

            /* Mobile styles */
            @media (max-width: 768px) {
                .hero {
                    min-height: 90vh;
                    padding-top: 100px;
                }
                
                .hero-content {
                    grid-template-columns: 1fr;
                    text-align: center;
                    gap: 2rem;
                }

                .hero-title {
                    font-size: var(--font-size-3xl);
                    margin-bottom: 0.75rem;
                }

                .hero-subtitle {
                    font-size: var(--font-size-xl);
                    justify-content: center;
                    min-height: 2.5rem;
                }

                .hero-description {
                    font-size: var(--font-size-base);
                    margin-bottom: 2rem;
                    max-width: 100%;
                }

                .hero-cta {
                    flex-direction: column;
                    align-items: center;
                    gap: 0.75rem;
                    margin-bottom: 2rem;
                    width: 100%;
                }
                
                .btn {
                    width: 100%;
                    max-width: 280px;
                    justify-content: center;
                    margin: 0 auto;
                }

                .hero-stats {
                    justify-content: center;
                    gap: 1.5rem;
                    flex-wrap: wrap;
                    padding-top: 1.5rem;
                }
                
                .stat {
                    min-width: 80px;
                }

                .hero-avatar {
                    width: 220px;
                    height: 220px;
                }

                .avatar-placeholder {
                    width: 140px;
                    height: 140px;
                }
                
                .avatar-placeholder svg {
                    width: 80px;
                    height: 80px;
                }
                
                .hero-scroll-indicator {
                    bottom: 1rem;
                }
            }
            
            /* Small mobile styles */
            @media (max-width: 480px) {
                .hero {
                    min-height: 85vh;
                }
                
                .hero-title {
                    font-size: var(--font-size-2xl);
                    line-height: 1.3;
                }

                .hero-subtitle {
                    font-size: var(--font-size-lg);
                    min-height: 2rem;
                }

                .hero-description {
                    font-size: var(--font-size-sm);
                    line-height: 1.6;
                }
                
                .btn {
                    padding: 0.75rem 1.5rem;
                    font-size: var(--font-size-sm);
                }

                .hero-stats {
                    gap: 1rem;
                }
                
                .stat-number {
                    font-size: var(--font-size-2xl);
                }
                
                .stat-label {
                    font-size: var(--font-size-xs);
                }

                .hero-avatar {
                    width: 180px;
                    height: 180px;
                }

                .avatar-placeholder {
                    width: 120px;
                    height: 120px;
                }
                
                .avatar-placeholder svg {
                    width: 60px;
                    height: 60px;
                }
            }
        `;
    }
}
