import React from "react";
import "./Product.css";
import { useStateValue } from "./StateProvider";

// This is the Product component which is taking some arguments
function Product({ id, title, image, price, rating }) {

  // Setting up the data layer/ global variable
  const [{}, dispatch] = useStateValue();

// This function adds the product in the basket global variable
  const addToBasket = () => {
  // Add item to basket...

  // dispatch is the action that we call to fire off items in or out of
  // the data layer.
  dispatch({
    type: "ADD_TO_BASKET", 
    item: {
      id: id,
      title: title,
      image: image,
      price: price,
      rating: rating,
    }
  })
}
  return (
    <div className="product">

      {/* Setting up things that needs to be in a product */}
      <div className="product__info">
        <p>{title}</p>
        <p className="product__price">
          <small>₹</small>
          <strong>{price.toFixed(2)}</strong>
        </p>
        <div className="product__rating">

          {/* Creating an array of size rating, then filling it with 
            empty values, then we map through each value and display 
            a ⭐ on the screen */}
          {Array(rating)
            .fill()
            .map((_) => (
              <p>⭐</p>
            ))}
        </div>
      </div>
      
      <img src={image} alt="" />

      {/* When the user clicks on the button, calls addToBasket function */}
      <button onClick={addToBasket}>Add to basket</button>
    </div>
  );
}

// Anything that we have to use outside of this file, we export it
export default Product;
