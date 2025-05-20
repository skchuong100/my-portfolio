
import React, { useState, useEffect } from 'react';
import './Navbar.css';
import ResumePDF from '../assets/Spencer Chuong\'s Resume.pdf';

const Navbar = () => {
  const [activeSection, setActiveSection] = useState(null);

  // onClick still scrolls the mini‐page
  const handleMiniPageScroll = (e, targetId) => {
    e.preventDefault();
    const container = document.querySelector('.scroll-column');
    const target    = document.getElementById(targetId);
    if (container && target) {
      const offset = target.offsetTop - container.offsetTop;
      container.scrollTo({ top: offset, behavior: 'smooth' });
    }
  };

  // watch the scroll‐column’s scroll position
  useEffect(() => {
    const container = document.querySelector('.scroll-column');
    if (!container) return;

    const onScroll = () => {
      const scrollTop = container.scrollTop;
      const h         = container.clientHeight / 2;
      // pick the middle of the viewport as our switch point
      const t1 = document.getElementById('test1').offsetTop;
      const t2 = document.getElementById('test2').offsetTop;
      const t3 = document.getElementById('test3').offsetTop;

      if (scrollTop >= t3 - h) setActiveSection('test3');
      else if (scrollTop >= t2 - h) setActiveSection('test2');
      else                         setActiveSection('test1');
    };

    container.addEventListener('scroll', onScroll);
    onScroll(); // initialize
    return () => container.removeEventListener('scroll', onScroll);
  }, []);

  return (
    <nav className="navbar">
      <div className="navbar-left">
        <a href="#section-one" className="logo">S</a>
      </div>
      <div className="navbar-right">
        <a
          href="#section-two"
          className={activeSection === 'test1' ? 'active' : ''}
          onClick={e => handleMiniPageScroll(e, 'test1')}
        >
          About
        </a>
        <a
          href="#section-three"
          className={activeSection === 'test2' ? 'active' : ''}
          onClick={e => handleMiniPageScroll(e, 'test2')}
        >
          Projects
        </a>
        <a
          href="#section-four"
          className={activeSection === 'test3' ? 'active' : ''}
          onClick={e => handleMiniPageScroll(e, 'test3')}
        >
          Contact
        </a>
        <a
          href={ResumePDF}
          target="_blank"
          rel="noopener noreferrer"
          className="resume-link"
        >
          RESUME
        </a>
      </div>
    </nav>
  );
};

export default Navbar;
