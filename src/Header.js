import React from "react";
import "./Header.css";
import { Link } from "react-router-dom";
import SearchIcon from "@material-ui/icons/Search";
import ShoppingBasketIcon from "@material-ui/icons/ShoppingBasket";
import { useStateValue } from "./StateProvider";
import { auth } from "./firebase";

// This is the header component
function Header() {

  // Getting the data layer/ global variable
  const [{ basket, user }] = useStateValue();

  // Function to check if there is a user or not
  const login = () => {

    // Checks if the user variable is not null, if its true we sign out
    if (user) {

      // We call the signOut function of the auth variable which firebase
      // provides us
      auth.signOut();
    }
  };

  return (
    <nav className="header">

      {/* Link is similar to href but there is no need to reload */}
      <Link to="/">

        {/* This is the amazon logo */}
        <img
          className="header__logo"
          src="http://pngimg.com/uploads/amazon/amazon_PNG11.png"
          alt=""
        />
      </Link>

      <div className="header__search">

        {/* Adds the search bar which currently does nothing */}
        <input type="text" className="header__searchInput" />

        {/* Adds the search icon beside the search bar */}
        <SearchIcon className="header__searchIcon" />
      </div>

      <div className="header__nav">

        {/* Here if there is no user, only then the page will redirect
          to login page if clicked */}
        <Link to={!user && "/login"} className="header__link">

          {/* If the user clicks, it calls the login fucntion at the top */}
          <div onClick={login} className="header__option">

            {/* If we have the user, then it will display its email */}
            <span className="header__optionLineOne">Hello {user?.email}</span>

            {/* If we have a user it will show Sign Out else Sign In */}
            <span className="header__optionLineTwo">
              {user ? "Sign Out" : "Sign In"}
            </span>
          </div>
        </Link>

        {/* Link will take the user to Homepage */}
        <Link to="/" className="header__link">
          <div className="header__option">
            <span className="header__optionLineOne">Returns</span>
            <span className="header__optionLineTwo">& Orders</span>
          </div>
        </Link>

        {/* Link will take the user to Homepage */}
        <Link to="/" className="header__link">
          <div className="header__option">
            <span className="header__optionLineOne">Your</span>
            <span className="header__optionLineTwo">Prime</span>
          </div>
        </Link>

        {/* Link will take the user to checkout page */}
        <Link to="/checkout" className="header__link">
          <div className="header__optionBasket">
            
            {/* Adds a shopping basket icon on the header */}
            <ShoppingBasketIcon />

            {/* We display the number of items in the basket by displaying
              its size */}
            <span className="header__optionLineTwo header__basketCount">
              {basket?.length}
            </span>
          </div>
        </Link>
      </div>
    </nav>
  );
}

// Anything that we have to use outside of this file, we export it
export default Header;
