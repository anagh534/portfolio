export const metadata = {
    title: "About Anagh K R - Flutter Developer Kerala | MERN Stack Developer Kerala | Expert Web & App Development",
    description: "Meet Anagh K R, a professional Flutter developer and MERN stack developer from Kasaragod, Kerala. Specializing in mobile app development, web development services, e-commerce development, and custom website solutions across Kerala including Kochi, Thiruvananthapuram, Kozhikode, Thrissur, Ernakulam, and Calicut.",
    keywords: "Flutter developer Kerala, MERN stack developer Kerala, Web development services Kerala, Mobile app development Kerala, Freelance web developer Kerala, Custom website development Kerala, React developer Kerala, Node.js developer Kerala, Flutter developer Kasaragod, App development Kasaragod, Website design Kerala, Responsive web design, E-commerce website development, WordPress developer Kasaragod, SEO services Kerala, Next.js development, PSD to website conversion, Figma to website development, Academic project development, Startup web development, Full-Stack Web Development, Cross-Platform App Development, Digital Solutions Expert Kasaragod, Professional Developer in Kerala, Scalable Code Development, User-First Approach in Web and App Development",
    author: "ANAGH K R",
    robots: "index, follow",
  canonical: "https://www.anaghkr.in/about",
  ogTitle: "About Anagh K R - Flutter Developer Kerala | MERN Stack Developer Kerala",
  ogDescription: "Meet Anagh K R, a professional Flutter developer and MERN stack developer from Kasaragod, Kerala. Specializing in mobile app development, web development services, and custom solutions across Kerala.",
  ogUrl: "https://www.anaghkr.in/about",
    ogType: "profile",
    twitterCard: "summary_large_image",
    twitterTitle: "About Anagh K R - Flutter Developer Kerala | MERN Stack Developer Kerala",
    twitterDescription: "Professional Flutter developer and MERN stack developer from Kerala offering expert web and mobile app development services."
};

import './about.css';

