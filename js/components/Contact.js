class Contact {
    constructor() {
        this.init();
    }

    init() {
        // Component will be rendered by main app
    }

    render() {
        return `
            <section id="contact" class="section">
                <div class="container">
                    <div class="section-header text-center mb-6">
                        <h2 class="section-title">Get In Touch</h2>
                        <p class="section-subtitle">
                            Ready to work together? Let's discuss your next mobile project
                        </p>
                    </div>
                    
                    <div class="contact-content grid grid-2">
                        <div class="contact-info">
                            <div class="contact-intro">
                                <h3 class="contact-title">Let's Connect</h3>
                                <p class="contact-description">
                                    I'm always interested in new opportunities and exciting projects. 
                                    Whether you need a React Native developer, team leader, or technical consultant, 
                                    I'd love to hear from you.
                                </p>
                            </div>
                            
                            <div class="contact-details">
                                <div class="contact-item">
                                    <div class="contact-icon">
                                        <svg width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2">
                                            <path d="M4 4h16c1.1 0 2 .9 2 2v12c0 1.1-.9 2-2 2H4c-1.1 0-2-.9-2-2V6c0-1.1.9-2 2-2z"></path>
                                            <polyline points="22,6 12,13 2,6"></polyline>
                                        </svg>
                                    </div>
                                    <div class="contact-details-content">
                                        <h4>Email</h4>
                                        <a href="mailto:luonghuuanh.dev@gmail.com">luonghuuanh.dev@gmail.com</a>
                                    </div>
                                </div>
                                
                                <div class="contact-item">
                                    <div class="contact-icon">
                                        <svg width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2">
                                            <path d="M16 8a6 6 0 0 1 6 6v7h-4v-7a2 2 0 0 0-2-2 2 2 0 0 0-2 2v7h-4v-7a6 6 0 0 1 6-6z"></path>
                                            <rect x="2" y="9" width="4" height="12"></rect>
                                            <circle cx="4" cy="4" r="2"></circle>
                                        </svg>
                                    </div>
                                    <div class="contact-details-content">
                                        <h4>LinkedIn</h4>
                                        <a href="https://linkedin.com/in/luonghuuanh" target="_blank">linkedin.com/in/luonghuuanh</a>
                                    </div>
                                </div>
                                
                                <div class="contact-item">
                                    <div class="contact-icon">
                                        <svg width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2">
                                            <path d="M9 19c-5 1.5-5-2.5-7-3m14 6v-3.87a3.37 3.37 0 0 0-.94-2.61c3.14-.35 6.44-1.54 6.44-7A5.44 5.44 0 0 0 20 4.77 5.07 5.07 0 0 0 19.91 1S18.73.65 16 2.48a13.38 13.38 0 0 0-7 0C6.27.65 5.09 1 5.09 1A5.07 5.07 0 0 0 5 4.77a5.44 5.44 0 0 0-1.5 3.78c0 5.42 3.3 6.61 6.44 7A3.37 3.37 0 0 0 9 18.13V22"></path>
                                        </svg>
                                    </div>
                                    <div class="contact-details-content">
                                        <h4>GitHub</h4>
                                        <a href="https://github.com/huuanhopp" target="_blank">github.com/huuanhopp</a>
                                    </div>
                                </div>
                                
                                <div class="contact-item">
                                    <div class="contact-icon">
                                        <svg width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2">
                                            <path d="M21 10c0 7-9 13-9 13s-9-6-9-13a9 9 0 0 1 18 0z"></path>
                                            <circle cx="12" cy="10" r="3"></circle>
                                        </svg>
                                    </div>
                                    <div class="contact-details-content">
                                        <h4>Location</h4>
                                        <span>Vietnam</span>
                                    </div>
                                </div>
                            </div>
                            
                            <div class="contact-availability">
                                <div class="availability-badge">
                                    <div class="availability-dot"></div>
                                    <span>Available for freelance projects</span>
                                </div>
                            </div>
                        </div>
                        
                        <div class="contact-form-container">
                            <form class="contact-form" id="contact-form">
                                <div class="form-group">
                                    <label for="name" class="form-label">Name *</label>
                                    <input type="text" id="name" name="name" class="form-input" required>
                                </div>
                                
                                <div class="form-group">
                                    <label for="email" class="form-label">Email *</label>
                                    <input type="email" id="email" name="email" class="form-input" required>
                                </div>
                                
                                <div class="form-group">
                                    <label for="company" class="form-label">Company</label>
                                    <input type="text" id="company" name="company" class="form-input">
                                </div>
                                
                                <div class="form-group">
                                    <label for="project-type" class="form-label">Project Type</label>
                                    <select id="project-type" name="project-type" class="form-select">
                                        <option value="">Select project type</option>
                                        <option value="mobile-app">Mobile App Development</option>
                                        <option value="team-lead">Team Leadership</option>
                                        <option value="consulting">Technical Consulting</option>
                                        <option value="code-review">Code Review</option>
                                        <option value="other">Other</option>
                                    </select>
                                </div>
                                
                                <div class="form-group">
                                    <label for="budget" class="form-label">Budget Range</label>
                                    <select id="budget" name="budget" class="form-select">
                                        <option value="">Select budget range</option>
                                        <option value="under-5k">Under $5,000</option>
                                        <option value="5k-10k">$5,000 - $10,000</option>
                                        <option value="10k-25k">$10,000 - $25,000</option>
                                        <option value="25k-50k">$25,000 - $50,000</option>
                                        <option value="over-50k">Over $50,000</option>
                                    </select>
                                </div>
                                
                                <div class="form-group">
                                    <label for="message" class="form-label">Message *</label>
                                    <textarea id="message" name="message" class="form-textarea" rows="5" 
                                              placeholder="Tell me about your project..." required></textarea>
                                </div>
                                
                                <button type="submit" class="btn btn-primary btn-full">
                                    <svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2">
                                        <line x1="22" y1="2" x2="11" y2="13"></line>
                                        <polygon points="22,2 15,22 11,13 2,9 22,2"></polygon>
                                    </svg>
                                    Send Message
                                </button>
                            </form>
                        </div>
                    </div>
                </div>
            </section>
        `;
    }

    attachEventListeners() {
        // Form submission handler
        const form = document.getElementById('contact-form');
        if (form) {
            form.addEventListener('submit', (e) => {
                this.handleFormSubmission(e);
            });
        }

        // Form validation
        const inputs = document.querySelectorAll('.form-input, .form-textarea, .form-select');
        inputs.forEach(input => {
            input.addEventListener('blur', () => {
                this.validateField(input);
            });
            
            input.addEventListener('input', () => {
                this.clearFieldError(input);
            });
        });

        // Animation on scroll
        const contactItems = document.querySelectorAll('.contact-item');
        const observer = new IntersectionObserver((entries) => {
            entries.forEach((entry, index) => {
                if (entry.isIntersecting) {
                    setTimeout(() => {
                        entry.target.classList.add('animate-in');
                    }, index * 100);
                }
            });
        }, { threshold: 0.3 });

        contactItems.forEach(item => {
            observer.observe(item);
        });
    }

    handleFormSubmission(e) {
        e.preventDefault();
        
        const formData = new FormData(e.target);
        const data = Object.fromEntries(formData);
        
        // Validate required fields
        if (!this.validateForm(data)) {
            return;
        }
        
        // Create mailto link with form data
        const subject = encodeURIComponent(`New Project Inquiry from ${data.name}`);
        const body = encodeURIComponent(
            `Name: ${data.name}
Email: ${data.email}
Company: ${data.company || 'Not specified'}
Project Type: ${data['project-type'] || 'Not specified'}
Budget Range: ${data.budget || 'Not specified'}

Message:
${data.message}`
        );
        
        const mailtoLink = `mailto:luonghuuanh.dev@gmail.com?subject=${subject}&body=${body}`;
        window.location.href = mailtoLink;
        
        // Show success message
        this.showSuccessMessage();
    }

    validateForm(data) {
        let isValid = true;
        
        // Validate required fields
        const requiredFields = ['name', 'email', 'message'];
        requiredFields.forEach(field => {
            const input = document.getElementById(field);
            if (!data[field] || data[field].trim() === '') {
                this.showFieldError(input, 'This field is required');
                isValid = false;
            }
        });
        
        // Validate email format
        if (data.email && !this.isValidEmail(data.email)) {
            const emailInput = document.getElementById('email');
            this.showFieldError(emailInput, 'Please enter a valid email address');
            isValid = false;
        }
        
        return isValid;
    }

    validateField(input) {
        const value = input.value.trim();
        
        if (input.required && !value) {
            this.showFieldError(input, 'This field is required');
            return false;
        }
        
        if (input.type === 'email' && value && !this.isValidEmail(value)) {
            this.showFieldError(input, 'Please enter a valid email address');
            return false;
        }
        
        this.clearFieldError(input);
        return true;
    }

    showFieldError(input, message) {
        this.clearFieldError(input);
        
        input.classList.add('error');
        const errorElement = document.createElement('span');
        errorElement.className = 'field-error';
        errorElement.textContent = message;
        
        input.parentNode.appendChild(errorElement);
    }

    clearFieldError(input) {
        input.classList.remove('error');
        const errorElement = input.parentNode.querySelector('.field-error');
        if (errorElement) {
            errorElement.remove();
        }
    }

    isValidEmail(email) {
        const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
        return emailRegex.test(email);
    }

    showSuccessMessage() {
        const form = document.getElementById('contact-form');
        const successMessage = document.createElement('div');
        successMessage.className = 'success-message';
        successMessage.innerHTML = `
            <div class="success-content">
                <svg width="48" height="48" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2">
                    <path d="M9 11l3 3L22 4"></path>
                    <path d="M21 12v7a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2V5a2 2 0 0 1 2-2h11"></path>
                </svg>
                <h3>Message Sent!</h3>
                <p>Thank you for reaching out. I'll get back to you as soon as possible.</p>
            </div>
        `;
        
        form.style.display = 'none';
        form.parentNode.appendChild(successMessage);
        
        // Reset form and show it again after 3 seconds
        setTimeout(() => {
            form.reset();
            form.style.display = 'block';
            successMessage.remove();
        }, 3000);
    }

    getStyles() {
        return `
            .contact-content {
                gap: 4rem;
                align-items: start;
            }

            .contact-intro {
                margin-bottom: 3rem;
            }

            .contact-title {
                font-size: var(--font-size-2xl);
                font-weight: 600;
                color: var(--text-primary);
                margin-bottom: 1rem;
            }

            .contact-description {
                color: var(--text-secondary);
                line-height: 1.7;
                font-size: var(--font-size-lg);
            }

            .contact-details {
                margin-bottom: 3rem;
            }

            .contact-item {
                display: flex;
                align-items: flex-start;
                gap: 1rem;
                margin-bottom: 2rem;
                opacity: 0;
                transform: translateX(-20px);
                transition: all 0.6s ease;
            }

            .contact-item.animate-in {
                opacity: 1;
                transform: translateX(0);
            }

            .contact-icon {
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

            .contact-details-content h4 {
                font-size: var(--font-size-base);
                font-weight: 600;
                color: var(--text-primary);
                margin-bottom: 0.25rem;
            }

            .contact-details-content a {
                color: var(--primary-color);
                text-decoration: none;
                transition: color 0.3s ease;
            }

            .contact-details-content a:hover {
                color: var(--text-primary);
            }

            .contact-details-content span {
                color: var(--text-secondary);
            }

            .contact-availability {
                padding: 1.5rem;
                background: var(--bg-tertiary);
                border-radius: 12px;
                border: 1px solid var(--border-color);
            }

            .availability-badge {
                display: flex;
                align-items: center;
                gap: 0.75rem;
                font-weight: 500;
                color: var(--text-primary);
            }

            .availability-dot {
                width: 8px;
                height: 8px;
                background: #10b981;
                border-radius: 50%;
                animation: pulse 2s infinite;
            }

            @keyframes pulse {
                0% {
                    box-shadow: 0 0 0 0 rgba(16, 185, 129, 0.7);
                }
                70% {
                    box-shadow: 0 0 0 10px rgba(16, 185, 129, 0);
                }
                100% {
                    box-shadow: 0 0 0 0 rgba(16, 185, 129, 0);
                }
            }

            .contact-form-container {
                background: var(--bg-primary);
                border: 1px solid var(--border-color);
                border-radius: 16px;
                padding: 2.5rem;
                box-shadow: var(--shadow-md);
            }

            .contact-form {
                display: flex;
                flex-direction: column;
                gap: 1.5rem;
            }

            .form-group {
                display: flex;
                flex-direction: column;
                gap: 0.5rem;
            }

            .form-label {
                font-weight: 500;
                color: var(--text-primary);
                font-size: var(--font-size-sm);
            }

            .form-input,
            .form-textarea,
            .form-select {
                padding: 0.75rem 1rem;
                border: 2px solid var(--border-color);
                border-radius: 8px;
                font-size: var(--font-size-base);
                background: var(--bg-primary);
                color: var(--text-primary);
                transition: all 0.3s ease;
            }

            .form-input:focus,
            .form-textarea:focus,
            .form-select:focus {
                outline: none;
                border-color: var(--primary-color);
                box-shadow: 0 0 0 3px rgba(102, 126, 234, 0.1);
            }

            .form-input.error,
            .form-textarea.error,
            .form-select.error {
                border-color: #ef4444;
            }

            .form-textarea {
                resize: vertical;
                min-height: 120px;
            }

            .field-error {
                color: #ef4444;
                font-size: var(--font-size-xs);
                margin-top: 0.25rem;
            }

            .btn-full {
                width: 100%;
                justify-content: center;
                margin-top: 1rem;
            }

            .success-message {
                text-align: center;
                padding: 3rem;
                background: var(--bg-tertiary);
                border-radius: 12px;
                border: 1px solid var(--border-color);
            }

            .success-content svg {
                color: #10b981;
                margin-bottom: 1rem;
            }

            .success-content h3 {
                font-size: var(--font-size-xl);
                font-weight: 600;
                color: var(--text-primary);
                margin-bottom: 0.5rem;
            }

            .success-content p {
                color: var(--text-secondary);
            }

            @media (max-width: 768px) {
                .contact-content {
                    grid-template-columns: 1fr;
                    gap: 2rem;
                }

                .contact-form-container {
                    padding: 2rem;
                }

                .contact-item {
                    flex-direction: column;
                    text-align: center;
                    align-items: center;
                }

                .contact-details-content {
                    text-align: center;
                }
            }
        `;
    }
}