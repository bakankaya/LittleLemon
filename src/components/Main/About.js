import React from "react";
import about1 from "../../images/about1.png";
import about2 from "../../images/about2.jpg";

const Main = () => {
    return(
    <div className="About">
        <div className="About-info">
            <h2>Little Lemon</h2>
            <h3>Chicago</h3>
            <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.</p>
            <button className="Button">Reserve a Table</button>
        </div>
        <div className="DoubleImage">
            <img className="about1" src={about1}></img>
            <img className="about2" src={about2}></img>
        </div>
    </div>
    )
}

export default Main;