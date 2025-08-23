'use client';
import Link from 'next/link';
import { useState, useEffect } from 'react';
import { usePathname } from 'next/navigation';
import './navbar.css';

export default function Navbar() {
    const [isScrolled, setIsScrolled] = useState(false);
    const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);
    const pathname = usePathname();

    // Handle scroll effect
    useEffect(() => {
        const handleScroll = () => {
            setIsScrolled(window.scrollY > 50);
        };

        window.addEventListener('scroll', handleScroll);
        return () => window.removeEventListener('scroll', handleScroll);
    }, []);

    // Navigation items
    const navItems = [
        { href: '/', label: 'Home', icon: 'fas fa-home' },
        { href: '/about', label: 'About', icon: 'fas fa-user' },
        { href: '/services', label: 'Services', icon: 'fas fa-cogs' },
        // { href: '/resume', label: 'Resume', icon: 'fas fa-file-alt' },
        { href: '/contact', label: 'Contact', icon: 'fas fa-envelope' }
    ];

    // Social links
    const socialLinks = [
        { href: 'https://github.com/anagh534', icon: 'fab fa-github', label: 'GitHub' },
        { href: 'https://www.linkedin.com/in/anagh-k-r/', icon: 'fab fa-linkedin', label: 'LinkedIn' },
        { href: 'https://instagram.com/mr._uni_que___', icon: 'fab fa-instagram', label: 'Instagram' }
    ];

    return (
        <nav className={`modern-navbar text-light ${isScrolled ? 'scrolled' : ''}`}>
            <div className="nav-container">
                {/* Brand Logo */}
                <Link href="/" className="nav-brand">
                    <div className="brand-content">
                        <span className="brand-text">ANAGH K R</span>
                        <span className="brand-subtitle">Full Stack Developer</span>
                    </div>
                </Link>

                {/* Desktop Navigation */}
                <div className="nav-menu desktop-menu">
                    {navItems.map((item) => (
                        <Link
                            key={item.href}
                            href={item.href}
                            style={{padding: '0.6rem 1rem'}}
                            className={`nav-link ${pathname === item.href ? 'active' : ''}`}
                        >
                            {/* <i className={item.icon}></i> */}
                            <span>{item.label}</span>
                        </Link>
                    ))}
                </div>

                {/* Social Links & CTA */}
                <div className="nav-actions">
                    <div className="social-links">
                        {socialLinks.map((social) => (
                            <a
                                key={social.href}
                                href={social.href}
                                target="_blank"
                                rel="noopener noreferrer"
                                className="social-link"
                                title={social.label}
                            >
                                <i className={social.icon}></i>
                            </a>
                        ))}
                    </div>
                    
                    <Link href="/contact" className="cta-button">
                        <i className="fas fa-paper-plane"></i>
                        <span>Let's Talk</span>
                    </Link>
                </div>

                {/* Mobile Menu Toggle */}
                <button
                    className={`mobile-toggle ${isMobileMenuOpen ? 'active' : ''}`}
                    onClick={() => setIsMobileMenuOpen(!isMobileMenuOpen)}
                    aria-label="Toggle mobile menu"
                >
                    <span></span>
                    <span></span>
                    <span></span>
                </button>
            </div>

            {/* Mobile Menu */}
            <div className={`mobile-menu ${isMobileMenuOpen ? 'open' : ''}`}>
                <div className="mobile-menu-content">
                    <div className="mobile-nav-items">
                        {navItems.map((item) => (
                            <Link
                                key={item.href}
                                href={item.href}
                                className={`mobile-nav-link ${pathname === item.href ? 'active' : ''}`}
                                onClick={() => setIsMobileMenuOpen(false)}
                            >
                                <i className={item.icon}></i>
                                <span>{item.label}</span>
                                <i className="fas fa-chevron-right link-arrow"></i>
                            </Link>
                        ))}
                    </div>

                    <div className="mobile-social-section">
                        <h4>Connect With Me</h4>
                        <div className="mobile-social-links">
                            {socialLinks.map((social) => (
                                <a
                                    key={social.href}
                                    href={social.href}
                                    target="_blank"
                                    rel="noopener noreferrer"
                                    className="mobile-social-link"
                                >
                                    <i className={social.icon}></i>
                                    <span>{social.label}</span>
                                </a>
                            ))}
                        </div>
                    </div>

                    <div className="mobile-cta">
                        <Link 
                            href="/contact" 
                            className="mobile-cta-button"
                            onClick={() => setIsMobileMenuOpen(false)}
                        >
                            <i className="fas fa-paper-plane"></i>
                            <span>Start a Project</span>
                        </Link>
                    </div>
                </div>
            </div>

            {/* Mobile Menu Overlay */}
            {isMobileMenuOpen && (
                <div 
                    className="mobile-overlay"
                    onClick={() => setIsMobileMenuOpen(false)}
                ></div>
            )}
        </nav>
    );
}