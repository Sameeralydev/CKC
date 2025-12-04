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
    <div className="container-fluid pb-4 mt-4  bg-dgedu-color">
      <div className="container">
        <div className="row">
          <div className="col-4">
            <img src={About} alt="" className="pt-5" />
          </div>
          <div className="col-4 d-flex flex-column align-items-center">
            <img src={About_two} alt="" />
            <h1 className="dgedu-about-title">
              Digital Education
            </h1>
            <p className="dgedu-about-desp">
Digital education is the innovative use of digital tools and technologies during teaching and learning and is often referred to as technology-enhanced learning (TEL) or e-learning. Exploring the use of digital technologies allows educators to design engaging learning opportunities in the courses they teach, and these can take the form of blended or fully online courses and programs.            </p>
            
            <p className="dgedu-about-desp">
Education. We are always motivated to adopt all innovative ideas and practices to fulfil the requirements of modern education.
            </p>
            
            <p className="dgedu-about-desp">
Future Foundation Schools has launched <span>SMART BOARD</span> Technology in our preschool. Moreover, we aim to implement this technology across all of our campuses and at all student levels.
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
