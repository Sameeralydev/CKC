import React, { useState, useEffect } from "react";
import "./Register.css";
import Register from "../../../assets/images/register.png";
import { MdArrowForward } from "react-icons/md";
import AOS from "aos";
import "aos/dist/aos.css";

export const RegisterSection = () => {
  useEffect(() => {
    AOS.init({
      offset: 300,
      duration: 1000,
    });
  }, []); // Run this effect only once when the component mounts

  const handleContactNavigate = () => {
    window.location.href = "/contact-us";
  };
  return (
    <div className="container-fluid p-0 register_bg">
      <div className="row m-0 register_main">
        <div className="col-lg-6 p-0">
          <img src={Register} alt="" data-aos="fade-up" />
        </div>
        <div className="col-lg-6">
          <p className="reg_name" data-aos="fade-up">
            Register Yourself For Franchise
          </p>
          <p className="reg_desp" data-aos="fade-up">
            We aim to inspire critical thinkers and look at the world
            differently and about challenging them to be fascinated by lessons
            and subjects.
          </p>
          <div className="d-flex align-items-center gap-3" data-aos="fade-up">
            <button className="reg_btn" >
              Download Franchise Kit
              <div className="reg_circle">
                <MdArrowForward className="reg_circle_icon" />
              </div>
            </button>
            <button className="reg_btn_one" onClick={handleContactNavigate}>
              Contact Us
              <div className="reg_circle">
                <MdArrowForward className="reg_circle_icon" />
              </div>
            </button>
          </div>
        </div>
      </div>
    </div>
  );
};
