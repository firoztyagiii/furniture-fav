import React from "react";

import "./Footer.css";
import Container from "../UI/Container";

import { CiFacebook, CiTwitter, CiInstagram, CiLinkedin } from "react-icons/ci";

const Footer = () => {
  return (
    <footer className="footer">
      <div className="footer-social">
        <div className="socials">
          <div className="social">
            <CiFacebook></CiFacebook>
          </div>
          <div className="social">
            <CiTwitter></CiTwitter>
          </div>
          <div className="social">
            <CiInstagram></CiInstagram>
          </div>
          <div className="social">
            <CiLinkedin></CiLinkedin>
          </div>
        </div>
      </div>
      <Container>
        <div className="footer-details">
          <div className="footer-detail">
            <p className="footer-detail-title">LOGO</p>
            <p className="footer-detail-text">
              Our professionalism, good service and trust to the home repair
              maintenance business. We take immense pride in sending some of the
              most of professional seds handymen to yours that aren't workings
              every day.
            </p>
          </div>
          <div className="footer-detail">
            <p className="footer-detail-title">Contact Us</p>
            <div className="contact-detail">
              <p>
                <span>Call:</span> +4(897)56412322
              </p>
              <p>
                <span>Write:</span> +4(897)56412322
              </p>
              <p>
                <span>FindUs:</span> +4(897)56412322
              </p>
            </div>
          </div>
          <div className="footer-detail">
            <p className="footer-detail-title">Our NewsLetter</p>
            <div className="newsletter">
              <p>
                You can get latest update from us by Subscribing to our News
                Letter
              </p>
              <div className="newsletter-input">
                <input type="email" placeholder="Your email address"></input>
                <button>Subscribe</button>
              </div>
            </div>
          </div>
        </div>
      </Container>
      <div className="footer-ribbon">
        <Container>
          <div className="ribbon">
            <p>© furnitureFav 2023 / ALL RIGHTS RESERVED</p>
            <button>Back to Top</button>
          </div>
        </Container>
      </div>
    </footer>
  );
};

export default Footer;
