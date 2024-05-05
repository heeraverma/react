//import React from 'react';
import './header.css';
import React, { useState } from 'react';
import { Button } from '@mui/material';

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
                    <span className="brand-name-logo">MOMORIYAN</span>
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
                    {/* <li><Button href="#">Home</Button></li>
                    <li><Button href="#">About</Button></li>
                    <li><Button href="#">Services</Button></li>
                    <li><Button href="#">Contact</Button></li> */}
                </ul>
            </nav>
        </header>
    )
}

export default Header