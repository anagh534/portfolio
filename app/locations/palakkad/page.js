export const metadata = {
    title: "Web Developer Palakkad | Flutter App Development Palakkad | Agricultural Tech Solutions - Anagh K R",
    description: "Expert web development and Flutter app development services in Palakkad. Specializing in agricultural websites, educational platforms, and business solutions for the gateway of Kerala.",
    keywords: "web developer Palakkad, Flutter developer Palakkad, app development Palakkad, website design Palakkad, Palakkad web services, agricultural platforms, educational websites, business solutions, mobile development, rural tech solutions, gateway of Kerala web development, agricultural hub solutions, educational center websites, MERN stack developer Palakkad, React developer Palakkad, Node.js developer Palakkad",
    author: "ANAGH K R",
    robots: "index, follow",
    canonical: "https://www.anaghkr.in/locations/palakkad",
    ogTitle: "Web Developer Palakkad | Flutter App Development Palakkad",
    ogDescription: "Expert web development and Flutter app development services in Palakkad. Specialized in agricultural and educational platform solutions.",
    ogUrl: "https://www.anaghkr.in/locations/palakkad",
    ogType: "website"
};

import '../city.css';

export default function PalakkadServices() {
    const cityHighlights = [
        {
            icon: "fas fa-tractor",
            title: "Agricultural Hub",
            description: "Kerala's agricultural center with specialized farming technology needs"
        },
        {
            icon: "fas fa-graduation-cap",
            title: "Educational Center",
            description: "Home to numerous educational institutions requiring digital solutions"
        },
        {
            icon: "fas fa-mountain",
            title: "Gateway to Kerala",
            description: "Strategic location connecting Kerala with neighboring states"
        },
        {
            icon: "fas fa-industry",
            title: "Industrial Growth",
            description: "Emerging industrial sector with expanding digital requirements"
        }
    ];

    const services = [
        {
            icon: "fas fa-leaf",
            title: "Agricultural Platforms",
            description: "Digital solutions for farms, agri-businesses, and food processing units",
            features: ["Farm Management", "Supply Chain", "Quality Control", "Market Connection"]
        },
        {
            icon: "fas fa-school",
            title: "Educational Websites",
            description: "Digital platforms for schools, colleges, and educational institutions",
            features: ["Learning Management", "Student Portal", "Admission Systems", "Digital Library"]
        },
        {
            icon: "fas fa-store",
            title: "Business Solutions",
            description: "Comprehensive digital solutions for local businesses and enterprises",
            features: ["Business Automation", "Customer Portals", "Inventory Systems", "Reporting Tools"]
        },
        {
            icon: "fab fa-flutter",
            title: "Mobile Development",
            description: "Native and cross-platform mobile applications for various industries",
            features: ["iOS & Android", "Cross-Platform", "Native Performance", "App Store Deployment"]
        },
        {
            icon: "fas fa-seedling",
            title: "Rural Tech Solutions",
            description: "Specialized technology solutions for rural businesses and communities",
            features: ["Low Bandwidth", "Offline Capability", "Local Language", "Simple Interface"]
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
            icon: "fas fa-truck-loading",
            title: "Agricultural Expertise",
            description: "Specialized knowledge in developing solutions for agricultural businesses"
        },
        {
            icon: "fas fa-book",
            title: "Educational Focus",
            description: "Experience in creating platforms for various educational institutions"
        },
        {
            icon: "fas fa-hand-holding-heart",
            title: "Rural Understanding",
            description: "Deep understanding of rural business needs and challenges"
        },
        {
            icon: "fas fa-language",
            title: "Local Adaptability",
            description: "Solutions that adapt to local language and cultural requirements"
        }
    ];

    const portfolio = [
        {
            icon: "fas fa-wheat-awn",
            title: "Farm Management System",
            description: "Comprehensive platform for a large paddy farm in Palakkad",
            tech: ["React", "Node.js", "Weather API", "Crop Management"]
        },
        {
            icon: "fas fa-university",
            title: "College Portal",
            description: "Digital campus solution for a prominent educational institution",
            tech: ["MERN Stack", "Student Portal", "Faculty Dashboard", "Online Learning"]
        },
        {
            icon: "fas fa-box",
            title: "Agri-Product Marketplace",
            description: "E-commerce platform connecting local farmers with buyers",
            tech: ["Flutter", "Firebase", "Payment Gateway", "Logistics Integration"]
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
                                    Palakkad, Kerala
                                </div>
                                <h1 className="city-main-title">
                                    Web Development Services in
                                    <span className="text-brand d-block">Palakkad</span>
                                </h1>
                                <p className="city-subtitle">
                                    Expert web development and Flutter app development services in Palakkad. 
                                    Specializing in agricultural websites, educational platforms, and business 
                                    solutions for the gateway of Kerala.
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
                                Our Services in <span className="text-brand">Palakkad</span>
                            </h2>
                            <p className="section-subtitle">
                                Specialized digital solutions for agricultural, educational, and business sectors
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
                                Why Choose Us for <span className="text-brand">Palakkad Projects</span>?
                            </h2>
                            <p className="section-subtitle">
                                Specialized expertise in agricultural and educational technology solutions
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
                                Recent Projects in <span className="text-brand">Palakkad</span>
                            </h2>
                            <p className="section-subtitle">
                                Successful agricultural, educational, and business solutions delivered in Palakkad
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
                            Ready to Start Your Palakkad Project?
                        </h2>
                        <p className="cta-description">
                            Get professional web development and mobile app development services 
                            in Palakkad. Specialized expertise in agricultural technology, educational 
                            platforms, and rural business solutions.
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
