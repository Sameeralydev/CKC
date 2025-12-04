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
    <div className="container-fluid pb-4 mt-4  bg-air-color">
      <div className="container">
        <div className="row">
          <div className="col-4">
            <img src={About} alt="" className="pt-5" />
          </div>
          <div className="col-4 d-flex flex-column align-items-center">
            <img src={About_two} alt="" />
            <h1 className="air-about-title">
              AI and Robotics
            </h1>
            <p className="air-about-desp">
              At Future Foundation Schools, we encourage students to explore AI tools and technologies, while simultaneously fostering their creativity and problem-solving skills. As we plan to incorporate AI and Robotics into our curriculum in the near future, our aim is to provide students with hands-on experiences that enhance both their technical and creative abilities. This balanced approach ensures students develop critical skills in coding, innovation, and engineering, while also nurturing their imagination and independent thinking. By embracing these advancements, we prepare our students to lead in a future shaped by technology and creativity. 
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
