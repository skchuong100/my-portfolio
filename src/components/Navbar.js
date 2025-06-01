// src/components/Navbar.js
import React, { useEffect, useState } from 'react';
import './Navbar.css';
import resumePDF from '../assets/SpencerChuongResume.pdf';

/* The IDs must match the <div id="about-me"> etc. in FirstSection.js */
const sectionIds = ['about-me', 'experience', 'projects'];
const labelMap   = {
  'about-me':  'About',
  'experience': 'Experience',
  'projects':   'Projects'
};

export default function NavBar() {
  const [activeSection, setActiveSection] = useState(sectionIds[0]);

  /* ───────── scroll-spy (underline logic) ───────── */
  useEffect(() => {
    // ① Always point at the same container that actually scrolls on desktop
    const container = document.querySelector('.right-half');
    if (!container) return;

    const onScroll = () => {
      const containerRect = container.getBoundingClientRect();
      let bestId     = sectionIds[0];
      let maxVisFrac = 0;

      sectionIds.forEach((id) => {
        const el = document.getElementById(id);
        if (!el) return;

        const rect = el.getBoundingClientRect();
        // Compute how much of `el` is visible inside container’s viewport:
        const visibleTop    = Math.max(rect.top,    containerRect.top);
        const visibleBottom = Math.min(rect.bottom, containerRect.bottom);
        const visibleHeight = Math.max(0, visibleBottom - visibleTop);
        const fracVisible   = visibleHeight / rect.height;

        if (fracVisible > maxVisFrac) {
          maxVisFrac = fracVisible;
          bestId     = id;
        }
      });

      setActiveSection(bestId);
    };

    container.addEventListener('scroll', onScroll);
    onScroll();  // run once immediately
    return () => container.removeEventListener('scroll', onScroll);
  }, []);

  /* ───────── click → smooth-scroll to section ───────── */
  const handleClick = (id) => (e) => {
    e.preventDefault();

    const container = document.querySelector('.right-half');
    const el        = document.getElementById(id);
    if (!el || !container) return;

    // Get both rectangles relative to the **viewport**:
    const containerRect = container.getBoundingClientRect();
    const elRect        = el.getBoundingClientRect();

    // If the navbar is fixed at the top, we also need to offset by its height:
    const NAV = document.querySelector('.navbar');
    const navHeight = NAV ? NAV.getBoundingClientRect().height : 0;

    // Compute how many pixels we need to scroll INSIDE `container`
    // so that el’s top aligns just under the navbar:
    //
    //   currentScrollTop = how many px container has already been scrolled
    //   delta = (elRect.top   - navHeight)      <-- el’s top in viewport minus navbar
    //         - (containerRect.top)             <-- container’s top in viewport
    //         + currentScrollTop                <-- bring in current scroll position
    //
    // So if elRect.top is exactly at (containerRect.top + navHeight), delta = currentScrollTop.
    const currentScrollTop = container.scrollTop;
    const delta = (elRect.top - navHeight)
                - (containerRect.top)
                + currentScrollTop;

    // Scroll smoothly to that new top position (never negative):
    container.scrollTo({
      top:   Math.max(delta, 0),
      behavior: 'smooth'
    });
  };

  return (
    <nav className="navbar">
      <div className="navbar-left">{/* optional logo/branding here */}</div>
      <div className="navbar-right">
        {sectionIds.map((id) => (
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
