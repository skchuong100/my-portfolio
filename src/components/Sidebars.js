// src/components/Sidebars.js
import React from 'react';
import './Sidebars.css';

export default function Sidebars() {
  return (
    <>
      {/* ——— LEFT BAR ——— */}
      <div className="sidebar left-sidebar">
        <div className="icon-container">
          <a
            href="https://www.instagram.com/chuongspencer48/"
            target="_blank"
            rel="noopener noreferrer"
            className="sidebar-link"
          >
            IG
          </a>

          <a
            href="https://github.com/skchuong100"
            target="_blank"
            rel="noopener noreferrer"
            className="sidebar-link"
          >
            GH
          </a>

          <a
            href="https://www.linkedin.com/in/spencer-chuong-b258531ba/"
            target="_blank"
            rel="noopener noreferrer"
            className="sidebar-link"
          >
            LI
          </a>
        </div>

        <div className="gradient-line" />
      </div>

      {/* ——— RIGHT BAR ——— */}
      <div className="sidebar right-sidebar">
        <div className="email-container">
          <a
            href="mailto:spencerchuong0@gmail.com"
            className="email-text"
          >
            spencerchuong0@gmail.com
          </a>
        </div>

        <div className="gradient-line" />
      </div>
    </>
  );
}
