import React from "react";
import logo from '../images/littleLemon.png';

const Nav = () => {
    return (
        <ul>
        <img src={logo}alt="Little-Lemon-Logo"></img>
        <li><a href="#home">Home</a></li>
        <li><a href="#about">About</a></li>
        <li><a href="#menu">Menu</a></li>
        <li><a href="#reservations">Resevations</a></li>
        <li><a href="#order-online">Order Online</a></li>
        <li><a href="#login">Login</a></li>
        </ul>
    );

}

export default Nav;