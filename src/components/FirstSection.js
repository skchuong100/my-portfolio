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
            A driven <span className="highlight">computer science student</span>
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

      <div className="right-half scroll-column">
        <div id="about-me" className="about-me-section">
          <h2 className="section-title">About me</h2>
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
        <div id="experience" className="experience-section">
          <h2 className="section-title">Experience</h2>
          <div className="experience-card">
            <h3 className="job-title">Patent Examiner</h3>
            <p className="job-dates">2024 – 2025</p>
            <p className="job-description">
              Examined AI/ML patent applications to see if it meets patentability and novelty.
              In giving a non-final rejection, I work with the patent attorney to explain the
              rejection and discuss amendments to the claimed invention.
            </p>
          </div>
        </div>
        {/* — Projects — */}
        <div id="projects" className="projects-section">
          <h2 className="section-title">Projects</h2>
          <div className="project-card">
            <h3 className="project-name">InterMeet</h3>
            <p className="project-description">
              An Android-based matching app where people connect with each other and are given
              a map of places and events to meet at. Our motto is “We INTERmediate the MEET”.
            </p>
            <div className="project-tags">
              <span className="tag a">Kotlin</span>
              <span className="tag b">Google Maps API</span>
              <span className="tag c">Firebase</span>
            </div>
          </div>
          <div className="project-card">
            <h3 className="project-name">Food Decider</h3>
            <p className="project-description">
              Programmed a GUI that displays restaurants and their details based on user preferences.
              Utilized Google Maps API to gather information about the restaurant
            </p>
            <div className="project-tags">
              <span className="tag a">Python</span>
              <span className="tag b">Google Maps API</span>
            </div>
          </div>
          </div>

      </div>
    </section>
  );
}
