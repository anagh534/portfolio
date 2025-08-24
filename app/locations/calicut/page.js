export const metadata = {
    title: "Web Developer Calicut | Flutter App Development Calicut | Malabar Digital Solutions - Anagh K R",
    description: "Expert web development and Flutter app development services in Calicut (Kozhikode). Comprehensive digital solutions including responsive websites, mobile apps, and e-commerce platforms for Malabar region businesses.",
    keywords: "web developer Calicut, Flutter developer Calicut, app development Calicut, website design Calicut, Calicut web services, Malabar web developer, responsive web design, mobile app development, e-commerce solutions, digital marketing, business automation, MERN stack developer Calicut, React developer Calicut, Node.js developer Calicut, professional web developer Calicut, custom website development Calicut",
    author: "ANAGH K R",
    robots: "index, follow",
    canonical: "https://anagh534.github.io/locations/calicut",
    ogTitle: "Web Developer Calicut | Flutter App Development Calicut",
    ogDescription: "Expert web development and Flutter app development services in Calicut (Kozhikode). Comprehensive digital solutions for Malabar region businesses.",
    ogUrl: "https://anagh534.github.io/locations/calicut",
    ogType: "website"
};

import '../city.css';

export default function CalicutServices() {
    const cityHighlights = [
        {
            icon: "fas fa-map",
            title: "Malabar Hub",
            description: "Central location in Malabar region with strategic business importance"
        },
        {
            icon: "fas fa-ship",
            title: "Commercial Port",
            description: "Major trading center with diverse business opportunities"
        },
        {
            icon: "fas fa-graduation-cap",
            title: "Educational Center",
            description: "Home to prestigious institutions and educational organizations"
        },
        {
            icon: "fas fa-handshake",
            title: "Cultural Commerce",
            description: "Rich cultural heritage with modern business integration"
        }
    ];

    const services = [
        {
            icon: "fas fa-mobile-alt",
            title: "Responsive Web Design",
            description: "Mobile-first responsive websites optimized for all devices and screen sizes",
            features: ["Mobile-First Design", "Cross-Browser Compatible", "Fast Loading", "SEO Optimized"]
        },
        {
            icon: "fab fa-flutter",
            title: "Mobile App Development",
            description: "Native and cross-platform mobile applications for business growth",
            features: ["iOS & Android", "Cross-Platform", "Native Performance", "App Store Deployment"]
        },
        {
            icon: "fas fa-shopping-cart",
            title: "E-commerce Solutions",
            description: "Complete online stores with payment integration and inventory management",
            features: ["Payment Gateway", "Inventory System", "Order Management", "Customer Portal"]
        },
        {
            icon: "fas fa-chart-line",
            title: "Digital Marketing",
            description: "Comprehensive digital marketing strategies to grow your online presence",
            features: ["SEO Services", "Social Media Marketing", "PPC Campaigns", "Analytics Setup"]
        },
        {
            icon: "fas fa-cogs",
            title: "Business Automation",
            description: "Automated workflows and systems to improve business efficiency",
            features: ["Process Automation", "CRM Integration", "Workflow Management", "API Development"]
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
            icon: "fas fa-globe",
            title: "Regional Expertise",
            description: "Deep understanding of Malabar region business culture and requirements"
        },
        {
            icon: "fas fa-comments",
            title: "Multilingual Support",
            description: "Support in Malayalam, Arabic, and English for diverse client base"
        },
        {
            icon: "fas fa-truck",
            title: "Trade Solutions",
            description: "Specialized solutions for trading and commercial businesses"
        },
        {
            icon: "fas fa-graduation-cap",
            title: "Educational Tech",
            description: "Custom solutions for educational institutions and learning platforms"
        }
    ];

    const portfolio = [
        {
            icon: "fas fa-store",
            title: "Trading Platform",
            description: "B2B trading platform for Calicut spice and commodity traders",
            tech: ["React", "Node.js", "Trading System", "Multi-language"]
        },
        {
            icon: "fas fa-graduation-cap",
            title: "Educational App",
            description: "E-learning mobile app for educational institutions in Malabar region",
            tech: ["Flutter", "Firebase", "Video Streaming", "Progress Tracking"]
        },
        {
            icon: "fas fa-utensils",
            title: "Restaurant Chain",
            description: "Multi-location restaurant management system with online ordering",
            tech: ["React", "POS Integration", "Online Ordering", "Kitchen Display"]
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
                                    Calicut (Kozhikode), Kerala
                                </div>
                                <h1 className="city-main-title">
                                    Web Development Services in
                                    <span className="text-brand d-block">Calicut</span>
                                </h1>
                                <p className="city-subtitle">
                                    Expert web development and Flutter app development services in Calicut (Kozhikode). 
                                    Comprehensive digital solutions for Malabar region businesses, trading companies, 
                                    and educational institutions with cultural sensitivity and regional expertise.
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
                                Our Services in <span className="text-brand">Calicut</span>
                            </h2>
                            <p className="section-subtitle">
                                Comprehensive digital solutions for Malabar region businesses and organizations
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
                                Regional expertise with modern technology solutions for Malabar businesses
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
                                Recent Projects in <span className="text-brand">Calicut</span>
                            </h2>
                            <p className="section-subtitle">
                                Successful business and educational solutions delivered in Calicut and Malabar region
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
                            Ready to Start Your Calicut Project?
                        </h2>
                        <p className="cta-description">
                            Get professional web development and mobile app development services 
                            in Calicut (Kozhikode). Regional expertise with modern technology 
                            solutions for Malabar businesses, trading companies, and educational institutions.
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
