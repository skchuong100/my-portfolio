import React, { useState, useEffect } from 'react';
import './FirstSection.css';

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
        <div className="intro-subtext">
            A driven <span className={`rotating-text ${isFading ? "fade-out" : "fade-in"}`}>
                {phrases[currentPhraseIndex]}
            </span>
        </div>
    );
};

export default FirstSection;
