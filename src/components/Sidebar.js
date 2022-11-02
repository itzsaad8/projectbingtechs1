import React from "react";
import Close from "../images/icon-close.svg";
const Sidebar = ({ toggle, setToggle }) => {
  return (
    <aside className={`${toggle ? "sidebar active-sidebar" : "sidebar"}`}>
      <img
        src={Close}
        alt="close"
        className="close"
        onClick={() => setToggle(false)}
      />
      <ul className="side-links">
        <li>
          <a href="/" className="side-link">
            home
          </a>
        </li>
        <li>
          <a href="/" className="side-link">
            shop
          </a>
        </li>
        <li>
          <a href="/" className="side-link">
            about
          </a>
        </li>
        <li>
          <a href="/" className="side-link">
            contact
          </a>
        </li>
      </ul>
    </aside>
  );
};

export default Sidebar;
