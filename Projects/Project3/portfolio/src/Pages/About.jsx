import React from 'react';
import './About.css';
import portfolioImage from '../assets/portfolioImage.jpg';

const About = () => {
    return (
        <div className="about-container" id='about'>
            <div className="about-image">
                <img
                    src={portfolioImage}
                    alt="Karthik Dokiparthi"
                    className="profile-image"
                />
            </div>

            <div className="about-details">
                <h1>About Me</h1>
                <p>
                    Hi, I'm Karthik Dokiparthi, a passionate Full Stack Java Developer with hands-on experience in building dynamic web applications using React, Java, and Spring Boot. I have a strong grasp of Core and Advanced Java, along with expertise in database management using PostgreSQL and MySQL. My skill set spans both frontend and backend development, with a focus on creating efficient and scalable software solutions.
                </p>
                <p>
                    When I'm not coding, I enjoy exploring new technologies, working on personal projects, and enhancing my skills through certifications. I'm always open to collaborations, so feel free to reach out and connect!
                </p>
                <button className="contact-button">Contact Me</button>
            </div>
        </div>
    );
};

export default About;