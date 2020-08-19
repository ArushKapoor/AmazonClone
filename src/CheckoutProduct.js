import React from "react";
import "./CheckoutProduct.css";
import { useStateValue } from "./StateProvider";

// This is the CheckoutProduct component which takes in arguments of the
// product and displays on the screen
function CheckoutProduct({ id, title, image, price, rating }) {

    // Setting up the data layer/ global variable
    const [{basket}, dipsatch] = useStateValue();

    // Creating a function which will remove items from the basket
    const removeFromBasket = () => {
        // remove item from basket...

        // dispatch is the action that we call to fire off items in or out of
        // the data layer.
        dipsatch({
            type: "REMOVE_FROM_BASKET",
            id: id,
        });
    }

  return <div className="checkoutProduct">
      {/* We are taking the values which we passed to the component and
        displaying it in on the website */}
      <img className="checkoutProduct__image" src={image} alt=""/>

      <div className="checkoutProduct__info">
          <p className="checkoutProduct__title">{title}</p>

          <p className="checkoutProduct__price">
          <small>₹</small>

          {/* This toFixed function is so that the price displayed does
            not have more than 2 decimal places */}
          <strong>{price.toFixed(2)}</strong>
        </p>

        <div className="checkoutProduct__rating">

          {/* Creating an array of size rating, then filling it with 
            empty values, then we map through each value and display 
            a ⭐ on the screen */}
          {Array(rating)
            .fill()
            .map((_) => (
              <p>⭐</p>
            ))}
        </div>

        {/* This button will call the removeFromBasket function which is
          at the top when clicked */}
        <button onClick={removeFromBasket}>Remove from Basket</button>
      </div>
  </div>;
}

// Anything that we have to use outside of this file, we export it
export default CheckoutProduct;
