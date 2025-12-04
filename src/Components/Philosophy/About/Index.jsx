import React, { useEffect } from "react";
import "./About.css";
import About from "../../../assets/images/facilities/about.png";
import About_one from "../../../assets/images/facilities/about-one.png";
import About_two from "../../../assets/images/facilities/about-two.png";

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
    <div className="container-fluid p-0 mt-4 bg-fac-color">
      <div className="container">
        <div className="row">
          <div className="col-4">
            <img src={About} alt="" className="pt-5" />
          </div>
          <div className=" d-flex flex-column align-items-center">
            <img src={About_two} alt="" />
            <h1 className="fac-about-title1">
              Philosophy
            </h1>
            <h5 className="fac-about-title">
              Our Vision
            </h5>
            <p className="fac-about-desp">
              Our vision is to provide the standard education to our children so that they can turn the dreams of their parents into reality.
            </p>
            <h5 className="fac-about-title">
              Our Mission
            </h5>
            <p className="fac-about-desp">
              We ensure world-class academic and administrative standards by continuously guiding and facilitating our stakeholders through teamwork. We embrace modern technologies to meet the current educational demands and the challenges of the future. We provide our students with a creative, healthy, safe, and innovative environment following universal ethics and nature-based civilization.
            </p>
            <h5 className="fac-about-title">
              Our Core Values
            </h5>
            <p className="fac-about-desp">
              Our next generation shall have all the competencies to compete in the challenges of the world through their worthwhile and charming personality.lity.
            </p>
          </div>
          <div className="col-4">
            <img src={About_one} alt="" className="pt-5" />
          </div>
        </div>
        {/* <div className="row cur_row_div pt-1">
          {Curdata.map((item) => (
            <div key={item.id} className="mt-3 col-lg-6" data-aos="fade-up">
              <div className="cur_body_data fac-card">
                <div className="position-relative d-none d-sm-block">
                  <img src={item.image} alt="" className="cur_img" />
                  <img src={item.imageone} alt="" className="cur_imageone" />
                  <img src={item.imagecir} alt="" className="cur_imagecir" />
                </div>
                <div>
                  <p className="cur_item">{item.name}</p>
                  <p className="cur_desp">{item.description}</p>
                </div>
              </div>
            </div>
          ))}
        </div> */}
      </div>
    </div>
  );
};
