export const metadata = {
    title: "Web Developer Kasaragod | Flutter App Development Kasaragod | Local Digital Solutions - Anagh K R",
    description: "Local web development and Flutter app development services in Kasaragod. Personalized digital solutions, custom websites, mobile applications, and e-commerce platforms for businesses in the northernmost district of Kerala.",
    keywords: "web developer Kasaragod, Flutter developer Kasaragod, app development Kasaragod, website design Kasaragod, Kasaragod web services, mobile app development Kasaragod, local digital solutions, custom mobile apps, e-commerce development, local business websites, digital marketing Kasaragod, multilingual solutions, personalized web development, MERN stack developer Kasaragod, React developer Kasaragod, Node.js developer Kasaragod",
    author: "ANAGH K R",
    robots: "index, follow",
    canonical: "https://anagh534.github.io/locations/kasaragod",
    ogTitle: "Web Developer Kasaragod | Flutter App Development Kasaragod",
    ogDescription: "Local web development and Flutter app development services in Kasaragod. Personalized digital solutions for businesses in Kerala's northernmost district.",
    ogUrl: "https://anagh534.github.io/locations/kasaragod",
    ogType: "website"
};

import '../city.css';

export default function KasaragodServices() {
    const cityHighlights = [
        {
            icon: "fas fa-home",
            title: "Local Expertise",
            description: "Deep understanding of local business culture and community needs"
        },
        {
            icon: "fas fa-language",
            title: "Multilingual Solutions",
            description: "Support for Malayalam, Tulu, Kannada, and English languages"
        },
        {
            icon: "fas fa-user-friends",
            title: "Personalized Service",
            description: "Direct communication and customized solutions for each client"
        },
        {
            icon: "fas fa-map-pin",
            title: "Border District",
            description: "Strategic location connecting Kerala and Karnataka markets"
        }
    ];

    const services = [
        {
            icon: "fas fa-laptop-code",
            title: "Personalized Web Solutions",
            description: "Custom websites designed specifically for local businesses with personal attention",
            features: ["Custom Design", "Local SEO", "Personal Consultation", "Ongoing Support"]
        },
        {
            icon: "fab fa-flutter",
            title: "Custom Mobile Apps",
            description: "Tailored mobile applications for local businesses and service providers",
            features: ["Flutter Development", "Local Features", "Offline Support", "Push Notifications"]
        },
        {
            icon: "fas fa-shopping-cart",
            title: "E-commerce Development",
            description: "Online stores for local retailers to expand their customer reach",
            features: ["Local Payment Options", "Inventory Management", "Customer Support", "Multi-language"]
        },
        {
            icon: "fas fa-store",
            title: "Local Business Websites",
            description: "Professional websites for local services, shops, and professionals",
            features: ["Business Listings", "Contact Forms", "Gallery Showcase", "Google Integration"]
        },
        {
            icon: "fas fa-bullhorn",
            title: "Digital Marketing",
            description: "Local digital marketing strategies to reach Kasaragod customers",
            features: ["Local SEO", "Social Media", "Google My Business", "Community Engagement"]
        },
        {
            icon: "fas fa-globe",
            title: "Multilingual Solutions",
            description: "Websites and apps supporting multiple regional languages",
            features: ["Malayalam Support", "Tulu Integration", "Kannada Content", "English Version"]
        }
    ];

    const benefits = [
        {
            icon: "fas fa-heart",
            title: "Community Connection",
            description: "Strong ties with local business community and understanding of regional needs"
        },
        {
            icon: "fas fa-handshake",
            title: "Personal Relationships",
            description: "Building long-term partnerships with local businesses and entrepreneurs"
        },
        {
            icon: "fas fa-clock",
            title: "Quick Response",
            description: "Immediate support and quick turnaround for urgent business requirements"
        },
        {
            icon: "fas fa-rupee-sign",
            title: "Local Pricing",
            description: "Affordable rates designed for local market with flexible payment options"
        }
    ];

    const portfolio = [
        {
            icon: "fas fa-clinic-medical",
            title: "Healthcare Center Website",
            description: "Professional website for local healthcare center with appointment booking",
            tech: ["React", "Appointment System", "Multilingual", "Mobile Responsive"]
        },
        {
            icon: "fas fa-graduation-cap",
            title: "Educational App",
            description: "Learning app for local educational institution with offline content",
            tech: ["Flutter", "Offline Support", "Progress Tracking", "Local Language"]
        },
        {
            icon: "fas fa-utensils",
            title: "Restaurant Platform",
            description: "Online ordering system for popular local restaurant chain",
            tech: ["React", "Order Management", "Payment Gateway", "Delivery Tracking"]
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
                                    Kasaragod, Kerala
                                </div>
                                <h1 className="city-main-title">
                                    Web Development Services in
                                    <span className="text-brand d-block">Kasaragod</span>
                                </h1>
                                <p className="city-subtitle">
                                    Local web development and Flutter app development services in Kasaragod. 
                                    Offering personalized digital solutions with deep understanding of local 
                                    business culture and community needs in Kerala's northernmost district.
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
                                Our Services in <span className="text-brand">Kasaragod</span>
                            </h2>
                            <p className="section-subtitle">
                                Personalized digital solutions with local expertise and community focus
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
                                Why Choose Local Expertise in <span className="text-brand">Kasaragod</span>?
                            </h2>
                            <p className="section-subtitle">
                                Community-focused approach with personalized service and local understanding
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
                                Recent Projects in <span className="text-brand">Kasaragod</span>
                            </h2>
                            <p className="section-subtitle">
                                Successful local projects delivered with personalized attention
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
                            Ready to Start Your Kasaragod Project?
                        </h2>
                        <p className="cta-description">
                            Get personalized web development and mobile app development services 
                            in Kasaragod. Local expertise with community focus and multilingual 
                            solutions for businesses in Kerala's northernmost district.
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
