import './skills.css'
export default function Skills() {
    return (
        <div className="skills" id='skills'>
            <div className="container pt-3 pb-5">
                <div className="row scroll">
                    <img src='/assets/scroll.webp' className='img-fluid' alt="" />
                </div>
                <div className="row text-center pb-5">
                    <h2>Skills</h2>
                    <p>As a passionate developer, I am dedicated to honing my skills and staying updated with the latest technologies.<br /> My expertise spans across web development, mobile app development, and SEO optimization, ensuring that I deliver cutting-edge solutions tailored to your needs.</p>
                </div>
                <div className="cards">
                    <div className="row">
                        <div className="col-lg-6">
                            <div className="card mb-3" style={{ minHeight: '137px' }}>
                                <div className="card-body text-center">
                                    <i className="fa-solid fa-desktop"></i>
                                    <h4 className="card-title">WEBSITE DEVELOPMENT</h4>
                                    <p className="card-text"><small className="text-body-secondary">
                                        <i className="fa-solid fa-code"></i> Custom Website Solutions <br />
                                        <i className="fa-solid fa-mobile-alt"></i> Responsive Web Design <br />
                                        <i className="fa-solid fa-cogs"></i> Website Optimization & Maintenance</small></p>
                                </div>
                            </div>
                        </div>
                        <div className="col-lg-6">
                            <div className="card mb-3" style={{ minHeight: '137px' }}>
                                <div className="card-body text-center">
                                    <i className="fa-solid fa-mobile-screen-button"></i>
                                    <h4 className="card-title">APP DEVELOPMENT</h4>
                                    <p className="card-text"><small className="text-body-secondary"><i className="fa-brands fa-flutter "></i> Flutter (Cross-platform apps for Android and iOS)<br/><i className="fa-solid fa-cloud"></i> Real-Time Database Integration <br/>
                                    <i className="fa-solid fa-bell"></i> Push Notifications & Authentication</small></p>
                                </div>
                            </div>
                        </div>
                        <div className="col-lg-6">
                            <div className="card mb-3" style={{ minHeight: '137px' }}>
                                <div className="card-body text-center">
                                    <i className="fa-solid fa-desktop"></i>
                                    <h4 className="card-title">SEO Optimization</h4>
                                    <p className="card-text"><small className="text-body-secondary"><i className="fa-brands fa-searchengin"></i> On-page and technical SEO to boost search rankings</small></p>
                                </div>
                            </div>
                        </div>
                        <div className="col-lg-6">
                            <div className="card mb-3" style={{ minHeight: '137px' }}>
                                <div className="card-body text-center">
                                    <i className="fa-solid fa-desktop"></i>
                                    <h4 className="card-title">WEB DESIGN</h4>
                                    <p className="card-text"><small className="text-body-secondary"><i className="fa-brands fa-figma"></i> Figma to Website Conversion <br /><i className="fa-solid fa-square-parking "></i> PHOTOSHOP (.PSD) to Responsive Website</small></p>
                                </div>
                            </div>
                        </div>
                        <div className="col-lg-6">
                            <div className="card mb-3" style={{ minHeight: '137px' }}>
                                <div className="card-body text-center">
                                    <i className="fa-brands fa-wordpress"></i>
                                    <h4 className="card-title">WORDPRESS DEVELOPMENT</h4>
                                    <p className="card-text">
                                        <small className="text-body-secondary">
                                            <i className="fa-solid fa-lock"></i> WordPress Security Check-Up <br />
                                            <i className="fa-solid fa-wrench"></i> Custom WordPress Development <br />
                                            <i className="fa-solid fa-paintbrush"></i> WordPress Website Redesign
                                        </small>
                                    </p>
                                </div>
                            </div>
                        </div>
                        <div className="col-lg-6">
                            <div className="card mb-3" style={{ minHeight: '137px' }}>
                                <div className="card-body text-center">
                                    <i className="fa-solid fa-store"></i>
                                    <h4 className="card-title">E-COMMERCE DEVELOPMENT</h4>
                                    <p className="card-text">
                                        <small className="text-body-secondary">
                                            <i className="fa-solid fa-cart-arrow-down"></i> Custom E-commerce Solutions <br />
                                            <i className="fa-solid fa-credit-card"></i> Secure Payment Integration <br />
                                            <i className="fa-solid fa-gift"></i> User-friendly Product Listings
                                        </small>
                                    </p>
                                </div>
                            </div>
                        </div>
                        <div className="col-lg-6">
                            <div className="card mb-3" style={{ minHeight: '137px' }}>
                                <div className="card-body text-center">
                                    <i className="fa-brands fa-react"></i>
                                    <h4 className="card-title">NEXT.JS DEVELOPMENT</h4>
                                    <p className="card-text">
                                        <small className="text-body-secondary">
                                            <i className="fa-solid fa-cogs"></i> Server-Side Rendering (SSR) <br />
                                            <i className="fa-solid fa-laptop-code"></i> Static Site Generation (SSG) <br />
                                            <i className="fa-solid fa-rocket"></i> Performance Optimization
                                        </small>
                                    </p>
                                </div>
                            </div>
                        </div>
                        <div className="col-lg-6">
                            <div className="card mb-3" style={{ minHeight: '137px' }}>
                                <div className="card-body text-center">
                                    <i className="fa-brands fa-node"></i>
                                    <h4 className="card-title">MERN STACK DEVELOPMENT</h4>
                                    <p className="card-text">
                                        <small className="text-body-secondary">
                                            <i className="fa-brands fa-react"></i> React.js for Dynamic UIs <br />
                                            <i className="fa-brands fa-node"></i> Node.js & Express.js Backend <br />
                                            <i className="fa-solid fa-database"></i> MongoDB for Scalable Data Solutions
                                        </small>
                                    </p>
                                </div>
                            </div>
                        </div>

                    </div>
                </div>
            </div>
        </div>
    );
}