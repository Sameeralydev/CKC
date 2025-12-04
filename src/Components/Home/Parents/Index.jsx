import React, { useState, useEffect, useRef } from "react";
import "./Parents.css";
import News from "../../../assets/images/news.png";
import Line from "../../../assets/images/history_line.png";
import AOS from "aos";
import "aos/dist/aos.css";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import Slider from "react-slick";
import { Testimonials } from "../../../Data/pro";
import { MdArrowForward, MdArrowBack } from "react-icons/md";

export const ParentsSection = () => {
  useEffect(() => {
    AOS.init({
      offset: 300,
      duration: 1000,
    });
  }, []); // Run this effect only once when the component mounts

  const [activeSlide, setActiveSlide] = useState(0);
  const sliderRef = useRef(null);

  const goToNext = () => {
    if (sliderRef.current) {
      sliderRef.current.slickNext();
    }
  };

  // Function to go to the previous slide
  const goToPrev = () => {
    if (sliderRef.current) {
      sliderRef.current.slickPrev();
    }
  };

  const settings = {
    dots: false,
    infinite: true,
    speed: 500,
    slidesToShow: 2.8, // Showing part of the fourth card
    slidesToScroll: 1,
    centerMode: true,
    autoplay: true,
    autoplaySpeed: 3000,
    centerPadding: "30px", // Adjust this for better alignment
    beforeChange: (current, next) => setActiveSlide(next),
    responsive: [
      {
        breakpoint: 1024,
        settings: {
          slidesToShow: 2.5, // Show 2 fully, part of 3rd
          centerPadding: "20px",
        },
      },
      {
        breakpoint: 768,
        settings: {
          slidesToShow: 1.2, // Show 1 fully, part of 2nd
          centerPadding: "15px",
        },
      },
    ],
  };

  return (
    <div className="container-fluid parents_main p-0">
      <div className="container">
        <div className="d-flex align-items-center justify-content-between">
          <p className="news_title">Parents Reviews</p>
          <div className="d-flex align-items-center gap-3">
            <button className="news_prev_controller" onClick={goToPrev}>
              <MdArrowBack />
            </button>
            <button className="news_prev_controller" onClick={goToNext}>
              <MdArrowForward />
            </button>
          </div>
        </div>
      </div>
      <Slider ref={sliderRef} {...settings}>
        {Testimonials.map((item, index) => (
          <div key={item.id} className="ps-2 pe-2 mt-4">
            <div
              className={`parents_main_card ${
                index === activeSlide ? "parents_active" : "parent_card"
              }`}
            >
              <div className="mb-2">
                <img src={item.star} alt="" />
              </div>
              <p className="parent_title">{item.review}</p>
              <div className="d-flex items-center gap-4 mt-5">
                <div>
                  <img src={item.image} alt={item.name} />
                </div>
                <div className="d-flex gap-2 flex-column">
                  <p
                    className={`${
                      index === activeSlide ? "parent_title" : "parent_title_color"
                    }`}
                  >
                    {item.name}
                  </p>
                  <p className="parent_date">{item.date}</p>
                </div>
              </div>
            </div>
          </div>
        ))}
      </Slider>
    </div>
  );
};
