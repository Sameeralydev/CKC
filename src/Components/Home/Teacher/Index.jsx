import React, { useState, useRef, useEffect } from "react";
import "../About/About.css";
import Controllerleft from "../../../assets/images/slider_controller_left.png";
import Controllerright from "../../../assets/images/slider_controller_right.png";
import { FaFacebookF, FaInstagram, FaWhatsapp } from "react-icons/fa";
import { teamMembers } from "../../../Data/pro";
import AOS from "aos";
import "aos/dist/aos.css";
import Slider from "react-slick";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";

export const TeacherSection = () => {
  useEffect(() => {
    AOS.init({
      offset: 300,
      duration: 1000,
    });
  }, []); // Run this effect only once when the component mounts

  // Custom Previous Arrow
  const PrevArrow = ({ onClick }) => (
    <img
      src={Controllerleft}
      alt="Previous"
      className="slick-controller slick-prev"
      onClick={onClick}
    />
  );

  // Custom Next Arrow
  const NextArrow = ({ onClick }) => (
    <img
      src={Controllerright}
      alt="Next"
      className="slick-controller slick-next"
      onClick={onClick}
    />
  );

  const settings = {
    dots: false, // Dots are hidden
    infinite: true,
    speed: 500,
    slidesToShow: 3,
    slidesToScroll: 1,
    autoplay: false,
    autoplaySpeed: 3000,
    prevArrow: <PrevArrow />, // Custom left arrow
    nextArrow: <NextArrow />, // Custom right arrow
    responsive: [
      {
        breakpoint: 1024,
        settings: { slidesToShow: 2 },
      },
      {
        breakpoint: 768,
        settings: { slidesToShow: 1 },
      },
    ],
  };

  return (
    <div className="container pt-5">
      <div className="d-flex justify-content-center flex-column">
        <div className="d-flex justify-content-center" data-aos="fade-up">
          <svg
            xmlns="http://www.w3.org/2000/svg"
            x="0px"
            y="0px"
            viewBox="0 0 100 100"
            className="hat_img"
          >
            <g>
              {" "}
              <path d="M4.5,54c-0.2-2.6,1-4.4,2.9-6c2-1.6,3.9-3.3,5.8-4.9c0.9-0.8,1.7-0.8,2.3-0.1c0.6,0.7,0.4,1.5-0.5,2.2  c-2.1,1.8-4.3,3.7-6.5,5.5c-1.2,1-1.5,2.1-1.1,3.3c0.4,1.2,1.4,1.8,2.9,1.9c14.2,0.6,28.5,0.3,42.7-0.5c1.6-0.1,3.1-0.5,4.4-1.5  c4.9-3.5,9.7-7.1,14.6-10.7c0.1-0.1,0.1-0.1,0.3-0.3c-2-0.2-3.9-0.4-5.8-0.6c-5.4-0.6-10.8-1.1-16.1-1.7c-0.4,0-0.9-0.1-1.1-0.3  c-0.3-0.4-0.6-1.1-0.5-1.5c0.1-0.7,0.7-1,1.5-0.9c2.6,0.3,5.1,0.5,7.7,0.8c5.4,0.6,10.9,1.1,16.3,1.8c1.1,0.1,1.8-0.1,2.6-0.7  c4.8-4.1,9.7-8.1,14.6-12.1c1.2-1,1.5-2.1,1.1-3.3c-0.4-1.2-1.4-1.8-2.9-1.9c-14.2-0.6-28.4-0.4-42.6,0.5c-1.8,0.1-3.5,0.7-4.9,1.8  c-7.3,5.5-14.6,11-21.9,16.5c-0.1,0.1-0.1,0.1-0.2,0.2c-0.8,0.6-1.6,0.6-2.1-0.1c-0.5-0.7-0.4-1.5,0.4-2.1c1.8-1.4,3.5-2.9,5.3-4.2  c5.5-4.1,11-8.1,16.5-12.3c2.2-1.7,4.7-2.5,7.5-2.7c13.9-0.7,27.9-1,41.9-0.5c2.3,0.1,4.1,0.9,5.5,2.8c0.2,0.6,0.5,1.3,0.7,1.9  c0.2,2.6-1,4.4-2.9,6c-3.7,3-7.3,6.1-11,9.2c-0.5,0.4-0.7,0.8-0.4,1.5c0.8,2.1,1.5,4.2,2.2,6.3c0.4,1.2-0.4,2.3-1.5,1.9  c-0.4-0.1-0.9-0.6-1.1-1.1c-0.8-2-1.5-4-2.2-6.1c-0.1,0-0.2,0.1-0.3,0.1c-1.5,1.1-1.5,1.1-0.9,2.8c1.4,4,2.8,8.1,4.2,12.1  c0.1,0.3,0.2,0.6,0.3,1c1.5-0.9,1.7-1.4,1.2-2.9c-0.2-0.5-0.4-1.1-0.5-1.6c-0.2-0.7,0.1-1.3,0.8-1.6c0.7-0.3,1.5-0.1,1.7,0.6  c0.5,1.1,0.9,2.3,1.1,3.6c0.2,1.4-0.4,2.6-1.6,3.4c-1.5,1-1.7,2.1-0.9,3.6c0.4,0.8,0.6,1.7,0.9,2.4c0.1,0.3,0.5,0.5,0.8,0.6  c2.3,0.3,3.9,1.4,4.7,3.7c0.8,2.2,1.5,4.3,2.3,6.5c0.4,1.2,0.1,1.7-1.1,2.2c-2.2,0.8-4.4,1.6-6.6,2.3c-1.2,0.4-1.8,0.1-2.2-1  c-0.8-2.2-1.6-4.4-2.3-6.6c-0.7-2.2-0.2-4.1,1.4-5.7c0.2-0.2,0.3-0.7,0.3-0.9c-0.3-1.2-0.8-2.3-1.2-3.5c-0.4,0.3-0.7,0.5-1,0.8  c-5.1,3.9-10.1,7.8-15.2,11.7c-0.7,0.6-1.8,0.9-2.7,1c-8.5,0.6-17,0.7-25.4,0.2c-2.4-0.1-3.7-1-4.5-3.4c-1.5-4.3-3.1-8.7-4.6-13  c-0.1-0.3-0.2-0.6-0.3-1c-3.3,0-6.6-0.1-9.9-0.2c-2,0-3.9-0.2-5.9-0.2c-2.5,0-4.5-0.7-5.9-2.8C5,55.3,4.7,54.6,4.5,54z M29.9,59  c0.1,0.4,0.2,0.7,0.3,0.9c1.4,4.1,2.9,8.2,4.3,12.3c0.3,1,0.9,1.4,2,1.5c8.3,0.5,16.7,0.4,25-0.1c0.6,0,1.2-0.3,1.6-0.6  c5.4-4.1,10.7-8.3,16.1-12.4c0.5-0.4,0.5-0.7,0.3-1.3c-1.6-4.5-3.2-9-4.8-13.6c-0.1-0.2-0.2-0.4-0.3-0.6c-0.3,0.2-0.6,0.4-0.8,0.6  c-4.7,3.4-9.3,6.9-14,10.3c-1.8,1.3-3.9,2.2-6.1,2.3c-5.3,0.3-10.6,0.5-15.8,0.7C35.1,58.9,32.6,59,29.9,59z M84.9,77.6  c1.5-0.5,3-1,4.5-1.6c-0.7-1.9-1.3-3.8-2-5.7c-0.5-1.2-1.7-1.7-2.9-1.4c-1.1,0.3-2,1.5-1.6,2.6C83.4,73.6,84.2,75.5,84.9,77.6z"></path>
            </g>
          </svg>
        </div>
        <p className="professional_title" data-aos="fade-up">
          Meet Our Professional
        </p>
        <p className="professional_subtitle" data-aos="fade-up">
          Teachers & Trainers
        </p>
        <div className="d-flex justify-content-center" data-aos="fade-up">
          <p className="professional_desp">
            Our educators are committed to fostering meaningful learning experiences, guiding students with expertise and integrity. Through their dedication, they cultivate an environment where knowledge grows, skills strengthen, and every learner is encouraged to excel.
          </p>
        </div>
      </div>
      <div className="row row_div" data-aos="fade-up">
        <Slider {...settings}>
          {teamMembers.map((member, index) => (
            <div key={index} className="col-lg-4 text-center position-relative">
              <svg
                xmlns="http://www.w3.org/2000/svg"
                x="0px"
                y="0px"
                viewBox="0 0 100 100"
                className="arrow_pro"
              >
                <g>
                  <path d="M28.3,68.1l-0.5,0l-0.5,0.1l0-0.1l0.5,0l0.5-0.1l-0.4,0.1L28.3,68.1z M28.3,66.3l-0.5-0.2l-0.5,0l0.5,0L27.4,66  c0.2-0.6,0.4-1.3,0.8-2l0.6,0.3L28.2,64l0,0l0.9,0.5c0,0,0,0,0,0l0,0l0,0C28.7,65.1,28.5,65.7,28.3,66.3L28.3,66.3L28.3,66.3z   M27.8,66.1L27.8,66.1L27.8,66.1L27.8,66.1z M30.1,63l-0.4-0.3l-0.4-0.3l0.4,0.2l-0.4-0.3c0.4-0.5,0.8-1,1.3-1.5l0,0l0,0  c0,0,0,0,0,0l0.7,0.7L30.9,61l0.5,0.4C30.9,62,30.5,62.5,30.1,63L30.1,63L30.1,63z M29.7,62.6L29.7,62.6L29.7,62.6L29.7,62.6z   M32.8,60l-0.4-0.4l0,0L32,59.4l0,0l0,0c0.5-0.5,1-0.9,1.4-1.4l0,0l0.1-0.1l0.3,0.5l0,0l0,0l0.2,0.4l-0.2-0.4l0.3,0.3  C33.7,59.1,33.2,59.6,32.8,60z M34.2,58.6l-0.4-0.3L34.2,58.6z M35.6,57.3l-0.3-0.4l0,0l-0.4-0.4l0,0l0,0c0.5-0.5,1-0.9,1.5-1.3  l0,0l0.1-0.1l0.3,0.5l0,0l0,0l0.2,0.4l-0.2-0.4l0.3,0.3C36.6,56.4,36.1,56.8,35.6,57.3z M37.2,55.9l-0.4-0.3L37.2,55.9z M38.6,54.7  l-0.3-0.4l-0.4-0.3l0.3,0.3l0,0L38,53.9c0.5-0.4,1-0.9,1.6-1.3l0.3,0.4l-0.2-0.4l0.2,0.4l0.4,0.4l-0.1,0.1l0,0  C39.7,53.8,39.1,54.2,38.6,54.7L38.6,54.7L38.6,54.7z M38.3,54.3L38.3,54.3L38.3,54.3L38.3,54.3z M41.7,52.2l-0.3-0.4l-0.4-0.3  l0.3,0.3l-0.3-0.4c0.5-0.4,1.1-0.8,1.6-1.2l0.3,0.4l-0.2-0.4l0.2,0.4l0.4,0.4L43.3,51l0,0C42.8,51.4,42.3,51.8,41.7,52.2L41.7,52.2  L41.7,52.2z M41.4,51.7L41.4,51.7L41.4,51.7L41.4,51.7z M44.9,49.8l-0.3-0.4L44.9,49.8L44.4,49l0.2,0.3L44.4,49  c0.5-0.4,1.1-0.8,1.7-1.1l0.1,0.2L46,47.9l0,0l0.5,0.9C46,49.1,45.5,49.4,44.9,49.8z M44.6,49.4L44.3,49L44.6,49.4z M48.2,47.6  l-0.5-0.9l0,0c0.6-0.4,1.1-0.7,1.7-1.1l0,0l0.5,0.9C49.4,46.9,48.8,47.2,48.2,47.6L48,47.2L48.2,47.6z M51.6,45.5l-0.5-0.9l0,0l0,0  c0.6-0.3,1.2-0.7,1.8-1l0,0l0,0l0.5,0.9l0,0l0,0C52.8,44.9,52.2,45.2,51.6,45.5l-0.2-0.4L51.6,45.5z M55.1,43.6l-0.2-0.4l0,0l0,0  l0,0l-0.3-0.4l0,0l0,0c0.6-0.3,1.2-0.6,1.8-0.9l0,0l0.1,0l0.1,0.5l0,0l0,0.1l0.1,0.4l-0.1-0.4l0.2,0.4C56.3,43,55.7,43.3,55.1,43.6  z M56.9,42.7l-0.3-0.4L56.9,42.7z M58.7,41.8l-0.2-0.5l0,0l0,0l0,0L58.2,41l0.1,0l0,0c0.6-0.3,1.2-0.6,1.8-0.8l0,0l0.1,0l0.1,0.5  l0,0l0,0l0.1,0.4l-0.1-0.4l0.2,0.4C59.9,41.3,59.3,41.6,58.7,41.8z M60.6,41l-0.3-0.4L60.6,41z M62.3,40.2l-0.2-0.5l0,0l-0.3-0.4  l0.1,0l0,0c0.6-0.3,1.2-0.5,1.9-0.8L64,39l-0.1-0.4L64,39l0.3,0.5l-0.1,0C63.6,39.7,62.9,40,62.3,40.2z M64,39L64,39L64,39z   M66,38.8l-0.1-0.5l-0.2-0.4l0.2,0.4l-0.2-0.4c0.6-0.2,1.3-0.5,1.9-0.7l0.2,0.4l-0.1-0.4l0.1,0.4l0.3,0.5l-0.1,0  C67.3,38.3,66.7,38.6,66,38.8L66,38.8L66,38.8z M65.8,38.3L65.8,38.3L65.8,38.3L65.8,38.3z M67.7,37.6L67.7,37.6L67.7,37.6z"></path>{" "}
                  <g>
                    <path d="M73.7,35.8c-2.4,1.8-5.2,4.6-6.8,7.1l0.2-5.1l-3-4C66.8,35,70.7,35.7,73.7,35.8z"></path>{" "}
                  </g>
                </g>
              </svg>
              <div className="position-relative">
                <div className="rounded-circle overflow-hidden d-inline-block">
                  <img
                    src={member.image}
                    alt={member.name}
                    className="img-fluid"
                  />
                </div>
              </div>
              <h5 className="mt-4 text-teal">{member.name}</h5>
              <p className="text-muted">{member.description}</p>
            </div>
          ))}
        </Slider>
      </div>
    </div>
  );
};
