import ServiceComponent from "./ServiceComponent";
import './services.css'

export const metadata = {
    title: "Web Development Services Kerala | Flutter App Development | MERN Stack Development - Anagh K R",
    description: "Professional web development services in Kerala by Anagh K R. Offering Flutter app development, MERN stack development, custom website development, responsive web design, e-commerce development, WordPress development, and digital solutions across Kerala including Kochi, Thiruvananthapuram, Kozhikode, Thrissur, and Ernakulam.",
    keywords: "Web development services Kerala, Flutter app development, MERN stack development, Custom website development Kerala, Responsive web design Kerala, E-commerce website development Kerala, WordPress development Kerala, Mobile app development Kerala, Next.js development Kerala, PSD to website conversion Kerala, Figma to website development Kerala, Website redesign services Kerala, Academic project development Kerala, Startup web development Kerala, SEO optimization services, React development, Node.js development, MongoDB development, Express.js development, HTML CSS JavaScript, Firebase integration, REST API development, Database integration, Cloud deployment, Web development Kasaragod, app development Kasaragod, website design Kerala, Flutter developers Kerala, WordPress services Kasaragod, responsive web design, Cross-platform app development Flutter, SEO-friendly website development, Professional website design services Kerala, Business website development, Portfolio website design, Corporate web solutions, Small business web design, Enterprise app development, Digital transformation services, Online presence solutions, Web application development, Software development services",
    author: "ANAGH K R",
    robots: "index, follow",
  canonical: "https://www.anaghkr.in/services",
  ogTitle: "Web Development Services Kerala | Flutter App Development | MERN Stack Development",
  ogDescription: "Professional web development services in Kerala by Anagh K R. Offering Flutter app development, MERN stack development, custom website development, and digital solutions across Kerala.",
  ogUrl: "https://www.anaghkr.in/services",
    ogType: "website",
    twitterCard: "summary_large_image",
    twitterTitle: "Web Development Services Kerala | Flutter App Development",
    twitterDescription: "Professional web development and mobile app development services across Kerala by expert developer Anagh K R."
};

