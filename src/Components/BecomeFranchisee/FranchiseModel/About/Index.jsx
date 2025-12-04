import React, { useEffect } from "react";
import "./About.css";
import AOS from "aos";
import "aos/dist/aos.css";

// Define the data for the circular school models
const franchiseModels = [
  { name: "Pre School", type: "primary" },
  { name: "Primary School", type: "primary" },
  { name: "Pre-Primary School", type: "primary" },
  { name: "Secondary School", type: "secondary" },
  { name: "Comprehensive School", type: "secondary" },
  { name: "Pre-Comprehensive School", type: "secondary" },
];

export const AboutSection = () => {
  useEffect(() => {
    AOS.init({
      offset: 300,
      duration: 1000,
    });
  }, []);

  return (
    <div className="container-fluid franchise-models-container">
      
      {/* --- Introductory Text Section --- */}
      <div className="intro-section container" data-aos="fade-up">
        <p className="intro-text">
          We share with our Associates the best practices, expertise and muscle to give them an unparalleled edge over all others. 
          We understand the many stages of setting up and running a school and have developed a system to facilitate our Associates every step of the way.
        </p>
        
        {/* --- TYPES OF SCHOOLS Section --- */}
        <h2 className="section-heading types-of-schools-heading">TYPES OF SCHOOLS</h2>
        <ul className="types-of-schools-list">
          <li data-aos="fade-right" data-aos-delay="100">
            A school may be constructed on available land or an existing building refurbished according to the given parameters.
          </li>
          <li data-aos="fade-right" data-aos-delay="200">
            The corresponding Network Association fee and royalty are as indicated against each school.
          </li>
          <li data-aos="fade-right" data-aos-delay="300">
            All areas are in square feet.
          </li>
        </ul>
      </div>

      {/* --- FRANCHISE MODELS Heading --- */}
      <div className="models-header-bg">
        <h1 className="franchise-models-heading" data-aos="zoom-in">FRANCHISE MODELS</h1>
      </div>

      {/* --- Circular Cards Grid --- */}
      <div className="models-grid-container container">
        {franchiseModels.map((model, index) => (
          <div 
            key={index} 
            className={`model-circle ${model.type}`}
            // Staggered animation delay
            data-aos="flip-left" 
            data-aos-delay={100 + index * 100}
          >
            <p className="circle-text">{model.name}</p>
          </div>
        ))}
      </div>
      
    </div>
  );
};