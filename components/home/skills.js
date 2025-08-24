import './skills.css'
export default function Skills() {
    return (
        <div className="skills" id='skills'>
            <div className="container pt-3 pb-5">
                <div className="row scroll">
                    <img src='/assets/scroll.webp' className='img-fluid' alt="" />
                </div>
                
                {/* Skills Section - Copied from About Page */}
                <section className="modern-skills-section py-5">
                    <div className="container">
                        <div className="text-center mb-5">
                            <div className="section-badge mb-3">
                                <i className="fas fa-cogs me-2"></i>
                                Technical Skills
                            </div>
                            <h2 className="section-title mb-4">
                                Technologies I <span className="text-brand">Master</span>
                            </h2>
                            <p className="section-description">
                                A comprehensive toolkit for building modern, scalable applications
                            </p>
                        </div>
                        <div className="row g-4">
                            <div className="col-lg-4 col-md-6">
                                <div className="skill-card h-100">
                                    <div className="skill-icon mb-3">
                                        <i className="fas fa-laptop-code"></i>
                                    </div>
                                    <h4 className="skill-title mb-3">Frontend Development</h4>
                                    <p className="skill-description mb-4">
                                        Creating responsive and interactive user interfaces
                                    </p>
                                    <div className="skill-tags">
                                        <span className="skill-tag">React.js</span>
                                        <span className="skill-tag">Next.js</span>
                                        <span className="skill-tag">HTML5</span>
                                        <span className="skill-tag">CSS3</span>
                                        <span className="skill-tag">JavaScript</span>
                                    </div>
                                </div>
                            </div>
                            <div className="col-lg-4 col-md-6">
                                <div className="skill-card h-100">
                                    <div className="skill-icon mb-3">
                                        <i className="fas fa-server"></i>
                                    </div>
                                    <h4 className="skill-title mb-3">Backend Development</h4>
                                    <p className="skill-description mb-4">
                                        Building robust and scalable server-side applications
                                    </p>
                                    <div className="skill-tags">
                                        <span className="skill-tag">Node.js</span>
                                        <span className="skill-tag">Express.js</span>
                                        <span className="skill-tag">MongoDB</span>
                                        <span className="skill-tag">PostgreSQL</span>
                                        <span className="skill-tag">RESTful APIs</span>
                                    </div>
                                </div>
                            </div>
                            <div className="col-lg-4 col-md-6">
                                <div className="skill-card h-100">
                                    <div className="skill-icon mb-3">
                                        <i className="fas fa-mobile-alt"></i>
                                    </div>
                                    <h4 className="skill-title mb-3">Mobile Development</h4>
                                    <p className="skill-description mb-4">
                                        Cross-platform mobile apps with native performance
                                    </p>
                                    <div className="skill-tags">
                                        <span className="skill-tag">Flutter</span>
                                        <span className="skill-tag">Dart</span>
                                        <span className="skill-tag">iOS</span>
                                        <span className="skill-tag">Android</span>
                                        <span className="skill-tag">Firebase</span>
                                    </div>
                                </div>
                            </div>
                            <div className="col-lg-4 col-md-6">
                                <div className="skill-card h-100">
                                    <div className="skill-icon mb-3">
                                        <i className="fas fa-cloud"></i>
                                    </div>
                                    <h4 className="skill-title mb-3">Cloud & DevOps</h4>
                                    <p className="skill-description mb-4">
                                        Deploying and managing applications in the cloud
                                    </p>
                                    <div className="skill-tags">
                                        <span className="skill-tag">AWS</span>
                                        <span className="skill-tag">Azure</span>
                                        <span className="skill-tag">Docker</span>
                                        <span className="skill-tag">Git</span>
                                        <span className="skill-tag">CI/CD</span>
                                    </div>
                                </div>
                            </div>
                            <div className="col-lg-4 col-md-6">
                                <div className="skill-card h-100">
                                    <div className="skill-icon mb-3">
                                        <i className="fas fa-palette"></i>
                                    </div>
                                    <h4 className="skill-title mb-3">Design & UX</h4>
                                    <p className="skill-description mb-4">
                                        Creating beautiful and user-friendly interfaces
                                    </p>
                                    <div className="skill-tags">
                                        <span className="skill-tag">Figma</span>
                                        <span className="skill-tag">Adobe XD</span>
                                        <span className="skill-tag">UI/UX</span>
                                        <span className="skill-tag">Responsive</span>
                                        <span className="skill-tag">Prototyping</span>
                                    </div>
                                </div>
                            </div>
                            <div className="col-lg-4 col-md-6">
                                <div className="skill-card h-100">
                                    <div className="skill-icon mb-3">
                                        <i className="fas fa-desktop"></i>
                                    </div>
                                    <h4 className="skill-title mb-3">Desktop Development</h4>
                                    <p className="skill-description mb-4">
                                        Cross-platform desktop applications
                                    </p>
                                    <div className="skill-tags">
                                        <span className="skill-tag">.NET</span>
                                        <span className="skill-tag">Avalonia</span>
                                        <span className="skill-tag">C#</span>
                                        <span className="skill-tag">Electron</span>
                                        <span className="skill-tag">WPF</span>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                </section>
            </div>
        </div>
    );
}