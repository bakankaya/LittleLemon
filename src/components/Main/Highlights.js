import React from "react";
import pic2 from '../../images/greekSalad.jpg';
import pic3 from '../../images/bruschetta.jpg';
import pic4 from '../../images/lemonDessert.jpg';

const Main = () =>{
    return(
        <>
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
    </>
    )
}

export default Main;