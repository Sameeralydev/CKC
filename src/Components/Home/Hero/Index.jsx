import React, { useState, useEffect, useRef } from "react";
import "./Hero.css";
import Dream from "../../../assets/video/DREAM.mp4";
import Hero from "../../../assets/images/hero_one.png";
import Hero_one from "../../../assets/images/hero_two.png";
import Hero_two from "../../../assets/images/hero.png";
import Hero_line from "../../../assets/images/hero_line.png";
import Hero_rocket from "../../../assets/images/hero_rocket.png";
import Hero_Img_one from "../../../assets/images/hero_img_one.png";
import Hero_Img from "../../../assets/images/hero_img.png";
import Hero_ellipse from "../../../assets/images/hero_ellipse.png";
import Hero_three from "../../../assets/images/hero_three.png";
import About from "../../../assets/images/about_bg.png";
import { MdArrowForward } from "react-icons/md";
import AOS from "aos";
import "aos/dist/aos.css";

export const HeroSection = () => {
  useEffect(() => {
    AOS.init({
      offset: 300,
      duration: 1000,
    });
  }, []); // Run this effect only once when the component mounts

  const [modalOpen, setModalOpen] = useState(false);

  const overlayStyle = {
    position: "fixed",
    inset: 0,
    backgroundColor: "rgba(0,0,0,0.5)",
    display: "flex",
    alignItems: "center",
    justifyContent: "center",
    zIndex: 1200,
  };

  const modalStyle = {
    background: "#2B2E82",
    color: "#ffffff",
    padding: "1.75rem",
    borderRadius: "8px",
    width: "90%",
    maxWidth: "640px",
    boxShadow: "0 6px 24px rgba(13,110,253,0.3)",
    position: "relative",
  };

  const closeBtnStyle = {
    position: "absolute",
    top: "10px",
    right: "10px",
    background: "red",
    border: "none",
    color: "#fff",
    fontSize: "1.5rem",
    cursor: "pointer",
    lineHeight: 1,
  };

  return (
    <div className="container-fluid p-0  position-relative hero_main_div">
      <div className="video_container">
        <video controls width="100%" autoPlay muted loop id="customVideo">
          <source src={Dream} type="video/mp4" />
          Your browser does not support the video tag.
        </video>
      </div>
      <img src={Hero} alt="" className="hero_img " />
      <img src={Hero_one} alt="" className="hero_img_one " />
      <img src={Hero_two} alt="" className="hero_img_two " />
      <img src={Hero_line} alt="" className="hero_line_img " />
      <img src={Hero_rocket} alt="" className="hero_rocket_img " />
      <div className="container position-relative hero_div ">
        <div className="row">
          <div className="col-lg-6 ps-4 pe-4 ps-sm-0 pe-sm-0" data-aos="fade-left">
            <p className="hero_title">About Us</p>
            <p className="hero_sub_title">A Leading School Chain in Pakistan</p>
            <p className="hero_desp">
              In the year 1998, Future Foundation School started its journey to
              meet the goals set by the leardership of Rana Sohail Ahmad & Mrs.
              Rana Sohail Ahmad. Since then it has been continuously growing by
              the grace of ALLAH Alimighty.
            </p>
            <p className="hero_desp pt-4">
              The school is convering its educational and societal milestones
              ove time as we are always committed to contributing our best to
              promote National and Islamic values by uplifting the Educational
              Standards.
            </p>
            <button
              className="hero_btn"
              aria-label="Explore now"
              type="button"
              onClick={() => setModalOpen(true)}
            >
              Explore Now
              <div className="hero_circle">
                <MdArrowForward className="hero_circle_icon" />
              </div>
            </button>
          </div>
          <div
            className="col-lg-6 d-flex justify-content-center position-relative mt-4 mt-sm-4 mt-md-4 mt-lg-0"
            data-aos="fade-right"
          >
            <img src={Hero_Img_one} alt="" className="hero_second_img" />
            <img src={Hero_Img} alt="" className="hero_main_img" />
            <img src={Hero_ellipse} alt="" className="hero_ellipse" />
            <img src={Hero_ellipse} alt="" className="hero_ellipse_one" />
          </div>
        </div>
      </div>
      <img src={Hero_three} alt="" className="hero_img_three" />
      <div className="position-relative">
        <img src={About} alt="" className="about_img" />
      </div>

      {modalOpen && (
        <div
          style={overlayStyle}
          role="dialog"
          aria-modal="true"
          aria-label="Information modal"
        >
          <div style={modalStyle}>
            <button
              onClick={() => setModalOpen(false)}
              aria-label="Close modal"
              className="buttonStyle"
            >
              &times;
            </button>

            <h3 className="modal-head" >About Future Foundation</h3>
            <p className="modal-desp" style={{ fontFamily:"Montserrat", marginBottom: "0.5rem", lineHeight: 1.6 }}>
              The inspiration behind establishing Future Foundation School came from our leader, Rana Sohail Ahmad, who had a strong ambition to reform the community through education. Throughout his career, he made significant efforts to improve various aspects of education in society. In 1998, Future Foundation School embarked on its journey to fulfill the vision set by Rana Sohail Ahmad and Mrs. Rana Sohail Ahmad. Since its inception, the school has been continuously growing, thanks to the grace of ALLAH Almighty. Over time, the school has achieved numerous educational and societal milestones, always remaining committed to promoting national and Islamic values while uplifting educational standards. Future Foundation School has proudly secured 1st position worldwide in the Federal Board examinations, achieving this remarkable feat two times, once in 2019 and again in 2024.
            </p>
           
          </div>
        </div>
      )}
    </div>
  );
};
