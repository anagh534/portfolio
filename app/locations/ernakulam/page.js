export const metadata = {
    title: "Web Developer Ernakulam | Flutter App Development Ernakulam | Digital Solutions - Anagh K R",
    description: "Expert web development and Flutter app development services in Ernakulam district. Comprehensive digital solutions including responsive websites, mobile apps, and e-commerce platforms for urban businesses.",
    keywords: "web developer Ernakulam, Flutter developer Ernakulam, app development Ernakulam, website design Ernakulam, Ernakulam web services, responsive web design, mobile app development, e-commerce solutions, digital marketing, business automation, MERN stack developer Ernakulam, React developer Ernakulam, Node.js developer Ernakulam, professional web developer Ernakulam, custom website development Ernakulam",
    author: "ANAGH K R",
    robots: "index, follow",
    canonical: "https://www.anaghkr.in/locations/ernakulam",
    ogTitle: "Web Developer Ernakulam | Flutter App Development Ernakulam",
    ogDescription: "Expert web development and Flutter app development services in Ernakulam district. Comprehensive digital solutions for urban businesses.",
    ogUrl: "https://www.anaghkr.in/locations/ernakulam",
    ogType: "website"
};

import '../city.css';

export default function ErnkulamServices() {
    const cityHighlights = [
        {
            icon: "fas fa-city",
            title: "Urban Center",
            description: "Major urban district with diverse business opportunities"
        },
        {
            icon: "fas fa-building",
            title: "Business District",
            description: "Corporate offices and business parks requiring modern solutions"
        },
        {
            icon: "fas fa-laptop-code",
            title: "Tech Companies",
            description: "Home to numerous IT companies and tech startups"
        },
        {
            icon: "fas fa-road",
            title: "Modern Infrastructure",
            description: "Well-developed infrastructure supporting digital businesses"
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
            icon: "fas fa-users",
            title: "Corporate Experience",
            description: "Extensive experience working with corporate clients and enterprise requirements"
        },
        {
            icon: "fas fa-rocket",
            title: "Scalable Solutions",
            description: "Building applications that scale with your business growth and expansion"
        },
        {
            icon: "fas fa-shield-alt",
            title: "Enterprise Security",
            description: "Implementation of robust security measures for business-critical applications"
        },
        {
            icon: "fas fa-headset",
            title: "Professional Support",
            description: "Dedicated technical support and maintenance for enterprise applications"
        }
    ];

    const portfolio = [
        {
            icon: "fas fa-building",
            title: "Corporate Website",
            description: "Professional corporate website for leading Ernakulam business group",
            tech: ["React", "Node.js", "Corporate Design", "CMS Integration"]
        },
        {
            icon: "fas fa-mobile-alt",
            title: "Business App",
            description: "Enterprise mobile app for workforce management and communication",
            tech: ["Flutter", "Firebase", "Real-time Chat", "Employee Portal"]
        },
        {
            icon: "fas fa-shopping-bag",
            title: "E-commerce Platform",
            description: "Multi-vendor e-commerce platform for retail business network",
            tech: ["React", "Payment Gateway", "Multi-vendor", "Admin Dashboard"]
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
                                    Ernakulam District, Kerala
                                </div>
                                <h1 className="city-main-title">
                                    Web Development Services in
                                    <span className="text-brand d-block">Ernakulam</span>
                                </h1>
                                <p className="city-subtitle">
                                    Expert web development and Flutter app development services in Ernakulam district. 
                                    Comprehensive digital solutions for urban businesses, corporate offices, and 
                                    tech companies with focus on scalability and modern infrastructure.
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
                                Our Services in <span className="text-brand">Ernakulam</span>
                            </h2>
                            <p className="section-subtitle">
                                Comprehensive digital solutions for urban businesses and corporate clients
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
                                Why Choose Us for <span className="text-brand">Ernakulam Projects</span>?
                            </h2>
                            <p className="section-subtitle">
                                Enterprise-grade solutions with scalability and professional support
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
                                Recent Projects in <span className="text-brand">Ernakulam</span>
                            </h2>
                            <p className="section-subtitle">
                                Successful corporate and business solutions delivered in Ernakulam district
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
                            Ready to Start Your Ernakulam Project?
                        </h2>
                        <p className="cta-description">
                            Get professional web development and mobile app development services 
                            in Ernakulam district. Enterprise-grade solutions with scalability 
                            and modern infrastructure for urban businesses and corporate clients.
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
