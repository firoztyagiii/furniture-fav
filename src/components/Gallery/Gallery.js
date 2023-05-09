import React, { Fragment } from "react";
import "./Gallery.css";

import SubHeading from "../UI/SubHeading";

import img1 from "../../assests/img/our-work/1.jpg";
import img2 from "../../assests/img/our-work/2.jpg";
import img3 from "../../assests/img/our-work/3.jpg";
import img4 from "../../assests/img/our-work/4.jpg";
import img5 from "../../assests/img/our-work/5.jpg";
import img6 from "../../assests/img/our-work/6.jpg";
import img7 from "../../assests/img/our-work/7.jpg";
import img8 from "../../assests/img/our-work/8.jpg";
import img9 from "../../assests/img/our-work/9.jpg";

const Gallery = () => {
  return (
    <Fragment>
      <div className="center">
        <SubHeading text="Our Featured Project"></SubHeading>
      </div>
      <div className="gallery">
        <img src={img1} alt="work-img" className="gallery-img"></img>
        <img src={img2} alt="work-img" className="gallery-img"></img>
        <img src={img3} alt="work-img" className="gallery-img"></img>
        <img src={img4} alt="work-img" className="gallery-img"></img>
        <img src={img5} alt="work-img" className="gallery-img"></img>
        <img src={img6} alt="work-img" className="gallery-img"></img>
        <img src={img7} alt="work-img" className="gallery-img"></img>
        <img src={img8} alt="work-img" className="gallery-img"></img>
        <img src={img9} alt="work-img" className="gallery-img"></img>
      </div>
    </Fragment>
  );
};

export default Gallery;
