export const metadata = {
    title: "Web Developer Kochi | Flutter App Development Kochi | MERN Stack Developer Ernakulam - Anagh K R",
    description: "Professional web development and Flutter app development services in Kochi, Ernakulam. Custom website development, e-commerce solutions, mobile app development, and digital marketing services for businesses in Kochi.",
    keywords: "web developer Kochi, Flutter developer Kochi, app development Kochi, website design Kochi, Kochi web development services, mobile app development Kochi, e-commerce development Kochi, MERN stack developer Kochi, React developer Kochi, Node.js developer Kochi, responsive web design Kochi, WordPress development Kochi, Ernakulam web developer, Kochi website design company, custom website development Kochi, professional web developer Kochi, best web developer Kochi, affordable web development Kochi",
    author: "ANAGH K R",
    robots: "index, follow",
    canonical: "https://www.anaghkr.in/locations/kochi",
    ogTitle: "Web Developer Kochi | Flutter App Development Kochi | MERN Stack Developer",
    ogDescription: "Professional web development and Flutter app development services in Kochi, Ernakulam. Custom solutions for businesses in Kerala's commercial capital.",
    ogUrl: "https://www.anaghkr.in/locations/kochi",
    ogType: "website"
};

import '../city.css';

export default function KochiServices() {
    const cityHighlights = [
        {
            icon: "fas fa-building",
            title: "Commercial Hub",
            description: "Kerala's business capital with thriving startups and enterprises"
        },
        {
            icon: "fas fa-ship",
            title: "Major Port",
            description: "International trade gateway requiring modern digital solutions"
        },
        {
            icon: "fas fa-graduation-cap",
            title: "IT Education",
            description: "Home to premier tech institutions and skilled professionals"
        },
        {
            icon: "fas fa-chart-line",
            title: "Growing Economy",
            description: "Rapid business growth demanding digital transformation"
        }
    ];

    const services = [
        {
            icon: "fas fa-laptop-code",
            title: "Custom Website Development",
            description: "Professional websites tailored for Kochi businesses with modern design and functionality",
            features: ["Responsive Design", "SEO Optimized", "Fast Loading", "Mobile-First Approach"]
        },
        {
            icon: "fas fa-shopping-cart",
            title: "E-commerce Solutions",
            description: "Complete online stores for Kochi retailers and businesses to expand their reach",
            features: ["Payment Integration", "Inventory Management", "Order Tracking", "Customer Portal"]
        },
        {
            icon: "fab fa-flutter",
            title: "Flutter App Development",
            description: "Cross-platform mobile applications for iOS and Android with native performance",
            features: ["Cross-Platform", "Native Performance", "Real-time Updates", "Offline Support"]
        },
        {
            icon: "fas fa-database",
            title: "MERN Stack Development",
            description: "Full-stack web applications using MongoDB, Express, React, and Node.js",
            features: ["Scalable Architecture", "Real-time Features", "API Development", "Cloud Integration"]
        },
        {
            icon: "fab fa-wordpress",
            title: "WordPress Development",
            description: "Custom WordPress websites and plugins for easy content management",
            features: ["Custom Themes", "Plugin Development", "Content Management", "SEO Friendly"]
        },
        {
            icon: "fas fa-search",
            title: "Digital Marketing",
            description: "Complete digital marketing solutions to grow your business online",
            features: ["SEO Services", "Social Media Marketing", "Google Ads", "Analytics Setup"]
        }
    ];

    const benefits = [
        {
            icon: "fas fa-map-marker-alt",
            title: "Local Market Knowledge",
            description: "Deep understanding of Kochi's business landscape and customer preferences"
        },
        {
            icon: "fas fa-handshake",
            title: "Personal Service",
            description: "Direct communication and personalized attention to your project requirements"
        },
        {
            icon: "fas fa-clock",
            title: "Quick Response",
            description: "Fast turnaround times and immediate support for urgent requirements"
        },
        {
            icon: "fas fa-rupee-sign",
            title: "Competitive Pricing",
            description: "Affordable rates without compromising on quality and professional standards"
        }
    ];

    const portfolio = [
        {
            icon: "fas fa-store",
            title: "E-commerce Platform",
            description: "Modern online store for Kochi-based retailer with payment integration",
            tech: ["React", "Node.js", "MongoDB", "Payment Gateway"]
        },
        {
            icon: "fas fa-mobile-alt",
            title: "Business App",
            description: "Flutter mobile app for local service provider with booking system",
            tech: ["Flutter", "Firebase", "Real-time Chat", "GPS Integration"]
        },
        {
            icon: "fas fa-graduation-cap",
            title: "Educational Portal",
            description: "Learning management system for Kochi educational institution",
            tech: ["React", "Node.js", "Video Streaming", "Progress Tracking"]
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
                                    Kochi, Ernakulam
                                </div>
                                <h1 className="city-main-title">
                                    Web Development Services in
                                    <span className="text-brand d-block">Kochi</span>
                                </h1>
                                <p className="city-subtitle">
                                    Professional web development and Flutter app development services in Kochi, 
                                    Kerala's commercial capital. Specialized solutions for businesses in Ernakulam 
                                    district with focus on e-commerce, startups, and enterprise applications.
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
                                Our Services in <span className="text-brand">Kochi</span>
                            </h2>
                            <p className="section-subtitle">
                                Comprehensive digital solutions tailored for businesses in Kerala's commercial hub
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
                                Why Choose Us for <span className="text-brand">Kochi Projects</span>?
                            </h2>
                            <p className="section-subtitle">
                                Local expertise combined with global standards for your digital success
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
                                Recent Projects in <span className="text-brand">Kochi</span>
                            </h2>
                            <p className="section-subtitle">
                                Successful digital solutions delivered for Kochi businesses
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
                            Ready to Start Your Kochi Project?
                        </h2>
                        <p className="cta-description">
                            Get professional web development and mobile app development services 
                            in Kochi. Let's transform your business with cutting-edge digital solutions 
                            tailored for the commercial capital of Kerala.
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
