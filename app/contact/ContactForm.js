'use client';
import { useState, useEffect, useRef } from 'react';

export default function ContactForm() {
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    subject: '',
    message: '',
    projectType: ''
  });
  
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [submitStatus, setSubmitStatus] = useState(null);
  const [dropdownOpen, setDropdownOpen] = useState(false);
  const dropdownRef = useRef(null);

  const projectTypes = [
    { value: 'web-development', label: 'Web Development', icon: 'fas fa-code', description: 'Full-stack web applications' },
    { value: 'mobile-app', label: 'Mobile App Development', icon: 'fas fa-mobile-alt', description: 'iOS & Android applications' },
    { value: 'e-commerce', label: 'E-commerce Solutions', icon: 'fas fa-shopping-cart', description: 'Online stores & marketplaces' },
    { value: 'api-development', label: 'API Development', icon: 'fas fa-server', description: 'REST APIs & microservices' },
    { value: 'ui-ux-design', label: 'UI/UX Design', icon: 'fas fa-palette', description: 'User interface & experience design' },
    { value: 'performance-optimization', label: 'Performance Optimization', icon: 'fas fa-tachometer-alt', description: 'Speed & efficiency improvements' },
    { value: 'cloud-deployment', label: 'Cloud & Deployment', icon: 'fas fa-cloud', description: 'AWS, Azure, GCP solutions' },
    { value: 'consultation', label: 'Technical Consultation', icon: 'fas fa-lightbulb', description: 'Architecture & strategy advice' },
    { value: 'maintenance', label: 'Website Maintenance', icon: 'fas fa-tools', description: 'Updates & ongoing support' },
    { value: 'other', label: 'Other', icon: 'fas fa-ellipsis-h', description: 'Custom requirements' }
  ];

  // Close dropdown when clicking outside
  useEffect(() => {
    const handleClickOutside = (event) => {
      if (dropdownRef.current && !dropdownRef.current.contains(event.target)) {
        setDropdownOpen(false);
      }
    };

    document.addEventListener('mousedown', handleClickOutside);
    return () => {
      document.removeEventListener('mousedown', handleClickOutside);
    };
  }, []);

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData(prev => ({
      ...prev,
      [name]: value
    }));
  };

  const handleProjectTypeSelect = (projectType) => {
    setFormData(prev => ({
      ...prev,
      projectType: projectType.value
    }));
    setDropdownOpen(false);
  };

  const getSelectedProject = () => {
    return projectTypes.find(type => type.value === formData.projectType);
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    setIsSubmitting(true);
    setSubmitStatus(null);

    try {
      // Replace this URL with your Google Apps Script Web App URL
      const GOOGLE_SCRIPT_URL = 'https://script.google.com/macros/s/AKfycbyNQzyrKvCAUItpfZQZT6Fnc42bY9qEgUgfIs1fPmFUzvdMP2fxIoC1cDNmeIyKrly3/exec';
      
      const response = await fetch(GOOGLE_SCRIPT_URL, {
        method: 'POST',
        mode: 'no-cors',
        headers: {
          'Content-Type': 'application/json',
        },
        body: JSON.stringify({
          name: formData.name,
          email: formData.email,
          subject: formData.subject,
          message: formData.message,
          projectType: getSelectedProject()?.label || formData.projectType,
          timestamp: new Date().toISOString(),
          source: 'anaghkr.in'
        })
      });
      
      // Show success message (note: with no-cors mode, we can't check response status)
      setSubmitStatus('success');
      
      // Reset form
      setFormData({
        name: '',
        email: '',
        subject: '',
        message: '',
        projectType: ''
      });
      
    } catch (error) {
      setSubmitStatus('error');
      console.error('Form submission error:', error);
    } finally {
      setIsSubmitting(false);
    }
  };

  return (
    <div className="contact-form-container">
      <form className="contact-form" onSubmit={handleSubmit}>
        <div className="form-header">
          <h2>Send me a message</h2>
          <p>Fill out the form below and I'll get back to you as soon as possible.</p>
        </div>

        <div className="form-grid">
          <div className="form-group">
            <label htmlFor="name">
              <i className="fas fa-user"></i>
              Full Name *
            </label>
            <input
              type="text"
              id="name"
              name="name"
              value={formData.name}
              onChange={handleChange}
              placeholder="Enter your full name"
              required
            />
          </div>

          <div className="form-group">
            <label htmlFor="email">
              <i className="fas fa-envelope"></i>
              Email Address *
            </label>
            <input
              type="email"
              id="email"
              name="email"
              value={formData.email}
              onChange={handleChange}
              placeholder="your.email@example.com"
              required
            />
          </div>
        </div>

        <div className="form-group">
          <label htmlFor="projectType">
            <i className="fas fa-briefcase"></i>
            Project Type
          </label>
          <div className="custom-dropdown-container" ref={dropdownRef}>
            <div 
              className={`custom-dropdown ${dropdownOpen ? 'open' : ''}`}
              onClick={() => setDropdownOpen(!dropdownOpen)}
            >
              <div className="dropdown-selected">
                {getSelectedProject() ? (
                  <div className="selected-option">
                    <i className={getSelectedProject().icon}></i>
                    <div className="option-content">
                      <span className="option-label">{getSelectedProject().label}</span>
                      <span className="option-description">{getSelectedProject().description}</span>
                    </div>
                  </div>
                ) : (
                  <div className="placeholder" style={{backgroundColor: 'transparent'}}>
                    <i className="fas fa-briefcase"></i>
                    <span>Select your project type</span>
                  </div>
                )}
                <i className={`fas fa-chevron-down dropdown-arrow ${dropdownOpen ? 'rotated' : ''}`}></i>
              </div>
              
              {dropdownOpen && (
                <div className="dropdown-options">
                  {projectTypes.map((projectType) => (
                    <div
                      key={projectType.value}
                      className={`dropdown-option ${formData.projectType === projectType.value ? 'selected' : ''}`}
                      onClick={(e) => {
                        e.stopPropagation();
                        handleProjectTypeSelect(projectType);
                      }}
                    >
                      <i className={projectType.icon}></i>
                      <div className="option-content">
                        <span className="option-label">{projectType.label}</span>
                        <span className="option-description">{projectType.description}</span>
                      </div>
                      {formData.projectType === projectType.value && (
                        <i className="fas fa-check option-check"></i>
                      )}
                    </div>
                  ))}
                </div>
              )}
            </div>
          </div>
        </div>

        <div className="form-group">
          <label htmlFor="subject">
            <i className="fas fa-tag"></i>
            Subject *
          </label>
          <input
            type="text"
            id="subject"
            name="subject"
            value={formData.subject}
            onChange={handleChange}
            placeholder="What's this about?"
            required
          />
        </div>

        <div className="form-group">
          <label htmlFor="message">
            <i className="fas fa-comment"></i>
            Message *
          </label>
          <textarea
            id="message"
            name="message"
            value={formData.message}
            onChange={handleChange}
            placeholder="Tell me about your project, timeline, budget, or any questions you have..."
            rows="6"
            required
          ></textarea>
          <span className="char-count">{formData.message.length}/500</span>
        </div>

        {submitStatus === 'success' && (
          <div className="status-message success">
            <i className="fas fa-check-circle"></i>
            <span>Thank you! Your message has been sent successfully. I'll get back to you soon.</span>
          </div>
        )}

        {submitStatus === 'error' && (
          <div className="status-message error">
            <i className="fas fa-exclamation-circle"></i>
            <span>Something went wrong. Please try again or email me directly.</span>
          </div>
        )}

        <button 
          type="submit" 
          className="submit-btn"
          disabled={isSubmitting}
        >
          {isSubmitting ? (
            <>
              <i className="fas fa-spinner fa-spin"></i>
              Sending...
            </>
          ) : (
            <>
              <i className="fas fa-paper-plane"></i>
              Send Message
            </>
          )}
        </button>

        <div className="form-footer">
          <p>
            <i className="fas fa-shield-alt"></i>
            Your information is secure and will never be shared.
          </p>
        </div>
      </form>
    </div>
  );
}
