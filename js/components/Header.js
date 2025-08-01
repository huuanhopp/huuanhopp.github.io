class Header {
    constructor() {
        this.isScrolled = false;
        this.init();
    }

    init() {
        this.render();
        this.attachEventListeners();
    }

    render() {
        return `
            <header id="header" class="header">
                <nav class="navbar">
                    <div class="container">
                        <div class="nav-content">
                            <div class="nav-brand">
                                <a href="#home" class="brand-link">
                                    <span class="brand-text">Luong Huu Anh</span>
                                </a>
                            </div>
                            
                            <ul class="nav-menu" id="nav-menu">
                                <li class="nav-item">
                                    <a href="#home" class="nav-link">Home</a>
                                </li>
                                <li class="nav-item">
                                    <a href="#about" class="nav-link">About</a>
                                </li>
                                <li class="nav-item">
                                    <a href="#experience" class="nav-link">Experience</a>
                                </li>
                                <li class="nav-item">
                                    <a href="#projects" class="nav-link">Projects</a>
                                </li>
                                <li class="nav-item">
                                    <a href="#skills" class="nav-link">Skills</a>
                                </li>
                                <li class="nav-item">
                                    <a href="#contact" class="nav-link">Contact</a>
                                </li>
                            </ul>
                            
                            <button class="mobile-menu-toggle" id="mobile-menu-toggle">
                                <span class="hamburger-line"></span>
                                <span class="hamburger-line"></span>
                                <span class="hamburger-line"></span>
                            </button>
                        </div>
                    </div>
                </nav>
            </header>
        `;
    }

    attachEventListeners() {
        // Smooth scrolling for navigation links
        document.addEventListener('click', (e) => {
            if (e.target.classList.contains('nav-link')) {
                e.preventDefault();
                const targetId = e.target.getAttribute('href');
                const targetSection = document.querySelector(targetId);
                
                if (targetSection) {
                    targetSection.scrollIntoView({
                        behavior: 'smooth',
                        block: 'start'
                    });
                }
                
                // Close mobile menu if open
                this.closeMobileMenu();
            }
        });

        // Mobile menu toggle
        const mobileToggle = document.getElementById('mobile-menu-toggle');
        const navMenu = document.getElementById('nav-menu');
        
        if (mobileToggle && navMenu) {
            mobileToggle.addEventListener('click', () => {
                navMenu.classList.toggle('active');
                mobileToggle.classList.toggle('active');
            });
        }

        // Header scroll effect
        window.addEventListener('scroll', () => {
            const header = document.getElementById('header');
            if (window.scrollY > 100) {
                if (!this.isScrolled) {
                    header.classList.add('scrolled');
                    this.isScrolled = true;
                }
            } else {
                if (this.isScrolled) {
                    header.classList.remove('scrolled');
                    this.isScrolled = false;
                }
            }
        });
    }

    closeMobileMenu() {
        const navMenu = document.getElementById('nav-menu');
        const mobileToggle = document.getElementById('mobile-menu-toggle');
        
        if (navMenu && mobileToggle) {
            navMenu.classList.remove('active');
            mobileToggle.classList.remove('active');
        }
    }

    getStyles() {
        return `
            .header {
                position: fixed;
                top: 0;
                left: 0;
                right: 0;
                z-index: 1000;
                background: rgba(255, 255, 255, 0.95);
                backdrop-filter: blur(10px);
                border-bottom: 1px solid var(--border-color);
                transition: all 0.3s ease;
            }

            .header.scrolled {
                background: rgba(255, 255, 255, 0.98);
                box-shadow: var(--shadow-md);
            }

            .navbar {
                padding: 1rem 0;
            }

            .nav-content {
                display: flex;
                align-items: center;
                justify-content: space-between;
            }

            .brand-link {
                text-decoration: none;
                color: var(--text-primary);
            }

            .brand-text {
                font-size: var(--font-size-xl);
                font-weight: 700;
                background: var(--gradient-primary);
                -webkit-background-clip: text;
                -webkit-text-fill-color: transparent;
                background-clip: text;
            }

            .nav-menu {
                display: flex;
                list-style: none;
                gap: 2rem;
                align-items: center;
            }

            .nav-link {
                text-decoration: none;
                color: var(--text-secondary);
                font-weight: 500;
                transition: color 0.3s ease;
                position: relative;
            }

            .nav-link:hover {
                color: var(--primary-color);
            }

            .nav-link::after {
                content: '';
                position: absolute;
                bottom: -5px;
                left: 0;
                width: 0;
                height: 2px;
                background: var(--gradient-primary);
                transition: width 0.3s ease;
            }

            .nav-link:hover::after {
                width: 100%;
            }

            .mobile-menu-toggle {
                display: none;
                flex-direction: column;
                background: none;
                border: none;
                cursor: pointer;
                padding: 0.5rem;
                gap: 4px;
            }

            .hamburger-line {
                width: 25px;
                height: 3px;
                background: var(--text-primary);
                transition: all 0.3s ease;
            }

            .mobile-menu-toggle.active .hamburger-line:nth-child(1) {
                transform: rotate(45deg) translate(6px, 6px);
            }

            .mobile-menu-toggle.active .hamburger-line:nth-child(2) {
                opacity: 0;
            }

            .mobile-menu-toggle.active .hamburger-line:nth-child(3) {
                transform: rotate(-45deg) translate(6px, -6px);
            }

            @media (max-width: 768px) {
                .nav-menu {
                    position: fixed;
                    top: 100%;
                    left: 0;
                    right: 0;
                    background: rgba(255, 255, 255, 0.98);
                    backdrop-filter: blur(10px);
                    flex-direction: column;
                    padding: 2rem;
                    transform: translateY(-100%);
                    opacity: 0;
                    visibility: hidden;
                    transition: all 0.3s ease;
                    border-bottom: 1px solid var(--border-color);
                }

                .nav-menu.active {
                    transform: translateY(0);
                    opacity: 1;
                    visibility: visible;
                }

                .mobile-menu-toggle {
                    display: flex;
                }
            }
        `;
    }
}
