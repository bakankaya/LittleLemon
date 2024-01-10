import React from "react";
import { Link } from "react-router-dom";
import logo from '../images/littleLemon.png';

const Nav = () => {
    return (
        <div className="Navbar">
            <ul>
                <li><Link to="/"><img src={logo}alt="Little-Lemon-Logo"></img></Link></li>
                <li><Link to="/">Home</Link></li>
                <li><a href="#about">About</a></li>
                <li><a href="#menu">Menu</a></li>
                <li><Link to="/booking">Resevations</Link></li>
                <li><a href="#order-online">Order Online</a></li>
                <li><a href="#login">Login</a></li>
            </ul>
        </div>
    );

}

export default Nav;