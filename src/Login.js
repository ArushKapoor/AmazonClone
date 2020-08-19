import React, { useState } from "react";
import { Link, useHistory } from "react-router-dom";
import { auth } from "./firebase";
import "./Login.css";

// This is the login component
function Login() {

    // We are creating history variable which will keep track of user
    // history so that we can use it when we redirect the user after
    // they have logged in
    const history = useHistory();

    // Setting up the email and password variable
    const [email, setEmail] = useState("");
    const [password, setPassword] = useState("");

  const login = (event) => {
    event.preventDefault(); // this stops the refresh
    // do the login logic...

    // This function checks if the email and password match with the
    // database and then logs in the user
    auth.signInWithEmailAndPassword(email, password)
    .then((auth) => {
        // logged in, redirect to homepage...
        history.push("/");
    })
    .catch(e => alert(e.message));
  };

  const register = (event) => {
    event.preventDefault(); // this stops the refresh
    // do the register logic...

    // This function checks if the email and password which is entered by
    // the user are valid or not and if they are it stores it in the
    // database
    auth.createUserWithEmailAndPassword(email, password)
    .then(auth => {
        // created a user and logged in, redirect to homepage...
        history.push("/");
    })
    .catch((e) => alert(e.message));
  };

  return (
    <div className="login">
      {/* Link is similar to href but there is no need to reload */}
      <Link to="/">

        {/* This is the image for the amazon logo */}
        <img
          className="login__logo"
          src="https://upload.wikimedia.org/wikipedia/commons/thumb/a/a9/Amazon_logo.svg/1024px-Amazon_logo.svg.png"
          alt=""
        />
      </Link>

      <div className="login__container">
        {/* Setting up the sign in page */}
        <h1>Sign in</h1>
        <form>
          <h5>E-mail</h5>

          {/* We are listening to when the input is changed to set the value as email as it changes
            and finally when the submit button is clicked we set the input value as email */}
          <input value={email} onChange={event => setEmail(event.target.value)} type="email" />
          <h5>Password</h5>

          {/* We are listening to when the input is changed to set the value as password as it changes
            and finally when the submit button is clicked we set the input value as password */}
          <input value={password} onChange={event => setPassword(event.target.value)} type="password" />
          
           {/* When the button is clicked it will call the login function which is at the top */}
          <button onClick={login} type="submit" className="login__signInButton">
            Sign In
          </button>
        </form>
        <p>
          By signing-in you agree to Amazon's Conditions of Use & Sale. Please
          see our Privacy Notice, our Cookies Notice and our Interest-Based Ads
          Notice
        </p>

        {/* When the button is clicked it will call the register function which is at the top */}
        <button onClick={register} className="login__registerButton">
          Create your Amazon Account
        </button>
      </div>
    </div>
  );
}

// Anything that we have to use outside of this file, we export it
export default Login;
