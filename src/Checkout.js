import React from "react";
import { useStateValue } from "./StateProvider";
import ChcekoutProduct from "./CheckoutProduct";
import Subtotal from "./Subtotal";
import "./Checkout.css";

// This is the checkout component
function Checkout() {

  // Calling in the data layer/ global variable
  const [{ basket }] = useStateValue();

  return (
    <div className="checkout">
      <div className="checkout__left">

        {/* This is like the image of the add that you see on Amazon */}
        <img
          className="checkout__ad"
          src="https://images-na.ssl-images-amazon.com/images/G/02/UK_CCMP/TM/OCC_Amazon1._CB423492668_.jpg"
          alt=""
        />

        {/* If the length of the basket is 0 it displays basket is empty
          else it displays the Product which we have put in the 
          basket */}
        {basket?.length === 0 ? (
          <div>
            <h2>Your Shopping Basket is empty</h2>
            <p>
              You have no items in your basket. To buy one or more items, click
              "Add to Basket" next to the item.
            </p>
          </div>
        ) : (
          <div>
            <h2 className="checkout__title">Your Shopping Basket</h2>

            {/* List out all of the Checkout Products */}

            {/* Here we take the basket array and we map each value inside
              it and we send its value as parameters to CheckoutProduct
              Component */}
            {basket?.map((item) => (
              <ChcekoutProduct
                id={item.id}
                title={item.title}
                image={item.image}
                price={item.price}
                rating={item.rating}
              />
            ))}
          </div>
        )}
      </div>

      {/* If the length of the basket is greater than 0 then we display the
        Subtotal part on the rigth side in the checkout page */}
      {basket?.length > 0 && (
          <div className="checkout__right">
              <Subtotal />
          </div>
      )}
    </div>
  );
}

// Anything that we have to use outside of this file, we export it
export default Checkout;
