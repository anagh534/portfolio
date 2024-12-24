import Link from 'next/link';
import './about.css'

export default function About(){
    return (
        <div className="about" id="about">
            <div className="container pt-3 pb-3">
                <div className="about-top">
                    <img src='/assets/scroll.webp' alt="" className='img-fluid' />
                </div>
                <div className="row about-bottom">
                    <div className="col-lg-6 about-left">
                        <div className="card text-center bg-dark text-light p-2 mb-5" style={{ borderRadius: '15px', border: '1px solid #28c3b3', width: '15rem' }}>
                            <h2>About Me</h2>
                        </div>
                        <div className="card text-center bg-dark text-light p-3 mb-5" style={{ borderRadius: '15px' }}>
                            <p style={{ textAlign: 'left' }}>
                                <span style={{ fontSize: '22px', color: '#12F7D6',fontWeight:'bold' }}>Hello!</span> <br /><br/>
                                I’m Anagh, a freelance web developer and designer based in Kasaragod, Kerala.<br/> I’ve worked with over 25+ clients to create impactful portfolio websites, e-commerce platforms, and business websites.I specialize in building scalable solutions using the latest technologies, including Flutter, React, and Node.js.<br/> My mission is to help businesses grow by delivering affordable, high-quality web and app development services in Kerala and beyond.
                            </p>
                            <Link href="/about" className='btn btn-bg'>Know More</Link>
                        </div>
                    </div>
                    <div className="col-lg-6 d-none d-sm-none d-md-none d-lg-block  about-right">
                        <img className='img-fluid w-75 p-2' src='/assets/about.webp' alt="" />
                    </div>
                </div>
            </div>
        </div>
    );
}