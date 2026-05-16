import React from 'react';
import { pizzaData } from '../assets/data.js';
import Pizza from './Pizza.jsx'

const Menu = () => {
  const pizzas = pizzaData;
  // const pizzas = [];
  // if we have an empty array then it won't show any pizza and will have empty list but ul list will render, so we need to check the length of the array
  const numPizzas = pizzas.length;
  return (
    <main className="menu">
      <h2>Our menu</h2>

      {/* why can't we use if-else statement here, in this JS mode we can't use any JS but we can write something which produces value */}
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

export default Menu
