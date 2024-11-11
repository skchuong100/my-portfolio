import React from 'react';
import Navbar from './components/Navbar';
import Sidebars from './components/Sidebars';
import './components/FirstSection.css';
import './App.css';

function App() {
    return (
        <div className="App">
            <Navbar />
            <Sidebars />
            <section id="section-one" className="section-one">
            <div className="intro-text">
                <span className="hello-text">Hello,</span>
                <span className="name-text">I'm Spencer Chuong</span>
            </div>
            </section>
            <section id="section-two" className="section-two">
                <h1>Section Two - About</h1>
                <p>This is the second section.</p>
            </section>
            <section id="section-three" className="section-three">
                <h1>Section Three - Projects</h1>
                <p>This is the third section.</p>
            </section>
            <section id="section-four" className="section-four">
                <h1>Section Four - Contact</h1>
                <p>This is the fourth section.</p>
            </section>
            <section id="resume" className="resume">
                <h1>Resume</h1>
                <p>This is the resume section.</p>
            </section>
        </div>
    );
}

export default App;
