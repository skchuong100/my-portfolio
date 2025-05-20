// src/FirstSection.js
import React from 'react';
import './FirstSection.css';
import githubIcon    from '../assets/github-signWhite.png';
import instagramIcon from '../assets/instagramWhite.png';
import linkedinIcon  from '../assets/linkedinWhite.png';
import mailIcon      from '../assets/mailWhite.png';
import spencerPhoto from '../assets/spencerPhoto.PNG';
import gradientImage from '../assets/gradient1.png';
export default function FirstSection() {
  return (
    <section className="section-one">
      <div className="left-half">
        <div className="pic-gradient">
            <img
              src={gradientImage}
              alt="Gradient Background"
              className="gradient-bg"
            />
            <img
              src={spencerPhoto}
              alt="Spencer Chuong"
              className="profile-pic-overlay"
            />
        </div>
        {/* hero image, name, tagline */}
        <div className="hero">
          {/* background-shape + <img className="portrait" /> */}
          <h1>SPENCER CHUONG</h1>
          <p className="subtitle">
            A driven <span className="highlight">computer science</span> student
          </p>
          <p className="tagline">Making one project at a time</p>
        </div>

        <div className="social-row">
            <a href="https://github.com/yourusername" target="_blank" rel="noopener">
              <img src={githubIcon} alt="GitHub" />
            </a>
            <a href="https://instagram.com/yourusername" target="_blank" rel="noopener">
              <img src={instagramIcon} alt="Instagram" />
            </a>
            <a href="https://linkedin.com/in/yourusername" target="_blank" rel="noopener">
              <img src={linkedinIcon} alt="LinkedIn" />
            </a>
            <a href="mailto:spencerchuong0@gmail.com">
              <img src={mailIcon} alt="Email" />
            </a>
        </div>
        {/* intro text */}

      </div>

      <div className="right-half">
        <div id="about-me" className="about-me-section">
          <h2 className="about-me-title">About me</h2>
          <div className="about-me-content">
            <p className="about-me-text">
              I’m a recent computer science graduate from California State University, Long Beach. I’m passionate about making cool and niche programs with excellent user interfaces.
            </p>
            <p className="about-me-text">
              Currently, I’m open to any position in full stack development, ranging from backend to front end. I am also studying other aspects of computer science on the side for functionalities in my projects.
            </p>
            <p className="about-me-text">
              In my spare time, I love to do photography, watch films/shows, and read.
            </p>
          </div>
        </div>
      </div>
    </section>
  );
}
