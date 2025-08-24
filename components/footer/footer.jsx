'use client';

import Link from 'next/link';
import React from 'react';
import './footer.css';

const Footer = () => {
    return (
        <footer id="modern-footer-wrapper" className="modern-footer-container">
            {/* Main Footer Content */}
            <section id="footer-main-section" className="footer-main-content">
                <div className="container py-4">
                    <div className="row g-4">
                        {/* Brand & Contact Section */}
                        <div className="col-lg-4 col-md-6">
                            <div className="footer-brand-section">
                                <div className="footer-brand-header mb-3">
                                    <div className="footer-brand-logo">
                                        <div className="footer-brand-icon">
                                            <i className="fas fa-code"></i>
                                        </div>
                                        <div className="brand-info">
                                            <h4 className="footer-brand-name">ANAGH K R</h4>
                                            <div className="footer-brand-tagline">
                                                Full Stack Developer
                                            </div>
                                        </div>
                                    </div>
                                </div>
                                <p className="footer-brand-description">
                                    Creating innovative digital solutions with modern technologies.
                                </p>
                                
                                {/* Contact Info */}
                                <div className="footer-contact-compact">
                                    <div className="contact-item-compact">
                                        <i className="fas fa-map-marker-alt"></i>
                                        <span>Kasaragod, Kerala</span>
                                    </div>
                                    <div className="contact-item-compact">
                                        <i className="fas fa-envelope"></i>
                                        <a href="mailto:anaghkrkkl@gmail.com">anaghkrkkl@gmail.com</a>
                                    </div>
                                    <div className="contact-item-compact">
                                        <i className="fas fa-phone-alt"></i>
                                        <a href="tel:+918075541805">+91 8075541805</a>
                                    </div>
                                </div>
                            </div>
                        </div>

                        {/* Quick Links */}
                        <div className="col-lg-2 col-md-3 col-6">
                            <div className="footer-links-section">
                                <h6 className="footer-section-title">Links</h6>
                                <ul className="footer-nav-links-compact">
                                    <li><Link href="/" className="footer-nav-link-compact">Home</Link></li>
                                    <li><Link href="/about" className="footer-nav-link-compact">About</Link></li>
                                    <li><Link href="/#skills" className="footer-nav-link-compact">Skills</Link></li>
                                    <li><Link href="/#works" className="footer-nav-link-compact">Portfolio</Link></li>
                                    <li><Link href="/contact" className="footer-nav-link-compact">Contact</Link></li>
                                </ul>
                            </div>
                        </div>

                        {/* Services */}
                        <div className="col-lg-2 col-md-3 col-6">
                            <div className="footer-links-section">
                                <h6 className="footer-section-title">Services</h6>
                                <ul className="footer-nav-links-compact">
                                    <li><Link href="/services" className="footer-nav-link-compact">Web Development</Link></li>
                                    <li><Link href="/services" className="footer-nav-link-compact">Mobile Apps</Link></li>
                                    <li><Link href="/services" className="footer-nav-link-compact">E-commerce</Link></li>
                                    <li><Link href="/services" className="footer-nav-link-compact">UI/UX Design</Link></li>
                                    <li><Link href="/resume" className="footer-nav-link-compact">Resume</Link></li>
                                </ul>
                            </div>
                        </div>

                        {/* CTA & Social */}
                        <div className="col-lg-4 col-md-6">
                            <div className="footer-cta-section">
                                <h6 className="footer-section-title">Let's Connect</h6>
                                <p className="footer-cta-text">Ready to start your project?</p>
                                
                                <div className="footer-cta-buttons mb-3">
                                    <Link href="/contact" className="footer-primary-cta-compact">
                                        <i className="fas fa-rocket me-2"></i>
                                        Get Started
                                    </Link>
                                </div>
                                
                                {/* Social Links */}
                                <div className="footer-social-links-compact">
                                    <a href="https://github.com/anagh534" 
                                       className="footer-social-link-compact github" 
                                       aria-label="GitHub"
                                       target="_blank"
                                       rel="noopener noreferrer">
                                        <i className="fab fa-github"></i>
                                    </a>
                                    <a href="https://www.linkedin.com/in/anagh-k-r/" 
                                       className="footer-social-link-compact linkedin" 
                                       aria-label="LinkedIn"
                                       target="_blank"
                                       rel="noopener noreferrer">
                                        <i className="fab fa-linkedin"></i>
                                    </a>
                                    <a href="https://wa.me/+918075541805" 
                                       className="footer-social-link-compact whatsapp" 
                                       aria-label="WhatsApp"
                                       target="_blank"
                                       rel="noopener noreferrer">
                                        <i className="fab fa-whatsapp"></i>
                                    </a>
                                    <a href="https://instagram.com/mr._uni_que___" 
                                       className="footer-social-link-compact instagram" 
                                       aria-label="Instagram"
                                       target="_blank"
                                       rel="noopener noreferrer">
                                        <i className="fab fa-instagram"></i>
                                    </a>
                                    <a href="mailto:anaghkrkkl@gmail.com" 
                                       className="footer-social-link-compact email" 
                                       aria-label="Email"
                                       target="_blank"
                                       rel="noopener noreferrer">
                                        <i className="fas fa-envelope"></i>
                                    </a>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </section>

            {/* Footer Bottom */}
            <section id="footer-bottom-section" className="footer-copyright-section">
                <div className="container">
                    <div className="row align-items-center py-3">
                        <div className="col-md-6 text-center text-md-start">
                            <p className="footer-copyright-text mb-0">
                                © 2024 <Link href="/" className="footer-copyright-link">ANAGH K R</Link>. 
                                Made with <i className="fas fa-heart text-danger mx-1"></i> in Kerala.
                            </p>
                        </div>
                        <div className="col-md-6 text-center text-md-end">
                            <button 
                                onClick={() => window.scrollTo({ top: 0, behavior: 'smooth' })}
                                className="back-to-top-btn-compact"
                                aria-label="Back to top"
                            >
                                <i className="fas fa-chevron-up"></i>
                                Top
                            </button>
                        </div>
                    </div>
                </div>
            </section>
        </footer>
    );
};

export default Footer;
