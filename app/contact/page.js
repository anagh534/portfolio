import ContactForm from './ContactForm';
import './contact.css';

export const metadata = {
  title: 'Contact ANAGH K R - Flutter Developer Kerala | Get Free Quote for Web Development',
  description: 'Contact ANAGH K R for professional web development and Flutter app development services in Kerala. Get a free quote for custom website development, mobile app development, MERN stack development, and e-commerce solutions. Available across Kerala including Kochi, Calicut, Trivandrum, Kannur, and Kasaragod.',
  keywords: 'contact web developer Kerala, hire Flutter developer Kerala, freelance web developer contact, get quote web development Kerala, MERN stack developer hire, mobile app developer contact, website development quote Kerala, Flutter app development inquiry, web development services Kerala contact',
  author: 'ANAGH K R',
  robots: 'index, follow',
  canonical: 'https://www.anaghkr.in/contact',
  ogTitle: 'Contact ANAGH K R - Flutter Developer Kerala | Get Free Quote',
  ogDescription: 'Get in touch for professional web development and Flutter app development services in Kerala. Free consultation and quote available.',
  ogUrl: 'https://www.anaghkr.in/contact',
  ogType: 'website'
};

export default function ContactPage() {
  return (
    <div className="contact-page">
      <div className="contact-hero">
        <div className="contact-container">
          <div className="contact-header">
            <span className="contact-badge">
              <i className="fas fa-envelope"></i>
              Get In Touch
            </span>
            <h1 className="contact-title">
              Let's Build Something 
              <span className="highlight-text"> Amazing Together</span>
            </h1>
            <p className="contact-subtitle">
              Ready to bring your ideas to life? I'm here to help you create 
              exceptional digital experiences with cutting-edge technology.
            </p>
          </div>
          
          <div className="contact-content">
            <div className="contact-info">
              <div className="info-card">
                <div className="info-icon">
                  <i className="fas fa-envelope"></i>
                </div>
                <div className="info-details">
                  <h3>Email</h3>
                  <p>anaghkrkkl@gmail.com</p>
                  <span>I'll respond within 24 hours</span>
                </div>
              </div>
              
              <div className="info-card">
                <div className="info-icon">
                  <i className="fas fa-map-marker-alt"></i>
                </div>
                <div className="info-details">
                  <h3>Location</h3>
                  <p>Kerala, India</p>
                  <span>Available for remote work</span>
                </div>
              </div>
              
              <div className="info-card">
                <div className="info-icon">
                  <i className="fas fa-clock"></i>
                </div>
                <div className="info-details">
                  <h3>Response Time</h3>
                  <p>Within 24 hours</p>
                  <span>Monday - Saturday</span>
                </div>
              </div>
              
              <div className="info-card">
                <div className="info-icon">
                  <i className="fas fa-code"></i>
                </div>
                <div className="info-details">
                  <h3>Expertise</h3>
                  <p>MERN Stack Development</p>
                  <span>Full-stack solutions</span>
                </div>
              </div>
            </div>
            
            <ContactForm />
          </div>
        </div>
      </div>
    </div>
  );
}
