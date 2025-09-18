"use client";
import React, { useState } from 'react';
import './whatweoffer.css';

const WhatWeOffer = () => {
    const [activeIndex, setActiveIndex] = useState(null);

    const toggleAccordion = (index) => {
        setActiveIndex(activeIndex === index ? null : index);
    };

    const services = [
        {
            id: 1,
            title: "Full-Stack Web Development in Kerala",
            category: "Development",
            icon: "🌐",
            shortDesc: "Custom website development with MERN stack technology",
            fullDesc: "As an experienced web developer based in Kerala, I specialize in creating dynamic, responsive, and interactive websites that provide seamless experiences across all devices. I offer full-stack web development services utilizing the latest technologies including React, Next.js, Node.js, and Express.js to build robust, scalable, and high-performing websites with clean code, responsive design, and SEO optimization.",
            technologies: ["React", "Next.js", "Node.js", "Express.js", "MongoDB", "MySQL"],
            features: ["Responsive Design", "SEO Optimized", "Fast Loading", "Cross-browser Compatible", "Mobile-first Approach"]
        },
        {
            id: 2,
            title: "E-commerce Development Services",
            category: "Online Store",
            icon: "🛒",
            shortDesc: "Complete e-commerce solutions for Kerala businesses",
            fullDesc: "I specialize in designing and developing high-performance e-commerce websites that help businesses grow online. I create user-friendly and feature-rich e-commerce solutions using modern technologies, with secure payment integration, inventory management, shopping cart functionality, and SEO optimization to boost your online sales and revenue.",
            technologies: ["WooCommerce", "Shopify", "React", "Node.js", "Payment Gateways"],
            features: ["Secure Payments", "Inventory Management", "Order Tracking", "Customer Dashboard", "Admin Panel"]
        },
        {
            id: 3,
            title: "Flutter Mobile App Development",
            category: "Mobile Apps",
            icon: "📱",
            shortDesc: "Professional Flutter app development for Kerala businesses",
            fullDesc: "I specialize in building high-performance, cross-platform mobile applications for iOS and Android using Flutter. I create beautiful, fast, and responsive apps that provide a native-like experience with smooth animations, intuitive UI/UX, and seamless performance across different devices. From concept to deployment, I provide end-to-end mobile app development services.",
            technologies: ["Flutter", "Dart", "Firebase", "REST APIs", "SQLite"],
            features: ["Cross-platform", "Native Performance", "Beautiful UI", "Offline Support", "Push Notifications"]
        },
        {
            id: 4,
            title: "Responsive Web Design Services",
            category: "Design",
            icon: "🎨",
            shortDesc: "SEO-optimized website design for all Kerala businesses",
            fullDesc: "I'm a professional website designer from Kerala, dedicated to crafting visually stunning and functional websites. My designs focus on delivering powerful online experiences with modern aesthetics, intuitive navigation, and user-centered design principles. I create well-structured, SEO-optimized designs that help increase your visibility on search engines while providing exceptional user experiences.",
            technologies: ["Figma", "Adobe XD", "Photoshop", "HTML5", "CSS3", "JavaScript"],
            features: ["User-Centered Design", "Modern Aesthetics", "Intuitive Navigation", "Accessibility", "Brand Consistency"]
        },
        {
            id: 5,
            title: "Website Redesign & Modernization",
            category: "Upgrade",
            icon: "🔄",
            shortDesc: "Transform outdated websites into modern platforms",
            fullDesc: "I specialize in revamping outdated websites and transforming them into modern, visually appealing platforms. My redesign services focus on improving user experience, enhancing site performance, ensuring mobile responsiveness, and implementing the latest design trends and SEO best practices to give your website a fresh, contemporary look.",
            technologies: ["Modern CSS", "Bootstrap", "JavaScript", "Performance Optimization"],
            features: ["Performance Boost", "Mobile Responsive", "Modern Design", "SEO Enhancement", "User Experience"]
        },
        {
            id: 6,
            title: "Design to Code Conversion",
            category: "Conversion",
            icon: "📐",
            shortDesc: "Convert PSD/Figma designs to functional websites",
            fullDesc: "I offer professional design to website conversion services, turning your Photoshop (PSD) and Figma designs into fully functional, responsive websites. I convert designs into clean, pixel-perfect HTML, CSS, and JavaScript code, ensuring cross-browser compatibility, responsive design, and optimized performance across all devices.",
            technologies: ["HTML5", "CSS3", "JavaScript", "Bootstrap", "SASS"],
            features: ["Pixel Perfect", "Responsive Code", "Cross-browser", "Clean Code", "W3C Validated"]
        },
        {
            id: 7,
            title: "Academic & Startup Projects",
            category: "Custom Solutions",
            icon: "🎓",
            shortDesc: "Custom solutions for students and startups",
            fullDesc: "I provide comprehensive support for academic projects and startup ventures, helping students complete their final year projects and assisting startups in building their digital presence. From simple websites to complex web applications, I offer affordable solutions tailored to your specific requirements and budget constraints.",
            technologies: ["Full-Stack Development", "Database Design", "API Integration"],
            features: ["Budget Friendly", "Academic Support", "Documentation", "Mentoring", "Quick Delivery"]
        },
        {
            id: 8,
            title: "SEO & Performance Optimization",
            category: "Optimization",
            icon: "🚀",
            shortDesc: "Boost your website's visibility and speed",
            fullDesc: "I offer comprehensive SEO and performance optimization services to improve your website's search engine rankings and loading speed. My optimization includes on-page SEO, technical SEO, speed optimization, mobile optimization, and local SEO strategies specifically designed for Kerala businesses to increase online visibility and drive organic traffic.",
            technologies: ["Google Analytics", "Search Console", "PageSpeed Insights", "SEO Tools"],
            features: ["Keyword Research", "Local SEO", "Speed Optimization", "Mobile SEO", "Analytics Setup"]
        }
    ];

    return (
        <section id="what-we-offer" className="what-we-offer-section">
            <div className="container">
                {/* Section Header */}
                <div className="row justify-content-center mb-5">
                    <div className="col-lg-10 col-xl-8">
                        <div className="section-header text-center">
                            <div className="section-badge">
                                <i className="fas fa-star me-2"></i>
                                What We Offer
                            </div>
                            <h2 className="section-title">
                                Comprehensive Digital Solutions
                            </h2>
                            <p className="section-subtitle">
                                From concept to deployment, I provide end-to-end digital services that help businesses 
                                establish a strong online presence and achieve their goals with cutting-edge technology and creative excellence.
                            </p>
                        </div>
                    </div>
                </div>

                {/* Services FAQ Accordion */}
                <div className="row justify-content-center">
                    <div className="col-lg-10">
                        <div className="services-accordion">
                            {services.map((service, index) => (
                                <div 
                                    key={service.id} 
                                    className={`accordion-item ${activeIndex === index ? 'active' : ''}`}
                                >
                                    <div 
                                        className="accordion-header"
                                        onClick={() => toggleAccordion(index)}
                                        role="button"
                                        tabIndex={0}
                                        onKeyPress={(e) => {
                                            if (e.key === 'Enter' || e.key === ' ') {
                                                toggleAccordion(index);
                                            }
                                        }}
                                        aria-expanded={activeIndex === index}
                                        aria-controls={`accordion-content-${index}`}
                                    >
                                        <div className="accordion-title-section">
                                            <div className="service-icon-wrapper">
                                                <span className="service-icon">{service.icon}</span>
                                            </div>
                                            <div className="service-title-content">
                                                <h3 className="service-title">{service.title}</h3>
                                                <span className="service-category">{service.category}</span>
                                                <p className="service-short-desc">{service.shortDesc}</p>
                                            </div>
                                        </div>
                                        <div className="accordion-toggle">
                                            <i className={`fas fa-chevron-down ${activeIndex === index ? 'rotated' : ''}`}></i>
                                        </div>
                                    </div>
                                    
                                    <div 
                                        id={`accordion-content-${index}`}
                                        className="accordion-content"
                                        style={{
                                            maxHeight: activeIndex === index ? '1000px' : '0',
                                            opacity: activeIndex === index ? '1' : '0'
                                        }}
                                    >
                                        <div className="accordion-body">
                                            <div className="row g-4">
                                                <div className="col-lg-8">
                                                    <div className="service-description">
                                                        <h4>Service Overview</h4>
                                                        <p>{service.fullDesc}</p>
                                                    </div>
                                                    
                                                    <div className="service-features mt-4">
                                                        <h4>Key Features</h4>
                                                        <div className="features-grid">
                                                            {service.features.map((feature, idx) => (
                                                                <div key={idx} className="feature-item">
                                                                    <i className="fas fa-check-circle me-2"></i>
                                                                    {feature}
                                                                </div>
                                                            ))}
                                                        </div>
                                                    </div>
                                                </div>
                                                
                                                <div className="col-lg-4">
                                                    <div className="service-tech-stack">
                                                        <h4>Technologies Used</h4>
                                                        <div className="tech-badges">
                                                            {service.technologies.map((tech, idx) => (
                                                                <span key={idx} className="tech-badge">
                                                                    {tech}
                                                                </span>
                                                            ))}
                                                        </div>
                                                    </div>
                                                    
                                                    <div className="service-cta mt-4">
                                                        <a href="/contact" className="cta-button">
                                                            <i className="fas fa-paper-plane me-2"></i>
                                                            Get Quote
                                                            <i className="fas fa-arrow-right ms-2"></i>
                                                        </a>
                                                    </div>
                                                </div>
                                            </div>
                                        </div>
                                    </div>
                                </div>
                            ))}
                        </div>
                    </div>
                </div>

                {/* Call to Action */}
                <div className="row justify-content-center mt-5">
                    <div className="col-lg-8 text-center">
                        <div className="cta-section">
                            <h3>Ready to Start Your Project?</h3>
                            <p>Let's discuss your requirements and bring your ideas to life with professional digital solutions.</p>
                            <div className="cta-buttons">
                                <a href="/contact" className="btn btn-primary me-3">
                                    <i className="fas fa-comments me-2"></i>
                                    Get In Touch
                                </a>
                                <a href="/services" className="btn btn-outline-light">
                                    <i className="fas fa-eye me-2"></i>
                                    View All Services
                                </a>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </section>
    );
};

export default WhatWeOffer;