export default function About() {
    return (
        <>
            {/* Hero Section */}
            <section className="modern-hero-section">
                <div className="container-fluid px-0">
                    <div className="row min-vh-100 align-items-center justify-content-center g-0">
                        <div className="col-12">
                            <div className="container">
                                <div className="row justify-content-center">
                                    <div className="col-xl-8 col-lg-10 col-md-11 text-center">
                                        {/* Hero Badge */}
                                        <div className="hero-badge mb-4" data-aos="fade-up">
                                            <i className="fas fa-code me-2"></i>
                                            <span className="d-none d-sm-inline">Full-Stack Developer</span>
                                            <span className="d-sm-none">Developer</span>
                                        </div>
                                        
                                        {/* Hero Title */}
                                        <h1 className="hero-title mb-4" data-aos="fade-up" data-aos-delay="200">
                                            <span className="d-block d-sm-inline text-light">Hi, I'm </span>
                                            <span className="text-brand">ANAGH K R</span>
                                        </h1>
                                        
                                        {/* Hero Description */}
                                        <div className="row justify-content-center mb-5">
                                            <div className="col-lg-10 col-xl-8">
                                                <p className="hero-description" data-aos="fade-up" data-aos-delay="400">
                                                    Passionate Full-Stack Developer crafting exceptional digital experiences 
                                                    from the beautiful landscapes of Kasaragod, Kerala. Specializing in 
                                                    modern web technologies and mobile applications.
                                                </p>
                                            </div>
                                        </div>
                                        
                                        {/* Hero Stats */}
                                        <div className="hero-stats-container mb-5" data-aos="fade-up" data-aos-delay="600">
                                            <div className="row g-3 g-md-4 justify-content-center">
                                                <div className="col-6 col-sm-4 col-lg-3">
                                                    <div className="stat-card">
                                                        <h3 className="stat-number">5+</h3>
                                                        <p className="stat-label">Years<br className="d-none d-sm-block" /><span className="d-sm-none"> </span>Experience</p>
                                                    </div>
                                                </div>
                                                <div className="col-6 col-sm-4 col-lg-3">
                                                    <div className="stat-card">
                                                        <h3 className="stat-number">50+</h3>
                                                        <p className="stat-label">Projects<br className="d-none d-sm-block" /><span className="d-sm-none"> </span>Done</p>
                                                    </div>
                                                </div>
                                                <div className="col-6 col-sm-4 col-lg-3">
                                                    <div className="stat-card">
                                                        <h3 className="stat-number">10+</h3>
                                                        <p className="stat-label">Technologies<br className="d-none d-sm-block" /><span className="d-sm-none"> </span>Mastered</p>
                                                    </div>
                                                </div>
                                                <div className="col-6 col-sm-12 col-lg-3">
                                                    <div className="stat-card">
                                                        <h3 className="stat-number">100%</h3>
                                                        <p className="stat-label">Client<br className="d-none d-sm-block" /><span className="d-sm-none"> </span>Satisfaction</p>
                                                    </div>
                                                </div>
                                            </div>
                                        </div>
                                        
                                        {/* Hero CTA */}
                                        <div className="hero-cta" data-aos="fade-up" data-aos-delay="800">
                                            <div className="row g-3 justify-content-center">
                                                <div className="col-12 col-sm-auto">
                                                    <a href="/contact" className="btn btn-brand btn-lg w-100 w-sm-auto">
                                                        <i className="fas fa-paper-plane me-2"></i>
                                                        <span className="d-none d-sm-inline">Let's Work Together</span>
                                                        <span className="d-sm-none">Start Project</span>
                                                    </a>
                                                </div>
                                                <div className="col-12 col-sm-auto">
                                                    <a href="/resume" className="btn btn-outline-light btn-lg w-100 w-sm-auto">
                                                        <i className="fas fa-download me-2"></i>
                                                        Download CV
                                                    </a>
                                                </div>
                                            </div>
                                        </div>
                                        
                                        {/* Scroll Indicator */}
                                        <div className="scroll-indicator mt-5 d-none d-lg-block" data-aos="fade-up" data-aos-delay="1000">
                                            <div className="scroll-mouse">
                                                <div className="scroll-wheel"></div>
                                            </div>
                                            <p className="scroll-text">Scroll to explore</p>
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </section>

            {/* About Section */}
            <section className="modern-about-section py-5">
                <div className="container">
                    <div className="row align-items-center mb-5">
                        <div className="col-lg-6 mb-4 mb-lg-0">
                            <div className="about-image-container">
                                <div className="about-image-placeholder">
                                    <i className="fas fa-user-circle"></i>
                                </div>
                                <div className="floating-tech-icons">
                                    <div className="tech-icon" style={{top: '10%', left: '10%'}}>
                                        <i className="fab fa-react"></i>
                                    </div>
                                    <div className="tech-icon" style={{top: '20%', right: '15%'}}>
                                        <i className="fab fa-node-js"></i>
                                    </div>
                                    <div className="tech-icon" style={{bottom: '30%', left: '5%'}}>
                                        <i className="fab fa-js-square"></i>
                                    </div>
                                    <div className="tech-icon" style={{bottom: '10%', right: '10%'}}>
                                        <i className="fas fa-mobile-alt"></i>
                                    </div>
                                </div>
                            </div>
                        </div>
                        <div className="col-lg-6">
                            <div className="section-badge mb-3">
                                <i className="fas fa-user me-2"></i>
                                About Me
                            </div>
                            <h2 className="section-title mb-4">
                                Creating Digital Solutions with 
                                <span className="text-brand"> Passion & Precision</span>
                            </h2>
                            <p className="section-description mb-4">
                                I'm a dedicated MERN Stack Developer and Flutter App Developer based in 
                                the scenic town of Kasaragod, Kerala. I combine technical expertise with 
                                creative problem-solving to deliver exceptional results.
                            </p>
                            <div className="about-highlights">
                                <div className="highlight-item d-flex align-items-center mb-3">
                                    <div className="highlight-icon me-3">
                                        <i className="fas fa-check"></i>
                                    </div>
                                    <span>5+ years of professional development experience</span>
                                </div>
                                <div className="highlight-item d-flex align-items-center mb-3">
                                    <div className="highlight-icon me-3">
                                        <i className="fas fa-check"></i>
                                    </div>
                                    <span>Expertise in MERN Stack & Flutter development</span>
                                </div>
                                <div className="highlight-item d-flex align-items-center mb-3">
                                    <div className="highlight-icon me-3">
                                        <i className="fas fa-check"></i>
                                    </div>
                                    <span>50+ successful projects delivered globally</span>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </section>

            {/* Skills Section */}
            <section className="modern-skills-section py-5">
                <div className="container">
                    <div className="text-center mb-5">
                        <div className="section-badge mb-3">
                            <i className="fas fa-cogs me-2"></i>
                            Technical Skills
                        </div>
                        <h2 className="section-title mb-4">
                            Technologies I <span className="text-brand">Master</span>
                        </h2>
                        <p className="section-description">
                            A comprehensive toolkit for building modern, scalable applications
                        </p>
                    </div>
                    <div className="row g-4">
                        <div className="col-lg-4 col-md-6">
                            <div className="skill-card h-100">
                                <div className="skill-icon mb-3">
                                    <i className="fas fa-laptop-code"></i>
                                </div>
                                <h4 className="skill-title mb-3">Frontend Development</h4>
                                <p className="skill-description mb-4">
                                    Creating responsive and interactive user interfaces
                                </p>
                                <div className="skill-tags">
                                    <span className="skill-tag">React.js</span>
                                    <span className="skill-tag">Next.js</span>
                                    <span className="skill-tag">HTML5</span>
                                    <span className="skill-tag">CSS3</span>
                                    <span className="skill-tag">JavaScript</span>
                                </div>
                            </div>
                        </div>
                        <div className="col-lg-4 col-md-6">
                            <div className="skill-card h-100">
                                <div className="skill-icon mb-3">
                                    <i className="fas fa-server"></i>
                                </div>
                                <h4 className="skill-title mb-3">Backend Development</h4>
                                <p className="skill-description mb-4">
                                    Building robust and scalable server-side applications
                                </p>
                                <div className="skill-tags">
                                    <span className="skill-tag">Node.js</span>
                                    <span className="skill-tag">Express.js</span>
                                    <span className="skill-tag">MongoDB</span>
                                    <span className="skill-tag">PostgreSQL</span>
                                    <span className="skill-tag">RESTful APIs</span>
                                </div>
                            </div>
                        </div>
                        <div className="col-lg-4 col-md-6">
                            <div className="skill-card h-100">
                                <div className="skill-icon mb-3">
                                    <i className="fas fa-mobile-alt"></i>
                                </div>
                                <h4 className="skill-title mb-3">Mobile Development</h4>
                                <p className="skill-description mb-4">
                                    Cross-platform mobile apps with native performance
                                </p>
                                <div className="skill-tags">
                                    <span className="skill-tag">Flutter</span>
                                    <span className="skill-tag">Dart</span>
                                    <span className="skill-tag">iOS</span>
                                    <span className="skill-tag">Android</span>
                                    <span className="skill-tag">Firebase</span>
                                </div>
                            </div>
                        </div>
                        <div className="col-lg-4 col-md-6">
                            <div className="skill-card h-100">
                                <div className="skill-icon mb-3">
                                    <i className="fas fa-cloud"></i>
                                </div>
                                <h4 className="skill-title mb-3">Cloud & DevOps</h4>
                                <p className="skill-description mb-4">
                                    Deploying and managing applications in the cloud
                                </p>
                                <div className="skill-tags">
                                    <span className="skill-tag">AWS</span>
                                    <span className="skill-tag">Azure</span>
                                    <span className="skill-tag">Docker</span>
                                    <span className="skill-tag">Git</span>
                                    <span className="skill-tag">CI/CD</span>
                                </div>
                            </div>
                        </div>
                        <div className="col-lg-4 col-md-6">
                            <div className="skill-card h-100">
                                <div className="skill-icon mb-3">
                                    <i className="fas fa-palette"></i>
                                </div>
                                <h4 className="skill-title mb-3">Design & UX</h4>
                                <p className="skill-description mb-4">
                                    Creating beautiful and user-friendly interfaces
                                </p>
                                <div className="skill-tags">
                                    <span className="skill-tag">Figma</span>
                                    <span className="skill-tag">Adobe XD</span>
                                    <span className="skill-tag">UI/UX</span>
                                    <span className="skill-tag">Responsive</span>
                                    <span className="skill-tag">Prototyping</span>
                                </div>
                            </div>
                        </div>
                        <div className="col-lg-4 col-md-6">
                            <div className="skill-card h-100">
                                <div className="skill-icon mb-3">
                                    <i className="fas fa-desktop"></i>
                                </div>
                                <h4 className="skill-title mb-3">Desktop Development</h4>
                                <p className="skill-description mb-4">
                                    Cross-platform desktop applications
                                </p>
                                <div className="skill-tags">
                                    <span className="skill-tag">.NET</span>
                                    <span className="skill-tag">Avalonia</span>
                                    <span className="skill-tag">C#</span>
                                    <span className="skill-tag">Electron</span>
                                    <span className="skill-tag">WPF</span>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </section>

            {/* Services Section */}
            <section className="modern-services-section py-5">
                <div className="container">
                    <div className="text-center mb-5">
                        <div className="section-badge mb-3">
                            <i className="fas fa-briefcase me-2"></i>
                            What I Do
                        </div>
                        <h2 className="section-title mb-4">
                            Services I <span className="text-brand">Provide</span>
                        </h2>
                    </div>
                    <div className="row g-4">
                        <div className="col-lg-6">
                            <div className="service-card h-100">
                                <div className="service-icon">
                                    <i className="fas fa-code"></i>
                                </div>
                                <h4 className="service-title">Web Development</h4>
                                <p className="service-description">
                                    Full-stack web applications using modern technologies like React, Node.js, 
                                    and cloud platforms for scalable solutions.
                                </p>
                            </div>
                        </div>
                        <div className="col-lg-6">
                            <div className="service-card h-100">
                                <div className="service-icon">
                                    <i className="fas fa-mobile-alt"></i>
                                </div>
                                <h4 className="service-title">Mobile App Development</h4>
                                <p className="service-description">
                                    Cross-platform mobile applications with Flutter, delivering 
                                    native performance across iOS and Android platforms.
                                </p>
                            </div>
                        </div>
                        <div className="col-lg-6">
                            <div className="service-card h-100">
                                <div className="service-icon">
                                    <i className="fas fa-search"></i>
                                </div>
                                <h4 className="service-title">SEO & Optimization</h4>
                                <p className="service-description">
                                    Performance optimization and SEO strategies to ensure your 
                                    digital presence reaches its full potential.
                                </p>
                            </div>
                        </div>
                        <div className="col-lg-6">
                            <div className="service-card h-100">
                                <div className="service-icon">
                                    <i className="fas fa-lightbulb"></i>
                                </div>
                                <h4 className="service-title">Technical Consultation</h4>
                                <p className="service-description">
                                    Strategic guidance on technology choices, architecture decisions, 
                                    and best practices for your development projects.
                                </p>
                            </div>
                        </div>
                    </div>
                </div>
            </section>

            {/* CTA Section */}
            <section className="modern-cta-section py-5">
                <div className="container">
                    <div className="cta-card text-center">
                        <div className="row justify-content-center">
                            <div className="col-lg-8">
                                <h2 className="cta-title mb-4">
                                    Ready to Start Your <span className="text-brand">Next Project?</span>
                                </h2>
                                <p className="cta-description mb-5">
                                    Let's collaborate to bring your ideas to life with modern technology 
                                    and exceptional user experiences.
                                </p>
                                <div className="cta-buttons">
                                    <a href="/contact" className="btn btn-brand btn-lg me-3">
                                        <i className="fas fa-paper-plane me-2"></i>
                                        Start Project
                                    </a>
                                    <a href="/services" className="btn btn-outline-brand btn-lg">
                                        <i className="fas fa-eye me-2"></i>
                                        View Services
                                    </a>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </section>
        </>
    );
}
