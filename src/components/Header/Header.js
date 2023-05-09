import React from "react";
import "./Header.css";

import { CiClock2, CiPhone, CiLocationOn } from "react-icons/ci";
import Logo from "../../assests/img/logo.svg";

const Header = () => {
  return (
    <div className="header">
      <div className="left-header">
        <div className="header-tagline">
          <p>We build Structures and bring them to your life</p>
        </div>
        <div className="logo">
          <img src={Logo}></img>
        </div>
      </div>
      <div className="right-header">
        <div className="right-header__top">
          <div className="header-contact">
            <div className="header-contact__feature">
              <CiClock2></CiClock2>
              <div className="header-contact__detail">
                <p>Working Hours</p>
                <p>Mon - Sat: 09.00am To 18.00pm</p>
              </div>
            </div>
            <div className="header-contact__feature">
              <CiPhone></CiPhone>
              <div className="header-contact__detail">
                <p>+91 9354001783</p>
                <p>firoztyagi19@gmail.com</p>
              </div>
            </div>
            <div className="header-contact__feature">
              <CiLocationOn></CiLocationOn>
              <div className="header-contact__detail">
                <p>Location</p>
                <p>Delhi</p>
              </div>
            </div>
          </div>
        </div>
        <div className="right-header__bottom">
          <nav className="nav">
            <ul className="list">
              <li className="list-item">Home</li>
              <li className="list-item">About</li>
              <li className="list-item">Services</li>
              <li className="list-item">Our Work</li>
              <li className="list-item">Contact Us</li>
              <li className="list-item">FAQs</li>
            </ul>
          </nav>
          <div>ICONS</div>
        </div>
      </div>
    </div>
  );
};

export default Header;
