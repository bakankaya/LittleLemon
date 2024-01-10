import React from "react";

import testi1 from '../../images/testi1.jpg';
import testi2 from '../../images/testi2.jpg';
import testi3 from '../../images/testi3.jpg';
import testi4 from '../../images/testi4.jpg';
import rating from '../../images/rating.png';

const Main = () =>{
    return(
        <div className="Testimonials">
        <h2>Testimonials</h2>
            <div className="Testi-Carousel">
                <div className="Cardtest">
                    <h6>Rating</h6>
                    <div>
                        <img src={testi1} alt="customer"></img>
                        <h6>Name</h6>
                    </div>
                    <p>Review</p>
                </div>
                <div className="Cardtest">
                <h6>Rating</h6>
                    <div>
                        <img src={testi2} alt="customer"></img>
                        <h6>Name</h6>
                    </div>
                    <p>Review</p>
                </div>
                <div className="Cardtest">
                <h6>Rating</h6>
                    <div>
                        <img src={testi3} alt="customer"></img>
                        <h6>Name</h6>
                    </div>
                    <p>Review</p>
                </div>
                <div className="Cardtest">
                <h6>Rating</h6>
                    <div>
                        <img src={testi4} alt="customer"></img>
                        <h6>Name</h6>
                    </div>
                    <p>Review</p>
                </div>
            </div>
    </div>

    )
}

export default Main;