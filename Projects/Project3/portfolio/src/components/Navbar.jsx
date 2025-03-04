import React from 'react';
import "./Navbar.css";
import logo from '../assets/logoDesign.png';
import { Link } from 'react-router-dom';

function Navbar() {
    return (
        <nav className="navbar">
            <div className="navbar-container">
                <ul className="navbar-list">
                    <li className="navbar-logo">

                        <img src={logo} alt="Logo" className="logo" />
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
                        <a href="#contact" className="navbar-link">Contact</a>
                    </li>
                </ul>
            </div>
        </nav>
    );
}

export default Navbar;