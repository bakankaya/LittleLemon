import React from "react";
import { useState } from "react";
import { Link } from "react-router-dom";
import logo from '../images/littleLemon.png';
import burgermenu from'../images/hamburger.png';

const Nav = () => {

    const [menuOpen, setMenuOpen] = useState(false);

    const toggleMenu = () => {
      setMenuOpen(!menuOpen);
    };

    return (
        <nav className="navbar">
            <Link to="/">
                <img className="navbar-logo"src={logo} alt="Little-Lemon-Logo"></img>
            </Link>
            <div className="burger-icon" onClick={toggleMenu}>
                <img src={burgermenu} alt="Navigation Bar" />
            </div>
            <ul>
                <li><Link to="/">Home</Link></li>
                <li><a href="#about">About</a></li>
                <li><a href="#menu">Menu</a></li>
                <li><Link to="/booking">Resevations</Link></li>
                <li><a href="#order-online">Order Online</a></li>
                <li><a href="#login">Login</a></li>
            </ul>
        </nav>
    );

}

export default Nav;