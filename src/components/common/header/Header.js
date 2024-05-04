import React, { useState } from "react";
import { NavLink } from "react-router-dom";
import "./header.css";
import { nav } from "../../data/Data";

const Header = () => {
    const [navList, setNavList] = useState(false);
    const [showMessage, setShowMessage] = useState(false);

    // Function to handle the click event on the profile icon
    const handleProfileClick = () => {
        setShowMessage(true);
    };

    // Function to close the message
    const handleCloseMessage = () => {
        setShowMessage(false);
    };

    return (
        <header>
            <div className='container flex'>
                <div className='logo'>
                    <img src='https://img.freepik.com/premium-vector/agriculture-icon-logo-vector-design-template_827767-2376.jpg' alt='AgriTradeHub' />
                    {/* Add name next to the logo */}
                    <span className='logo-name'>AgriTradeHub</span>
                </div>
                {/* Search bar */}
                <div className='nav'>
                    <ul className={navList ? "small" : "flex"}>
                        {nav.map((list, index) => (
                            <li key={index}>
                                {/* Use NavLink instead of Link */}
                                <NavLink to={list.path} activeClassName="active">{list.text}</NavLink>
                            </li>
                        ))}
                    </ul>
                </div>
                <div className='user-profile'>
                    {/* Profile icon */}
                    <div className="profile-icon" onClick={handleProfileClick}>
                        <img src="https://www.pngitem.com/pimgs/m/78-786293_1240-x-1240-0-avatar-profile-icon-png.png" alt="Profile" />
                    </div>
                    <div className="login">
                        <NavLink to="/blog" activeClassName="active">Create Account</NavLink>
                    </div>
                </div>
            </div>
            {/* Conditional rendering for the message and buttons */}
            {showMessage && (
                <div className="popup-container">
                    <div className="message-container">
                        <p>Create your AgriTradeHub account</p>
                        <div className="buttons-container">
                            <NavLink to="/blog" className="login-button" onClick={handleCloseMessage}>Login</NavLink>
                            <NavLink to="/blog" className="signup-button" onClick={handleCloseMessage}>Sign up</NavLink>
                        </div>
                    </div>
                    <div className="overlay" onClick={handleCloseMessage}></div>
                </div>
            )}
        </header>
    );
};

export default Header;
