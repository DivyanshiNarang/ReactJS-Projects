import React from "react";
import Order from "./Order.jsx";

const Footer = () => {
    const hour = new Date().getHours();
    const openHour = 9;
    const closeHour = 22;
    const isOpen = hour >= openHour && hour <= closeHour;
    console.log(isOpen);

    // if (hour >= openHour && hour <= closeHour) {
    //   alert("We're currently open :)");
    // } else {
    //   alert("Sorry we're closed :(");
    // }

    // if we have to write component without JSX.
    // createElement('element', props, child element);
    // return React.createElement("footer", null, "We're currently open!");

    // with JSX

    // this conditional rendering with multiple returns is useful only when we need to return whole component instead of parts of JSX.
    // if (!isOpen)
    //   return (
    //     <p>
    //       We're happy to welcome you between {openHour}:00 PM and {closeHour}
    //       :00 PM
    //     </p>
    //   );

    return (
        <footer className="footer">
            {/* Conditional Rendering with && and short circuiting (React doesn't render true or false in DOM*/}
            {/* {isOpen && (
        <div className="order">
          <p>
            We're open till {closeHour}:00 PM. Come visit us or order online.
          </p>
          <button className="btn" onClick="">
            Order Now
          </button>
        </div>
      )} */}
            {/* Ternary operator */}
            {isOpen ? (
                //extracted JSX into Order component
                <Order closeHour={closeHour} openHour={openHour} />
            ) : (
                <p>
                    We're happy to welcome you between {openHour}:00 PM and {closeHour}
                    :00 PM
                </p>
            )}

            {/* {new Date().toLocaleTimeString()} we're open */}
        </footer>
    );
}

export default Footer