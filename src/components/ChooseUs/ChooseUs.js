import React, { useState } from "react";
import "./ChooseUs.css";

import SubHeading from "../UI/SubHeading";
import Container from "../UI/Container";
import Button from "../UI/Button";
import Faq from "../UI/Faq";

let init = true;

const ChooseUs = () => {
  const [faqStates, setFaqStates] = useState({ active: false, index: "0" });

  const onClickHandler = (data) => {
    init = false;
    setFaqStates({ active: true, index: data.index });
  };

  return (
    <section id="choose-us">
      <Container>
        <div className="choose-us__container">
          <div className="choose-us__left">
            <p className="choose-us__left-heading">About our Work</p>
            <SubHeading text="Carpentry is our Passion"></SubHeading>
            <p className="choose-us__left-heading__text">
              sed quia consequuntur magni dolores eos qui ratione voluptatem
              sequi nesciunt. Neque porro quisquam est, qui dolorem ipsum quia
              dolor sit amet, consectetur, adipisci velit. sed quia non numquam
              qui ratione voluptatem sequi nesciunt. Neque porro quisquam est,
              qui dolorem ipsum quia dolor sit amet, consectetur, adipiscil
              consectetur, adipisci velit.
            </p>
            <Button text="Contact Us"></Button>
          </div>
          <div className="choose-us__right">
            <SubHeading text="Why Choose Us?"></SubHeading>
            <Faq
              isActive={init || (faqStates.index === "1" ? true : false)}
              index="1"
              click={onClickHandler}
            ></Faq>
            <Faq
              isActive={faqStates.index === "2" ? true : false}
              index="2"
              click={onClickHandler}
            ></Faq>
            <Faq
              isActive={faqStates.index === "3" ? true : false}
              index="3"
              click={onClickHandler}
            ></Faq>
          </div>
        </div>
      </Container>
    </section>
  );
};

export default ChooseUs;
