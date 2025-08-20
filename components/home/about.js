import Link from 'next/link';
import Image from 'next/image';
import './about.css'

export default function About(){
    return (
        <section className="about-section" id="about">
            <div className="about-container">
                <div className="about-scroll-icon">
                    <img src='/assets/scroll.webp' alt="Scroll icon" />
                </div>
                <div className="about-content">
                    <div className="about-text-container">
                        <div className="about-title-card">
                            <h2>About Me</h2>
                        </div>
                        <div className="about-card">
                            <div className="about-description">
                                <span className="hello-text">Hello!</span>
                                <p>
                                    I'm Anagh, a freelance web developer and designer based in Kasaragod, Kerala. I've worked with over 25+ clients to create impactful portfolio websites, e-commerce platforms, and business websites.
                                </p>
                                <p>
                                    I specialize in building scalable solutions using the latest technologies, including Flutter, React, and Node.js. My mission is to help businesses grow by delivering affordable, high-quality web and app development services in Kerala and beyond.
                                </p>
                            </div>
                            <Link href="/about" className='know-more-btn'>
                                Know More <i className="fas fa-arrow-right"></i>
                            </Link>
                        </div>
                    </div>
                    <div className="about-image-container">
                        <img className='about-image' src='/assets/about.webp' alt="Anagh K R - Web Developer" />
                    </div>
                </div>
            </div>
        </section>
    );
}
