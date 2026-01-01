export const metadata = {
    title: "Web Developer Thrissur | Flutter App Development Thrissur | Cultural Digital Solutions - Anagh K R",
    description: "Expert web development and Flutter app development services in Thrissur. Comprehensive digital solutions including responsive websites, mobile apps, and e-commerce platforms for cultural and festival city businesses.",
    keywords: "web developer Thrissur, Flutter developer Thrissur, app development Thrissur, website design Thrissur, Thrissur web services, cultural web developer, responsive web design, mobile app development, e-commerce solutions, digital marketing, business automation, MERN stack developer Thrissur, React developer Thrissur, Node.js developer Thrissur, professional web developer Thrissur, custom website development Thrissur",
    author: "ANAGH K R",
    robots: "index, follow",
    canonical: "https://www.anaghkr.in/locations/thrissur",
    ogTitle: "Web Developer Thrissur | Flutter App Development Thrissur",
    ogDescription: "Expert web development and Flutter app development services in Thrissur. Comprehensive digital solutions for cultural and festival city businesses.",
    ogUrl: "https://www.anaghkr.in/locations/thrissur",
    ogType: "website"
};

import '../city.css';

export default function ThrissurServices() {
    const cityHighlights = [
        {
            icon: "fas fa-crown",
            title: "Cultural Capital",
            description: "Kerala's cultural capital with rich arts, music, and dance traditions"
        },
        {
            icon: "fas fa-drum",
            title: "Festival Hub",
            description: "Famous for Thrissur Pooram and numerous cultural festivals throughout the year"
        },
        {
            icon: "fas fa-graduation-cap",
            title: "Educational Center",
            description: "Home to prestigious educational institutions and research centers"
        },
        {
            icon: "fas fa-building",
            title: "Commercial Hub",
            description: "Growing commercial center with diverse business opportunities"
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
            icon: "fas fa-palette",
            title: "Cultural Solutions",
            description: "Specialized solutions for cultural organizations and festival management"
        },
        {
            icon: "fas fa-graduation-cap",
            title: "Educational Platforms",
            description: "Custom platforms for educational institutions and learning management"
        },
        {
            icon: "fas fa-calendar-alt",
            title: "Event Management",
            description: "Digital solutions for festival and event management systems"
        },
        {
            icon: "fas fa-music",
            title: "Arts Promotion",
            description: "Platforms for promoting arts, music, and cultural heritage"
        }
    ];

    const portfolio = [
        {
            icon: "fas fa-calendar",
            title: "Festival Management",
            description: "Comprehensive festival management system for Thrissur cultural events",
            tech: ["React", "Node.js", "Event Scheduling", "Participant Management"]
        },
        {
            icon: "fas fa-graduation-cap",
            title: "College Portal",
            description: "Educational management system for prestigious institutions in Thrissur",
            tech: ["Flutter", "Firebase", "Student Portal", "Academic Management"]
        },
        {
            icon: "fas fa-shopping-bag",
            title: "Cultural Store",
            description: "E-commerce platform for traditional crafts and cultural products",
            tech: ["React", "Product Catalog", "Cultural Heritage", "Artisan Portal"]
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
                                    Thrissur, Kerala
                                </div>
                                <h1 className="city-main-title">
                                    Web Development Services in
                                    <span className="text-brand d-block">Thrissur</span>
                                </h1>
                                <p className="city-subtitle">
                                    Expert web development and Flutter app development services in Thrissur. 
                                    Comprehensive digital solutions for cultural organizations, educational institutions, 
                                    and festival management with focus on preserving cultural heritage through technology.
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
                                Our Services in <span className="text-brand">Thrissur</span>
                            </h2>
                            <p className="section-subtitle">
                                Comprehensive digital solutions for cultural and educational organizations
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
                                Why Choose Us for <span className="text-brand">Thrissur Projects</span>?
                            </h2>
                            <p className="section-subtitle">
                                Cultural expertise with educational technology and festival management solutions
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
                                Recent Projects in <span className="text-brand">Thrissur</span>
                            </h2>
                            <p className="section-subtitle">
                                Successful cultural and educational solutions delivered in Thrissur
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
                            Ready to Start Your Thrissur Project?
                        </h2>
                        <p className="cta-description">
                            Get professional web development and mobile app development services 
                            in Thrissur. Cultural expertise with specialized solutions for 
                            educational institutions, cultural organizations, and festival management.
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
