import React from "react";
import { Link } from "react-router-dom";
import pic1 from '../../images/restaurant.jpg';

const Main =()=>{
    return (
        <div className="Hero">
            <div className="Hero-info">
                <h1>Little Lemon</h1>
                <h3>Chicago</h3>
                <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.</p>
                <Link to="/booking"><button className="Button">Reserve a Table</button></Link>
            </div>
            <div>
                <img src={pic1} alt="Restourant Interior"></img>
            </div>
        </div>
    );
};

export default Main;