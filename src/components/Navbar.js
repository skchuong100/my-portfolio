// Navbar.js
import React, { useState, useEffect } from 'react';
import './Navbar.css';
import ResumePDF from '../assets/Spencer Chuong\'s Resume.pdf';

export default function Navbar() {
  const [activeSection, setActiveSection] = useState('about-me');

  const scrollToSection = (e, id) => {
    e.preventDefault();
    const container = document.querySelector('.scroll-column');
    const target    = document.getElementById(id);
    if (container && target) {
      const y = target.offsetTop - container.offsetTop;
      container.scrollTo({ top: y, behavior: 'smooth' });
      // we can still optimistically set here, but observer will correct if needed
      setActiveSection(id);
    }
  };

  useEffect(() => {
  const container = document.querySelector('.scroll-column');
  if (!container) return;

  const sectionIds = ['about-me','experience','projects'];

  const onScroll = () => {
    const scrollTop = container.scrollTop;
    let current = sectionIds[0];        // default to first

    sectionIds.forEach(id => {
      const el = document.getElementById(id);
      // if this section's top is at or above the scroll position + 10px,
      // treat it as having “arrived”
      if (el && el.offsetTop <= scrollTop + 10) {
        current = id;
      }
    });

    setActiveSection(current);
  };

  // listen and initialize
  container.addEventListener('scroll', onScroll);
  onScroll();

  return () => container.removeEventListener('scroll', onScroll);
}, []);

  return (
    <nav className="navbar">
      <div className="navbar-left"></div>
      <div className="navbar-right">
        <a
          href="#about-me"
          onClick={e => scrollToSection(e,'about-me')}
          className={activeSection==='about-me' ? 'active' : ''}
        >About</a>
        <a
          href="#experience"
          onClick={e => scrollToSection(e,'experience')}
          className={activeSection==='experience' ? 'active' : ''}
        >Experience</a>
        <a
          href="#projects"
          onClick={e => scrollToSection(e,'projects')}
          className={activeSection==='projects' ? 'active' : ''}
        >Projects</a>
        <a
          href={ResumePDF}
          target="_blank"
          rel="noopener noreferrer"
          className="resume-link"
        >RESUME</a>
      </div>
    </nav>
  );
}
