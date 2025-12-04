import React, { useState, useEffect, useRef } from "react";
import "./News.css";
import News from "../../../assets/images/news.png";
import Line from "../../../assets/images/history_line.png";
import Rocket from "../../../assets/images/history_rocket.png";
import News_water from "../../../assets/images/news_water.png";
import News_bulb from "../../../assets/images/news_bulb.png";
import Homework from "../../../assets/images/homework.png";
import AOS from "aos";
import "aos/dist/aos.css";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import Slider from "react-slick";
import { NewsData, NewsDataSlider } from "../../../Data/pro";
import { MdArrowForward, MdArrowBack } from "react-icons/md";

export const NewsSection = () => {
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
    slidesToShow: 1,
    slidesToScroll: 1,
    autoplay: true,
    autoplaySpeed: 3000,
    afterChange: (index) => setActiveSlide(index),
  };

  return (
    <div className="container-fluid news_main p-0">
      <img src={News} alt="" className="news_img" />
      <img src={Line} alt="" className="news_line" />
      <img src={Rocket} alt="" className="news_rocket" />
      <div className="container news_content">
        <div className="d-flex align-items-center justify-content-between">
          <p className="news_title">News & Events</p>
          <div className="d-flex align-items-center gap-3">
            <button className="news_prev_controller" onClick={goToPrev}>
              <MdArrowBack />
            </button>
            <button className="news_prev_controller" onClick={goToNext}>
              <MdArrowForward />
            </button>
          </div>
        </div>
        <div className="row pt-4">
          <div className="col-6 d-flex gap-3 flex-column">
            {NewsData.map((news) => (
              <div key={news.id} className="news_card_body">
                <p className="news_date_title">{news.date}</p>
                <h5 className="news_desp">{news.title}</h5>
                <p className="news_sub_desp">{news.description}</p>
                <a href="#" className="news_read">
                  Read more
                </a>
              </div>
            ))}
          </div>
          <div className="col-6">
            <Slider ref={sliderRef} {...settings}>
              {NewsDataSlider.map((news) => (
                <div key={news.id} className="news_bg position-relative">
                  <p className="news_bg_date">{news.date}</p>
                  <p className="news_bg_desp">{news.title}</p>
                  <p className="news_bg_sub_desp">{news.description}</p>
                  <button className="news_btn">
                    Read more
                    <div className="news_circle">
                      <MdArrowForward className="news_circle_icon" />
                    </div>
                  </button>

                  <div className="d-flex flex-column gap-2 indicator_div">
                    {NewsDataSlider.map((_, index) => (
                      <button
                        key={index}
                        className={`news_btn_one ${
                          index === activeSlide ? "news_active" : ""
                        }`}
                        onClick={() => sliderRef.current.slickGoTo(index)} // Go to specific slide
                      ></button>
                    ))}
                  </div>
                </div>
              ))}
            </Slider>
          </div>
        </div>
      </div>
      <img src={News_water} alt="" className="news_water_img" />
      <img src={News_bulb} alt="" className="news_bulb_img" />
      <img src={Homework} alt="" className="news_homework_img" />
    </div>
  );
};
