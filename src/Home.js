import React from "react";
import Product from "./Product";
import "./Home.css";

// This is the home page component
function Home() {
  return (
    <div className="home">

      {/* This is the img on the background */}
      <img
        className="home__image"
        src="https://images-eu.ssl-images-amazon.com/images/G/02/digital/video/merch2016/Hero/Covid19/Generic/GWBleedingHero_ENG_COVIDUPDATE__XSite_1500x600_PV_en-GB._CB428684220_.jpg"
        alt=""
      />

      {/* Product component -> id, title, price, rating, image is what 
        we are passing as parameters */}
      <div className="home__row">
        {/* Putting in dummy products from the amazon website */}
        <Product
          id="1"
          title="Why Not Me?: A feeling of Millions (Hinglish Edition) Kindle Edition"
          price={99.0}
          rating={5}
          image="https://www.amazon.in/images/I/51LntLUe4nL.jpg"
        />

        <Product
          id="2"
          title="Do It Today: Overcome Procrastination, Improve Productivity, and Achieve More Meaningful Things Kindle Edition"
          price={99.0}
          rating={4}
          image="https://www.amazon.in/images/I/41-G7AIOZyL.jpg"
        />
      </div>

      <div className="home__row">
        <Product
          id="3"
          title="Speed Reading: How to Double (or Triple) Your Reading Speed in Just 1 Hour! Kindle Edition"
          price={64.12}
          rating={4}
          image="https://www.amazon.in/images/I/51JnAcjm3nL.jpg"
        />

        <Product
          id="4"
          title="How to Win Friends and Influence People Kindle Edition"
          price={15.00}
          rating={4}
          image="https://www.amazon.in/images/I/51bwFsBc0TL.jpg"
        />

        <Product
          id="5"
          title="The Alchemist Kindle Edition"
          price={75.0}
          rating={4}
          image="https://www.amazon.in/images/I/51Z0nLAfLmL.jpg"
        />
      </div>

      <div className="home__row">
        <Product
          id="6"
          title="Ikigai: The Japanese secret to a long and happy life Kindle Edition"
          price={178.60}
          rating={4}
          image="https://www.amazon.in/images/I/51T8OXMiB5L.jpg"
        />
      </div>
    </div>
  );
}

// Anything that we have to use outside of this file, we export it
export default Home;
