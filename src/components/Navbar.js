import React from 'react';
import './Navbar.css';

const Navbar = () => {
    return (
        <nav className="navbar">
            <div className="navbar-left">
                <a href="#section-one" className="logo">S</a> {/* Link the logo to the first section */}
            </div>
            <div className="navbar-right">
                <a href="#section-two">About</a> {/* About leads to the second section */}
                <a href="#section-three">Projects</a> {/* Projects leads to the third section */}
                <a href="#section-four">Contact</a> {/* Contact leads to the fourth section */}
                <a href="#resume" className="resume-link">RESUME</a> {/* Resume link remains as is */}
            </div>
        </nav>
    );
}

export default Navbar;
