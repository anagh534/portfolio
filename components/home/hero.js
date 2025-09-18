"use client";

import Image from 'next/image';
import './hero.css'
import CountUp from 'react-countup'
import Link from 'next/link';

export default function Hero() {
  return (
    <div id='hero' className="hero-section">
      <div className="hero-container">
        <div className="hero-content">
          {/* Left Section - Profile Card */}
          <div className="profile-card-container">
            <div className="profile-card">
              <div className="profile-image">
                <Image
                  src='/assets/profile.webp'
                  alt="profile"
                  width={140}
                  height={140}
                  className="profile-pic"
                />
              </div>
              <div className="profile-info">
                <h3 className="profile-name">ANAGH K R</h3>
                <p className="profile-title">Affordable Web Design | Flutter Developer in Kerala | MERN Stack Development Services</p>
                
                <div className="profile-details">
                  <div className="detail-item">
                    <i className="fas fa-envelope"></i>
                    <span>anaghkrkkl@gmail.com</span>
                  </div>
                  <div className="detail-item">
                    <i className="fas fa-map-marker-alt"></i>
                    <span>Kasaragod, Kerala</span>
                  </div>
                  <div className="detail-item">
                    <i className="fas fa-briefcase"></i>
                    <span>Freelance Web Developer</span>
                  </div>
                  <div className="detail-item">
                    <i className="fa-brands fa-whatsapp"></i>
                    <a href="https://wa.me/918075541805" target='_blank' rel="noopener noreferrer">8075541805</a>
                  </div>
                </div>
                
                <div className="skill-badges">
                  <span className="skill-badge"><i className="fa-brands fa-node"></i> MERN STACK</span>
                  <span className="skill-badge"><i className="fa-brands fa-flutter"></i> FLUTTER</span>
                </div>
                
                <Link href='/resume' className="download-cv-btn">
                  Download CV <i className="fas fa-download"></i>
                </Link>
              </div>
            </div>
          </div>

          {/* Right Section */}
          <div className="hero-intro">
            <div className="intro-text">
              <h1 className="intro-heading">
                Hey, <br /> I'm <span className="highlight-text">ANAGH</span>,
              </h1>
              <p className="intro-description">
                Looking for expert <strong>web and mobile app development services in Kerala</strong>?<br/> 
                I'm Anagh, a professional <strong>Flutter developer</strong> and <strong>MERN stack developer</strong> based in Kerala. I specialize in creating <strong>custom websites</strong>, <strong>responsive web design</strong>, <strong>e-commerce solutions</strong>, and <strong>cross-platform mobile applications</strong> tailored for businesses of all sizes. From startups to established companies,<br/> I provide affordable and high-quality <strong>web development services</strong> that drive results.
              </p>
              <a href="mailto:anaghkrkkl@gmail.com" className="contact-btn">
                Let's Talk <i className="fas fa-envelope"></i>
              </a>
            </div>

            {/* Stats Section */}
            <div className="stats-container">
              <div className="stat-card">
                <h2 className="stat-number highlight-text">
                  <CountUp
                    start={0}
                    end={12}
                    duration={6}
                  />+
                </h2>
                <p className="stat-label">Programming Languages</p>
              </div>
              
              <div className="stat-card">
                <h2 className="stat-number highlight-text">
                  <CountUp
                    start={0}
                    end={6}
                    duration={3}
                  />+
                </h2>
                <p className="stat-label">Development Tools</p>
              </div>
              
              <div className="stat-card">
                <h2 className="stat-number highlight-text">
                  <CountUp
                    start={0}
                    end={25}
                    duration={6}
                  />+
                </h2>
                <p className="stat-label">Projects</p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
