import React, { useState, useCallback } from "react";
// Assuming you use 'react-router-dom' v6, but keeping 'react-router' Link for fidelity
import { Link } from "react-router"; 
import "./Navbar.css";
// NOTE: For real-world use, prefer placing images directly in the public folder or using bundler imports
import Navbar_line from "../assets/images/navbar.png"; 
import Logo from "../assets/images/logo.png";
import {
  MdKeyboardArrowDown,
  MdKeyboardArrowUp,
  MdArrowForward,
} from "react-icons/md";
import { IoReorderThreeOutline } from "react-icons/io5";
// Ensure this file exports an array of link objects
import navbarlinks from "../Data/navbar"; 

export const CustomNavbar = () => {
  // State for desktop dropdown (on hover)
  const [openDropdownIndex, setOpenDropdownIndex] = useState(null);
  // State for mobile menu toggle
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  // State for mobile dropdowns (on click)
  const [mobileOpenDropdownIndex, setMobileOpenDropdownIndex] = useState(null);

  // Use useCallback for function stability
  const toggleMenu = useCallback(() => {
    setIsMenuOpen(prev => !prev);
    // Reset mobile dropdown when main menu is closed
    if (isMenuOpen) {
      setMobileOpenDropdownIndex(null);
    }
  }, [isMenuOpen]);

  const handleMobileDropdownClick = useCallback((index) => {
    setMobileOpenDropdownIndex(prevIndex => (prevIndex === index ? null : index));
  }, []);

  // Function to close the main menu after clicking a link
  const closeMenu = useCallback(() => {
    setIsMenuOpen(false);
    setMobileOpenDropdownIndex(null); // Also ensure all sub-menus are closed
  }, []);

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
          {/* Logo Link */}
          <Link to="/">
            <img src={Logo} alt="Logo" className="navbar-logo" />
          </Link>

          {/* --- DESKTOP NAV LINKS (Visible lg and up) --- */}
          <div className="d-none d-lg-block">
            <div className="d-flex gap-lg-2 gap-xl-2 gap-xxl-3 align-items-center">
              {navbarlinks.map((link, index) => (
                <div
                  key={`desktop-${index}`}
                  className="position-relative"
                  // Use separate handlers for better clarity
                  onMouseEnter={() => setOpenDropdownIndex(index)}
                  onMouseLeave={() => setOpenDropdownIndex(null)}
                >
                  <div className="navbar_link">
                    {link.menuItems ? (
                      // Dropdown main item
                      <>
                        {link.label}
                        {openDropdownIndex === index ? (
                          <MdKeyboardArrowUp className="navbar_icon" />
                        ) : (
                          <MdKeyboardArrowDown className="navbar_icon" />
                        )}
                      </>
                    ) : (
                      // Direct link
                      <Link className="lms_page" to={link.link} activeClassName="active-link">
                        {link.label}
                      </Link>
                    )}
                  </div>

                  {/* Desktop Dropdown Menu */}
                  {openDropdownIndex === index && link.menuItems && (
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
          
          {/* Right-side elements */}
          <div className="d-flex align-items-center gap-2">
            {/* Admission Button (Visible lg and up) */}
            <div className="d-none d-lg-block">
              <Link to="/admissionnow" style={{ textDecoration: "none", color: "inherit" }}>
                <button className="navbar_btn" type="button">
                  Admission Now 
                  <div className="navbar_circle">
                    <MdArrowForward className="navbar_circle_icon" />
                  </div>
                </button>
              </Link>
            </div>
            
            {/* Hamburger Toggle Icon (Visible below lg) */}
            <div className="navbar_toggle d-lg-none" onClick={toggleMenu}>
              <IoReorderThreeOutline />
            </div>
          </div>
        </div>

        {/* --- MOBILE NAV MENU (Conditional rendering based on isMenuOpen) --- */}
        {isMenuOpen && (
          <div className="mobile_nav_menu d-lg-none">
            {navbarlinks.map((link, index) => (
              <div key={`mobile-${index}`} className="mobile_menu_item">
                {link.menuItems ? (
                  // Mobile Dropdown Item (Toggles sub-menu on click)
                  <div
                    className="mobile_dropdown_header"
                    onClick={() => handleMobileDropdownClick(index)}
                  >
                    {link.label}
                    {mobileOpenDropdownIndex === index ? (
                      <MdKeyboardArrowUp className="navbar_icon" />
                    ) : (
                      <MdKeyboardArrowDown className="navbar_icon" />
                    )}
                  </div>
                ) : (
                  // Mobile Direct Link
                  <Link
                    className="mobile_link"
                    to={link.link}
                    // Close menu when a direct link is clicked
                    onClick={closeMenu}
                  >
                    {link.label}
                  </Link>
                )}

                {/* Mobile Dropdown Sub-Menu */}
                {mobileOpenDropdownIndex === index && link.menuItems && (
                  <div className="mobile_dropdown_submenu">
                    {link.menuItems.map((item, i) => (
                      <Link
                        to={item.link}
                        className="mobile_dropdown_item"
                        key={i}
                        // Close menu when a sub-link is clicked
                        onClick={closeMenu}
                      >
                        {item.label}
                      </Link>
                    ))}
                  </div>
                )}
              </div>
            ))}
            
            {/* Mobile Admission Button */}
            <Link to="/admissionnow" className="w-full mt-4" onClick={closeMenu}>
              <button className="navbar_btn w-full justify-content-center" type="button">
                Admission Now
                <div className="navbar_circle">
                  <MdArrowForward className="navbar_circle_icon" />
                </div>
              </button>
            </Link>
          </div>
        )}
      </div>
    </div>
  );
};