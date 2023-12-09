import React from "react";
import logo2 from '../images/littleLemon2.png';

const Footer = () => {
    return (
        <>
        <img src={logo2}alt="Little-Lemon-Logo"></img>
        <ul>
            <li>Doormat Navigation
                <ul>
                    <li><a href="#home">Home</a></li>
                    <li><a href="#about">About</a></li>
                    <li><a href="#menu">Menu</a></li>
                    <li><a href="#reservations">Resevations</a></li>
                    <li><a href="#order-online">Order Online</a></li>
                    <li><a href="#login">Login</a></li>
                </ul>
            </li>
            <li>Contact
            <ul>
                <li>Adress</li>
                <li>phone number</li>
                <li>email</li>
            </ul>
            </li>
            <li>Social Media Links
            <ul>
                <li>Adress</li>
                <li>phone number</li>
                <li>email</li>
            </ul>
            </li>
        </ul>
        </>
    );

}

export default Footer;