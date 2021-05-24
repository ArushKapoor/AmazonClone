import React, { useEffect } from "react";
import "./App.css";
import { BrowserRouter as Router, Switch, Route } from "react-router-dom";
import Header from "./Header";
import Home from "./Home";
import Checkout from "./Checkout";
import Login from "./Login";
import { useStateValue } from "./StateProvider";
import { auth } from "./firebase";
import Footer from "./Footer";

// Everthing in React is put in a components to make it easy to reuse
// the code.

// This is a function based component.
function App() {
  // Calling in the data layer/ global variable
  const [{ user }, dispatch] = useStateValue();

  // useEffect <<<<<<<< POWERFUL
  // Piece of code which runs based on a given condition...
  useEffect(() => {
    // We are attaching a listener to auth variable in firebase.js so that
    // it checks whether the user is signed in or not
    const unsubscribe = auth.onAuthStateChanged((authUser) => {
      if (authUser) {
        // the user is logged in...

        // dispatch is the action that we call to fire off items in or out
        // of the data layer.
        dispatch({
          type: "SET_USER",
          user: authUser,
        });
      } else {
        // the user is logged out...

        dispatch({
          type: "SET_USER",
          user: null,
        });
      }
    });

    // For if any reason it re-renders this component, it will attach a
    // another listener to it, which we dont want so if we put a cleanup
    // which first removes the listener before attaching a new one
    return () => {
      // Any cleanup go in here...
      unsubscribe();
    };
  }, []);

  console.log("USER IS >>> ", user);

  return (
    // Router component keeps the UI in sync with the URL
    <Router>
      <div className="app">
        {/* Switch component is similar to swtich case used in react 
          but here it uses Route instead of case */}
        <Switch>
          {/* Route component is where we define the url path */}
          <Route path="/checkout">
            {/* These components load the checkout page */}
            <Header />
            <Checkout />
          </Route>
          <Route path="/login">
            {/* This component load the login page */}
            <Login />
          </Route>
          {/* This is the default route */}
          <Route path="/">
            <Header />
            <Home />
            <Footer />
          </Route>
        </Switch>
      </div>
    </Router>
  );
}

// Anything that we have to use outside of this file, we export it
export default App;
