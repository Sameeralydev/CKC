import React, { useState, useEffect, useCallback } from "react";
import "./Hero.css";
// import Dream from "../../../assets/video/DREAM.mp4"; // Kept video commented out

// --- SLIDER IMAGE IMPORTS (NEW/MODIFIED) ---
import owner from "../../../assets/images/owner.jpg"; // Used as Image 1
import SliderImageTwo from "../../../assets/images/hero_two_slider.jpg"; // Placeholder for Image 2 (YOU MUST CREATE/UPDATE THIS PATH)
import SliderImageThree from "../../../assets/images/hero_three_slider.jpg"; // Placeholder for Image 3 (YOU MUST CREATE/UPDATE THIS PATH)
// --- END SLIDER IMAGE IMPORTS ---

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
import { MdArrowForward, MdArrowBackIos, MdArrowForwardIos } from "react-icons/md"; // Added slider icons
import AOS from "aos";
import "aos/dist/aos.css";

// Define the array of images for the slider
const sliderImages = [
  { id: 1, src: owner, alt: "Owner Image" },
  { id: 2, src: SliderImageTwo, alt: "Second Slide" },
  { id: 3, src: SliderImageThree, alt: "Third Slide" },
];

export const HeroSection = () => {
  // State for Modal
  const [modalOpen, setModalOpen] = useState(false);
  // State for Slider
  const [currentIndex, setCurrentIndex] = useState(0);

  // --- AOS Initialization ---
  useEffect(() => {
    AOS.init({
      offset: 300,
      duration: 1000,
    });
  }, []);

  // --- SLIDER LOGIC ---
  const nextSlide = useCallback(() => {
    setCurrentIndex((prevIndex) => 
      prevIndex === sliderImages.length - 1 ? 0 : prevIndex + 1
    );
  }, []);

  const prevSlide = () => {
    setCurrentIndex((prevIndex) => 
      prevIndex === 0 ? sliderImages.length - 1 : prevIndex - 1
    );
  };
  
  // Optional: Auto-play effect
  useEffect(() => {
    const intervalId = setInterval(nextSlide, 5000); // Change image every 5 seconds
    return () => clearInterval(intervalId); // Cleanup interval on unmount
  }, [nextSlide]);
  // --- END SLIDER LOGIC ---

  // --- Modal Styles (Inline styles are often better converted to CSS classes) ---
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
  // --- End Modal Styles ---

  return (
    <div className="container-fluid p-0 position-relative hero_main_div">
      
      {/* ------------------------------------------------------------------- */}
      {/* 🛑 SLIDER IMPLEMENTATION HERE 🛑 */}
      {/* ------------------------------------------------------------------- */}
      <div className="video_container slider_container">
        {/* 1. Image Display */}
        <div className="slider_image_wrapper">
          <img 
            src={sliderImages[currentIndex].src} 
            alt={sliderImages[currentIndex].alt}
            className="slider_image"
          />
        </div>

        {/* 2. Navigation Arrows */}
        <button className="slider_control slider_prev" onClick={prevSlide} aria-label="Previous image">
          <MdArrowBackIos />
        </button>
        <button className="slider_control slider_next" onClick={nextSlide} aria-label="Next image">
          <MdArrowForwardIos />
        </button>

        {/* 3. Navigation Dots */}
        <div className="slider_dots">
          {sliderImages.map((_, index) => (
            <span
              key={index}
              className={`dot ${currentIndex === index ? "active_dot" : ""}`}
              onClick={() => setCurrentIndex(index)}
              aria-label={`Go to image ${index + 1}`}
            />
          ))}
        </div>
      </div>
      {/* ------------------------------------------------------------------- */}
      {/* 🛑 END SLIDER IMPLEMENTATION 🛑 */}
      {/* ------------------------------------------------------------------- */}

      <img src={Hero} alt="" className="hero_img " />
      <img src={Hero_one} alt="" className="hero_img_one " />
      <img src={Hero_two} alt="" className="hero_img_two " />
      <img src={Hero_line} alt="" className="hero_line_img " />
      <img src={Hero_rocket} alt="" className="hero_rocket_img " />
      
      <div className="container position-relative hero_div ">
        <div className="row">
          <div className="col-lg-6 ps-4 pe-4 ps-sm-0 pe-sm-0" data-aos="fade-left">
            {/* ... (Hero Content) ... */}
            <p className="hero_title">About Us</p>
            <p className="hero_sub_title">A Leading School Chain in Pakistan</p>
            <p className="hero_desp">
              In the year 1998, Cresent Kids Campus started its journey to
              meet the goals set by the leardership of John Doe. Since then it has been continuously growing by
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
            {/* ... (Hero Image Column) ... */}
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

      {/* --- Modal Content --- */}
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
            <p className="modal-desp" style={{ fontFamily: "Montserrat", marginBottom: "0.5rem", lineHeight: 1.6 }}>
              The inspiration behind establishing Crescent Kids Campus came from our visionary leader, Mr. Ahmed Raza, who held a strong ambition to uplift the community through quality education. Throughout his career, he dedicated his efforts to improving various aspects of the educational system.
              In 1998, Crescent Kids Campus began its journey to fulfill the vision set by Mr. Ahmed Raza and Mrs. Ahmed Raza. Since its inception, the campus has continuously progressed, by the grace of ALLAH Almighty. Over the years, it has achieved several educational and societal milestones, always staying committed to promoting national and Islamic values while enhancing academic standards.
              Crescent Kids Campus has proudly secured 1st position worldwide in the Federal Board examinations — achieving this remarkable accomplishment twice, once in 2019, and again in 2024.
            </p>
          </div>
        </div>
      )}
    </div>
  );
};