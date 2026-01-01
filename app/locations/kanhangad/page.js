export const metadata = {
    title: "Web Developer Kanhangad | Flutter App Development Kanhangad | Local Business Solutions - Anagh K R",
    description: "Local web development and mobile app development services in Kanhangad. Offering custom digital solutions, responsive websites, and mobile applications for local businesses and startups.",
    keywords: "web developer Kanhangad, Flutter developer Kanhangad, app development Kanhangad, website design Kanhangad, Kanhangad web services, local digital solutions, responsive websites, mobile applications, startup solutions, business websites, custom development, regional services, local business focus, MERN stack developer Kanhangad, React developer Kanhangad, Node.js developer Kanhangad, professional web developer Kanhangad",
    author: "ANAGH K R",
    robots: "index, follow",
    canonical: "https://www.anaghkr.in/locations/kanhangad",
    ogTitle: "Web Developer Kanhangad | Flutter App Development Kanhangad",
    ogDescription: "Local web development and mobile app development services in Kanhangad. Custom digital solutions for local businesses and startups.",
    ogUrl: "https://www.anaghkr.in/locations/kanhangad",
    ogType: "website"
};

import '../city.css';

export default function KanhangadServices() {
    const cityHighlights = [
        {
            icon: "fas fa-store",
            title: "Local Business Focus",
            description: "Specialized digital solutions for Kanhangad's local businesses and economy"
        },
        {
            icon: "fas fa-globe",
            title: "Regional Expertise",
            description: "Deep understanding of Kanhangad's market needs and consumer preferences"
        },
        {
            icon: "fas fa-seedling",
            title: "Growing Market",
            description: "Emerging digital ecosystem with untapped business opportunities"
        },
        {
            icon: "fas fa-users",
            title: "Community Oriented",
            description: "Solutions designed to strengthen local community connections"
        }
    ];

    const services = [
        {
            icon: "fas fa-laptop-code",
            title: "Responsive Web Design",
            description: "Mobile-first responsive websites optimized for all devices and screen sizes",
            features: ["Mobile-First Design", "Cross-Browser Compatible", "Fast Loading", "SEO Optimized"]
        },
        {
            icon: "fab fa-flutter",
            title: "Flutter App Development",
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
            icon: "fas fa-rocket",
            title: "Startup Solutions",
            description: "Digital platforms designed to help Kanhangad startups grow and succeed",
            features: ["MVP Development", "Growth Strategy", "Investor Presentations", "Analytics"]
        },
        {
            icon: "fas fa-briefcase",
            title: "Business Websites",
            description: "Professional business websites with modern design and functionality",
            features: ["Brand Identity", "Service Showcase", "Contact Forms", "Social Integration"]
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
            icon: "fas fa-map-marker-alt",
            title: "Local Presence",
            description: "Understanding of Kanhangad's unique business environment and customer needs"
        },
        {
            icon: "fas fa-language",
            title: "Regional Approach",
            description: "Solutions that incorporate local language and cultural elements"
        },
        {
            icon: "fas fa-handshake",
            title: "Personal Service",
            description: "Direct collaboration and personalized attention for every project"
        },
        {
            icon: "fas fa-bolt",
            title: "Fast Deployment",
            description: "Quick development and deployment of solutions for local businesses"
        }
    ];

    const portfolio = [
        {
            icon: "fas fa-store-alt",
            title: "Local Retailer Platform",
            description: "E-commerce solution for a traditional Kanhangad retail business",
            tech: ["React", "Node.js", "Product Catalog", "Payment Gateway"]
        },
        {
            icon: "fas fa-utensils",
            title: "Restaurant Ordering System",
            description: "Mobile app for popular local restaurant with online ordering",
            tech: ["Flutter", "Firebase", "Order Management", "Customer Profiles"]
        },
        {
            icon: "fas fa-graduation-cap",
            title: "Educational Platform",
            description: "Learning management system for a Kanhangad educational institution",
            tech: ["MERN Stack", "Video Integration", "Assessment Tools", "Student Portal"]
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
                                    Kanhangad, Kerala
                                </div>
                                <h1 className="city-main-title">
                                    Web Development Services in
                                    <span className="text-brand d-block">Kanhangad</span>
                                </h1>
                                <p className="city-subtitle">
                                    Local web development and mobile app development services in Kanhangad. 
                                    Offering custom digital solutions, responsive websites, and mobile 
                                    applications for local businesses and startups.
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
                                Our Services in <span className="text-brand">Kanhangad</span>
                            </h2>
                            <p className="section-subtitle">
                                Comprehensive digital solutions for local businesses and startups
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
                                Why Choose Us for <span className="text-brand">Kanhangad Projects</span>?
                            </h2>
                            <p className="section-subtitle">
                                Local expertise with personalized service and modern technology
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
                                Recent Projects in <span className="text-brand">Kanhangad</span>
                            </h2>
                            <p className="section-subtitle">
                                Successful digital solutions delivered for Kanhangad businesses
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
                            Ready to Start Your Kanhangad Project?
                        </h2>
                        <p className="cta-description">
                            Get professional web development and mobile app development services 
                            in Kanhangad. Local expertise with custom solutions for businesses
                            and startups in the region.
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
