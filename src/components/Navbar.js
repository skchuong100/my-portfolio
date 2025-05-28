import React, { useEffect, useState } from 'react';
import './Navbar.css';
import resumePDF from '../assets/SpencerChuongResume.pdf';

const sectionIds = ['about-me', 'experience', 'projects'];
const labelMap   = {
  'about-me':  'About',
  'experience': 'Experience',
  'projects':   'Projects'
};

export default function NavBar() {
  const [activeSection, setActiveSection] = useState(sectionIds[0]);

  /* -------- scroll-spy keeps the right button highlighted -------- */
  useEffect(() => {
    const container = document.querySelector('.scroll-column');
    if (!container) return;

    const onScroll = () => {
      const containerRect = container.getBoundingClientRect();
      let bestId     = sectionIds[0];
      let maxVisible = 0;

      sectionIds.forEach(id => {
        const el = document.getElementById(id);
        if (!el) return;
        const rect          = el.getBoundingClientRect();
        const visibleTop    = Math.max(rect.top,    containerRect.top);
        const visibleBottom = Math.min(rect.bottom, containerRect.bottom);
        const visibleHeight = Math.max(0, visibleBottom - visibleTop);
        const ratio         = visibleHeight / rect.height;

        if (ratio > maxVisible) {
          maxVisible = ratio;
          bestId     = id;
        }
      });

      setActiveSection(bestId);
    };

    container.addEventListener('scroll', onScroll);
    onScroll();                      // run once on mount
    return () => container.removeEventListener('scroll', onScroll);
  }, []);

  /* -------- nav-button click handler -------- */
  const handleClick = id => e => {
    e.preventDefault();
    const container = document.querySelector('.scroll-column');
    const el        = document.getElementById(id);

    if (!el) return;

    if (container) {
      /* subtract the container’s top padding so the title is visible */
      const padTop = parseFloat(getComputedStyle(container).paddingTop) || 0;
      container.scrollTo({
        top:        el.offsetTop - padTop,
        behavior: 'smooth'
      });
    } else {
      /* fallback for full-page scrolling (e.g. mobile layout) */
      el.scrollIntoView({ behavior: 'smooth' });
    }
  };

  return (
    <nav className="navbar">
      <div className="navbar-left">{/* logo / branding */}</div>

      <div className="navbar-right">
        {sectionIds.map(id => (
          <a
            key={id}
            href={`#${id}`}
            onClick={handleClick(id)}
            className={activeSection === id ? 'active' : ''}
          >
            {labelMap[id]}
          </a>
        ))}

        <a
          href={resumePDF}
          target="_blank"
          rel="noopener noreferrer"
          className="resume-btn"
        >
          Resume
        </a>
      </div>
    </nav>
  );
}
