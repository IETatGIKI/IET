import React, { useState } from 'react';
import '../Components/Navbar.css';
import image from '../assets/png-clipart-red-gear-mechanism-illustration-gear-gold-icon-red-tech-gear-electronics-decorative-removebg-preview.png';

const Navbar = () => {
    const [active, setActive] = useState(null); // Changed to null to indicate no active item by default

    // Handler to set active item based on index
    const handleSetActive = (index) => {
        setActive(index);
    };

    return (
        <div>
            <nav className="navbar navbar-expand-lg navbar-dark fixed-top d-flex">
                <div>
                    <a className="navbar-brand" href="./Aboutus.jsx">
                        <img className='logo' src={image} alt="Logo" />
                    </a>
                </div>
                <button 
                    className="navbar-toggler" 
                    type="button" 
                    data-toggle="collapse" 
                    data-target="#navbarNav" 
                    aria-controls="navbarNav" 
                    aria-expanded="false" 
                    aria-label="Toggle navigation"
                >
                    <span className="navbar-toggler-icon"></span>
                </button>
                <div className="collapse bg-purp navbar-collapse p-2 m-5" id="navbarNav">
                    <ul className="navbar-nav links">
                        <li 
                            className={`nav-item ${active === 0 ? ' active ' : ''}`} 
                            onClick={() => handleSetActive(0)} // Updated event handler
                        >
                            <a className={`nav-link  ${active=== 0 ?'  ':''}`} href="./Aboutus.jsx">About Us </a>
                        </li>
                        <li 
                            className={`nav-item ${active === 1 ? 'active' : ''}`} 
                            onClick={() => handleSetActive(1)} // Updated event handler
                        >
                            <a className="nav-link" href="./OurMission.jsx">Our Mission</a>
                        </li>
                        <li 
                            className={`nav-item ${active === 2 ? 'active' : ''}`} 
                            onClick={() => handleSetActive(2)} // Updated event handler
                        >
                            <a className="nav-link" href="#">Our Vision</a>
                        </li>
                        <li 
                            className={`nav-item ${active === 3 ? 'active' : ''}`} 
                            onClick={() => handleSetActive(3)} // Updated event handler
                        >
                            <a className="nav-link" href="#">Our Events</a>
                        </li>
                        <li 
                            className={`nav-item ${active === 4 ? 'active' : ''}`} 
                            onClick={() => handleSetActive(4)} // Updated event handler
                        >
                            <a className="nav-link" href="#">Social</a>
                        </li>
                    </ul>
                </div>
            </nav>
        </div>
    );
};

export default Navbar;
