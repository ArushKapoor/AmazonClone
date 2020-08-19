import React from "react";
import CurrencyFormat from "react-currency-format";
import "./Subtotal.css";
import { useStateValue } from "./StateProvider";
import { getBasketTotal } from "./reducer";

// This is the subtotal component which displays the total price with other
// stuff on the right side of the checkout page
function Subtotal() {

  // Calling in the data layer/ global variable
  const [{ basket }, dispatch] = useStateValue();

  return (
    <div className="subtotal">
      {/* Price */}

      {/* We are importing a special component from the react libraries
        which helps to display currency in a better format like
        separating thousand with commas */}
      <CurrencyFormat
        renderText={(value) => (
          <>
            <p>
              Subtotal ({basket.length} items): <strong>{` ${value} `}</strong>
            </p>
            <small className="subtotal__gift">
              <input type="checkbox" /> This order contains a gift
            </small>
          </>
        )}
        decimalScale={2}
        value={getBasketTotal(basket)}
        displayType={"text"}
        thousandSeparator={true}
        prefix={"₹"}
      />

      {/* This button curretnly does nothing, in theory the user will
        click this button will be redirected to the payment gateways */}
      <button className="subtotal__button">Proceed to Checkout</button>
    </div>
  );
}

// Anything that we have to use outside of this file, we export it
export default Subtotal;
