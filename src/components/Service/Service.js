import React, { Fragment } from "react";
import "./Service.css";
import SubHeading from "../UI/SubHeading";
import Container from "../UI/Container";
import Service1 from "../../assests/img/service-1.jpg";
import Service2 from "../../assests/img/service-2.jpg";
import Service3 from "../../assests/img/service-3.jpg";

const Service = () => {
  return (
    <Fragment>
      <Container>
        <div className="service-heading">
          <SubHeading text="Our Best Services"></SubHeading>
        </div>
        <div className="services">
          <div className="service">
            <img alt="service" className="service-img" src={Service1}></img>
            <p className="service-title">General Carpentry</p>
          </div>
          <div className="service">
            <img alt="service" className="service-img" src={Service2}></img>
            <p className="service-title">Furniture Remodeling</p>
          </div>
          <div className="service">
            <img alt="service" className="service-img" src={Service3}></img>
            <p className="service-title">Manufacture Furniture</p>
          </div>
        </div>
      </Container>
    </Fragment>
  );
};

export default Service;
