import React, { useState, useEffect } from 'react';
import './FirstSection.css';
import colorGradient from '../assets/color_gradient.png';
import spencerImage from '../assets/spencer_image.png';
const FirstSection = () => {
    const phrases = [
        "computer science graduate",
        "aspiring software developer",
        "full stack developer",
        "front-end developer"
    ];

    const [currentPhraseIndex, setCurrentPhraseIndex] = useState(0);
    const [isFading, setIsFading] = useState(false);

    useEffect(() => {
        const intervalId = setInterval(() => {
            setIsFading(true); // Start fade-out effect
            setTimeout(() => {
                setCurrentPhraseIndex((prevIndex) => (prevIndex + 1) % phrases.length);
                setIsFading(false); // Start fade-in effect after phrase changes
            }, 500); // Delay for fade-out duration
        }, 3000); // Change phrase every 3 seconds

        return () => clearInterval(intervalId); // Clean up interval on component unmount
    }, [phrases.length]);

    return (
        <div className="intro-container">
            {/* Text Container */}
            <div className="text-container">
                <div className="intro-text">
                    <span className="hello-text">Hello,</span>
                    <span className="name-text">I'm Spencer Chuong</span>
                </div>
                <div className="intro-subtext">
                    A driven <span className={`rotating-text ${isFading ? "fade-out" : "fade-in"}`}>
                        {phrases[currentPhraseIndex]}
                    </span>
                </div>
                <p className="intro-paragraph">
                    I am an aspiring software engineer in the making who is currently making small projects that would help benefit others.
                </p>
            </div>

            {/* Image Container */}
            <div className="image-container">
                <img src={colorGradient} alt="Color Gradient" className="color-gradient" />
                <img src={spencerImage} alt="Spencer Chuong" className="spencer-image" />
            </div>
        </div>

    );
};

export default FirstSection;
