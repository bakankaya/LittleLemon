import React from "react";
import pic1 from '../images/restaurant.jpg';
import pic2 from '../images/greekSalad.jpg';
import pic3 from '../images/bruschetta.jpg';
import pic4 from '../images/lemonDessert.jpg';
import testi1 from '../images/testi1.jpg';
import testi2 from '../images/testi2.jpg';
import testi3 from '../images/testi3.jpg';
import testi4 from '../images/testi4.jpg';
import rating from '../images/rating.png';


const Main = () => {
    return (
        <>
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
            <div className="Highlights">
                <div className="Highlights-Header">
                    <h2>Specials</h2>
                    <button className="Button">Online Menu</button>
                </div>
                <div className="Highlights-Cards">
                    <div className="Card">
                        <img src={pic2} alt="Greek Salad"></img>
                        <div className="Highlights-Header">
                            <h4>Greek salad</h4>
                            <h4>$12.99</h4>
                        </div>
                        <p>The famous greek salad of crispy lettuce, peppers, olives and our Chicago style feta cheese, garnished with crunchy garlic and rosemary croutons. </p>
                        <button>Order a Delivery</button>
                    </div>
                    <div className="Card">
                        <img src={pic3} alt="Bruschetta"></img>
                        <h4>Bruschetta</h4>
                        <h4>$5.99</h4>
                        <p>Our Bruschetta is made from grilled bread that has been smeared with garlic and seasoned with salt and olive oil. </p>
                        <button>Order a Delivery</button>
                    </div>
                    <div className="Card">
                        <img src={pic4} alt="Lemon Dessert"></img>
                        <h4>Lemon Dessert</h4>
                        <h4>$5.00</h4>
                        <p>This comes straight from grandma’s recipe book, every last ingredient has been sourced and is as authentic as can be imagined.</p>
                        <button>Order a Delivery</button>
                    </div>
                </div>
            </div>
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
            <div className="About">
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