import React, { useEffect } from "react";
import "./Bring.css";
import Fish from "../../../assets/images/facilities/fish.png";
import Cycle from "../../../assets/images/facilities/cycle.png";
import Person from "../../../assets/images/facilities/person.jpg";
import Grass from "../../../assets/images/facilities/grass.png";
import AOS from "aos";
import "aos/dist/aos.css";

export const BringSection = () => {
  useEffect(() => {
    AOS.init({
      offset: 300,
      duration: 1000,
    });
  }, []);

  return (
    <div className="container-fluid p-0 bg-bring-fc-color">
      <div className="container pt-3 pb-2">
        <div className="row">
          <div className="col-lg-6">
            <img src={Fish} alt="" />
            <h2 className="text-white">Creativity Is The Way of Seeing</h2>
            <h1 className="text-white">Bringing Great Design Ideas To Life</h1>
            <p className="text-white">
              Justo eget magna fermentum iaculis en non diam. Pellentesque eu
              tincidunt tortor aliquam nulla facilisi cras. Volutpat consequat
              mauris nunc congue nisi vitae suscipit.
            </p>
            <div className="position-relative">
              <button
                className="lms-card-btn"
                style={{ background: "white", color: "black" }}
              >
                More Videos
              </button>
              <img src={Cycle} alt="" className="bring-img" />
            </div>
            <img src={Grass} alt="" className="bring-grass-img" />
          </div>
          <div className="col-lg-6 relative flex justify-center items-center">
            <div className="wave-container">
              <img src={Person} alt="Kids playing" className="wave-image" />
              {/* Play Button with Waves */}
              <div className="play-button">
                <div className="wave wave1"></div>
                <div className="wave wave2"></div>
                <div className="wave wave3"></div>
                <div className="play-icon">
                  <svg
                    xmlns="http://www.w3.org/2000/svg"
                    viewBox="0 0 24 24"
                    fill="white"
                    width="40"
                    height="40"
                  >
                    <path d="M8 5v14l11-7z" />
                  </svg>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};
