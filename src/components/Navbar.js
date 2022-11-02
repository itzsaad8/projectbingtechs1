import React from "react";
import Hamburger from "../images/icon-hamburger.svg";
import Logo from "../images/logo.svg";
const navbar = ({ toggle }) => {
  return (
    <nav>
      <div className="nav-center">
        <img
          src={Hamburger}
          alt="hamburger"
          className="toggle"
          onClick={() => toggle(true)}
        />
        <img src={Logo} alt="logo" className="logo" />
        <ul className="links">
          <li>
            <a href="/" className="link">
              home
            </a>
          </li>
          <li>
            <a href="/" className="link">
              shop
            </a>
          </li>
          <li>
            <a href="/" className="link">
              about
            </a>
          </li>
          <li>
            <a href="/" className="link">
              contact
            </a>
          </li>
        </ul>
      </div>
    </nav>
  );
};

export default navbar;
