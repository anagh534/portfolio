export const metadata = {
    title: "Web Developer Thiruvananthapuram | Flutter App Development Trivandrum | MERN Stack Developer - Anagh K R",
    description: "Professional web development and Flutter app development services in Thiruvananthapuram (Trivandrum). Government web solutions, educational platforms, enterprise development, and mobile app development services in Kerala's capital city.",
    keywords: "web developer Thiruvananthapuram, Flutter developer Trivandrum, app development Thiruvananthapuram, website design Trivandrum, Thiruvananthapuram web development services, mobile app development Trivandrum, government web solutions, educational platforms, enterprise development, MERN stack developer Thiruvananthapuram, React developer Trivandrum, Node.js developer Thiruvananthapuram, professional web developer Trivandrum, best web developer Thiruvananthapuram, custom website development Trivandrum, IT hub web development",
    author: "ANAGH K R",
    robots: "index, follow",
    canonical: "https://anagh534.github.io/locations/thiruvananthapuram",
    ogTitle: "Web Developer Thiruvananthapuram | Flutter App Development Trivandrum",
    ogDescription: "Professional web development and Flutter app development services in Thiruvananthapuram. Specialized in government projects and enterprise solutions.",
    ogUrl: "https://anagh534.github.io/locations/thiruvananthapuram",
    ogType: "website"
};

import '../city.css';

export default function ThiruvananthapuramServices() {
    const cityHighlights = [
        {
            icon: "fas fa-university",
            title: "Capital City",
            description: "Kerala's administrative capital with government institutions"
        },
        {
            icon: "fas fa-satellite-dish",
            title: "IT Hub",
            description: "Major technology park and IT companies headquarters"
        },
        {
            icon: "fas fa-graduation-cap",
            title: "Education Center",
            description: "Premier educational institutions and research centers"
        },
        {
            icon: "fas fa-globe",
            title: "International Gateway",
            description: "International airport and global business connections"
        }
    ];

    const services = [
        {
            icon: "fas fa-landmark",
            title: "Government Web Solutions",
            description: "Specialized web portals and applications for government departments and public services",
            features: ["Secure Development", "Compliance Standards", "Accessibility Features", "Multi-language Support"]
        },
        {
            icon: "fas fa-school",
            title: "Educational Platforms",
            description: "E-learning systems and educational portals for institutions and training centers",
            features: ["LMS Development", "Student Portals", "Online Assessment", "Virtual Classrooms"]
        },
        {
            icon: "fas fa-building",
            title: "Enterprise Development",
            description: "Large-scale web applications and enterprise solutions for corporations",
            features: ["Scalable Architecture", "Enterprise Integration", "Security Features", "Performance Optimization"]
        },
        {
            icon: "fab fa-flutter",
            title: "Mobile App Development",
            description: "Cross-platform mobile applications for government and enterprise use",
            features: ["Government Apps", "Enterprise Mobility", "Citizen Services", "Employee Apps"]
        },
        {
            icon: "fas fa-cogs",
            title: "Custom Software Solutions",
            description: "Tailored software development for specific business requirements",
            features: ["Custom Development", "System Integration", "API Development", "Cloud Solutions"]
        },
        {
            icon: "fas fa-chart-line",
            title: "Digital Transformation",
            description: "Complete digital transformation services for organizations",
            features: ["Process Automation", "Digital Strategy", "Technology Consulting", "Change Management"]
        }
    ];

    const benefits = [
        {
            icon: "fas fa-shield-alt",
            title: "Security Focus",
            description: "Specialized in secure development practices for government and enterprise projects"
        },
        {
            icon: "fas fa-users",
            title: "Enterprise Experience",
            description: "Experience working with large organizations and complex requirements"
        },
        {
            icon: "fas fa-certificate",
            title: "Compliance Ready",
            description: "Understanding of government standards and compliance requirements"
        },
        {
            icon: "fas fa-headset",
            title: "Professional Support",
            description: "Dedicated support for mission-critical applications and systems"
        }
    ];

    const portfolio = [
        {
            icon: "fas fa-vote-yea",
            title: "Government Portal",
            description: "Citizen services portal for state department with secure authentication",
            tech: ["React", "Node.js", "PostgreSQL", "JWT Security"]
        },
        {
            icon: "fas fa-chalkboard-teacher",
            title: "Educational Platform",
            description: "Comprehensive LMS for premier educational institution in Trivandrum",
            tech: ["React", "Express", "MongoDB", "Video Streaming"]
        },
        {
            icon: "fas fa-hospital",
            title: "Healthcare System",
            description: "Hospital management system with patient portal and appointment booking",
            tech: ["Flutter", "Node.js", "MySQL", "Real-time Updates"]
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
                                    Thiruvananthapuram, Kerala
                                </div>
                                <h1 className="city-main-title">
                                    Web Development Services in
                                    <span className="text-brand d-block">Thiruvananthapuram</span>
                                </h1>
                                <p className="city-subtitle">
                                    Expert web development and mobile app development services in Thiruvananthapuram, 
                                    Kerala's capital city. Specialized in government projects, educational platforms, 
                                    and enterprise solutions with focus on security and compliance.
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
                                Our Services in <span className="text-brand">Thiruvananthapuram</span>
                            </h2>
                            <p className="section-subtitle">
                                Specialized digital solutions for government, education, and enterprise sectors
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
                                Why Choose Us for <span className="text-brand">Trivandrum Projects</span>?
                            </h2>
                            <p className="section-subtitle">
                                Specialized expertise for government and enterprise development needs
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
                                Recent Projects in <span className="text-brand">Thiruvananthapuram</span>
                            </h2>
                            <p className="section-subtitle">
                                Successful government and enterprise solutions delivered in the capital city
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
                            Ready to Start Your Trivandrum Project?
                        </h2>
                        <p className="cta-description">
                            Get professional web development and mobile app development services 
                            in Thiruvananthapuram. Specialized solutions for government, educational, 
                            and enterprise projects with focus on security and compliance.
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
