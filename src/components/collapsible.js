import React, { useState } from "react";
import "./collapsible.css";
import arrow_up_black from './Arrow_up_black.png';
import arrow_down_white from './Arrow_down_white.png';

function Collapsible() {
  const [activeIndex, setActiveIndex] = useState(null);

  const sections = ["Research", "Design", "Development"];

  const toggleSection = (index) => {
    setActiveIndex(activeIndex === index ? null : index);
  };

  return (
    <div className="collapsible-wrapper">
      {sections.map((title, index) => (
        <div key={index} className={`collapsible-container ${activeIndex === index ? "active" : ""}`}>
          <button className="collapsible" onClick={() => toggleSection(index)}>
          {title} 
            <img 
              src={activeIndex === index ? arrow_down_white : arrow_up_black} 
              alt="Toggle Arrow" 
              className="arrow-icon"
            />
          </button>
          {activeIndex === index && (
            <div className="collapsible-content">
            </div>
          )}
        </div>
      ))}
    </div>
  );
}

export default Collapsible;
