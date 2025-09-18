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
                                    I'm Anagh, a <strong>freelance web developer</strong> and <strong>Flutter developer</strong> based in Kasaragod, Kerala. I've worked with over 25+ clients across Kerala including Kochi, Thiruvananthapuram, and Kozhikode to create impactful <strong>portfolio websites</strong>, <strong>e-commerce platforms</strong>, and <strong>business websites</strong>.
                                </p>
                                <p>
                                    I specialize in building scalable solutions using the latest technologies, including <strong>Flutter</strong>, <strong>React</strong>, <strong>Node.js</strong>, and the full <strong>MERN stack</strong>. My mission is to help businesses grow by delivering <strong>affordable web development services</strong> and <strong>mobile app development</strong> solutions throughout Kerala and beyond.
                                </p>
                            </div>
                            <Link href="/about" className='know-more-btn'>
                                Know More <i className="fas fa-arrow-right"></i>
                            </Link>
                        </div>
                    </div>
                    <div className="about-image-container">
                        <img className='about-image' src='/assets/about.webp' alt="Anagh K R - MERN Stack and Flutter Developer in Kerala" />
                    </div>
                </div>
            </div>
        </section>
    );
}
