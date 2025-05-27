import React, { useState } from 'react';
import './FirstSection.css';
import githubIcon    from '../assets/github-signWhite.png';
import instagramIcon from '../assets/instagramWhite.png';
import linkedinIcon  from '../assets/linkedinWhite.png';
import mailIcon      from '../assets/mailWhite.png';
import spencerPhoto  from '../assets/spencerPhoto.PNG';
import gradientImage from '../assets/gradient1.png';

// ProjectCard component toggles hover-shadow color and links to GitHub repo
function ProjectCard({ title, description, tags, url }) {
  const [useSecondary, setUseSecondary] = useState(false);

  const handleMouseEnter = () => {
    setUseSecondary(prev => !prev);
  };

  return (
    <a
      href={url}
      target="_blank"
      rel="noopener noreferrer"
      style={{ textDecoration: 'none' }}
    >
      <div
        className="project-card"
        style={{
          '--hover-shadow-color': useSecondary
            ? 'var(--color-accent)'
            : 'var(--color-primary)'
        }}
        onMouseEnter={handleMouseEnter}
      >
        <h3 className="project-name">{title}</h3>
        <p className="project-description">{description}</p>
        <div className="project-tags">
          {tags.map((tag, idx) => (
            <span key={tag} className={`tag ${String.fromCharCode(97 + idx)}`}>{tag}</span>
          ))}
        </div>
      </div>
    </a>
  );
}

export default function FirstSection() {
  const projects = [
    {
      title: 'InterMeet',
      description:
        'An Android-based matching app where people connect with each other and are given a map of places and events to meet at. Our motto is "We INTERmediate the MEET".',
      tags: ['Kotlin', 'Google Maps API', 'Firebase'],
      url: 'https://github.com/InterMeetiate/Intermeet',
    },
    {
      title: 'Food Decider',
      description:
        'Programmed a GUI that displays restaurants and their details based on user preferences. Utilized Google Maps API to gather information about the restaurant.',
      tags: ['Python', 'Google Maps API'],
      url: 'https://github.com/DannyM9021/FoodDecider',
    },
    // ...add more projects here as needed
  ];

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

        <div className="hero">
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
      </div>

      <div className="right-half scroll-column">
        <div id="about-me" className="about-me-section">
          <h2 className="section-title">About me</h2>
          <div className="about-me-content">
            <p className="about-me-text">
              I’m a recent computer science graduate from California State University, Long Beach. I’m passionate about making cool and niche programs with excellent user interfaces.
            </p>
            <p className="about-me-text">
                In my role as a Patent Examiner at the United States Patent and Trademark Office, I assessed AI/ML patent applications by reviewing their technical disclosures to ensure methods and systems were described clearly and completely for implementation. I confirmed that procedural workflows and data‐handling processes met the enablement and written‐description standards. At the same time, I applied eligibility, novelty, and non‐obviousness analyses.
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
          {projects.map((proj, i) => (
            <ProjectCard
              key={i}
              title={proj.title}
              description={proj.description}
              tags={proj.tags}
              url={proj.url}
            />
          ))}
        </div>
      </div>
    </section>
  );
}
