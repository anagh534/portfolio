export const metadata = {
    title: "Web Developer Kozhikode | Flutter App Development Calicut | MERN Stack Developer - Anagh K R",
    description: "Professional web development and Flutter app development services in Kozhikode (Calicut). Modern website solutions, mobile applications, digital transformation services, and e-commerce platforms for businesses in Malabar region.",
    keywords: "web developer Kozhikode, Flutter developer Calicut, app development Kozhikode, website design Calicut, Kozhikode web services, mobile app development Calicut, modern website development, digital transformation, e-commerce platforms, business automation, MERN stack developer Kozhikode, React developer Calicut, Node.js developer Kozhikode, professional web developer Calicut, best web developer Kozhikode, custom website development Calicut, Malabar web development services",
    author: "ANAGH K R",
    robots: "index, follow",
    canonical: "https://www.anaghkr.in/locations/kozhikode",
    ogTitle: "Web Developer Kozhikode | Flutter App Development Calicut",
    ogDescription: "Professional web development and Flutter app development services in Kozhikode (Calicut). Modern solutions for businesses in Malabar region.",
    ogUrl: "https://www.anaghkr.in/locations/kozhikode",
    ogType: "website"
};

import '../city.css';

export default function KozhikodeServices() {
    const cityHighlights = [
        {
            icon: "fas fa-mosque",
            title: "Cultural Center",
            description: "Rich cultural heritage and traditional business community"
        },
        {
            icon: "fas fa-industry",
            title: "Business Hub",
            description: "Major commercial center of Malabar region"
        },
        {
            icon: "fas fa-ship",
            title: "Export Industry",
            description: "International trade and export business connections"
        },
        {
            icon: "fas fa-laptop-code",
            title: "Modern Solutions",
            description: "Growing demand for digital transformation services"
        }
    ];

    const services = [
        {
            icon: "fas fa-desktop",
            title: "Modern Website Development",
            description: "Contemporary website solutions with latest technologies for Kozhikode businesses",
            features: ["Modern Design", "Fast Performance", "Mobile Responsive", "SEO Optimized"]
        },
        {
            icon: "fab fa-flutter",
            title: "Mobile App Solutions",
            description: "Cross-platform mobile applications for business growth in Malabar region",
            features: ["Cross-Platform Apps", "Native Performance", "Business Solutions", "User-Friendly Design"]
        },
        {
            icon: "fas fa-chart-line",
            title: "Digital Transformation",
            description: "Complete digital transformation services for traditional businesses",
            features: ["Process Automation", "Digital Strategy", "Technology Upgrade", "Training & Support"]
        },
        {
            icon: "fas fa-shopping-cart",
            title: "E-commerce Platforms",
            description: "Online stores and e-commerce solutions for retailers and exporters",
            features: ["Online Store", "Payment Integration", "Inventory Management", "Export Features"]
        },
        {
            icon: "fas fa-cogs",
            title: "Business Automation",
            description: "Automated systems and workflows for improved business efficiency",
            features: ["Workflow Automation", "CRM Systems", "Inventory Control", "Report Generation"]
        },
        {
            icon: "fas fa-database",
            title: "MERN Stack Development",
            description: "Full-stack web applications using modern JavaScript technologies",
            features: ["React Frontend", "Node.js Backend", "MongoDB Database", "Express Framework"]
        }
    ];

    const benefits = [
        {
            icon: "fas fa-history",
            title: "Cultural Understanding",
            description: "Deep appreciation for local business culture and traditional practices"
        },
        {
            icon: "fas fa-globe",
            title: "Export Focus",
            description: "Experience in developing solutions for export-oriented businesses"
        },
        {
            icon: "fas fa-language",
            title: "Multi-language Support",
            description: "Websites and apps supporting Malayalam, Arabic, and English languages"
        },
        {
            icon: "fas fa-handshake",
            title: "Business Network",
            description: "Strong connections with local business community and trade associations"
        }
    ];

    const portfolio = [
        {
            icon: "fas fa-store",
            title: "Export Business Portal",
            description: "Comprehensive business portal for spice exporters with international features",
            tech: ["React", "Node.js", "Multi-currency", "Export Documentation"]
        },
        {
            icon: "fas fa-mobile-alt",
            title: "Restaurant App",
            description: "Food delivery app for popular Kozhikode restaurant chain",
            tech: ["Flutter", "Real-time Tracking", "Payment Gateway", "Multi-language"]
        },
        {
            icon: "fas fa-graduation-cap",
            title: "Educational Platform",
            description: "Online learning platform for Islamic educational institution",
            tech: ["React", "Video Streaming", "Arabic Support", "Progress Tracking"]
        }
    ];

    return (
        <div className="city-page-container">
            {/* Hero Section */}
            <section className="city-hero-section">
                <div className="container">
                    <div className="row justify-content-center">
                        <div className="col-lg-10">
                            <div className="city-hero-content text-center">
                                <div className="city-badge">
                                    <i className="fas fa-map-marker-alt me-2"></i>
                                    Kozhikode (Calicut), Kerala
                                </div>
                                <h1 className="city-main-title">
                                    Web Development Services in
                                    <span className="text-brand d-block">Kozhikode</span>
                                </h1>
                                <p className="city-subtitle">
                                    Professional web development and Flutter app development services in Kozhikode (Calicut). 
                                    Modern digital solutions for businesses in Malabar region with focus on export industry, 
                                    cultural businesses, and digital transformation.
                                </p>
                                
                                <div className="city-highlights-grid">
                                    {cityHighlights.map((highlight, index) => (
                                        <div key={index} className="city-highlight-card">
                                            <div className="highlight-icon">
                                                <i className={highlight.icon}></i>
                                            </div>
                                            <h3 className="highlight-title">{highlight.title}</h3>
                                            <p className="highlight-description">{highlight.description}</p>
                                        </div>
                                    ))}
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </section>

            {/* Services Section */}
            <section className="city-services-section">
                <div className="container">
                    <div className="row justify-content-center mb-5">
                        <div className="col-lg-10 text-center">
                            <h2 className="section-title">
                                Our Services in <span className="text-brand">Kozhikode</span>
                            </h2>
                            <p className="section-subtitle">
                                Modern digital solutions for businesses in Kerala's cultural and commercial center
                            </p>
                        </div>
                    </div>
                    
                    <div className="services-grid">
                        {services.map((service, index) => (
                            <div key={index} className="service-card">
                                <div className="service-icon">
                                    <i className={service.icon}></i>
                                </div>
                                <h3 className="service-title">{service.title}</h3>
                                <p className="service-description">{service.description}</p>
                                <ul className="service-features">
                                    {service.features.map((feature, idx) => (
                                        <li key={idx}>{feature}</li>
                                    ))}
                                </ul>
                            </div>
                        ))}
                    </div>
                </div>
            </section>

            {/* Why Choose Section */}
            <section className="why-choose-section">
                <div className="container">
                    <div className="row justify-content-center mb-5">
                        <div className="col-lg-10 text-center">
                            <h2 className="section-title">
                                Why Choose Us for <span className="text-brand">Calicut Projects</span>?
                            </h2>
                            <p className="section-subtitle">
                                Local expertise with global standards for Malabar region businesses
                            </p>
                        </div>
                    </div>
                    
                    <div className="why-choose-grid">
                        {benefits.map((benefit, index) => (
                            <div key={index} className="benefit-card">
                                <div className="benefit-icon">
                                    <i className={benefit.icon}></i>
                                </div>
                                <h3 className="benefit-title">{benefit.title}</h3>
                                <p className="benefit-description">{benefit.description}</p>
                            </div>
                        ))}
                    </div>
                </div>
            </section>

            {/* Portfolio Preview Section */}
            <section className="portfolio-preview-section">
                <div className="container">
                    <div className="row justify-content-center mb-5">
                        <div className="col-lg-10 text-center">
                            <h2 className="section-title">
                                Recent Projects in <span className="text-brand">Kozhikode</span>
                            </h2>
                            <p className="section-subtitle">
                                Successful digital solutions for businesses in Calicut and Malabar region
                            </p>
                        </div>
                    </div>
                    
                    <div className="portfolio-grid">
                        {portfolio.map((project, index) => (
                            <div key={index} className="portfolio-card">
                                <div className="portfolio-image">
                                    <i className={project.icon}></i>
                                </div>
                                <div className="portfolio-content">
                                    <h3 className="portfolio-title">{project.title}</h3>
                                    <p className="portfolio-description">{project.description}</p>
                                    <div className="portfolio-tech">
                                        {project.tech.map((tech, idx) => (
                                            <span key={idx} className="tech-badge">{tech}</span>
                                        ))}
                                    </div>
                                </div>
                            </div>
                        ))}
                    </div>
                </div>
            </section>

            {/* CTA Section */}
            <section className="city-cta-section">
                <div className="container">
                    <div className="cta-card">
                        <h2 className="cta-title">
                            Ready to Start Your Kozhikode Project?
                        </h2>
                        <p className="cta-description">
                            Get professional web development and mobile app development services 
                            in Kozhikode. Modern digital solutions for traditional businesses 
                            and export industry in the heart of Malabar region.
                        </p>
                        <div className="cta-buttons">
                            <a href="/contact" className="btn-primary">
                                Get Free Quote
                                <i className="fas fa-arrow-right ms-2"></i>
                            </a>
                            <a href="/services" className="btn-secondary">
                                View All Services
                                <i className="fas fa-external-link-alt ms-2"></i>
                            </a>
                        </div>
                    </div>
                </div>
            </section>
        </div>
    );
}
