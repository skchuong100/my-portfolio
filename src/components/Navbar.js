import React from 'react';
import './Navbar.css';

const Navbar = () => {
    return (
        <nav className="navbar">
            <div className="navbar-left">
                <span className="logo">S</span>
            </div>
            <div className="navbar-right">
                <a href="#about">About</a>
                <a href="#projects">Projects</a>
                <a href="#contact">Contact</a>
                <a href="#resume" className="resume-link">RESUME</a>
            </div>
        </nav>
    );
}

export default Navbar;
