import React from 'react';
import Navbar from './components/Navbar';
import LeftSidebar from './components/LeftSidebar';
import RightSidebar from './components/RightSidebar'; // This should match the filename
import './App.css';

function App() {
    return (
        <div className="App">
            <Navbar />
            <LeftSidebar />
            <RightSidebar />
            <section className="section-one" id="about">
                <h1>Section One - About</h1>
                <p>This is the first section.</p>
            </section>
            <section className="section-two" id="projects">
                <h1>Section Two - Projects</h1>
                <p>This is the second section.</p>
            </section>
            <section className="section-three" id="contact">
                <h1>Section Three - Contact</h1>
                <p>This is the third section.</p>
            </section>
            <section className="section-four" id="resume">
                <h1>Section Four - Resume</h1>
                <p>This is the fourth section.</p>
            </section>
        </div>
    );
}

export default App;
