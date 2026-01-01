export const metadata = {
    title: "Web Development Services Across Kerala | Flutter Developer in Major Cities - Anagh K R",
    description: "Professional web development and Flutter app development services across Kerala. Serving Kochi, Thiruvananthapuram, Kozhikode, Thrissur, Ernakulam, Calicut, Kannur, Kasaragod, Kollam, Palakkad, and Kanhangad with custom website development, mobile app development, and digital solutions.",
    keywords: "Web development services Kerala, Flutter developer Kerala, Mobile app development Kerala, Custom website development Kerala, Kochi web developer, Thiruvananthapuram app development, Kozhikode website design, Thrissur web development, Ernakulam mobile app developer, Calicut Flutter developer, Kannur web services, Kasaragod app development, Kollam website development, Palakkad web design, Kanhangad digital solutions, Kerala web development company, Professional web developer Kerala, Best Flutter developer Kerala, MERN stack developer Kerala, Responsive web design Kerala, E-commerce development Kerala, WordPress development Kerala, React developer Kerala, Node.js developer Kerala",
    author: "ANAGH K R",
    robots: "index, follow",
  canonical: "https://www.anaghkr.in/locations",
  ogTitle: "Web Development Services Across Kerala | Flutter Developer in Major Cities",
  ogDescription: "Professional web development and Flutter app development services across Kerala. Serving all major cities with custom website development, mobile app development, and digital solutions.",
  ogUrl: "https://www.anaghkr.in/locations",
    ogType: "website",
    twitterCard: "summary_large_image",
    twitterTitle: "Web Development Services Across Kerala | Flutter Developer",
    twitterDescription: "Professional web development and mobile app development services across all major cities in Kerala."
};

import './locations.css';

