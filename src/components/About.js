import React from "react";
import Image1 from "../images/image-about-dark.jpg";
import Image2 from "../images/image-about-light.jpg";
const About = () => {
  return (
    <section className="about">
      <img src={Image1} alt="about-img" />
      <div className="about-content">
        <h2>about our furniture</h2>
        <p>
          We provide unmatched quality, comfort, and style for property owners
          across the country. Our experts combine form and function in bringing
          your vision life. Create a room in your own style with our collection
          and make your property a reflection of ypu and what you love.
        </p>
      </div>
      <img src={Image2} alt="about-img" />
    </section>
  );
};

export default About;
