import React from "react";
import "./Hero.css";

const Hero = () => {
  return (
    <section id="hero">
      <div className="hero-text">
        <p className="hero-text-title">In Wood We Trust</p>
        <h1 className="hero-text-heading">We Design. We Build. We Restore</h1>
        <p className="hero-text-title__bottom">
          Our highly skilled and experienced team specialises in all aspects of
          all antique furniture repair and
        </p>
        <button className="hero-btn">Order Now</button>
      </div>
    </section>
  );
};

export default Hero;
