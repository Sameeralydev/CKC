import React, { useEffect } from "react";
import "./About.css";
import About from "../../../../assets/images/facilities/about.png";
import About_one from "../../../../assets/images/facilities/about-one.png";
import About_two from "../../../../assets/images/facilities/about-two.png";
import AOS from "aos";
import "aos/dist/aos.css";

export const AboutSection = () => {
  useEffect(() => {
    AOS.init({
      offset: 300,
      duration: 1000,
    });
  }, []);

  return (
    <div className="container-fluid pb-4 mt-4  bg-phydev-color">
      <div className="container">
        <div className="row">
          <div className="col-4">
            <img src={About} alt="" className="pt-5" />
          </div>
          <div className="col-4 d-flex flex-column align-items-center">
            <img src={About_two} alt="" />
            <h1 className="phydev-about-title">
            	Physical Development
            </h1>
            <p className="phydev-about-desp">
Future Foundation Schools firmly believes that "a healthy body fosters a healthy mind." Academic learning and sports education are complementary and essential to the holistic development of children and youth. Physical education and sports play a fundamental role in early childhood development, contributing to both physical growth and the acquisition of life skills. Through sports, children learn valuable lessons in teamwork, honesty, fair play, self-respect, respect for others, and adherence to rules and regulations.</p>
            <p className="phydev-about-desp">
At Future Foundation Schools, we provide a platform for students to engage in sports and learn how to handle competition, as well as cope with both winning and losing. These experiences emphasize the significant impact that physical education and sports have on a child’s social, emotional, and moral development, in addition to building physical skills and abilities.</p>
            <p className="phydev-about-desp">
Research consistently highlights the positive effects of sport and exercise on physical health, growth, and development. Physical activity not only promotes overall health but also stimulates brain development and enhances academic performance.</p>
            <p className="phydev-about-desp">
Our sports program offers a wide range of activities to nurture physical fitness, teamwork, and personal growth:</p>
              <div className="phydev-specs">
                <li>
                  Football
                </li>
                <li>
                  Cricket
                </li>
                <li>
                  Basketball
                </li>
                <li>
                  Volleyball
                </li>
                <li>
                  Skating
                </li>
                <li>
                  Badminton
                </li>
                <li>
                  Chess
                </li>
                <li>
                  Carom
                </li>
                <li>
                  Table Tennis
                </li>
                <li>
                  Hiking
                </li>
                <li>
                  Athletics
                </li>
                <li>
                  Gymnastics
                </li>
                <li>
                  Yoga
                </li>
                <li>
                  Karate
                </li>
                <li>
                  Kabaddi
                </li>
              </div>
            <p className="phydev-about-desp">
              By encouraging participation in these diverse sports, we aim to create well-rounded individuals who thrive both academically and socially.</p>
         
             </div>
          <div className="col-4">
            <img src={About_one} alt="" className="pt-5" />
          </div>
        </div>
      </div>
    </div>
  );
};
