import React, { useState } from "react";
import "./Footer.css";
import Logo from "../assets/images/logo.svg";
import { IoLocationOutline } from "react-icons/io5";
import { MdOutlinePhone } from "react-icons/md";
import { MdOutlineEmail } from "react-icons/md";
import { FaFacebookF, FaInstagram } from "react-icons/fa";
import Cloud from "../assets/images/facilities/cloud.png";
import Sun from "../assets/images/facilities/sun.png";
import Girl from "../assets/images/facilities/girl.png";
import Hand from "../assets/images/facilities/hand.png";
import Person from "../assets/images/facilities/per.png";
import { FaXTwitter } from "react-icons/fa6";
import { IoIosSend } from "react-icons/io";

export const Footer = () => {
  return (
    <footer className="container-fluid footer_bg p-0 mt-4">
      <div className="container footer_main position-relative">
        <img src={Person} alt="" className="footer-person" />
        <img src={Cloud} alt="" className="footer-cloud" />
        <img src={Cloud} alt="" className="footer-cloud-one" />
        <img src={Sun} alt="" className="footer-sun" />
        <div className="d-flex justify-content-center align-items-center flex-column">
          <img src={Logo} alt="" className="footer_logo" />
          <p className="footer_desp">
            In the year 1998, Future Foundation School started its journey to
            meet the goals set by the leadership.
          </p>
        </div>
        <div className="row mt-4">
          {/* Quick Links */}
          <div className="col-md-3">
            <h5 className="link_item">Quick Links</h5>
            <ul className="list-unstyled d-flex flex-column gap-3">
              <li>
                <a
                  href="/"
                  className="text-decoration-none text-white footer_link"
                >
                  Home
                </a>
              </li>
              <li>
                <a
                  href="#"
                  className="text-decoration-none text-white footer_link"
                >
                  About Us
                </a>
              </li>
              <li>
                <a
                  href="#"
                  className="text-decoration-none text-white footer_link"
                >
                  Docs
                </a>
              </li>
              <li>
                <a
                  href="#"
                  className="text-decoration-none text-white footer_link"
                >
                  Downloads
                </a>
              </li>
              <li>
                <a
                  href="#"
                  className="text-decoration-none text-white footer_link"
                >
                  Events
                </a>
              </li>
              <li>
                <a
                  href="#"
                  className="text-decoration-none text-white footer_link"
                >
                  Contact Us
                </a>
              </li>
            </ul>
          </div>

          {/* Others */}
          <div className="col-md-3">
            <h5 className="link_item">Others</h5>
            <ul className="list-unstyled d-flex flex-column gap-3">
              <li>
                <a
                  href="#"
                  className="text-decoration-none text-white footer_link"
                >
                  Explore VPS
                </a>
              </li>
              <li>
                <a
                  href="#"
                  className="text-decoration-none text-white footer_link"
                >
                  Events
                </a>
              </li>
              <li>
                <a
                  href="#"
                  className="text-decoration-none text-white footer_link"
                >
                  Franchise Offer
                </a>
              </li>
              <li>
                <a
                  href="#"
                  className="text-decoration-none text-white footer_link"
                >
                  Feedback
                </a>
              </li>
              <li>
                <a
                  href="#"
                  className="text-decoration-none text-white footer_link"
                >
                  Complain
                </a>
              </li>
            </ul>
          </div>

          {/* Contact Details */}
          <div className="col-md-3">
            <h5 className="link_item">Contact Details</h5>
            <div className="d-flex flex-column gap-3">
              <div className="d-flex gap-3">
                <IoLocationOutline className="footer_icon" />
                <p className="footer_loc">
                  Bandi Khana Chowk, Murree Road, Rawalpindi
                </p>
              </div>
              <div className="d-flex align-items-center gap-3">
                <MdOutlinePhone className="footer_icon" />
                <p className="footer_loc">051-0000007</p>
              </div>
              <div className="d-flex align-items-center gap-3">
                <MdOutlineEmail className="footer_icon" />
                <p className="footer_loc">info@fttrack.pk</p>
              </div>
            </div>
          </div>

          {/* Newsletter Subscription */}
          <div className="col-md-3">
            <h5 className="link_item">Subscribe our Newsletter</h5>
            <div className="footer_input">
              <input
                type="email"
                className="footer_input_body"
                placeholder="Email"
              />
              <button className="footer_btn">
                <IoIosSend />
              </button>
            </div>
            <div className="d-flex align-items-center gap-3 mt-4">
              <a href="#">
                <FaFacebookF className="footer_icon" />
              </a>
              <a href="#">
                <FaInstagram className="footer_icon" />
              </a>
              <a href="#">
                <FaXTwitter className="footer_icon" />
              </a>
            </div>
          </div>
        </div>
        <img src={Girl} alt="" className="footer-girl" />
        <img src={Hand} alt="" className="footer-hand" />
        <img src={Cloud} alt="" className="footer-cloud-two" />
        <p className="footer_copyright">
          Copyright © 2024 Future Foundation Schools. All Right Reserved.
        </p>
        <div className="d-flex justify-content-center">
          <div className="footer_line" />
        </div>
      </div>
    </footer>
  );
};
