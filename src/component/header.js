import React from 'react';
import { NavLink } from 'react-router-dom';
import './button.css';
import './navbar.css';

function Header() {
    return (
        <nav className="navbar">
            <div className="logo-navbar">Create ur <span className="span-logo">Website</span></div>
            <div className="navbar-link">
                <div className="nav-link"><NavLink to="/" activeClassName="active" >Home</NavLink></div>
                <div className="nav-link"><NavLink to="/about" activeClassName="active">About</NavLink></div>
                <div className="nav-link"><NavLink to="/contact" activeClassName="active">Contact</NavLink></div>
            </div>
            <div className="work-button"><a href="https://www.instagram.com/zakyirsyaad/" target="_blank">
                <button className="hover">
                    Found Me
                </button></a>
            </div>
        </nav>
    );
}

export default Header