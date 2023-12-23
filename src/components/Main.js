import React from "react";
import pic1 from '../images/Slice 4.png';

const Main = () => {
    return (
        <>
            <div className="Hero col-9">
                <div>
                    <h1>Little Lemon</h1>
                    <h6>Chicago</h6>
                    <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.</p>
                    <button className="Button">Reserve a Table</button>
                </div>
                <div>
                    <img src={pic1} alt="Slicing Lemon"></img>
                </div>
            </div>
            <div className="Highlights col-9">
                <h2>Specials</h2>
                <button className="Button">Online Menu</button>
                <div className="Card"></div>
                <div className="Card"></div>
                <div className="Card"></div>
            </div>
            <div className="Testimonials col-9">
                <div className="Cardtest"></div>
                <div className="Cardtest"></div>
                <div className="Cardtest"></div>
                <div className="Cardtest"></div>
            </div>
            <div className="About col-9">
                <div>
                    <h1>Little Lemon</h1>
                    <h6>Chicago</h6>
                    <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.</p>
                    <button className="Button">Reserve a Table</button>
                </div>
                <div>
                    <img></img>
                    <img></img>
                </div>
            </div>
        </>
    );
}

export default Main;