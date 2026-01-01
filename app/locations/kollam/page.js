export const metadata = {
    title: "Web Developer Kollam | Flutter App Development Kollam | Industrial Digital Solutions - Anagh K R",
    description: "Expert web development and Flutter app development services in Kollam. Comprehensive digital solutions including responsive websites, mobile apps, and e-commerce platforms for industrial and port city businesses.",
    keywords: "web developer Kollam, Flutter developer Kollam, app development Kollam, website design Kollam, Kollam web services, industrial web developer, responsive web design, mobile app development, e-commerce solutions, digital marketing, business automation, MERN stack developer Kollam, React developer Kollam, Node.js developer Kollam, professional web developer Kollam, custom website development Kollam",
    author: "ANAGH K R",
    robots: "index, follow",
    canonical: "https://www.anaghkr.in/locations/kollam",
    ogTitle: "Web Developer Kollam | Flutter App Development Kollam",
    ogDescription: "Expert web development and Flutter app development services in Kollam. Comprehensive digital solutions for industrial and port city businesses.",
    ogUrl: "https://www.anaghkr.in/locations/kollam",
    ogType: "website"
};

import '../city.css';

export default function KollamServices() {
    const cityHighlights = [
        {
            icon: "fas fa-industry",
            title: "Industrial Hub",
            description: "Major industrial center with diverse manufacturing and processing units"
        },
        {
            icon: "fas fa-anchor",
            title: "Ancient Port",
            description: "Historic port city with modern maritime infrastructure and trade facilities"
        },
        {
            icon: "fas fa-leaf",
            title: "Cashew Capital",
            description: "World's cashew capital with global export business opportunities"
        },
        {
            icon: "fas fa-water",
            title: "Backwater Tourism",
            description: "Beautiful backwaters with tourism and hospitality business potential"
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
            icon: "fas fa-cogs",
            title: "Industrial Solutions",
            description: "Specialized solutions for manufacturing and industrial business requirements"
        },
        {
            icon: "fas fa-ship",
            title: "Export Platforms",
            description: "Custom platforms for export businesses and international trade management"
        },
        {
            icon: "fas fa-hotel",
            title: "Tourism Solutions",
            description: "Digital solutions for tourism and hospitality businesses in backwater region"
        },
        {
            icon: "fas fa-chart-line",
            title: "Processing Solutions",
            description: "Business solutions for cashew processing and agricultural industries"
        }
    ];

    const portfolio = [
        {
            icon: "fas fa-industry",
            title: "Manufacturing Portal",
            description: "Industrial management system for manufacturing units in Kollam",
            tech: ["React", "Node.js", "Inventory Management", "Production Tracking"]
        },
        {
            icon: "fas fa-ship",
            title: "Export Management",
            description: "Cashew export business management platform with international compliance",
            tech: ["Flutter", "Firebase", "Export Documentation", "Quality Control"]
        },
        {
            icon: "fas fa-bed",
            title: "Resort Booking",
            description: "Backwater resort booking and management system for tourism industry",
            tech: ["React", "Booking System", "Payment Gateway", "Guest Management"]
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
                                    Kollam, Kerala
                                </div>
                                <h1 className="city-main-title">
                                    Web Development Services in
                                    <span className="text-brand d-block">Kollam</span>
                                </h1>
                                <p className="city-subtitle">
                                    Expert web development and Flutter app development services in Kollam. 
                                    Comprehensive digital solutions for industrial businesses, port operations, 
                                    and tourism industry with focus on export and manufacturing sector needs.
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
                                Our Services in <span className="text-brand">Kollam</span>
                            </h2>
                            <p className="section-subtitle">
                                Comprehensive digital solutions for industrial and export businesses
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
                                Why Choose Us for <span className="text-brand">Kollam Projects</span>?
                            </h2>
                            <p className="section-subtitle">
                                Industrial expertise with specialized solutions for manufacturing and export businesses
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
                                Recent Projects in <span className="text-brand">Kollam</span>
                            </h2>
                            <p className="section-subtitle">
                                Successful industrial and tourism solutions delivered in Kollam
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
                            Ready to Start Your Kollam Project?
                        </h2>
                        <p className="cta-description">
                            Get professional web development and mobile app development services 
                            in Kollam. Industrial expertise with specialized solutions for 
                            manufacturing, export businesses, and tourism industry in the cashew capital.
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
