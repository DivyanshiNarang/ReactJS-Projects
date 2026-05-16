import React from "react";

const Order = ({ closeHour, openHour }) => {
    return (
        <div className="order">
            <p>
                We're open from {openHour}:00 to {closeHour}:00 PM. Come visit us or
                order online.
            </p>
            <button className="btn" onClick="">
                Order Now
            </button>
        </div>
    );
}

export default Order;