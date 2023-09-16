//this file needs to be called index.js because module bundler(webpack)
//in project expects the entry point to be called index.js

import React from "react";
// import ReactDOM from "react-dom";  //React v17
import ReactDOM from "react-dom/client";
import "./index.css";

const pizzaData = [
  {
    name: "Focaccia",
    ingredients: "Bread with italian olive oil and rosemary",
    price: 6,
    photoName: "pizzas/focaccia.jpg",
    soldOut: false,
  },
  {
    name: "Pizza Margherita",
    ingredients: "Tomato and mozarella",
    price: 10,
    photoName: "pizzas/margherita.jpg",
    soldOut: false,
  },
  {
    name: "Pizza Spinaci",
    ingredients: "Tomato, mozarella, spinach, and ricotta cheese",
    price: 12,
    photoName: "pizzas/spinaci.jpg",
    soldOut: false,
  },
  {
    name: "Pizza Funghi",
    ingredients: "Tomato, mozarella, mushrooms, and onion",
    price: 12,
    photoName: "pizzas/funghi.jpg",
    soldOut: false,
  },
  {
    name: "Pizza Salamino",
    ingredients: "Tomato, mozarella, and pepperoni",
    price: 15,
    photoName: "pizzas/salamino.jpg",
    soldOut: true,
  },
  {
    name: "Pizza Prosciutto",
    ingredients: "Tomato, mozarella, ham, aragula, and burrata cheese",
    price: 18,
    photoName: "pizzas/prosciutto.jpg",
    soldOut: false,
  },
];

function App() {
  return (
    <div className="container">
      <Header />
      <Menu />
      <Footer />
    </div>
  );
}

function Header() {
  // const style = { color: "red", fontSize: "48px", textTransform: "uppercase" };
  const style = {};
  return (
    <header className="header">
      <h1 style={style}>Fast React Pizza Co.</h1>
    </header>
  );
}

function Menu() {
  const pizzas = pizzaData;
  // const pizzas = [];
  // if we have an empty array then it won't show any pizza and will have empty list but ul list will render, so we need to check the length of the array
  const numPizzas = pizzas.length;
  return (
    <main className="menu">
      <h2>Our menu</h2>

      {/* why can't we use if-else statement here, in this JS mode we can't use any JS but we can write something which prodcues value */}
      {numPizzas > 0 ? (
        <>
          <p>
            Authentic Italian cuisine. 6 creative dishes to choose from. All
            from our stone oven, all organic, all delicious.
          </p>
          <ul className="pizzas">
            {pizzaData.map((pizza) => (
              <Pizza pizzaObj={pizza} key={pizza.name} />
            ))}
          </ul>
        </>
      ) : (
        <p>We're still working on our menu. Please come back later:)</p>
      )}
      {/* conditional rendering not only works for true or false, it works for truthy and falsy values
      but React renders numbers and in this case if array is empty it will show 0 that's why we should never use numbers in conditinal rendering that is why sometimes it is not recommended to use instead use ternary operator*/}
      {/* {numPizzas > 0 && (
        <ul className="pizzas">
          {pizzaData.map((pizza) => (
            <Pizza pizzaObj={pizza} key={pizza.name} />
          ))}
        </ul>
      )} */}

      {/* 3. 
      <ul className="pizzas">
           we could have used forEach method but it won't work as we need some JSX inside the ul, and we can get the JSX only by creating new array which map method does
           whenever we render data we should give specific unique key  
          {pizzaData.map((pizza) => (
            <Pizza pizzaObj={pizza} key={pizza.name} />
          ))}
        </ul>  */}

      {/* 2.we don't do like this usually we pass in the entire object into the more specific component and take the information we want out of the object.
       <div>
        {pizzaData.map((pizza) => (
          <Pizza
            name={pizza.name}
            ingredients={pizza.ingredients}
            price={pizza.price}
            photoName={pizza.photoName}
          />
        ))}
      </div> */}

      {/*1. <Pizza
        name="Pizza Spinaci"
        ingredients="Tomato, mozarella, spinach, and ricotta cheese"
        photoName="pizzas/spinaci.jpg"
        price={10}
      /> */}
    </main>
  );
}

// destrcturing props
function Pizza({ pizzaObj }) {
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

function Footer() {
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

function Order({ closeHour, openHour }) {
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

// Rendering the DOM in React v18
const root = ReactDOM.createRoot(document.getElementById("root"));
root.render(
  // StrictMode: during development render the components twice in order to find bugs or to check if we are using outdated versions of React api
  <React.StrictMode>
    <App />
  </React.StrictMode>
);

// Before React v18
// ReactDOM.render(<App />, document.getElementById("root"));
