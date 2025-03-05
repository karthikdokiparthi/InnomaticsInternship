import React, { useState } from 'react';
import './Home.css';
import profileImage from '../assets/firstImg.png';
import hoverImage from '../assets/secondImg.png';

const Home = () => {
    const [currentImage, setCurrentImage] = useState(profileImage);

    return (
        <div className="home">
            <div className="home-details">
                <p className='home-intro'>Hello, I'm</p>
                <h1>Karthik Dokiparthi</h1>
                <h2>Full Stack Java Developer</h2>
                <p>Dedicated to developing high-performance and scalable web applications using Java, Spring Boot, React.js, and PostgreSQL. Skilled in crafting seamless user experiences and optimizing backend efficiency.</p>
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
