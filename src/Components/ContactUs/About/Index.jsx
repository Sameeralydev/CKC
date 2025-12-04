import React, { useEffect } from "react";
import "./About.css";
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

          <h2 className="office-name">CKC (HEAD OFFICE)</h2>

          <p className="office-address">
            47 Rachna Block Allama Iqbal Town, Lahore, Pakistan, 54000   </p>
          <div className="phone-row">
            <FaPhoneAlt className="phone-icon" />
            <span>0335 4677850
</span>
          </div>

          <div className="email-row">
            <MdEmail className="email-icon" />
            <span>ckcseniorcampus@gmail.com</span>
          </div>
        </div>

        {/* RIGHT SIDE GOOGLE MAP */}
        <div className="contact-map">
          <iframe
            title="CKC Map"
            src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d5456.456905168348!2d74.28240618326417!3d31.51203050375939!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x3919030a59922d11%3A0xb268c975b602d932!2sCrescent%20Kids%20Campus%20High%20School!5e0!3m2!1sen!2s!4v1764852669637!5m2!1sen!2s"
            allowFullScreen=""
            loading="lazy"
            referrerPolicy="no-referrer-when-downgrade"
          ></iframe>
        </div>

      </div>
    </div>
  );
};
