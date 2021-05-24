import React from "react";
import { Carousel, Col, Row, Container } from "react-bootstrap";
import "bootstrap/dist/css/bootstrap.min.css";
import Product from "./Product";
import "./Home.css";

// This is the home page component
function Home() {
  const scrollToTop = () => {
    window.scrollTo({
      top: 0,
      behavior: "smooth",
    });
  };

  return (
    <>
      <div className="home">
        {/* This is the img on the background  having Carousel*/}
        <Carousel
          className="home__image"
          nextLabel={""}
          prevLabel={""}
          interval={4000}
          slide="true"
          wrap="true"
        >
          <Carousel.Item>
            <img
              className=""
              src="https://images-eu.ssl-images-amazon.com/images/G/31/img18/Fresh/GW/May21/fresh-pc_021x._CB670987717_.jpg"
              alt="First slide"
            />
          </Carousel.Item>
          <Carousel.Item>
            <img
              className=""
              src="https://images-eu.ssl-images-amazon.com/images/G/31/AmazonSmallBusinessDay/EssentialsStore/1x._CB668073731_.jpg"
              alt="Second slide"
            />
          </Carousel.Item>
          <Carousel.Item>
            <img
              className=""
              src="https://images-eu.ssl-images-amazon.com/images/G/31/img17/Auto/PSS/Personal-Safety_1500x600._CB668022827_.jpg"
              alt="Third slide"
            />
          </Carousel.Item>
          <Carousel.Item>
            <img
              className=""
              src="https://images-eu.ssl-images-amazon.com/images/G/31/AmazonVideo/2021/X-site/Multititle/May/M17/non-reg/1500x600_Hero-Tall_JPN._CB668432235_.jpg"
              alt="Forth slide"
            />
          </Carousel.Item>
          <Carousel.Item>
            <img
              className=""
              src="https://images-eu.ssl-images-amazon.com/images/G/31/img21/HPC/GW/Household_1500x600_V2._CB670004437_.jpg"
              alt="Fifth slide"
            />
          </Carousel.Item>
        </Carousel>

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
        <Carousel
          nextLabel={""}
          prevLabel={""}
          className="home__row btm-carousel"
          interval={4000}
          slide="true"
          wrap="true"
        >
          <Carousel.Item>
            <Container>
              <Row>
                <Col lg={2}></Col>
                <Col lg={2}>
                  <img
                    className="bottom-carousel"
                    src="https://images-eu.ssl-images-amazon.com/images/G/31/img20/Events/GW/Covid/shovler/1x/Shoveler_covid_donation_1x._CB671053910_.jpg"
                    alt="First slide"
                  />
                </Col>
                <Col lg={2}>
                  <img
                    className="bottom-carousel"
                    src="https://images-eu.ssl-images-amazon.com/images/G/31/img20/Events/GW/shoveller/Shoveler_covid_v2_smb_1x._CB669068181_.jpg"
                    alt="First slide"
                  />
                </Col>
                <Col lg={2}>
                  <img
                    className="bottom-carousel"
                    src="https://images-eu.ssl-images-amazon.com/images/G/31/img20/Events/GW/milaap/Shoveler_covid_homecare_1x._CB669529040_.jpg"
                    alt="First slide"
                  />
                </Col>
                <Col lg={2}>
                  <img
                    className="bottom-carousel"
                    src="https://images-eu.ssl-images-amazon.com/images/G/31/img20/Events/GW/Covid/shovler/1x/Shoveler_covid_payment_1x._CB671053910_.jpg"
                    alt="First slide"
                  />
                </Col>
                <Col lg={2}></Col>
              </Row>
            </Container>
          </Carousel.Item>
          <Carousel.Item>
            <Container>
              <Row>
                <Col lg={2}></Col>
                <Col lg={2}>
                  <img
                    className="bottom-carousel"
                    src="https://images-eu.ssl-images-amazon.com/images/G/31/img20/Events/GW/Covid/shovler/1x/Shoveler_covid_vaccine_1x._CB671053910_.jpg"
                    alt="First slide"
                  />
                </Col>
                <Col lg={2}>
                  <img
                    className="bottom-carousel"
                    src="https://images-eu.ssl-images-amazon.com/images/G/31/img20/Events/GW/milaap/Shoveler_covid_Blog_1x._CB669735929_.jpg"
                    alt="First slide"
                  />
                </Col>
                <Col lg={2}>
                  <img
                    className="bottom-carousel"
                    src="https://images-eu.ssl-images-amazon.com/images/G/31/img20/Events/GW/Covid/shovler/1x/Shoveler_covid_delivery__return_1x._CB671053910_.jpg"
                    alt="First slide"
                  />
                </Col>
                <Col lg={2}>
                  <img
                    className="bottom-carousel"
                    src="https://images-eu.ssl-images-amazon.com/images/G/31/img20/Events/GW/Covid/shovler/1x/Shoveler_covid_payment_1x._CB671053910_.jpg"
                    alt="First slide"
                  />
                </Col>
                <Col lg={2}></Col>
              </Row>
            </Container>
          </Carousel.Item>
        </Carousel>

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
            price={15.0}
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
            price={178.6}
            rating={4}
            image="https://www.amazon.in/images/I/51T8OXMiB5L.jpg"
          />
        </div>
      </div>
      <div
        className="btn btn-outline-secondary back pt-3 pb-3"
        onClick={scrollToTop}
      >
        Back to top
      </div>
    </>
  );
  //Get the button:
}

// Anything that we have to use outside of this file, we export it
export default Home;
