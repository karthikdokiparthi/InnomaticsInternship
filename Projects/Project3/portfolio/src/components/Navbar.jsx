import React from 'react';
import "./Navbar.css";
import logo from '../assets/logoDesign.png';
import GitButton from '../Buttons/GitButton';
import LinkedInButton from '../Buttons/LinkedInButton';

function Navbar() {
    return (
        <nav className="navbar">
            <div className="navbar-container">
                <ul className="navbar-list">
                    <li className="navbar-logo">
                        <a href="/"><img src={logo} alt="Logo" className="logo" /></a>
                    </li>
                    <li className="navbar-item">
                        <a href="/" className="navbar-link">Home</a>
                    </li>
                    <li className="navbar-item">
                        <a href="#projects" className="navbar-link">Projects</a>
                    </li>
                    <li className="navbar-item">
                        <a href="#" className="navbar-link">Experiences</a>
                    </li>
                    <li className="navbar-item">
                        <a href="#about" className="navbar-link">About</a>
                    </li>
                    <li className="navbar-item">
                        <a href="#contactpage" className="navbar-link">Contact</a>
                    </li>
                    <li>
                        <GitButton />
                    </li>
                    <li>
                        <LinkedInButton />
                    </li>
                </ul>
            </div>
        </nav>
    );
}

export default Navbar;