export default function Locations() {
    const cities = [
        {
            name: "Kochi",
            district: "Ernakulam",
            description: "Professional web development and Flutter app development services in Kochi. Offering custom website development, e-commerce solutions, and mobile app development for businesses in the commercial capital of Kerala.",
            services: ["Custom Website Development", "E-commerce Solutions", "Flutter App Development", "MERN Stack Development", "Digital Marketing"],
            keywords: "web developer Kochi, Flutter developer Kochi, app development Kochi, website design Kochi, Kochi web development services",
            highlights: ["Commercial Hub", "Tech Startups", "Business Solutions", "E-commerce Focus"]
        },
        {
            name: "Thiruvananthapuram",
            district: "Thiruvananthapuram",
            description: "Expert web development and mobile app development services in Thiruvananthapuram. Specialized in government projects, educational platforms, and enterprise solutions for the capital city of Kerala.",
            services: ["Government Web Solutions", "Educational Platforms", "Enterprise Development", "Mobile App Development", "Custom Software"],
            keywords: "web developer Thiruvananthapuram, Flutter developer Trivandrum, app development Thiruvananthapuram, website design Trivandrum",
            highlights: ["Capital City", "Government Projects", "Educational Tech", "IT Hub"]
        },
        {
            name: "Kozhikode",
            district: "Kozhikode",
            description: "Professional web development and Flutter app development services in Kozhikode (Calicut). Providing modern website solutions, mobile applications, and digital transformation services for businesses in Malabar region.",
            services: ["Modern Website Development", "Mobile App Solutions", "Digital Transformation", "E-commerce Platforms", "Business Automation"],
            keywords: "web developer Kozhikode, Flutter developer Calicut, app development Kozhikode, website design Calicut, Kozhikode web services",
            highlights: ["Cultural Center", "Business Hub", "Export Industry", "Modern Solutions"]
        },
        {
            name: "Thrissur",
            district: "Thrissur",
            description: "Custom web development and mobile app development services in Thrissur. Specializing in cultural websites, event management platforms, and business solutions for the cultural capital of Kerala.",
            services: ["Cultural Web Platforms", "Event Management Systems", "Business Websites", "Mobile Applications", "Content Management"],
            keywords: "web developer Thrissur, Flutter developer Thrissur, app development Thrissur, website design Thrissur, Thrissur web development",
            highlights: ["Cultural Capital", "Event Management", "Tourism Focus", "Heritage Sites"]
        },
        {
            name: "Ernakulam",
            district: "Ernakulam",
            description: "Expert web development and Flutter app development services in Ernakulam district. Offering comprehensive digital solutions including responsive websites, mobile apps, and e-commerce platforms for urban businesses.",
            services: ["Responsive Web Design", "Mobile App Development", "E-commerce Solutions", "Digital Marketing", "Business Automation"],
            keywords: "web developer Ernakulam, Flutter developer Ernakulam, app development Ernakulam, website design Ernakulam, Ernakulam web services",
            highlights: ["Urban Center", "Business District", "Tech Companies", "Modern Infrastructure"]
        },
        {
            name: "Calicut",
            district: "Kozhikode",
            description: "Professional web development and mobile app development services in Calicut. Providing innovative digital solutions, responsive websites, and custom applications for businesses in this historic trading city.",
            services: ["Innovative Web Solutions", "Custom Applications", "Trading Platforms", "Mobile Development", "Digital Commerce"],
            keywords: "web developer Calicut, Flutter developer Calicut, app development Calicut, website design Calicut, Calicut web development services",
            highlights: ["Historic Trading City", "Business Networks", "Export Hub", "Digital Commerce"]
        },
        {
            name: "Kannur",
            district: "Kannur",
            description: "Expert web development and Flutter app development services in Kannur. Specializing in handloom industry websites, tourism platforms, and local business solutions for this culturally rich district.",
            services: ["Industry-Specific Websites", "Tourism Platforms", "Local Business Solutions", "Mobile Apps", "Cultural Websites"],
            keywords: "web developer Kannur, Flutter developer Kannur, app development Kannur, website design Kannur, Kannur web development",
            highlights: ["Handloom Industry", "Cultural Heritage", "Tourism Destination", "Local Businesses"]
        },
        {
            name: "Kasaragod",
            district: "Kasaragod",
            description: "Local web development and Flutter app development services in Kasaragod. Offering personalized digital solutions, custom websites, mobile applications, and e-commerce platforms for businesses in the northernmost district of Kerala.",
            services: ["Personalized Web Solutions", "Custom Mobile Apps", "E-commerce Development", "Local Business Websites", "Digital Marketing"],
            keywords: "web developer Kasaragod, Flutter developer Kasaragod, app development Kasaragod, website design Kasaragod, Kasaragod web services",
            highlights: ["Local Expertise", "Personalized Service", "Multilingual Solutions", "Border District"]
        },
        {
            name: "Kollam",
            district: "Kollam",
            description: "Professional web development and mobile app development services in Kollam. Providing port-related solutions, industrial websites, and business platforms for this important commercial center in Kerala.",
            services: ["Port-Related Solutions", "Industrial Websites", "Business Platforms", "Mobile Applications", "Commercial Solutions"],
            keywords: "web developer Kollam, Flutter developer Kollam, app development Kollam, website design Kollam, Kollam web development services",
            highlights: ["Commercial Port", "Industrial Center", "Business Hub", "Maritime Solutions"]
        },
        {
            name: "Palakkad",
            district: "Palakkad",
            description: "Expert web development and Flutter app development services in Palakkad. Specializing in agricultural websites, educational platforms, and business solutions for the gateway of Kerala.",
            services: ["Agricultural Platforms", "Educational Websites", "Business Solutions", "Mobile Development", "Rural Tech Solutions"],
            keywords: "web developer Palakkad, Flutter developer Palakkad, app development Palakkad, website design Palakkad, Palakkad web services",
            highlights: ["Gateway of Kerala", "Agricultural Hub", "Educational Center", "Rural Technology"]
        },
        {
            name: "Kanhangad",
            district: "Kasaragod",
            description: "Local web development and mobile app development services in Kanhangad. Offering custom digital solutions, responsive websites, and mobile applications for local businesses and startups.",
            services: ["Local Digital Solutions", "Responsive Websites", "Mobile Applications", "Startup Solutions", "Business Websites"],
            keywords: "web developer Kanhangad, Flutter developer Kanhangad, app development Kanhangad, website design Kanhangad, Kanhangad web services",
            highlights: ["Local Business Focus", "Startup Solutions", "Custom Development", "Regional Services"]
        }
    ];

    const services = [
        {
            icon: "fas fa-laptop-code",
            title: "Custom Website Development",
            description: "Responsive, modern websites tailored to your business needs across Kerala"
        },
        {
            icon: "fab fa-flutter",
            title: "Flutter App Development",
            description: "Cross-platform mobile applications for iOS and Android platforms"
        },
        {
            icon: "fas fa-shopping-cart",
            title: "E-commerce Solutions",
            description: "Complete online store development with payment integration"
        },
        {
            icon: "fab fa-react",
            title: "MERN Stack Development",
            description: "Full-stack web applications using MongoDB, Express, React, and Node.js"
        },
        {
            icon: "fab fa-wordpress",
            title: "WordPress Development",
            description: "Custom WordPress themes and plugin development"
        },
        {
            icon: "fas fa-search",
            title: "SEO Optimization",
            description: "Search engine optimization to improve your online visibility"
        }
    ];

    return (
        <div id="locations-wrapper" className="locations-page-container">
            {/* Hero Section */}
            <section className="locations-hero-section">
                <div className="container">
                    <div className="row justify-content-center">
                        <div className="col-lg-10 col-xl-8">
                            <div className="locations-hero-content text-center">
                                <div className="locations-hero-badge">
                                    <i className="fas fa-map-marker-alt me-2"></i>
                                    Kerala-Wide Services
                                </div>
                                <h1 className="locations-main-title">
                                    Web Development Services
                                    <span className="text-brand d-block">Across Kerala</span>
                                </h1>
                                <p className="locations-main-subtitle">
                                    Professional web development and Flutter app development services 
                                    available across all major cities and districts in Kerala. 
                                    Local expertise with global standards.
                                </p>
                                
                                {/* Quick Stats */}
                                <div className="locations-stats-grid row g-4 mt-4">
                                    <div className="col-md-3 col-6">
                                        <div className="locations-stat-card">
                                            <div className="locations-stat-number">11+</div>
                                            <div className="locations-stat-label">Cities Served</div>
                                        </div>
                                    </div>
                                    <div className="col-md-3 col-6">
                                        <div className="locations-stat-card">
                                            <div className="locations-stat-number">50+</div>
                                            <div className="locations-stat-label">Projects Completed</div>
                                        </div>
                                    </div>
                                    <div className="col-md-3 col-6">
                                        <div className="locations-stat-card">
                                            <div className="locations-stat-number">100%</div>
                                            <div className="locations-stat-label">Client Satisfaction</div>
                                        </div>
                                    </div>
                                    <div className="col-md-3 col-6">
                                        <div className="locations-stat-card">
                                            <div className="locations-stat-number">24/7</div>
                                            <div className="locations-stat-label">Support Available</div>
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </section>

            {/* Services Overview */}
            <section className="locations-services-section">
                <div className="container">
                    <div className="row justify-content-center mb-5">
                        <div className="col-lg-8 text-center">
                            <h2 className="section-title">
                                Our <span className="text-brand">Services</span>
                            </h2>
                            <p className="section-subtitle">
                                Comprehensive digital solutions available across all Kerala cities
                            </p>
                        </div>
                    </div>
                    
                    <div className="row g-4">
                        {services.map((service, index) => (
                            <div key={index} className="col-lg-4 col-md-6">
                                <div className="service-card">
                                    <div className="service-icon">
                                        <i className={service.icon}></i>
                                    </div>
                                    <h3 className="service-title">{service.title}</h3>
                                    <p className="service-description">{service.description}</p>
                                </div>
                            </div>
                        ))}
                    </div>
                </div>
            </section>

            {/* Cities Grid */}
            <section className="locations-cities-section">
                <div className="container">
                    <div className="row justify-content-center mb-5">
                        <div className="col-lg-8 text-center">
                            <h2 className="section-title">
                                Cities We <span className="text-brand">Serve</span>
                            </h2>
                            <p className="section-subtitle">
                                Professional web development and mobile app development services 
                                across Kerala's major cities and districts
                            </p>
                        </div>
                    </div>
                    
                    <div className="row g-4">
                        {cities.map((city, index) => (
                            <div key={index} className="col-lg-6 col-xl-4">
                                <div className="city-card">
                                    <div className="city-header">
                                        <div className="city-icon">
                                            <i className="fas fa-map-marker-alt"></i>
                                        </div>
                                        <div className="city-info">
                                            <h3 className="city-name">{city.name}</h3>
                                            <p className="city-district">{city.district} District</p>
                                        </div>
                                    </div>
                                    
                                    <p className="city-description">{city.description}</p>
                                    
                                    <div className="city-highlights">
                                        <h4 className="highlights-title">Key Focus Areas:</h4>
                                        <div className="highlights-list">
                                            {city.highlights.map((highlight, idx) => (
                                                <span key={idx} className="highlight-badge">{highlight}</span>
                                            ))}
                                        </div>
                                    </div>
                                    
                                    <div className="city-services">
                                        <h4 className="services-title">Services Available:</h4>
                                        <ul className="services-list">
                                            {city.services.slice(0, 3).map((service, idx) => (
                                                <li key={idx}>{service}</li>
                                            ))}
                                        </ul>
                                    </div>
                                    
                                    <div className="city-cta">
                                        <a href="/contact" className="city-btn">
                                            Get Quote for {city.name}
                                            <i className="fas fa-arrow-right ms-2"></i>
                                        </a>
                                    </div>
                                </div>
                            </div>
                        ))}
                    </div>
                </div>
            </section>

            {/* Why Choose Local Services */}
            <section className="why-local-section">
                <div className="container">
                    <div className="row align-items-center">
                        <div className="col-lg-6">
                            <div className="why-local-content">
                                <h2 className="section-title">
                                    Why Choose <span className="text-brand">Local Expertise</span>?
                                </h2>
                                <p className="section-subtitle">
                                    Working with a Kerala-based developer means better understanding 
                                    of local business needs and market requirements.
                                </p>
                                
                                <div className="local-benefits">
                                    <div className="benefit-item">
                                        <i className="fas fa-check-circle"></i>
                                        <div>
                                            <h4>Local Market Understanding</h4>
                                            <p>Deep knowledge of Kerala business landscape and customer preferences</p>
                                        </div>
                                    </div>
                                    <div className="benefit-item">
                                        <i className="fas fa-check-circle"></i>
                                        <div>
                                            <h4>Regional Language Support</h4>
                                            <p>Multilingual websites supporting Malayalam, English, and other regional languages</p>
                                        </div>
                                    </div>
                                    <div className="benefit-item">
                                        <i className="fas fa-check-circle"></i>
                                        <div>
                                            <h4>Personalized Service</h4>
                                            <p>Direct communication and personalized attention to your project requirements</p>
                                        </div>
                                    </div>
                                    <div className="benefit-item">
                                        <i className="fas fa-check-circle"></i>
                                        <div>
                                            <h4>Cost-Effective Solutions</h4>
                                            <p>Competitive pricing without compromising on quality and professional standards</p>
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </div>
                        <div className="col-lg-6">
                            <div className="why-local-visual">
                                <div className="visual-stats">
                                    <div className="stat-item">
                                        <div className="stat-icon">
                                            <i className="fas fa-users"></i>
                                        </div>
                                        <div className="stat-content">
                                            <h3>50+ Happy Clients</h3>
                                            <p>Across Kerala</p>
                                        </div>
                                    </div>
                                    <div className="stat-item">
                                        <div className="stat-icon">
                                            <i className="fas fa-project-diagram"></i>
                                        </div>
                                        <div className="stat-content">
                                            <h3>100+ Projects</h3>
                                            <p>Successfully Delivered</p>
                                        </div>
                                    </div>
                                    <div className="stat-item">
                                        <div className="stat-icon">
                                            <i className="fas fa-clock"></i>
                                        </div>
                                        <div className="stat-content">
                                            <h3>3+ Years</h3>
                                            <p>Experience</p>
                                        </div>
                                    </div>
                                    <div className="stat-item">
                                        <div className="stat-icon">
                                            <i className="fas fa-award"></i>
                                        </div>
                                        <div className="stat-content">
                                            <h3>100% Satisfaction</h3>
                                            <p>Guaranteed</p>
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </section>

            {/* Contact CTA */}
            <section className="locations-cta-section">
                <div className="container">
                    <div className="row justify-content-center">
                        <div className="col-lg-8 text-center">
                            <div className="cta-content">
                                <h2 className="cta-title">
                                    Ready to Start Your Project?
                                </h2>
                                <p className="cta-subtitle">
                                    Get in touch for professional web development and mobile app 
                                    development services anywhere in Kerala. Let's build something amazing together!
                                </p>
                                <div className="cta-buttons">
                                    <a href="/contact" className="btn-primary">
                                        Start Your Project
                                        <i className="fas fa-rocket ms-2"></i>
                                    </a>
                                    <a href="/services" className="btn-secondary">
                                        View All Services
                                        <i className="fas fa-arrow-right ms-2"></i>
                                    </a>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </section>
        </div>
    );
}
