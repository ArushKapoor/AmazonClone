import React,{useState} from "react";
import "./Header.css";
import { Link } from "react-router-dom";
import SearchIcon from "@material-ui/icons/Search";
import ShoppingBasketIcon from "@material-ui/icons/ShoppingBasket";
import { useStateValue } from "./StateProvider";
import { auth } from "./firebase";
import { CallMerge } from "@material-ui/icons";
import amazon from "./resources/amazon.jpg"

// This is the header component
function Header() {

  // Getting the data layer/ global variable
  const [{ basket, user }] = useStateValue();
  const [isOpen, toggle] = useState(true)

  const toggleSidebar = () => {
    toggle((isOpen) => !isOpen)
  }

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
    <>
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
<nav className="text-white px-3" style={{"background-color": "#232F3E", "height": "auto"}}>
 <div className="d-flex flex-column flex-sm-column flex-md-column flex-lg-row align-items-center justify-content-between" >
 <div className="d-flex flex-column flex-sm-column flex-md-column flex-lg-row align-items-stretch justify-content-stretch justify-content-sm-stretch justify-content-lg-start w-100">
 <button className="ms-3 btn btn-secondary fw-bold" onClick={toggleSidebar} style={{"text-decoration": "none"}}><a className="bi text-decoration-none btn-outline-secondary text-white bi-list " style={{"font-size": "14px"}}> All</a></button>
  <a href="#bestSeller" className="ms-3 text-decoration-none btn btn-outline-light" style={{"font-size": "14px"}}>Best Seller</a>
  <a href="#mobile" className="ms-3 text-decoration-none btn btn-outline-light" style={{"font-size": "14px"}}>Mobiles</a>
  <a href="#fashion" className="ms-3 text-decoration-none btn btn-outline-light" style={{"font-size": "14px"}}>Fashion</a>
  <a href="#laptop" className="ms-3 text-decoration-none btn btn-outline-light" style={{"font-size": "14px"}}>Laptops</a>
  <a href="#customerservice" className="ms-3 text-decoration-none btn btn-outline-light" style={{"font-size": "14px"}}>Customer Service</a>
 </div>
 <img src={amazon} className="d-md-none d-none d-sm-none d-lg-flex" />
 </div>
</nav>
<div className="h-100 position-fixed bg-dark text-white top-0 bottom-0 start-0 overflow-scroll" style={{"z-index": "10000", "width" : isOpen ? "0px" : "25rem", transition : "0.3s ease-in-out"}}>
  <div className="d-flex align-items-center justify-content-between bg-dark py-3 px-4">
      <div className="d-flex align-items-center justify-content-center">
      <i class="bi bi-person-circle fs-3"></i>
      <p className="ms-3 p-0 m-0 fs-3">Hello, Customer</p>
      </div>
      <div>
        <button className="btn btn-secondary rounded-circle" onClick={toggleSidebar}><i class="bi bi-x"></i></button>
      </div>
  </div>
  <ul className="list-unstyled bg-white text-dark py-4 px-4 m-0">
    <li><h4>Trending</h4></li>
    <li className="py-3">Best Sellers</li>
    <li className="py-3">New Releases</li>
    <li className="py-3">Movers and Shakers</li>
  </ul>
  <hr className="m-0" style={{"height" : "1px", "color" : "black"}} />
  <ul className="list-unstyled bg-white text-dark py-4 px-4 m-0">
    <li><h4>Digital Content and Devices</h4></li>
    <li className="py-3">Echo & Alexa</li>
    <li className="py-3">Fire TV</li>
    <li className="py-3">Kindle E-Readers & e-books</li>
    <li className="py-3">Audible Audiobooks</li>
    <li className="py-3">Amazon Prime Video</li>
    <li className="py-3">Amazon Prime Music</li>
  </ul>
  <hr className="m-0" style={{"height" : "1px", "color" : "black"}} />
  <ul className="list-unstyled bg-white text-dark py-4 px-4 m-0">
    <li><h4>Shop By Department</h4></li>
    <li className="py-3">Mobiles, Computers</li>
    <li className="py-3">TV, Appliances, Electronics</li>
    <li className="py-3">Men's Fashion</li>
    <li className="py-3">Women's Fashion</li>
  </ul>
  <hr className="m-0" style={{"height" : "1px", "color" : "black"}} />
  <ul className="list-unstyled bg-white text-dark py-4 px-4 m-0">
    <li><h4>Programs & Features</h4></li>
    <li className="py-3">Gift Cards & Mobile Recharges</li>
    <li className="py-3">Flight Tickets</li>
    <li className="py-3">#FoundItOnAmazon</li>
    <li className="py-3">Amazon Assistant</li>
    <li className="py-3">Full Store Directory</li>
  </ul>
  <hr className="m-0" style={{"height" : "1px", "color" : "black"}} />
  <ul className="list-unstyled bg-white text-dark py-4 px-4 m-0">
    <li><h4>Help & Settings</h4></li>
    <li className="py-3">Your Account</li>
    <li className="py-3">Customer Service</li>
    <li className="py-3">Sign In</li>
  </ul>
</div>
<div className={`position-fixed top-0 start-0 end-0 bottom-0 ${!isOpen ? "": "d-none"}`} style={{backgroundColor: "rgba(0,0,0,0.9)", "z-index": "9999"}}></div>
    </>
  );
}

// Anything that we have to use outside of this file, we export it
export default Header;