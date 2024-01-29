import React from "react";
import logo2 from '../images/littleLemon2.png';

const Footer = () => {
    return (
        <div className="Footer">
            <img src={logo2}alt="Little-Lemon-Logo"></img>
            <ul>Doormat <br></br> Navigation
                <li><a href="#home">Home</a></li>
                <li><a href="#about">About</a></li>
                <li><a href="#menu">Menu</a></li>
                <li><a href="#reservations">Resevations</a></li>
                <li><a href="#order-online">Order Online</a></li>
                <li><a href="#login">Login</a></li>
            </ul>
            <ul>Contact
                <li>Adress</li>
                <li>phone number</li>
                <li>email</li>
            </ul>
            <ul>Social Media Links
                <li><a href="/">Facebook</a></li>
                <li><a href="/">Twitter</a></li>
                <li><a href="/">Instagram</a></li>
            </ul>
        </div>
    );

}

export default Footer;