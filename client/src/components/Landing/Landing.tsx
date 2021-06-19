import React, { useState } from "react";
import "../../assets/css/Landing.css";

const Landing = () => {
  const scrollDown = (e: React.MouseEvent<HTMLAnchorElement, MouseEvent>) => {
    e.preventDefault();
    window.scrollTo({ top: 500, behavior: "smooth" });
  };

  return (
    <div className="cabin">
      <div className="arrow center move">
        <a
          className="white-arrow"
          href="#calendar"
          onClick={(e) => scrollDown(e)}
        >
          Arrow
        </a>
      </div>
    </div>
  );
};

export default Landing;