export default function Services() {
    return (
        <div id="modern-services-wrapper" className="modern-services-page-container">
            <div id="services-content-wrapper" className="services-content-wrapper">
                <div className="container-fluid">
                    {/* Hero Section */}
                    <section id="services-hero-section" className="modern-services-hero-section">
                        <div className="container">
                            <div className="row justify-content-center">
                                <div className="col-lg-10 col-xl-8">
                                    <div id="services-hero-content" className="services-hero-content text-center">
                                        <div className="services-hero-badge">
                                            <i className="fas fa-rocket me-2"></i>
                                            Professional Services
                                        </div>
                                        <h1 id="services-main-title" className="services-main-title">
                                            Crafting Digital Excellence
                                        </h1>
                                        <p className="services-main-subtitle">
                                            Comprehensive digital solutions crafted with expertise, passion, and cutting-edge technology to bring your vision to life
                                        </p>
                                        
                                        {/* Stats Grid */}
                                        <div id="services-stats-grid" className="services-stats-grid row g-4 mt-4">
                                            <div className="col-md-4">
                                                <div className="services-stat-card">
                                                    <div className="services-stat-number">50+</div>
                                                    <div className="services-stat-label">Projects Completed</div>
                                                </div>
                                            </div>
                                            <div className="col-md-4">
                                                <div className="services-stat-card">
                                                    <div className="services-stat-number">8+</div>
                                                    <div className="services-stat-label">Services Offered</div>
                                                </div>
                                            </div>
                                            <div className="col-md-4">
                                                <div className="services-stat-card">
                                                    <div className="services-stat-number">100%</div>
                                                    <div className="services-stat-label">Client Satisfaction</div>
                                                </div>
                                            </div>
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </section>

                    {/* Services Grid Section */}
                    <section id="services-showcase-section" className="modern-services-showcase-section">
                        <div className="container">
                            <div className="row g-4">
                                <ServiceComponent 
                                    alt="Modern web development service by Anagh K R" 
                                    title={'Web Development'} 
                                    image="/assets/services/webdev.webp" 
                                    icon="🌐"
                                    category="Full-Stack"
                                    description={"As an experienced web developer based in Kasaragod, I specialize in creating dynamic, responsive, and interactive websites that provide seamless experiences across all devices. I offer full-stack web development services, utilizing the latest technologies to build robust, scalable, and high-performing websites with clean code, responsive design, and SEO optimization."} 
                                />
                                
                                <ServiceComponent 
                                    alt="E-commerce website development by Anagh K R" 
                                    title={'E-commerce Development'} 
                                    image="/assets/services/ecom.webp" 
                                    icon="🛒"
                                    category="Online Store"
                                    description={"I specialize in designing and developing high-performance e-commerce websites that help businesses grow online. I create user-friendly and feature-rich e-commerce solutions using modern technologies, with secure payment integration, inventory management, and SEO optimization to boost your online sales."} 
                                />
                                
                                <ServiceComponent 
                                    alt="Professional web design service by Anagh K R" 
                                    title={'Web Design'} 
                                    image="/assets/services/webdesign.webp" 
                                    icon="🎨"
                                    category="UI/UX"
                                    description={"I'm a professional website designer from Kasaragod, dedicated to crafting visually stunning and functional websites. My designs focus on delivering powerful online experiences at affordable prices, with well-structured, SEO-optimized content to help increase your visibility on search engines."} 
                                />
                                
                                <ServiceComponent 
                                    alt="Website redesign service by Anagh K R" 
                                    title={'Website Redesign'} 
                                    image="/assets/services/website_redesign.webp" 
                                    icon="🔄"
                                    category="Modernization"
                                    description={"I specialize in revamping outdated websites and transforming them into modern, visually appealing platforms. My redesign services focus on improving user experience, enhancing site performance, and ensuring compatibility across all devices using the latest design trends and SEO best practices."} 
                                />
                                
                                <ServiceComponent 
                                    alt="PSD to website conversion service by Anagh K R" 
                                    title={'PSD to Website'} 
                                    image="/assets/services/psd.webp" 
                                    icon="📐"
                                    category="Conversion"
                                    description={"I offer professional PSD to website conversion services, turning your Photoshop designs into fully functional, responsive websites. I convert PSD designs into clean, pixel-perfect HTML, CSS, and JavaScript code, ensuring cross-browser compatibility and responsive design."} 
                                />
                                
                                <ServiceComponent 
                                    alt="Figma to website conversion service by Anagh K R" 
                                    title={'Figma to Website'} 
                                    image="/assets/services/figma.webp" 
                                    icon="🎯"
                                    category="Design-to-Code"
                                    description={"I provide Figma to website conversion services, transforming your Figma designs into fully functional and responsive websites. I ensure pixel-perfect accuracy and responsiveness across different screen sizes with clean, optimized code."} 
                                />
                                
                                <ServiceComponent 
                                    alt="Flutter mobile app development service by Anagh K R" 
                                    title={'Flutter App Development'} 
                                    image="/assets/services/app.webp" 
                                    icon="📱"
                                    category="Mobile Apps"
                                    description={"I specialize in building high-performance, cross-platform mobile applications for iOS and Android using Flutter. I create beautiful, fast, and responsive apps that provide a native-like experience with end-to-end services from concept to deployment."} 
                                />
                                
                                <ServiceComponent 
                                    alt="Academic project development service by Anagh K R" 
                                    title={'Academic Projects'} 
                                    image="/assets/services/clg.webp" 
                                    icon="🎓"
                                    category="Educational"
                                    description={'I offer specialized services for academic projects, helping students create innovative, functional applications. Whether it\'s a website, mobile app, or software solution, I bring academic ideas to life with clean code, modern design, and user-centric features.'} 
                                />
                            </div>
                        </div>
                    </section>

                    {/* CTA Section */}
                    <section id="services-cta-section" className="modern-services-cta-section">
                        <div className="container">
                            <div className="row justify-content-center">
                                <div className="col-lg-10 col-xl-8">
                                    <div id="services-cta-card" className="services-cta-card text-center">
                                        <div className="services-cta-icon">
                                            <i className="fas fa-handshake"></i>
                                        </div>
                                        <h2 id="services-cta-title" className="services-cta-title">
                                            Ready to Start Your Project?
                                        </h2>
                                        <p className="services-cta-description">
                                            Let's discuss your requirements and create something amazing together. 
                                            Get in touch for a free consultation and personalized quote.
                                        </p>
                                        <div id="services-cta-buttons" className="services-cta-buttons d-flex flex-wrap justify-content-center gap-3">
                                            <a href="/contact" className="services-cta-btn services-cta-btn-primary">
                                                <i className="fas fa-paper-plane me-2"></i>
                                                Get Started
                                            </a>
                                            <a href="/about" className="services-cta-btn services-cta-btn-secondary">
                                                <i className="fas fa-user me-2"></i>
                                                Learn More
                                            </a>
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </section>
                </div>
            </div>
        </div>
    )
}
