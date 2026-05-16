import React from "react";

// destrcturing props
const Pizza = ({ pizzaObj }) => {
    // if (pizzaObj.soldOut) return null;
    return (
        <li className={`pizza ${pizzaObj.soldOut ? "sold-out" : ""}`}>
            {/* in 3. we need to change the name of props to props.pizzaObj.photoName */}
            <img src={pizzaObj.photoName} alt={pizzaObj.name} />
            <div className="">
                <h3>{pizzaObj.name}</h3>
                <p>{pizzaObj.ingredients}</p>
                {/* {pizzaObj.soldOut ? (
          <span>"SOLD OUT"</span>
        ) : (
          <span>pizzaObj.price + 3</span>
        )} */}
                {/* or */}
                <span>{pizzaObj.soldOut ? "SOLD OUT" : pizzaObj.price + 3}</span>
            </div>
        </li>
    );
}
// function Pizza(props) {
//   if (props.pizzaObj.soldOut) return null;
//   return (
//     <li className="pizza">
//       {/* in 3. we need to change the name of props to props.pizzaObj.photoName */}
//       <img src={props.pizzaObj.photoName} alt={props.pizzaObj.name} />
//       <div className="">
//         <h3>{props.pizzaObj.name}</h3>
//         <p>{props.pizzaObj.ingredients}</p>
//         <span>{props.pizzaObj.price + 3}</span>
//       </div>
//     </li>
//   );
// }

export default Pizza;