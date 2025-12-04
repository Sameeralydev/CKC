import React, { useState } from "react";
import { Link } from "react-router";
import "./Navbar.css";
import Navbar_line from "../assets/images/navbar.png";
import Logo from "../assets/images/logo.png";
import {
  MdKeyboardArrowDown,
  MdKeyboardArrowUp,
  MdArrowForward,
} from "react-icons/md";
import { IoReorderThreeOutline } from "react-icons/io5";
import navbarlinks from "../Data/navbar";

export const CustomNavbar = () => {
  const [openDropdown, setOpenDropdown] = useState(null);

  return (
    <div className="container-fluid navbar_bg">
      <div className="container position-relative">
        <img
          src={Navbar_line}
          alt=""
          className="position-absolute top-0"
          style={{ width: "98%" }}
        />
        <div className="d-flex justify-content-between align-items-center pt-3 pb-2">
          <Link to="/">
            <img src={Logo} alt="Logo" className="navbar-logo" />
          </Link>
          <div className="d-none d-sm-none d-lg-block">
            <div className="d-flex gap-lg-2 gap-xl-2 gap-xxl-3 align-items-center">
              {/* <Link to="/" className="homes">
                <div className="navbar_home">Home</div>
              </Link> */}
              {navbarlinks.map((link, index) => (
                <div
                  key={index}
                  className="position-relative"
                  onMouseEnter={() => setOpenDropdown(index)}
                  onMouseLeave={() => setOpenDropdown(null)}
                >
                  <div className="navbar_link">
                    {link.menuItems ? (
                      <>
                        {link.label}
                        {openDropdown === index ? (
                          <MdKeyboardArrowUp className="navbar_icon" />
                        ) : (
                          <MdKeyboardArrowDown className="navbar_icon" />
                        )}
                      </>
                    ) : (
                      <Link className="lms_page" to={link.link} activeClassName="active-link">{link.label}</Link> // Render direct link for last two items
                    )}
                  </div>

                  {/* Dropdown Menu */}
                  {openDropdown === index && link.menuItems && (
                    <div className="dropdown_menu">
                      {link.menuItems.map((item, i) => (
                        <Link to={item.link} className="dropdown_item" key={i}>
                          {item.label}
                        </Link>
                      ))}
                    </div>
                  )}
                </div>
              ))}
            </div>
          </div>
          <div className="d-flex align-items-center gap-2">
            <div className="d-none d-sm-none d-lg-block">
              <Link to="/admissionnow" style={{ textDecoration: "none", color: "inherit" }}>
                <button className="navbar_btn" type="button">
                  Admission Now
                  <div className="navbar_circle">
                    <MdArrowForward className="navbar_circle_icon" />
                  </div>
                </button>
              </Link>
            </div>
            <div className="navbar_toggle d-lg-none">
              <IoReorderThreeOutline />
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};
