import React, { useState, useEffect, useRef } from "react";
import "./About.css";
import { RadioButton, CardData, DropdownOptions } from "../../../Data/lmsdata";
import AOS from "aos";
import "aos/dist/aos.css";
import { FaSearch, FaBars } from "react-icons/fa";
import { IoGrid } from "react-icons/io5";
import { FaChevronLeft, FaChevronRight } from "react-icons/fa";

export const AboutSection = () => {
  const [selectedOption, setSelectedOption] = useState("all");
  const [dropOption, setDropOption] = useState("Recent Courses");
  const [hoveredOption, setHoveredOption] = useState(null);
  const [dropdownOpen, setDropdownOpen] = useState(false);
  const dropdownRef = useRef(null);
  const [searchTerm, setSearchTerm] = useState("");
  const [viewMode, setViewMode] = useState("grid");
  const [currentPage, setCurrentPage] = useState(1);

  var itemsPerPage = 12;
  // Filter courses based on search input and radio selection
  const filteredCards = CardData.filter((card) => {
    const matchesSearch = card.title
      .toLowerCase()
      .includes(searchTerm.toLowerCase());
    const matchesDropdown =
      dropOption === "Recent Courses" || card.recent === dropOption;

    if (selectedOption === "all") return matchesSearch && matchesDropdown;
    if (selectedOption === "free")
      return matchesSearch && card.free && matchesDropdown;
    if (selectedOption === "paid")
      return matchesSearch && card.paid && matchesDropdown;

    return matchesSearch;
  });

  // Calculate total pages
  const totalPages = Math.ceil(filteredCards.length / itemsPerPage);

  // Slice data for the current page
  const currentData = filteredCards.slice(
    (currentPage - 1) * itemsPerPage,
    currentPage * itemsPerPage
  );

  useEffect(() => {
    AOS.init({
      offset: 300,
      duration: 1000,
    });
  }, []);

  // Close dropdown when clicking outside
  useEffect(() => {
    const handleClickOutside = (event) => {
      if (dropdownRef.current && !dropdownRef.current.contains(event.target)) {
        setDropdownOpen(false);
      }
    };

    document.addEventListener("mousedown", handleClickOutside);
    return () => {
      document.removeEventListener("mousedown", handleClickOutside);
    };
  }, []);

  const handlePageChange = (page) => {
    if (page >= 1 && page <= totalPages) {
      setCurrentPage(page);
    }
  };

  const renderPagination = () => {
    if (totalPages <= 1) return null; 

    const pages = [1];

    if (currentPage === 1) {
      pages.push(2, "...", totalPages);
    } else {
      for (let i = 2; i <= totalPages; i++) {
        pages.push(i);
      }
    }

    return pages.map((page, index) => (
      <button
        key={index}
        className={`pagination-btn ${currentPage === page ? "active" : ""}`}
        onClick={() => typeof page === "number" && handlePageChange(page)}
        disabled={page === "..." && currentPage !== 1}
      >
        {page}
      </button>
    ));
  };

  return (
    <div className="container-fluid p-0">
      <div className="container mt-4">
        <div className="d-flex align-items-center justify-content-center gap-3">
          {RadioButton.map((option) => (
            <div className="form-check" key={option.id}>
              <input
                className="form-check-input custom-radio"
                type="radio"
                name="option"
                id={option.id}
                checked={selectedOption === option.id}
                onChange={() => setSelectedOption(option.id)}
              />
              <label className="form-check-label" htmlFor={option.id}>
                {option.label}
              </label>
            </div>
          ))}
        </div>

        <div className="search-container d-flex justify-content-between p-3 mt-4">
          {/* Grid & List Icons */}
          <div className="d-flex gap-2">
            <button
              className={`icon-btn ${
                viewMode === "grid" ? "lms-icon-active" : ""
              }`}
              onClick={() => setViewMode("grid")}
            >
              <IoGrid className="lms_icon" />
            </button>
            <button
              className={`icon-btn ${
                viewMode === "details" ? "lms-icon-active" : ""
              }`}
              onClick={() => setViewMode("details")}
            >
              <FaBars className="lms_icon" />
            </button>
          </div>

          {/* Search Bar */}
          <div className="d-none d-sm-none d-md-block">
            <div className="search-box">
              <input
                type="text"
                placeholder="Search Course"
                className="search-input"
                value={searchTerm}
                onChange={(e) => setSearchTerm(e.target.value)}
              />
              <FaSearch className="search-icon" />
            </div>
          </div>

          {/* Dropdown */}
          <div className="dropdown-wrapper">
            <p className="order-label">Order by:</p>
            <div
              className={`dropdown ${dropdownOpen ? "open" : ""}`}
              ref={dropdownRef}
            >
              <button
                className="dropdown-toggle"
                onClick={() => setDropdownOpen(!dropdownOpen)}
              >
                {dropOption}
              </button>
              <ul className="about-dropdown-menu">
                {DropdownOptions.map((option, index) => (
                  <li
                    key={index}
                    className={
                      hoveredOption
                        ? hoveredOption === option
                          ? "hover" // Apply hover styling when hovering
                          : "" // Remove active styling when hovering
                        : dropOption === option
                        ? "active" // Apply active styling when no hover
                        : ""
                    }
                    onClick={() => {
                      setDropOption(option);
                      setDropdownOpen(false);
                    }}
                    onMouseEnter={() => setHoveredOption(option)} // Track hovered item
                    onMouseLeave={() => setHoveredOption(null)} // Reset hover on exit
                  >
                    {option}
                  </li>
                ))}
              </ul>
            </div>
          </div>
        </div>

        {/* Grid Data */}
        {viewMode === "grid" && (
          <div className="row mt-4">
            {filteredCards.length > 0 ? (
              currentData.map((card, index) => (
                <div key={index} className="col-md-6 col-lg-4 col-xl-3">
                  <div className="mb-4">
                    <img
                      src={card.img}
                      className="lms_card_img"
                      alt={card.title}
                    />
                    <div className="card-body mt-3">
                      <div className="d-flex align-items-center justify-content-between">
                        <p className="lms-card-main-title">{card.lang}</p>
                        {card.free ? (
                          <p className="lms-card-rate">{card.free}</p>
                        ) : (
                          <div>
                            <span className="lms-card-rates">{card.paid}</span>{" "}
                            <del className="lms-card-rate">{card.redprice}</del>
                          </div>
                        )}
                      </div>
                      <h5 className="lms-card-title">{card.title}</h5>
                      <p className="lms-card-desp">
                        {card.desp.split(" commodo")[0] + " commodo..."}
                      </p>
                      <div className="d-flex align-items-center justify-content-between mt-4">
                        <button className="lms-card-btn">{card.btn}</button>
                        <div className="d-flex align-items-center gap-xl-2 gap-xxl-3">
                          <p className="lms-card-number">{card.no}</p>
                          <img
                            src={card.starimg}
                            alt="Rating"
                            className="lms-rating-img"
                          />
                          <p className="lms-card-number">{card.number}</p>
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
              ))
            ) : (
              <p className="lms-card-no-product">No matching courses found.</p>
            )}
          </div>
        )}

        {/* Render Details View */}
        {viewMode === "details" && (
          <div className="mt-4">
            {filteredCards.length > 0 ? (
              currentData.map((card, index) => (
                <div key={index} className="row align-items-center mb-4">
                  <div className="col-5">
                    <img
                      src={card.img}
                      className="lms_card_img"
                      alt={card.title}
                    />
                  </div>
                  <div className="col-7">
                    <div className="d-flex align-items-center justify-content-between">
                      <p className="lms-card-main-title">{card.lang}</p>
                      {card.free ? (
                        <p className="lms-card-rate">{card.free}</p>
                      ) : (
                        <div>
                          <span className="lms-card-rates">{card.paid}</span>{" "}
                          <del className="lms-card-rate">{card.redprice}</del>
                        </div>
                      )}
                    </div>
                    <h3 className="lms-card-title">{card.title}</h3>
                    <p className="lms-card-desp">
                      {card.desp.split(" consectet")[0] + " consectet...."}
                    </p>
                    <button className="lms-card-btn mt-3">{card.btn}</button>
                    <div className="d-flex align-items-center justify-content-end gap-3">
                      <p className="lms-card-number">{card.no}</p>
                      <img
                        src={card.starimg}
                        alt="Rating"
                        className="lms-rating-img"
                      />
                      <p className="lms-card-number">{card.number}</p>
                    </div>
                  </div>
                </div>
              ))
            ) : (
              <p className="lms-card-no-product">No matching courses found.</p>
            )}
          </div>
        )}

        {/* Pagination (Only if data exists) */}
        {currentData.length > 0 && (
          <div className="pagination">
            {currentPage > 1 && (
              <button
                className="prev-btn"
                onClick={() => handlePageChange(currentPage - 1)}
              >
                <FaChevronLeft />
              </button>
            )}
            {renderPagination()}
            {currentPage < totalPages && (
              <button
                className="next-btn"
                onClick={() => handlePageChange(currentPage + 1)}
              >
                <FaChevronRight />
              </button>
            )}
          </div>
        )}
      </div>
    </div>
  );
};
