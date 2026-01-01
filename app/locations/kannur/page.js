export const metadata = {
    title: "Web Developer Kannur | Flutter App Development Kannur | Coastal Digital Solutions - Anagh K R",
    description: "Expert web development and Flutter app development services in Kannur. Comprehensive digital solutions including responsive websites, mobile apps, and e-commerce platforms for coastal and handloom businesses.",
    keywords: "web developer Kannur, Flutter developer Kannur, app development Kannur, website design Kannur, Kannur web services, coastal web developer, responsive web design, mobile app development, e-commerce solutions, digital marketing, business automation, MERN stack developer Kannur, React developer Kannur, Node.js developer Kannur, professional web developer Kannur, custom website development Kannur",
    author: "ANAGH K R",
    robots: "index, follow",
  canonical: "https://www.anaghkr.in/locations/kannur",
  ogTitle: "Web Developer Kannur | Flutter App Development Kannur",
  ogDescription: "Expert web development and Flutter app development services in Kannur. Comprehensive digital solutions for coastal and handloom businesses.",
  ogUrl: "https://www.anaghkr.in/locations/kannur",
    ogType: "website"
};

import '../city.css';
import Script from 'next/script';

export default function KannurServices() {
    const cityHighlights = [
        {
            icon: "fas fa-water",
            title: "Coastal Heritage",
            description: "Rich coastal culture with traditional business practices and modern opportunities"
        },
        {
            icon: "fas fa-industry",
            title: "Handloom Industry",
            description: "Traditional handloom and textile industry hub with global market reach"
        },
        {
            icon: "fas fa-ship",
            title: "Port Connectivity",
            description: "Strategic port location with excellent connectivity for trade and commerce"
        },
        {
            icon: "fas fa-leaf",
            title: "Spice Trade",
            description: "Historical spice trading center with modern export business opportunities"
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
            icon: "fas fa-anchor",
            title: "Coastal Expertise",
            description: "Deep understanding of coastal business culture and traditional trade practices"
        },
        {
            icon: "fas fa-palette",
            title: "Artisan Solutions",
            description: "Specialized platforms for handloom and traditional craft businesses"
        },
        {
            icon: "fas fa-globe-americas",
            title: "Export Solutions",
            description: "Digital solutions tailored for export businesses and international trade"
        },
        {
            icon: "fas fa-history",
            title: "Heritage Integration",
            description: "Blending traditional business values with modern digital technologies"
        }
    ];

    const portfolio = [
        {
            icon: "fas fa-shopping-bag",
            title: "Handloom E-commerce",
            description: "Online marketplace for traditional Kannur handloom and textile products",
            tech: ["React", "Node.js", "Product Catalog", "International Shipping"]
        },
        {
            icon: "fas fa-ship",
            title: "Export Management",
            description: "Export business management system for spice and commodity traders",
            tech: ["Flutter", "Firebase", "Document Management", "Shipping Tracker"]
        },
        {
            icon: "fas fa-utensils",
            title: "Spice Portal",
            description: "B2B platform for spice traders with quality certification and bulk ordering",
            tech: ["React", "Quality Control", "Bulk Orders", "Certificate Management"]
        }
    ];

    return (
        <div className="city-page-container">
            <Script id="schema-local-business-kannur" type="application/ld+json" dangerouslySetInnerHTML={{
                __html: JSON.stringify({
                    "@context": "https://schema.org",
                    "@type": "ProfessionalService",
                    "name": "ANAGH K R - Web Developer Kannur",
                    "description": "Expert web development and Flutter app development services in Kannur, Kerala. Specializing in responsive websites, mobile apps, and e-commerce platforms.",
                    "url": "https://www.anaghkr.in/locations/kannur",
                    "priceRange": "₹₹",
                    "address": {
                        "@type": "PostalAddress",
                        "addressLocality": "Kannur",
                        "addressRegion": "Kerala",
                        "addressCountry": "IN"
                    },
                    "geo": {
                        "@type": "GeoCoordinates",
                        "latitude": "11.8745",
                        "longitude": "75.3704"
                    },
                    "areaServed": {
                        "@type": "City",
                        "name": "Kannur"
                    },
                    "serviceType": ["Web Development", "Flutter App Development", "Mobile App Development", "Website Design", "E-commerce Development"],
                    "provider": {
                        "@type": "Person",
                        "name": "ANAGH K R",
                        "jobTitle": "Freelance Web Developer & Flutter Developer"
                    }
                })
            }} />
            
            {/* Hero Section */}
            <section className="city-hero-section">
                <div className="container">
                    <div className="row justify-content-center">
                        <div className="col-lg-10">
                            <div className="city-hero-content text-center">
                                <div className="city-badge">
                                    <i className="fas fa-map-marker-alt me-2"></i>
                                    Kannur, Kerala
                                </div>
                                <h1 className="city-main-title">
                                    Web Development Services in
                                    <span className="text-brand d-block">Kannur</span>
                                </h1>
                                <p className="city-subtitle">
                                    Expert web development and Flutter app development services in Kannur. 
                                    Comprehensive digital solutions for coastal businesses, handloom industry, 
                                    and traditional traders with modern technology integration and cultural heritage preservation.
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
                                Our Services in <span className="text-brand">Kannur</span>
                            </h2>
                            <p className="section-subtitle">
                                Comprehensive digital solutions for coastal businesses and traditional industries
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
                                Why Choose Us for <span className="text-brand">Kannur Projects</span>?
                            </h2>
                            <p className="section-subtitle">
                                Coastal expertise with traditional business understanding and modern technology
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
                                Recent Projects in <span className="text-brand">Kannur</span>
                            </h2>
                            <p className="section-subtitle">
                                Successful traditional and modern business solutions delivered in Kannur
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
                            Ready to Start Your Kannur Project?
                        </h2>
                        <p className="cta-description">
                            Get professional web development and mobile app development services 
                            in Kannur. Coastal expertise with traditional business understanding 
                            and modern technology solutions for handloom, export, and traditional industries.
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
