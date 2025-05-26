import React, { useEffect } from 'react';
import './Navbar.css';

const sectionIds = ['about-me', 'experience', 'projects'];

export default function NavBar({ activeSection, setActiveSection }) {
  useEffect(() => {
    const container = document.querySelector('.scroll-column');
    if (!container) return;

    const onScroll = () => {
      const containerRect = container.getBoundingClientRect();
      let bestId = sectionIds[0];
      let maxVisible = 0;

      sectionIds.forEach(id => {
        const el = document.getElementById(id);
        if (!el) return;
        const rect = el.getBoundingClientRect();
        // Calculate visible part of section within container viewport
        const visibleTop = Math.max(rect.top, containerRect.top);
        const visibleBottom = Math.min(rect.bottom, containerRect.bottom);
        const visibleHeight = Math.max(0, visibleBottom - visibleTop);
        const ratio = visibleHeight / rect.height;
        if (ratio > maxVisible) {
          maxVisible = ratio;
          bestId = id;
        }
      });

      if (bestId !== activeSection) {
        setActiveSection(bestId);
      }
    };

    container.addEventListener('scroll', onScroll);
    onScroll();
    return () => container.removeEventListener('scroll', onScroll);
  }, [activeSection, setActiveSection]);

  const handleClick = id => e => {
    e.preventDefault();
    const container = document.querySelector('.scroll-column');
    const el = document.getElementById(id);
    if (container && el) {
      container.scrollTo({ top: el.offsetTop, behavior: 'smooth' });
    } else if (el) {
      el.scrollIntoView({ behavior: 'smooth' });
    }
  };

  const labelMap = {
    'about-me': 'About',
    'experience': 'Experience',
    'projects': 'Projects'
  };

  return (
    <nav className="navbar">
      <div className="navbar-left">
        {/* logo or branding here */}
      </div>
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
      </div>
    </nav>
  );
}
