import React, { useState } from "react";
import angleLeft from "../images/icon-angle-left.svg";
import angleRight from "../images/icon-angle-right.svg";
import arrow from "../images/icon-arrow.svg";
import Data from "../data";
const Header = () => {
  const [value, setValue] = useState(0);
  const { img, title, info } = Data[value];

  const check = (number) => {
    if (number > Data.length - 1) {
      return 0;
    }
    if (number < 0) {
      return Data.length - 1;
    }
    return number;
  };

  const handleRight = () => {
    setValue((oldValue) => {
      const newValue = oldValue + 1;
      return check(newValue);
    });
  };

  const handleLeft = () => {
    setValue((oldValue) => {
      const newValue = oldValue - 1;
      return check(newValue);
    });
  };

  return (
    <header>
      <div className="img-container">
        <img src={img} alt="hero" className="hero-img" />
        <div className="btns">
          <img
            src={angleLeft}
            className="btn"
            alt="arrowleft"
            onClick={handleLeft}
          />
          <img
            src={angleRight}
            className="btn"
            alt="arrowright"
            onClick={handleRight}
          />
        </div>
      </div>
      <div className="hero-content">
        <h1>{title}</h1>
        <p>{info}</p>
        <a href="/">
          SHOP NOW <img src={arrow} alt=""></img>
        </a>
      </div>
    </header>
  );
};

export default Header;
