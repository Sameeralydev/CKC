import React, { useEffect } from "react";
import "./About.css";
import About from "../../../../assets/images/facilities/about.png";
import About_one from "../../../../assets/images/facilities/about-one.png";
import About_two from "../../../../assets/images/facilities/about-two.png";
import { Curdata } from "../../../../Data/pro";
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
    <div className="container-fluid pb-4 mt-4  bg-qos-color">
      <div className="container">
        <div className="row">
          <div className="col-4">
            <img src={About} alt="" className="pt-5" />
          </div>
          <div className="col-4 d-flex flex-column align-items-center">
            <img src={About_two} alt="" />
            <h1 className="qos-about-title">
            	Qura’an O Seerat As Syllabus
            </h1>
            <p className="qos-about-desp">
At Crescent Kids Campus, we are deeply committed to ensuring that our students gain a profound understanding of the Holy Quran. We believe that the Quran is not just a book of knowledge, but a guide for life, helping students to discern what is right from wrong and to follow the straight path in all aspects of their lives. Understanding the Quran is essential for leading a better life both in this world and the Hereafter. Without this understanding, we risk being unaware of key teachings that our students must know to live a fulfilling and righteous life.</p>
            <p className="qos-about-desp">
Additionally, the Seerat of Prophet Muhammad (PBUH) is a core component of our curriculum. Allah Almighty says that the Prophet (PBUH) is the best model for us to follow in life. Therefore, teaching Seerat is crucial for fulfilling our goal of promoting the values of Islam within the community.</p>
            <p className="qos-about-desp">
By the grace of Allah, Crescent Kids Campus has made the study of the Quran and Seerat a compulsory daily subject. To ensure the highest quality of education in these areas, we are supported by an internationally recognized organization that assists with research, development, and staff training. This partnership allows us to provide our students with the best possible guidance in their spiritual and educational journeys.</p>
          </div>
          <div className="col-4">
            <img src={About_one} alt="" className="pt-5" />
          </div>
        </div>
      </div>
    </div>
  );
};
