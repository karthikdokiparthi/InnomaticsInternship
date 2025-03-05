import React, { useState, useEffect } from 'react';
import './Home.css';
import profileImage from '../assets/firstImg.png';
import hoverImage from '../assets/secondImg.png';

const Home = () => {
    const [currentImage, setCurrentImage] = useState(profileImage);
    const titles = ['Frontend Developer', 'Backend Developer', 'Full Stack Java Developer'];
    const [displayText, setDisplayText] = useState('');
    const [titleIndex, setTitleIndex] = useState(0);
    const [charIndex, setCharIndex] = useState(0);

    useEffect(() => {
        const currentTitle = titles[titleIndex];

        if (charIndex < currentTitle.length) {
            const timeout = setTimeout(() => {
                setDisplayText((prev) => prev + currentTitle[charIndex]);
                setCharIndex((prev) => prev + 1);
            }, 100);
            return () => clearTimeout(timeout);
        } else {
            setTimeout(() => {
                setDisplayText('');
                setCharIndex(0);
                setTitleIndex((prev) => (prev + 1) % titles.length);
            }, 1000);
        }
    }, [charIndex, titleIndex, titles]);

    return (
        <div className="home">
            <div className="home-details">
                <p className='home-intro'>Hello, I'm</p>
                <h1>Karthik Dokiparthi</h1>
                <h2 className="animated-title">{displayText}</h2>
                <p>
                    Dedicated to developing high-performance and scalable web applications using Java, Spring Boot, React.js, and PostgreSQL.
                    Skilled in crafting seamless user experiences and optimizing backend efficiency.
                </p>
                <div className="cta-buttons">
                    <button className="cta-button">View My Work</button>
                    <button className="cta-button">Contact Me</button>
                </div>
            </div>
            <div className="home-image">
                <img
                    src={currentImage}
                    alt="Karthik Dokiparthi"
                    onMouseEnter={() => setCurrentImage(hoverImage)}
                    onMouseLeave={() => setCurrentImage(profileImage)}
                />
            </div>
        </div>
    );
};

export default Home;
