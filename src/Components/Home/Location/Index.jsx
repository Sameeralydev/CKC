import React, { useEffect } from "react";
import "./Location.css";
import Map from "../../../assets/images/map_icon.png";
import Circle from "../../../assets/images/map_circle.png";
import location_line from "../../../assets/images/location_line.png";
import Maps from "../../../assets/images/map.png";
import Map_one from "../../../assets/images/map_one.png";
import Map_two from "../../../assets/images/map_two.png";
import Map_circle from "../../../assets/images/cur_circle.png";
import Map_rocket from "../../../assets/images/about_rocket.png";
import AOS from "aos";
import "aos/dist/aos.css";

export const LocationSection = () => {
  useEffect(() => {
    AOS.init({
      offset: 300,
      duration: 1000,
    });
  }, []);

  return (
    <div className="container-fluid location_main_div p-0 overflow-hidden">
      <div className="row m-0">
        <div className="col-lg-6 p-0 location_bg position-relative">
          <img src={Map} alt="" className="map_icon" data-aos="fade-left" />
          <img
            src={Circle}
            alt=""
            className="map_yellow_circle"
            data-aos="fade-left"
          />
          <div className="position-relative">
            <img
              src={location_line}
              alt=""
              className="map_line"
              data-aos="fade-right"
            />
            <img
              src={Map_rocket}
              alt=""
              className="map_rocket"
              data-aos="fade-right"
            />
            <img
              src={Map_circle}
              alt=""
              className="map_circle_img"
              data-aos="fade-right"
            />
            <div className="map_main_div">
              <div
                className="position-relative d-flex align-items-center gap-3"
                data-aos="fade-up"
              >
                <img src={Maps} alt="" />
                <img src={Map_one} alt="" className="map_one_img" />
                <img src={Map_two} alt="" className="map_two_img" />
                <div>
                  <p className="map_name">72</p>
                  <p className="map_cap">Campuses</p>
                </div>
              </div>
              <p className="map_loc" data-aos="fade-up">
                Our Locations
              </p>
              <p className="map_find" data-aos="fade-up">
                Find Out Our Campus Near You.
              </p>
              <div className="map_input_body" data-aos="fade-up">
                <input
                  type="text"
                  placeholder="Select City"
                  className="map_input"
                />
                <button className="map_find_now">Find Now</button>
              </div>
            </div>
          </div>
        </div>
        <div className="col-lg-6 p-0">
          
          <iframe
            src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d5456.456905168348!2d74.28240618326417!3d31.51203050375939!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x3919030a59922d11%3A0xb268c975b602d932!2sCrescent%20Kids%20Campus%20High%20School!5e0!3m2!1sen!2s!4v1764852669637!5m2!1sen!2s"
            className="map_load"
            loading="lazy"
            referrerpolicy="no-referrer-when-downgrade"
          ></iframe>
        </div>
      </div>
    </div>
  );
};
