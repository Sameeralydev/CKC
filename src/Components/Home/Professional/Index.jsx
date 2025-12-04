import React, { useState, useRef, useEffect } from "react";
import "./Professional.css";
import AOS from "aos";
import "aos/dist/aos.css";
import Slider from "react-slick";
import { smartactivity, counterData } from "../../../Data/pro";
import Controllerleft from "../../../assets/images/slider_controller_left.png";
import Controllerright from "../../../assets/images/slider_controller_right.png";
import Rainbow from "../../../assets/images/pro_rainbow.png";
import Butterfly from "../../../assets/images/pro_buterfly.png";
import Study from "../../../assets/images/studys.png";
import Alpha from "../../../assets/images/alpha-overlay-image.png";
import Rounded from "../../../assets/images/rounded.png";
import Cycle from "../../../assets/images/cycle-play.png";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import {
  motion,
  useMotionValue,
  useTransform,
  useInView,
  useSpring,
} from "framer-motion";

export const ProfessionalSection = () => {
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

  const Counter = ({ value }) => {
    const count = useMotionValue(0);
    const smoothCount = useSpring(count, { stiffness: 100, damping: 10 });
    const rounded = useTransform(smoothCount, (latest) => Math.floor(latest));
    const ref = useRef(null);
    const isInView = useInView(ref, { margin: "-50px" }); // ✅ Removed `once: true` for repeated animation

    useEffect(() => {
      if (isInView) {
        count.set(0); // Reset counter
        setTimeout(() => {
          count.set(value); // Animate to target number
        }, 300);
      }
    }, [isInView, count, value]); // ✅ Effect runs every time the element comes into view

    return <motion.span ref={ref}>{rounded}</motion.span>;
  };

  return (
    <>
      <div className="container p-0 professional_main">
        <div className="d-flex justify-content-center flex-column">
          <div className="d-flex justify-content-center">
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
            Activity Programs
          </p>
          <p className="professional_subtitle" data-aos="fade-up">
            Smart Activities
          </p>
          <div className="d-flex justify-content-center" data-aos="fade-up">
            <p className="professional_desp">
              Chasellus gravida lacus quis eros lobortis, nec dapibus quam
              gravida. Duis sed augue vitae felis pellentesque varius nec quis
              nunc. Morbi mauris augue, pulvinar quis luctus eget.
            </p>
          </div>
        </div>
        <div className="row row_div">
          <img
            src={Rainbow}
            alt=""
            className="rainbow_img"
            data-aos="fade-right"
          />
          <img
            src={Butterfly}
            alt=""
            className="buterfly_img"
            data-aos="fade-left"
          />
          <Slider {...settings}>
            {smartactivity.map((item, index) => (
              <div key={index} className="col-lg-4" data-aos="fade-up">
                <div className="d-flex justify-content-center position-relative pro_height">
                  <img src={item.imageone} alt="" className="pro_img_one" />
                  <img src={item.image} alt="" className="pro_img" />
                </div>
                <h5 className="mt-4 text-center pro_name">{item.name}</h5>
                <p className="text-center">{item.description}</p>
              </div>
            ))}
          </Slider>
        </div>
      </div>
      <div className="container-fluid p-0 mt-5 overflow-hidden">
        <div className="student_color p-0" data-aos="fade-up">
          <img src={Study} alt="" className="study_img" />
          <img src={Cycle} alt="" className="cycle_img" />
          <img src={Alpha} alt="" className="alpha" />
          <h2 class="elementor-heading-title">a</h2>
          <h2 class="elementor-heading-title-b">b</h2>
          <h2 class="elementor-heading-title-4">4</h2>
          <h2 class="elementor-heading-title-3">3</h2>
          <h2 class="elementor-heading-title-5">5</h2>
          <div className="row counter_div m-0">
            {counterData.map((item) => (
              <div key={item.id} className="col p-0 d-flex flex-column gap-3">
                <div className="d-flex justify-content-center position-relative">
                  <img src={Rounded} alt="" className="rounded_img" />
                  <img src={item.img} alt="" className="one_img" />
                </div>
                <motion.p
                  className="wdt-content-counter text-center"
                  initial={{ opacity: 0 }}
                  animate={{ opacity: 1 }}
                  transition={{ duration: 0.5 }}
                >
                  <Counter value={parseInt(item.number, 10)} />
                  <span>{item.suffix}</span>
                </motion.p>
                <p className="wdt-content-counters text-center">{item.text}</p>
              </div>
            ))}
          </div>
        </div>
      </div>
    </>
  );
};
