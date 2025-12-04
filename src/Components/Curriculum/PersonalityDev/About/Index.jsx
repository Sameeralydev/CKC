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
    <div className="container-fluid pb-4 mt-4  bg-pd-color">
      <div className="container">
        <div className="row">
          <div className="col-4">
            <img src={About} alt="" className="pt-5" />
          </div>
          <div className="col-4 d-flex flex-column align-items-center">
            <img src={About_two} alt="" />
            <h1 className="pd-about-title">
            	Personality Development
            </h1>
            <p className="pd-about-desp">
As the Holy Prophet Hazrat Mohammad (PBUH) stated, "I guarantee a palace in the highest part of paradise for those who perfect their Akhlaq (moral character)" (Abu Dawood). Education, at its core, is not only about acquiring knowledge, but also about shaping individuals who embody values that uplift society. A truly educated person is like a lamp, burning itself to provide light for others, or a rose, flourishing amidst thorns while spreading a sweet fragrance.</p>
            <p className="pd-about-desp">
At Future Foundation Schools, we are committed to developing students into individuals who possess exemplary moral and ethical character. Our curriculum integrates personality development as a core principle, aiming to instill qualities such as respect, honesty, self-discipline, and commitment. We emphasize the importance of cleanliness, appropriate dressing, punctuality, and obedience as key aspects of building strong, well-rounded individuals. Through this approach, we aspire to shape students who will not only excel academically but also lead lives grounded in integrity, compassion, and responsibility—traits that will allow them to make a positive impact on the world.</p>
          </div>
          <div className="col-4">
            <img src={About_one} alt="" className="pt-5" />
          </div>
        </div>
      </div>
    </div>
  );
};
