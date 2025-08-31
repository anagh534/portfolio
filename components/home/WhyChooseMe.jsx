"use client";
import LazyImage from './LazyImage';
import './whychooseme.css';

const WhyChooseMe = () => {
    const services = [
        {
            icon: "🚀",
            title: "Fast & Modern Development",
            description: "Lightning-fast websites built with latest technologies"
        },
        {
            icon: "💎",
            title: "Premium Quality Design",
            description: "Pixel-perfect designs that captivate your audience"
        },
        {
            icon: "📱",
            title: "Mobile-First Approach",
            description: "Responsive designs that work flawlessly on all devices"
        },
        {
            icon: "🎯",
            title: "SEO Optimized",
            description: "Built-in SEO features to boost your online visibility"
        }
    ];

    const keyPoints = [
        "5+ Years of Professional Experience",
        "50+ Successful Projects Delivered",
        "100% Client Satisfaction Rate",
        "24/7 Technical Support",
        "Affordable Pricing for All Budgets",
        "Quick Turnaround Time"
    ];

    return (
        <section className="why-choose-me-section" id="why-choose-me">
            <div className="container">
                <div className="row align-items-center g-5">
                    {/* Content Side */}
                    <div className="col-lg-6 col-xl-7">
                        <div className="content-wrapper">
                            {/* Badge */}
                            <div className="section-badge">
                                <i className="fas fa-star me-2"></i>
                                Why Choose Me
                            </div>

                            {/* Main Heading */}
                            <h2 className="main-heading">
                                Expert <span className="highlight-text">MERN Stack Developer</span> 
                                <br />In Kerala, India
                            </h2>

                            {/* Main Description */}
                            <p className="main-description">
                                As an experienced full-stack developer based in Kerala, I have the expertise to create 
                                exceptional websites and mobile applications that deliver outstanding results. With a deep 
                                understanding of modern web technologies, I bring your digital vision to life with precision and creativity.
                            </p>

                            {/* Services Grid */}
                            <div className="services-grid">
                                {services.map((service, index) => (
                                    <div key={index} className="service-item">
                                        <div className="service-icon">{service.icon}</div>
                                        <div className="service-content">
                                            <h4 className="service-title">{service.title}</h4>
                                            <p className="service-desc">{service.description}</p>
                                        </div>
                                    </div>
                                ))}
                            </div>
                        </div>
                    </div>

                    {/* Image Side */}
                    <div className="col-lg-6 col-xl-5">
                        <div className="image-wrapper">
                            <div className="main-image-container">
                                <LazyImage
                                    src="/assets/profile.webp"
                                    alt="ANAGH K R - Professional MERN Stack Developer in Kerala"
                                    className="main-profile-image"
                                />
                                <div className="image-overlay">
                                    <div className="overlay-content">
                                        <div className="stat-item">
                                            <span className="stat-number">5+</span>
                                            <span className="stat-label">Years Experience</span>
                                        </div>
                                        <div className="stat-item">
                                            <span className="stat-number">50+</span>
                                            <span className="stat-label">Projects Completed</span>
                                        </div>
                                    </div>
                                </div>
                            </div>

                            {/* Floating Elements */}
                            <div className="floating-elements">
                                <div className="floating-card card-1">
                                    <div className="card-icon">
                                        <i className="fab fa-react"></i>
                                    </div>
                                    <div className="card-content">
                                        <h5>React Expert</h5>
                                        <p>Modern Frontend</p>
                                    </div>
                                </div>

                                <div className="floating-card card-2">
                                    <div className="card-icon">
                                        <i className="fab fa-node-js"></i>
                                    </div>
                                    <div className="card-content">
                                        <h5>Node.js Pro</h5>
                                        <p>Scalable Backend</p>
                                    </div>
                                </div>

                                <div className="floating-card card-3">
                                    <div className="card-icon">
                                        <i className="fas fa-mobile-alt"></i>
                                    </div>
                                    <div className="card-content">
                                        <h5>Flutter Apps</h5>
                                        <p>Cross-Platform</p>
                                    </div>
                                </div>

                                <div className="floating-card card-4">
                                    <div className="card-icon">
                                        <i className="fas fa-database"></i>
                                    </div>
                                    <div className="card-content">
                                        <h5>Database Expert</h5>
                                        <p>MongoDB & MySQL</p>
                                    </div>
                                </div>
                            </div>

                            {/* Background Decorations */}
                            <div className="bg-decorations">
                                <div className="decoration-1"></div>
                                <div className="decoration-2"></div>
                                <div className="decoration-3"></div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </section>
    );
};

export default WhyChooseMe;
