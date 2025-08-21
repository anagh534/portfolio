import Link from 'next/link';
import React from 'react';
import './footer.css';

const Footer = () => {
    return (
        <footer className="modern-footer">
            <div className="footer-wave"></div>
            
            {/* Social Media Section */}
            <section className="social-header">
                <div className="container">
                    <div className="row align-items-center">
                        <div className="col-md-6 text-center text-md-start">
                            <p className="social-text">Get connected with us on social networks</p>
                        </div>
                        <div className="col-md-6">
                            <div className="social-links justify-content-center justify-content-md-end">
                                <a href="https://github.com/anagh534" className="social-link" aria-label="GitHub">
                                    <i className="fab fa-github"></i>
                                </a>
                                <a href="https://www.linkedin.com/in/anagh-k-r/" className="social-link" aria-label="LinkedIn">
                                    <i className="fab fa-linkedin"></i>
                                </a>
                                <a href="https://wa.me/+918075541805" className="social-link" aria-label="WhatsApp">
                                    <i className="fab fa-whatsapp"></i>
                                </a>
                                <a href="https://instagram.com/mr._uni_que___" className="social-link" aria-label="Instagram">
                                    <i className="fab fa-instagram"></i>
                                </a>
                            </div>
                        </div>
                    </div>
                </div>
            </section>

            {/* Main Footer Content */}
            <section className="footer-main">
                <div className="container footer-content">
                    <div className="row">
                        {/* Brand Section */}
                        <div className="col-lg-4 col-md-6 footer-section">
                            <div className="footer-brand">
                                <div className="brand-logo">
                                    <div className="brand-icon">
                                        <i className="fas fa-gem"></i>
                                    </div>
                                    <h3 className="brand-name">ANAGH K R</h3>
                                </div>
                                <p className="brand-description">
                                    A passionate MERN Stack Developer and Flutter App Developer based in Kasaragod, Kerala. 
                                    Creating innovative digital solutions with modern technologies and user-centric design.
                                </p>
                            </div>
                        </div>

                        {/* Quick Links */}
                        <div className="col-lg-2 col-md-6 footer-section">
                            <h6 className="footer-title">Quick Links</h6>
                            <ul className="footer-links">
                                <li className="footer-link-item">
                                    <Link href="/" className="footer-link">Home</Link>
                                </li>
                                <li className="footer-link-item">
                                    <Link href="/about" className="footer-link">About</Link>
                                </li>
                                <li className="footer-link-item">
                                    <Link href="/#skills" className="footer-link">Skills</Link>
                                </li>
                                <li className="footer-link-item">
                                    <Link href="/#works" className="footer-link">Works</Link>
                                </li>
                            </ul>
                        </div>

                        {/* Services */}
                        <div className="col-lg-2 col-md-6 footer-section">
                            <h6 className="footer-title">Services</h6>
                            <ul className="footer-links">
                                <li className="footer-link-item">
                                    <Link href="/services" className="footer-link">All Services</Link>
                                </li>
                                <li className="footer-link-item">
                                    <Link href="/services" className="footer-link">Web Development</Link>
                                </li>
                                <li className="footer-link-item">
                                    <Link href="/services" className="footer-link">App Development</Link>
                                </li>
                                <li className="footer-link-item">
                                    <Link href="/resume" className="footer-link">Resume</Link>
                                </li>
                            </ul>
                        </div>

                        {/* Contact Info */}
                        <div className="col-lg-4 col-md-6 footer-section">
                            <h6 className="footer-title">Contact Information</h6>
                            <div className="contact-item">
                                <div className="contact-icon">
                                    <i className="fas fa-map-marker-alt"></i>
                                </div>
                                <div className="contact-info">
                                    Kasaragod, Kerala<br />
                                    India
                                </div>
                            </div>
                            <div className="contact-item">
                                <div className="contact-icon">
                                    <i className="fas fa-envelope"></i>
                                </div>
                                <div className="contact-info">
                                    anaghkrkkl@gmail.com
                                </div>
                            </div>
                            <div className="contact-item">
                                <div className="contact-icon">
                                    <i className="fas fa-phone"></i>
                                </div>
                                <div className="contact-info">
                                    +91 8075541805
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </section>

            {/* Footer Bottom */}
            <section className="footer-bottom">
                <div className="container">
                    <p className="copyright-text">
                        © 2024 <Link href="/" className="copyright-link">ANAGH K R</Link>. All rights reserved.
                    </p>
                </div>
            </section>
        </footer>
    );
};

export default Footer;