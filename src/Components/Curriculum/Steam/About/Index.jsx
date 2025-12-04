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
    <div className="container-fluid pb-4 mt-4  bg-steam-color">
      <div className="container">
        <div className="row">
          <div className="col-4">
            <img src={About} alt="" className="pt-5" />
          </div>
          <div className="col-4 d-flex flex-column align-items-center">
            <img src={About_two} alt="" />
            <h1 className="steam-about-title">
            	STEAM <span>(Science, Technology, Engineering, Arts, Math)</span>
            </h1>
            <p className="steam-about-desp">
              STEAM education is an integrated, interdisciplinary approach that provides hands-on and relevant learning experiences for students. It goes beyond the mere transfer of knowledge, engaging students and equipping them with critical thinking, problem-solving, creativity, and collaborative skills. STEAM also establishes connections between schools, workplaces, communities, and the global economy. This approach helps students understand and apply math and science concepts, forming the foundation for success in both college and future careers.
</p>
            <p className="steam-about-desp">
Future Foundation Schools' curriculum includes STEAM education, ensuring that our students are prepared to face the challenges of the modern world and represent Pakistan in the fields of science, engineering, technology, and the arts.</p>
          </div>
          <div className="col-4">
            <img src={About_one} alt="" className="pt-5" />
          </div>
        </div>
      </div>
    </div>
  );
};
