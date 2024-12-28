import Link from 'next/link';
import './navbar.css'
export default function Navbar() {
    return (
        <nav className="navbar navbar-expand-lg fixed-top custom-navbar">
            <div className="container">
                <Link className="navbar-brand" href="/">ANAGH K R</Link>
                <button className="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarTogglerDemo02" aria-controls="navbarTogglerDemo02" aria-expanded="false" aria-label="Toggle navigation">
                    <span className="navbar-toggler-icon"></span>
                </button>
                <div className="collapse navbar-collapse" id="navbarTogglerDemo02">
                    <ul className="navbar-nav ms-auto mb-2 mb-lg-0">
                        <li className="nav-item">
                            <Link className='nav-link' href='/'>Home</Link>
                        </li>
                        <li className="nav-item">
                            <Link className="nav-link" href="/about">About</Link>
                        </li>
                        <li className="nav-item">
                            <Link href='/services' className='nav-link' >Services</Link>
                        </li>
                    </ul>
                    <form className="d-flex" role="search">
                        <input className="form-control me-2" type="search" placeholder="Search" aria-label="Search" />
                    </form>
                    <ul className="navbar-nav mb-2 mb-lg-0">
                        <li className="nav-item">
                            <a className="nav-link" target='_blank' href="https://instagram.com/mr._uni_que___"><i className="fa-brands fa-instagram"></i> Instagram</a>
                        </li>
                        <li className="nav-item">
                            <a className="nav-link" target='_blank' href="https://www.linkedin.com/in/anagh-k-r/"><i className="fa-brands fa-linkedin"></i> Linkedin</a>
                        </li>
                        <li className="nav-item">
                            <a className="nav-link" target='_blank' href="https://github.com/anagh534"><i className="fa-brands fa-github"></i> Github</a>
                        </li>
                    </ul>
                </div>
            </div>
        </nav>
    );
}