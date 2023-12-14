import React from "react";
import logo from '../images/littleLemon.png';

const Nav = () => {
    return (
        <div className="Navbar col-9">
            <ul>
                <li><img src={logo}alt="Little-Lemon-Logo"></img></li>
                <li><a href="#home">Home</a></li>
                <li><a href="#about">About</a></li>
                <li><a href="#menu">Menu</a></li>
                <li><a href="#reservations">Resevations</a></li>
                <li><a href="#order-online">Order Online</a></li>
                <li><a href="#login">Login</a></li>
            </ul>
        </div>
    );

}

export default Nav;