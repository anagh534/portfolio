import Link from 'next/link';
import React from 'react';

const Footer = () => {
    return (
        <>
            <footer style={{ backgroundColor: '#22282e' }} className="text-center text-lg-start text-light">
                <section className="d-flex justify-content-center justify-content-lg-between p-4 border-bottom">
                    <div className="me-5 d-none d-lg-block">
                        <span>Get connected with us on social networks:</span>
                    </div>
                    <div>
                        <a href="" className="me-4 text-reset">
                            <i className="fab fa-facebook-f"></i>
                        </a>
                        <a href="" className="me-4 text-reset">
                            <i className="fab fa-twitter"></i>
                        </a>
                        <a href="https://wa.me/+918075541805" className="me-4 text-reset">
                            <i className="fab fa-whatsapp"></i>
                        </a>
                        <a href="https://instagram.com/mr._uni_que___" className="me-4 text-reset">
                            <i className="fab fa-instagram"></i>
                        </a>
                        <a href="https://www.linkedin.com/in/anagh-k-r/" className="me-4 text-reset">
                            <i className="fab fa-linkedin"></i>
                        </a>
                        <a href="https://github.com/anagh534" className="me-4 text-reset">
                            <i className="fab fa-github"></i>
                        </a>
                    </div>
                </section>

                <section className="">
                    <div className="container text-center text-md-start mt-5">
                        <div className="row mt-3">
                            <div className="col-md-3 col-lg-4 col-xl-3 mx-auto mb-4">
                                <h6 className="text-uppercase fw-bold mb-4">
                                    <i className="fas fa-gem me-3"></i>ANAGH K R
                                </h6>
                                <p>
                                    A passionate MERN Stack Developer<br></br> and Flutter App Developer based in Kasaragod, Kerala.
                                </p>
                            </div>
                            <div className="col-md-2 col-lg-2 col-xl-2 mx-auto mb-4">
                                <h6 className="text-uppercase fw-bold mb-4">
                                    Useful links
                                </h6>
                                <p>
                                    <Link href="#hero" className="text-reset">Home</Link>
                                </p>
                                <p>
                                    <Link href="/about" className="text-reset">About</Link>
                                </p>
                                <p>
                                    <Link href="#skills" className="text-reset">Skills</Link>
                                </p>
                                <p>
                                    <Link href="#works" className="text-reset">Works</Link>
                                </p>
                            </div>
                            <div className="col-md-3 col-lg-2 col-xl-2 mx-auto mb-4">
                                <h6 className="text-uppercase fw-bold mb-4">
                                    Useful links
                                </h6>
                                <p>
                                    <Link href="/services" className="text-reset">Services</Link>
                                </p>
                                <p>
                                    <Link href="/blogs" className="text-reset">Blogs</Link>
                                </p>
                                {/* <p>
                                    <Link href="#!" className="text-reset">Orders</Link>
                                </p>
                                <p>
                                    <Link href="#!" className="text-reset">Help</Link>
                                </p> */}
                            </div>
                            <div className="col-md-4 col-lg-3 col-xl-3 mx-auto mb-md-0 mb-4">
                                <h6 className="text-uppercase fw-bold mb-4">Contact</h6>
                                <p><i className="fas fa-home me-3"></i> Kasaragod, Kerala</p>
                                <p>
                                    <i className="fas fa-envelope me-3"></i>
                                    anaghkrkkl@gmail.com
                                </p>
                                <p><i className="fas fa-phone me-3"></i> +91 8075541805</p>
                                {/* <p><i className="fas fa-print me-3"></i> + 01 234 567 89</p> */}
                            </div>

                        </div>

                    </div>
                </section>
                {/* <div className="text-center p-4" style={{ backgroundColor: "rgba(0, 0, 0, 0.05);" }}>
                    © 2024 Copyright:
                    <a className="text-reset fw-bold" href="https://mdbootstrap.com/">ANAGH K R</a>
                </div> */}
            </footer>
        </>
    );
};

export default Footer;