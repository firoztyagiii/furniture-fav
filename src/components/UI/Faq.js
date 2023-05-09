import React from "react";
import "./Faq.css";

import { CiCircleMinus, CiCirclePlus } from "react-icons/ci";

const Faq = (props) => {
  const onClickHandler = () => {
    props.click(props);
  };

  return (
    <div className={props.isActive ? "faq active-style" : "faq"}>
      <div onClick={onClickHandler} className="faq-icon">
        {props.isActive ? (
          <CiCircleMinus></CiCircleMinus>
        ) : (
          <CiCirclePlus></CiCirclePlus>
        )}
      </div>
      <div className="faq-text">
        <p className="faq-text-head">
          How I can get good furniture for garden?
        </p>
        {props.isActive && (
          <p className="faq-text-para">
            Sed ut perspiciatis unde omnis iste natus error sit voluptatem
            accusantium dolore mque laudantium, totam rem aperiam, eaque ipsa
            quae ab illo invent ore verit.
          </p>
        )}
      </div>
    </div>
  );
};

export default Faq;
