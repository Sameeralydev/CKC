import React, { useEffect } from "react";
import "./About.css";
import About from "../../../assets/images/facilities/about.png";
import About_one from "../../../assets/images/facilities/about-one.png";
import About_two from "../../../assets/images/facilities/about-two.png";
import { FaPhoneAlt } from "react-icons/fa";
import { MdEmail } from "react-icons/md";
import { FaBuilding } from "react-icons/fa";

export const ContactSection = () => {
  return (
    <div className="contact-wrapper container-fluid p-0 mt-5">
      <div className="contact-container">

        {/* LEFT SIDE TEXT */}
        <div className="contact-info">
          <h3 className="contact-title">
            <FaBuilding className="icon-orange" /> Head Office
          </h3>

          <h2 className="office-name">FFS (HEAD OFFICE)</h2>

          <p className="office-address">
            Baraf Khana Chowk Misrial Road Rawalpindi   </p>
          <div className="phone-row">
            <FaPhoneAlt className="phone-icon" />
            <span>051-5680007</span>
          </div>

          <div className="email-row">
            <MdEmail className="email-icon" />
            <span>info@ffs.edu.pk</span>
          </div>
        </div>

        {/* RIGHT SIDE GOOGLE MAP */}
        <div className="contact-map">
          <iframe
            title="RILLS Map"
            src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3320.19232627058!2d74.2005!3d32.1694!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x391eead20ac42f1b%3A0x56e96365e6a85ee8!2sRILLS%20SCHOOL!5e0!3m2!1sen!2s!4v1700000000"
            allowFullScreen=""
            loading="lazy"
            referrerPolicy="no-referrer-when-downgrade"
          ></iframe>
        </div>

      </div>
    </div>
  );
};
