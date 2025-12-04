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
              Principal's Message
            </h1>
            <p className="fac-about-desp">
              Future Foundation Schools aims to create a supportive and inclusive environment where students are encouraged to explore their potential and achieve their personal best in all aspects of school life. Students will be challenged and engaged through authentic learning opportunities that inspire them to develop creativity, confidence and resilience to become independent and ethical life-long learners.
              We offer a broad curriculum and a range of opportunities for all our students to achieve excellence in academic, creative, social, cultural, sporting and community endeavors. We value collaborative learning, positive relationships and building capacity amongst our students to effectively allow them to engage in the world of the future, where problem-solving, evaluating, working in teams, communicating, creating and innovating are not only valued concepts but expected skills, attributes and capabilities.
              We support the individual well-being of our students and provide a school environment that allows every student to thrive as they work towards achieving their personal best performance. We set high expectations for our students and work hard to safeguard positive emotions across our school community. We are partners in learning with our students and seek to deepen their knowledge and provide enriching and innovative learning experiences, while also gently urging them to go out of their comfort zone to attempt new challenges.
              Our students are educated from Future Foundation Schools with the skills, mindsets and qualities that will best equip them for success in the world of the future. Our students are intelligent, resilient, creative, imaginative, disciplined, dedicated to life-long learning, respectful and ethical. They are the future leaders and role models of society.
              I devote all of my best wishes and efforts to the real success of our generation.

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
