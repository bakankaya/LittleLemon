import React from "react";
import { useState } from "react";

const BookingForm = (props) =>{

    const [optional, setOptional] = useState("");
    const [occasion, setOccasion] = useState("");
    const [guests, setGuests] = useState("");
    const [date, setDate] = useState("");
    const [time, setTime] = useState("")

    const handleSumbit = (e) => {
        e.preventDefault();
        // props.submitForm(e);
    };

    const handleChange = (e) => {
        setDate(e);
        // props.dispatch(e);
    }

    return(
        <section>
            <div className="SubHeader">
                <h2>Reserve a Table</h2>
                <p>For more information please call us <br/> 0888-XXX-XXXX</p>
            </div>
            <div className="Form">
                <h3>Find a table for any occasion</h3>
                <form  onSubmit={handleSumbit}>
                    <label htmlFor="res-date">Date*</label>
                    <input
                        className="formItem"
                        type="date"
                        id="res-date"
                        required
                        value={date}
                        onChange={(e) => handleChange(e.target.value)}
                    />
                    <label htmlFor="res-time">Time*</label>
                    <select
                        className="formItem"
                        id="res-time"
                        required
                        value={time}
                        onChange={(e) => setTime(e.target.value)}
                    >
                        <option>17:00</option>
                        <option>18:00</option>
                        <option>19:00</option>
                        <option>20:00</option>
                        <option>21:00</option>
                        <option>22:00</option>
                    </select>
                    <label htmlFor="guests">Number of guests*</label>
                    <select
                        className="formItem"
                        id="guests"
                        required
                        value={guests}
                        onChange={(e) => setGuests(e.target.value)}
                    >
                        <option>1</option>
                        <option>2</option>
                        <option>3</option>
                        <option>4</option>
                        <option>5</option>
                        <option>5+</option>
                    </select>
                    <label htmlFor="occasion">Occasion</label>
                    <select
                        className="formItem"
                        id="occasion"
                        value={occasion}
                        onChange={(e) => setOccasion(e.target.value)}
                    >
                        <option>None</option>
                        <option>Birthday</option>
                        <option>Anniversary</option>
                        <option>Engagement</option>
                        <option>Business Meeting</option>
                    </select>
                    <label>Special Requests(optional)</label>
                    <input
                        className="formItem"
                        type="text-area"
                        value={optional}
                        onChange={(e) => setOptional(e.target.value)}
                    />
                    <input
                        className="Button"
                        type="submit"
                        value="Make Your reservation"
                    />
                </form>
            </div>
        </section>
    )
}

export default BookingForm;