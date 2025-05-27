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
      <div className="svg-group svg-group-left">
        <svg xmlns="http://www.w3.org/2000/svg" width="201" height="166" viewBox="0 0 201 166" fill="none">
          <path d="M184.972 52.044L158.341 79.5719L148.12 42.4342L184.972 52.044Z" stroke="url(#paint0_linear_679_9)" strokeWidth="3"/>
          <path d="M58.9853 139.305C58.8539 126.155 69.2636 115.423 82.1945 115.294C95.1256 115.165 105.748 125.686 105.879 138.835C106.011 151.985 95.6014 162.717 82.6703 162.846C69.7392 162.975 59.1169 152.454 58.9853 139.305Z" stroke="url(#paint1_linear_679_9)" strokeWidth="3"/>
          <rect x="23.0449" y="66.8296" width="47.5543" height="46.8968" transform="rotate(-115.971 23.0449 66.8296)" stroke="url(#paint2_linear_679_9)" strokeWidth="3"/>
          <defs>
            <linearGradient id="paint0_linear_679_9" x1="145.992" y1="40.3209" x2="182.087" y2="75.2409" gradientUnits="userSpaceOnUse">
              <stop stopColor="#7579FA"/>
              <stop offset="1" stopColor="#FBAE6A"/>
            </linearGradient>
            <linearGradient id="paint1_linear_679_9" x1="57.4854" y1="139.32" x2="107.38" y2="138.821" gradientUnits="userSpaceOnUse">
              <stop stopColor="#7579FA"/>
              <stop offset="1" stopColor="#FBAE6A"/>
            </linearGradient>
            <linearGradient id="paint2_linear_679_9" x1="47.6304" y1="68.835" x2="47.6304" y2="118.732" gradientUnits="userSpaceOnUse">
              <stop stopColor="#7579FA"/>
              <stop offset="1" stopColor="#FBAE6A"/>
            </linearGradient>
          </defs>
        </svg>
      </div>

      <div className="svg-group svg-group-middle">
        <svg xmlns="http://www.w3.org/2000/svg" width="240" height="230" viewBox="0 0 240 230" fill="none">
          <path d="M97.7949 52.7639L61.6413 39.3903L91.0765 15.1403L97.7949 52.7639Z" stroke="url(#paint0_linear_679_13)" strokeWidth="3"/>
          <path d="M64.3294 149.061C60.0533 161.268 46.5563 167.656 34.158 163.278C21.7598 158.901 15.2172 145.437 19.4933 133.231C23.7694 121.025 37.2665 114.636 49.6647 119.014C62.063 123.391 68.6054 136.855 64.3294 149.061Z" stroke="url(#paint1_linear_679_13)" strokeWidth="3"/>
          <rect x="-0.280879" y="2.09103" width="47.4114" height="47.0412" transform="matrix(0.610967 0.791656 -0.79822 0.602366 189.504 84.0528)" stroke="url(#paint2_linear_679_13)" strokeWidth="3"/>
          <defs>
            <linearGradient id="paint0_linear_679_13" x1="92.1006" y1="12.3527" x2="74.7885" y2="59.1537" gradientUnits="userSpaceOnUse">
              <stop stopColor="#7579FA"/>
              <stop offset="1" stopColor="#FBAE6A"/>
            </linearGradient>
            <linearGradient id="paint1_linear_679_13" x1="65.7438" y1="149.561" x2="18.038" y2="132.849" gradientUnits="userSpaceOnUse">
              <stop stopColor="#7579FA"/>
              <stop offset="1" stopColor="#FBAE6A"/>
            </linearGradient>
            <linearGradient id="paint2_linear_679_13" x1="25.2057" y1="0" x2="25.2057" y2="50.0412" gradientUnits="userSpaceOnUse">
              <stop stopColor="#7579FA"/>
              <stop offset="1" stopColor="#FBAE6A"/>
            </linearGradient>
          </defs>
        </svg>
      </div>

      <div className="svg-group svg-group-right">
        <svg xmlns="http://www.w3.org/2000/svg" width="200" height="182" viewBox="0 0 200 182" fill="none">
          <path d="M149.317 134.382L187.379 128.278L173.646 163.857L149.317 134.382Z" stroke="url(#paint0_linear_681_24)" strokeWidth="3"/>
          <path d="M131.181 34.062C128.912 21.329 137.533 9.136 150.483 6.86091C163.433 4.58592 175.744 13.1016 178.013 25.8346C180.282 38.5676 171.661 50.7606 158.712 53.0357C145.762 55.3108 133.451 46.795 131.181 34.062Z" stroke="url(#paint1_linear_681_24)" strokeWidth="3"/>
          <rect x="-0.782167" y="-1.95947" width="47.4114" height="47.0412" transform="matrix(-0.920985 -0.389598 0.39954 -0.916716 55.2203 148.253)" stroke="url(#paint2_linear_681_24)" strokeWidth="3"/>
          <defs>
            <linearGradient id="paint0_linear_681_24" x1="174.123" y1="166.788" x2="166.221" y2="117.518" gradientUnits="userSpaceOnUse">
              <stop stopColor="#7579FA"/>
              <stop offset="1" stopColor="#FBAE6A"/>
            </linearGradient>
            <linearGradient id="paint1_linear_681_24" x1="129.704" y1="34.3214" x2="179.468" y2="25.4528" gradientUnits="userSpaceOnUse">
              <stop stopColor="#7579FA"/>
              <stop offset="1" stopColor="#FBAE6A"/>
            </linearGradient>
            <linearGradient id="paint2_linear_681_24" x1="25.2057" y1="0" x2="25.2057" y2="50.0412" gradientUnits="userSpaceOnUse">
              <stop stopColor="#7579FA"/>
              <stop offset="1" stopColor="#FBAE6A"/>
            </linearGradient>
          </defs>
        </svg>
      </div>
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
            An aspiring <span className="highlight">software developer</span>
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
