//import React from 'react';
import './header.css';
import React, { useState } from 'react';

const Header = () => {
    const [isOpen, setIsOpen] = useState(false);

    const toggleMenu = () => {
        setIsOpen(!isOpen);
    };
    return (
        <header>
            <nav className="navbar">
                <div className="logo">
                    <a href="#"><img src='./logo192.png' alt="Logo" /></a>
                </div>
                <div className={`hamburger ${isOpen ? 'open' : ''}`} onClick={toggleMenu}>
                    <div className="line"></div>
                    <div className="line"></div>
                    <div className="line"></div>
                </div>
                <ul className={`nav-links ${isOpen ? 'open' : ''}`}>
                    <li><a href="#">Home</a></li>
                    <li><a href="#">About</a></li>
                    <li><a href="#">Services</a></li>
                    <li><a href="#">Contact</a></li>
                </ul>
            </nav>
        </header>
    )
}

export default Header