import ContactForm from './ContactForm';
import './contact.css';

export const metadata = {
  title: 'Contact - Anagh K R',
  description: 'Get in touch with Anagh K R - MERN Stack Developer. Let\'s discuss your next project!',
  keywords: 'contact, hire developer, MERN stack, web development, freelance',
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
