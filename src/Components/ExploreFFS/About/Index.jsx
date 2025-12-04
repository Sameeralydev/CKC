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
              It gives me great pleasure to introduce you and your child to Future Foundation Schools, where so many wonderful learning opportunities and experiences are just waiting for them. It truly is a great place to think and grow! 
To help children look at the world differently, we build philosophical enquiry for children into much of what we do it encourages our children to develop open, enquiring minds, value reasoning, develop self-confidence and be respectful of different opinions
We aim to inspire every child as creative and challenging by nurturing their abilities to achieve their very best. Our school isn’t just about knowledge and skills though; it’s also about inspiring children to be critical thinkers and look at the world differently and about challenging them to be fascinated by lessons and subjects.
A key factor in your child’s learning journey is the mentors they interact with, and we have a highly experienced, skillful, dedicated teaching and support staff. They work together to provide flexibility in meeting the needs of all pupils.
I wish the best of luck to all the parents, staff and students who are the golden part of the Future Foundation Family. I pray for realizing the dream of a successful life in the world and the world hereafter. 

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
