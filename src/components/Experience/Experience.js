import React from "react";
import "./Experience.css";
import Container from "../UI/Container";
import SubHeading from "../UI/SubHeading";
import Button from "../UI/Button";
import ExpImg from "../../assests/img/exp-img-1.jpg";
import ExpImg2 from "../../assests/img/exp-img-2.jpg";

const Experience = () => {
  return (
    <Container>
      <section id="experience">
        <div className="experience-text">
          <div className="experience-text-heading">
            <span>12</span>
            <div>
              <p className="year-heading">Years of Experience</p>
              <p className="industry-heading">In this Industry</p>
            </div>
          </div>
          <SubHeading text="About FurnitureFav"></SubHeading>
          <p className="experience-text-main">
            Furniture restoration offers you two huge benefits: an opportunity
            to create a new style for your home without overspending and a
            chance to preserve the value of your furniture, especially if you
            have antiques. We regularly import fine antique pieces that are sold
            at trade prices.
          </p>
          <Button text="About Us"></Button>
        </div>
        <div className="experience-img">
          <img src={ExpImg2} alt="service"></img>
          <img className="experience-relative" src={ExpImg} alt="service"></img>
        </div>
      </section>
    </Container>
  );
};

export default Experience;
