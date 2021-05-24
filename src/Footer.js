import React from "react";
import "../node_modules/bootstrap/dist/css/bootstrap.min.css";
import "./Footer.css";
import { Link } from "react-router-dom";

function Footer() {
  return (
    <div className="footer">
      {/* Footer */}
      <footer class="text-center text-lg-start bg-light text-muted">
        {/* Section: Social media */}

        {/* Section: Links */}
        <section class="" style={{ backgroundColor: "rgb(34, 48, 62)" }}>
          <div class="container text-center text-md-start">
            <br />
            {/* Grid row */}
            <div class="row mt-3">
              {/* Grid column */}
              <div className="col-md-2 mx-auto">
                <br />
              </div>
              {/* Grid column */}
              {/* Grid column */}
              <div class="col-md-2 mx-auto mb-4">
                {/* Content */}
                <span className="fw-bold mb-4 text-white">Get to Know Us</span>
                <br />
                <Link className="footer__link" path="/">
                  <span className="text-white footer__span">About Us</span>
                </Link>
                <br />
                <Link className="footer__link" path="/">
                  <span className="text-white footer__span">Careers</span>
                </Link>
                <br />
                <Link className="footer__link" path="/">
                  <span className="text-white footer__span">
                    Press Releases
                  </span>
                </Link>
                <br />
                <Link className="footer__link" path="/">
                  <span className="text-white footer__span">Amazon Cares</span>
                </Link>
                <br />
                <Link className="footer__link" path="/">
                  <span className="text-white footer__span">Gift a Smile</span>
                </Link>
              </div>
              {/* Grid column */}

              {/* Grid column */}
              <div class="col-md-2 mx-auto mb-4">
                {/* Links */}
                <span class="fw-bold mb-4 text-white">Connect with Us</span>
                <br />
                <Link className="footer__link" path="/">
                  <span className="text-white footer__span">Facebook</span>
                </Link>
                <br />
                <Link className="footer__link" path="/">
                  <span className="text-white footer__span">Twitter</span>
                </Link>
                <br />
                <Link className="footer__link" path="/">
                  <span className="text-white footer__span">Instagram</span>
                </Link>
              </div>
              {/* Grid column */}

              {/* Grid column */}
              <div class="col-md-3 mx-auto mb-4">
                {/* Links */}
                <span class="fw-bold mb-4 text-white">Make Money with Us</span>
                <br />
                <Link className="footer__link" path="/">
                  <span className="text-white footer__span">
                    Sell on Amazon
                  </span>
                </Link>
                <br />
                <Link className="footer__link" path="/">
                  <span className="text-white footer__span">
                    Sell under Amazon Accelerator
                  </span>
                </Link>
                <br />
                <Link className="footer__link" path="/">
                  <span className="text-white footer__span">
                    Amazon Global Selling
                  </span>
                </Link>
                <br />
                <Link className="footer__link" path="/">
                  <span className="text-white footer__span">
                    Become an Affiliate
                  </span>
                </Link>
                <br />
                <Link className="footer__link" path="/">
                  <span className="text-white footer__span">
                    Fulfilment by Amazon
                  </span>
                </Link>
                <br />
                <Link className="footer__link" path="/">
                  <span className="text-white footer__span">
                    Advertise Your Products
                  </span>
                </Link>
                <br />
                <Link className="footer__link" path="/">
                  <span className="text-white footer__span">
                    Amazon Pay on Merchants
                  </span>
                </Link>
              </div>
              {/* Grid column */}

              {/* Grid column */}
              <div class="col-md-2 mx-auto mb-4">
                {/* Links */}
                <span class="fw-bold mb-4 text-white">Let Us Help You</span>
                <br />
                <Link className="footer__link" path="/">
                  <span className="text-white footer__span">
                    COVID-19 and Amazon
                  </span>
                </Link>
                <br />
                <Link className="footer__link" path="/">
                  <span className="text-white footer__span">Your Account</span>
                </Link>
                <br />
                <Link className="footer__link" path="/">
                  <span className="text-white footer__span">
                    Returns Centre
                  </span>
                </Link>
                <br />
                <Link className="footer__link" path="/">
                  <span className="text-white footer__span">
                    100% Purchase Protection
                  </span>
                </Link>
                <br />
                <Link className="footer__link" path="/">
                  <span className="text-white footer__span">
                    Amazon App Download
                  </span>
                </Link>
                <br />
                <Link className="footer__link" path="/">
                  <span className="text-white footer__span">
                    Amazon Assistant Download
                  </span>
                </Link>
                <br />
                <Link className="footer__link" path="/">
                  <span className="text-white footer__span">Help</span>
                </Link>
              </div>
              {/* Grid column */}

              {/* Grid column */}
              <div className="col-md-1 mx-auto"></div>
              {/* Grid column */}
            </div>
            {/* Grid row */}
          </div>
        </section>
        {/* Section: Links  */}

        <section style={{ backgroundColor: "rgb(19, 26, 33)" }}>
          <br />
          <div className="container">
            <div className="row">
              <div className="col-md-1 mx-auto"></div>
              <div className="col-md-2 mx-auto">
                <Link className="footer__link" path="/">
                  <ul className="footer__ul">
                    <li className="text-white footer__span__sm">
                      <small>AbeBooks</small>
                    </li>
                    <li className="footer__text footer__span__sm">
                      <small>Books, art</small>
                    </li>
                    <li className="footer__text footer__span__sm">
                      <small>&amp; collectibles</small>
                    </li>
                  </ul>
                </Link>
              </div>
              <div className="col-md-2 mx-auto">
                <Link className="footer__link" path="/">
                  <ul className="footer__ul">
                    <li className="text-white footer__span__sm">
                      <small>Amazon Web Services</small>
                    </li>
                    <li className="footer__text footer__span__sm">
                      <small>Scalable Cloud</small>
                    </li>
                    <li className="footer__text footer__span__sm">
                      <small>Computing Services</small>
                    </li>
                  </ul>
                </Link>
              </div>
              <div className="col-md-2 mx-auto">
                <Link className="footer__link" path="/">
                  <ul className="footer__ul">
                    <li className="text-white footer__span__sm">
                      <small>Audible</small>
                    </li>
                    <li className="footer__text footer__span__sm">
                      <small>Download</small>
                    </li>
                    <li className="footer__text footer__span__sm">
                      <small>Audio Books</small>
                    </li>
                  </ul>
                </Link>
              </div>
              <div className="col-md-2 mx-auto">
                <Link className="footer__link" path="/">
                  <ul className="footer__ul">
                    <li className="text-white footer__span__sm">
                      <small>DPReview</small>
                    </li>
                    <li className="footer__text footer__span__sm">
                      <small>Digital</small>
                    </li>
                    <li className="footer__text footer__span__sm">
                      <small>Photography</small>
                    </li>
                  </ul>
                </Link>
              </div>
              <div className="col-md-2 mx-auto">
                <Link className="footer__link" path="/">
                  <ul className="footer__ul">
                    <li className="text-white footer__span__sm">
                      <small>IMDb</small>
                    </li>
                    <li className="footer__text footer__span__sm">
                      <small>Movies, TV</small>
                    </li>
                    <li className="footer__text footer__span__sm">
                      <small>&amp; Celebrities</small>
                    </li>
                  </ul>
                </Link>
              </div>
              <div className="col-md-1 mx-auto"></div>
            </div>

            <div className="row" style={{ backgroundColor: "rgb(19, 26, 33)" }}>
              <br />
            </div>

            <div className="row" style={{ backgroundColor: "rgb(19, 26, 33)" }}>
              <div className="col-md-1 mx-auto"></div>
              <div className="col-md-2 mx-auto">
                <Link className="footer__link" path="/">
                  <ul className="footer__ul">
                    <li className="text-white footer__span__sm">
                      <small>Shopbop</small>
                    </li>
                    <li className="footer__text footer__span__sm">
                      <small>Designer</small>
                    </li>
                    <li className="footer__text footer__span__sm">
                      <small>Fashion Brands</small>
                    </li>
                  </ul>
                </Link>
              </div>
              <div className="col-md-2 mx-auto">
                <Link className="footer__link" path="/">
                  <ul className="footer__ul">
                    <li className="text-white footer__span__sm">
                      <small>Amazon Business</small>
                    </li>
                    <li className="footer__text footer__span__sm">
                      <small>Everything For</small>
                    </li>
                    <li className="footer__text footer__span__sm">
                      <small>Your Business</small>
                    </li>
                  </ul>
                </Link>
              </div>
              <div className="col-md-2 mx-auto">
                <Link className="footer__link" path="/">
                  <ul className="footer__ul">
                    <li className="text-white footer__span__sm">
                      <small>Prime Now</small>
                    </li>
                    <li className="footer__text footer__span__sm">
                      <small>2-Hour Delivery</small>
                    </li>
                    <li className="footer__text footer__span__sm">
                      <small>on Everyday Items</small>
                    </li>
                  </ul>
                </Link>
              </div>
              <div className="col-md-2 mx-auto">
                <Link className="footer__link" path="/">
                  <ul className="footer__ul">
                    <li className="text-white footer__span__sm">
                      <small>Amazon Prime Music</small>
                    </li>
                    <li className="footer__text footer__span__sm">
                      <small>70 million songs, ad-free</small>
                    </li>
                    <li className="footer__text footer__span__sm">
                      <small>Over 9 million podcast episodes</small>
                    </li>
                  </ul>
                </Link>
              </div>
              <div className="col-md-3 mx-auto"></div>
            </div>
          </div>
        </section>

        {/* Copyright */}
        <div
          className="text-center"
          style={{ backgroundColor: "rgb(19, 26, 33)" }}
        >
          <br />
          <ul className="list-inline">
            <li className="list-inline-item text-white footer__span__sm">
              Conditions of Use &amp; Sale
            </li>
            <li className="list-inline-item text-white footer__span__sm">
              Privacy Notice
            </li>
            <li className="list-inline-item text-white footer__span__sm">
              Interest-Based Ads
            </li>
            <li className="list-inline-item text-white footer__span__sm">
              © 1996-2021, Amazon.com, Inc. or its affiliates
            </li>
          </ul>
          <br />
        </div>
        {/* Copyright */}
      </footer>
      {/* Footer */}
    </div>
  );
}

export default Footer;
