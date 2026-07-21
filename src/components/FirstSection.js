import React, { useState } from 'react';
import './FirstSection.css';
import spencerPhoto from '../assets/spencerPhoto.PNG';
import gradientBlob from '../assets/gradientBlob.svg';

// ProjectCard component toggles hover-shadow color and links to the project.
function ProjectCard({ title, description, tags, url }) {
  const [useSecondary, setUseSecondary] = useState(false);

  const handleMouseEnter = () => {
    setUseSecondary((prev) => !prev);
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
            : 'var(--color-primary)',
        }}
        onMouseEnter={handleMouseEnter}
      >
        <h3 className="project-name">{title}</h3>
        <p className="project-description">{description}</p>
        <div className="project-tags">
          {tags.map((tag, idx) => (
            <span key={tag} className={`tag ${String.fromCharCode(97 + idx)}`}>
              {tag}
            </span>
          ))}
        </div>
      </div>
    </a>
  );
}

export default function FirstSection() {
  const projects = [
    {
      title: 'Candid Locations',
      description:
        'A cloud-backed full-stack web application for photographers to share photos and the real-world locations where they were taken, helping other users discover and save photography spots.',
      tags: ['React', 'TypeScript', 'PostgreSQL', 'AWS S3', 'OpenAI'],
      url: 'https://www.candidlocations.com/',
    },
    {
      title: 'Hybrid DeblurNet',
      description:
        'Designed and trained a 7 M-parameter two-scale U-Net with Reformer attention and PatchGAN fine-tuning that restores a sharp frame from 7-frame synthetic bursts via a progressive-resolution curriculum and multi-objective SSIM + edge-L1 + LPIPS loss per burst.',
      tags: ['Python', 'PyTorch', 'Reformer', 'U-Net'],
      url: 'https://github.com/skchuong100/Deblurring',
    },
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
  ];

  return (
    <section className="section-one">
      <div className="left-half">
        <div className="pic-gradient">
          <img
            src={gradientBlob}
            alt="Decorative blob"
            className="gradient-bg"
          />
          <img
            src={spencerPhoto}
            alt="Spencer Chuong"
            className="profile-pic-overlay"
          />
        </div>

        <div className="hero">
          <h1>Spencer Chuong</h1>
          <p className="subtitle">Full-Stack Developer</p>
          <p className="tagline">Making one project at a time</p>
        </div>

        <div className="social-row">
          <a href="https://github.com/skchuong100" target="_blank" rel="noopener noreferrer">
            GH
          </a>
          <a href="https://www.instagram.com/chuongspencer48/" target="_blank" rel="noopener noreferrer">
            IG
          </a>
          <a href="https://www.linkedin.com/in/spencer-chuong-b258531ba/" target="_blank" rel="noopener noreferrer">
            LI
          </a>
        </div>

        <div className="email-row">
          <a href="mailto:spencerchuong0@gmail.com">spencerchuong0@gmail.com</a>
        </div>
      </div>

      <div className="right-half scroll-column">
        <div id="about-me" className="about-me-section">
          <h2 className="section-title">About me</h2>
          <div className="about-me-content">
            <p className="about-me-text">
              I’m a computer science graduate from California State University, Long Beach and a full-stack developer focused on building practical, user-friendly web applications.
            </p>
            <p className="about-me-text">
              I currently work at Homigo, where I develop and maintain features across consumer, service-provider, and administrative workflows. My work includes marketplace functionality, onboarding, payments, notifications, service-area matching, reviews, and responsive UI improvements using Next.js, TypeScript, Node.js, PostgreSQL/Supabase, and Stripe.
            </p>
            <p className="about-me-text">
              Previously, I worked at Koios Marketplace, where I built full-stack features for vendor and consumer experiences and led frontend development for dashboards, profiles, moodboards, and other e-commerce functionality.
            </p>
            <p className="about-me-text">
              Outside of development, I enjoy photography, films, shows, and reading.
            </p>
          </div>
        </div>

        <div id="experience" className="experience-section">
          <h2 className="section-title">Experience</h2>

          <div className="experience-card">
            <h3 className="job-title">Full Stack Developer — Homigo</h3>
            <p className="job-dates">June 2026 – Present</p>
            <p className="job-description">
              Led the end-to-end implementation of full-stack features for a startup service marketplace across consumer, provider, and admin workflows using Next.js, TypeScript, Node.js, REST APIs, PostgreSQL/Supabase, and Stripe.
            </p>
            <p className="job-description">
              Built, improved, and maintained core platform systems including job posting and bidding, provider onboarding and verification, payments and payouts, notifications, service-area matching, admin tools, reviews, and responsive UI improvements.
            </p>
          </div>

          <div className="experience-card">
            <h3 className="job-title">Full Stack Developer — Koios Marketplace</h3>
            <p className="job-dates">September 2025 – March 2026</p>
            <p className="job-description">
              Implemented end-to-end full-stack features for a startup e-commerce platform across vendor and consumer experiences, social features, responsive UI/UX improvements, and routing/API integrations within a microservice architecture using React, TypeScript, Node.js, REST APIs, and PostgreSQL.
            </p>
            <p className="job-description">
              Led frontend development initiatives for vendor dashboards, profile pages, and public and editable moodboards; stepped in as acting team lead when needed and conducted regular code reviews to support consistency and quality.
            </p>
          </div>

          <div className="experience-card">
            <h3 className="job-title">Patent Examiner — USPTO</h3>
            <p className="job-dates">October 2024 – May 2025</p>
            <p className="job-description">
              Examined AI/ML patent applications for patentability and novelty. When issuing a non-final rejection, I worked with patent attorneys to explain the rejection and discuss amendments to the claimed invention.
            </p>
          </div>
        </div>

        <div id="projects" className="projects-section">
          <h2 className="section-title">Projects</h2>
          {projects.map((project) => (
            <ProjectCard
              key={project.title}
              title={project.title}
              description={project.description}
              tags={project.tags}
              url={project.url}
            />
          ))}
        </div>
      </div>
    </section>
  );
}
