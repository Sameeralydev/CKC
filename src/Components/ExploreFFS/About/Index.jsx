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
            <h1 className="fac-about-title">
                Chairman's Message
            </h1>
            <p className="fac-about-desp">
              It gives me great pleasure to welcome you and your child to Crescent Kids Campus, where countless learning opportunities and meaningful experiences await them. It truly is a wonderful place for young minds to think, grow, and explore.

To help children view the world with curiosity and depth, we integrate philosophical inquiry into much of our teaching. This approach encourages students to develop open and enquiring minds, value reasoning, build self-confidence, and show respect for diverse perspectives.

At Crescent Kids Campus, our mission is to inspire every child to be creative, confident, and challenged in a healthy way. We nurture their abilities so they can achieve their fullest potential. Our focus is not only on academic learning but also on inspiring students to become critical thinkers who engage with the world differently and take genuine interest in their lessons and subjects.

A crucial part of your child’s educational journey is the guidance they receive from our mentors. We are proud to have a highly skilled, experienced, and dedicated team of teachers and support staff. Together, they work with flexibility and commitment to meet the needs of every learner.

I extend my best wishes to all parents, staff, and students who form the golden part of the Crescent Kids Family. I pray that all of us continue to progress and achieve success in this life and the hereafter.
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
