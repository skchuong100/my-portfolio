import React from 'react';
import './Sidebars.css';

const Sidebars = () => {
    return (
        <>
            <div className="sidebar left-sidebar">
                <div className="icon-container">
                    <a href="https://www.instagram.com/chuongspencer48/" target="_blank" rel="noopener noreferrer">
                    <div className="sidebar-icon icon-instagram"></div>
                    </a>
                    <a href="https://github.com/skchuong100" target="_blank" rel="noopener noreferrer">
                    <div className="sidebar-icon icon-github"></div>
                    </a>
                    <a href="https://www.linkedin.com/in/spencer-chuong-b258531ba/" target="_blank" rel="noopener noreferrer">
                    <div className="sidebar-icon icon-linkedin"></div>
                    </a>
                </div>
                <div className="gradient-line"></div>
            </div>
            <div className="sidebar right-sidebar">
                <div className="email-container">
                    <a href="mailto:spencerchuong0@gmail.com" className="email-text">spencerchuong0@gmail.com</a>
                </div>
                <div className="gradient-line"></div>
            </div>
        </>
    );
}

export default Sidebars;
