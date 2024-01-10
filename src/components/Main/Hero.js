import React from "react";
import pic1 from '../../images/restaurant.jpg';

const Main =()=>{
    return (
        <div className="Hero">
            <div className="Hero-info">
                <h1>Little Lemon</h1>
                <h6>Chicago</h6>
                <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.</p>
                <button className="Button">Reserve a Table</button>
            </div>
            <div>
                <img src={pic1} alt="Restourant Interior"></img>
            </div>
        </div>
    );
};

export default Main;