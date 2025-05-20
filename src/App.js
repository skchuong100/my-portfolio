import React, { useRef, useEffect } from 'react';
import Navbar from './components/Navbar';
import Sidebars from './components/Sidebars';

import './components/FirstSection.css';
import './App.css';

import spencerPhoto from './assets/spencerPhoto.PNG';
import gradientImage from './assets/gradient1.png';

/**
 * Single‑section demo with a mini‑page column that scrolls even when the
 * cursor is outside it.  We now animate the wheel movement so the scroll
 * feels smoother (ease‑out inertia).
 */
function App() {
  const scrollRef = useRef(null);

  // ----- smooth wheel reroute -------------------------------------------
  useEffect(() => {
    const col = scrollRef.current;
    if (!col) return;

    let target = col.scrollTop;         // where we want to scroll to
    let animFrame = null;

    const easeScroll = () => {
      const diff = target - col.scrollTop;
      // stop when we're ~1px away
      if (Math.abs(diff) < 1) {
        col.scrollTop = target;
        animFrame = null;
        return;
      }
      // move a fraction of the remaining distance (ease‑out)
      col.scrollTop += diff * 0.2;
      animFrame = requestAnimationFrame(easeScroll);
    };

    const onWheel = (e) => {
      e.preventDefault();          // keep page locked
      target += e.deltaY;          // accumulate wheel delta
      // clamp to scroll range
      target = Math.max(0, Math.min(target, col.scrollHeight - col.clientHeight));
      if (!animFrame) animFrame = requestAnimationFrame(easeScroll);
    };

    window.addEventListener('wheel', onWheel, { passive: false });
    return () => window.removeEventListener('wheel', onWheel);
  }, []);

  return (
    <div className="App">
      <Navbar />
      <Sidebars />

      <section id="section-one" className="section-one">
        {/* empty left half for now */}
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
          <div className="intro-text">
            <h1 className="name-text">Spencer Chuong</h1>
            <h5 className="subtitle-text">
              A driven <span className="highlight">computer science student</span>
            </h5>
            <p className="description-text">
              Making one project at a time for all
            </p>
          </div>
        </div>


        {/* right half centres the mini page */}
        <div className="right-half">
          <div className="scroll-column" ref={scrollRef}>
          <div id="test1" className="scroll-item">Test 1</div>
          <div id="test2" className="scroll-item">Test 2</div>
          <div id="test3" className="scroll-item">Test 3</div>
          </div>
        </div>
      </section>
    </div>
  );
}

export default App;
