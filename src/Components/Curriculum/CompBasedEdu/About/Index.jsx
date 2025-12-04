import React, { useEffect } from "react";
import "./About.css";
import About from "../../../../assets/images/facilities/about.png";
import About_one from "../../../../assets/images/facilities/about-one.png";
import About_two from "../../../../assets/images/facilities/about-two.png";
import { Curdata } from "../../../../Data/pro";
import AOS from "aos";
import "aos/dist/aos.css";

export const AboutSection = () => {
  useEffect(() => {
    AOS.init({
      offset: 300,
      duration: 1000,
    });
  }, []);

  return (
    <div className="container-fluid pb-4 mt-4  bg-cbe-color">
      <div className="container">
        <div className="row">
          <div className="col-4">
            <img src={About} alt="" className="pt-5" />
          </div>
          <div className="col-4 d-flex flex-column align-items-center">
            <img src={About_two} alt="" />
            <h1 className="cbe-about-title">
            	Competency-Based Education
            </h1>
            <p className="cbe-about-desp">
Competency-based learning is a system of education, often referred to as proficiency or mastery-based, in which students advance and move ahead on their lessons based on demonstration of mastery. For students to progress at a meaningful pace, schools and teachers provide differentiated instruction and support.</p>
            <p className="cbe-about-desp">
              Future Foundation Schools discourages root memorization in education and emphasizes that every soft theory and information should be converted into skill as we provide an activity-based teaching approach. As a result, students are more confident as they experience the practices of daily life. 
</p>
          </div>
          <div className="col-4">
            <img src={About_one} alt="" className="pt-5" />
          </div>
        </div>
      </div>
    </div>
  );
};
