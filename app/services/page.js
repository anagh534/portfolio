import ServiceComponent from "./ServiceComponent";
import './services.css'

export const metadata = {
    title: "Anagh K R - Expert Services in Web & App Development | Kasaragod, Kerala",
    description: "Discover Anagh K R's professional services in web and app development from Kasaragod, Kerala. Specializing in Flutter app development, MERN stack web development, e-commerce solutions, and more. Offering custom solutions for your digital needs, from secure file handling to scalable applications. Connect with a dedicated professional who delivers exceptional results with a user-first approach.",
    keywords: "Web development Kasaragod, app development Kasaragod, website design Kerala, Flutter developers Kerala, WordPress services Kasaragod, e-commerce websites Kerala, responsive web design, MERN stack developer Kerala, Next.js websites Kasaragod, PSD to HTML Kasaragod, Figma to website conversion Kerala",
    author: "ANAGH K R",
    robots: "index, follow",
    ogTitle: "Anagh K R - Expert Services in Web & App Development | Kasaragod, Kerala",
    ogDescription: "Discover Anagh K R's professional services in web and app development from Kasaragod, Kerala. Specializing in Flutter app development, MERN stack web development, e-commerce solutions, and more. Offering custom solutions for your digital needs, from secure file handling to scalable applications. Connect with a dedicated professional who delivers exceptional results with a user-first approach.",
    ogUrl: "https://anagh534.github.io/services",
    canonical: "https://anagh534.github.io/services",
    // ogImage: "https://yourwebsite.com/path/to/image.jpg"
};

export default function Services() {
    return (
        <div className="services-container">
            <div className="content-wrapper">
                <div className="container">
                    <div className="hero-section">
                        <h1 className="hero-title">My Services</h1>
                        <p className="hero-subtitle">
                            Comprehensive digital solutions crafted with expertise and passion
                        </p>
                        <div className="services-stats">
                            <div className="stat-item">
                                <span className="stat-number">50+</span>
                                <span className="stat-label">Projects Completed</span>
                            </div>
                            <div className="stat-item">
                                <span className="stat-number">8+</span>
                                <span className="stat-label">Services Offered</span>
                            </div>
                            <div className="stat-item">
                                <span className="stat-number">100%</span>
                                <span className="stat-label">Client Satisfaction</span>
                            </div>
                        </div>
                    </div>

                    <div className="services-grid">
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

                    <div className="cta-section">
                        <h2 className="cta-title">Ready to Start Your Project?</h2>
                        <p className="cta-description">
                            Let's discuss your requirements and create something amazing together. 
                            Get in touch for a free consultation and quote.
                        </p>
                        <div className="cta-buttons">
                            <a href="/contact" className="cta-button primary">Get Started</a>
                            <a href="/about" className="cta-button secondary">Learn More</a>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    )
}
