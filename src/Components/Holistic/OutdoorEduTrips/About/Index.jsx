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
    <div className="container-fluid pb-4 mt-4  bg-oet-color">
      <div className="container">
        <div className="row">
          <div className="col-4">
            <img src={About} alt="" className="pt-5" />
          </div>
          <div className="col-4 d-flex flex-column align-items-center">
            <img src={About_two} alt="" />
            <h1 className="oet-about-title">
            	Outdoor Educational Trips
            </h1>
            <p className="oet-about-desp">
Crescent Kids Campus offers students the opportunity to engage in outdoor education, where learning takes place in natural environments. Our outdoor education programs include residential or wilderness-based experiences, allowing students to participate in a range of adventurous challenges and activities, such as hiking, climbing, canoeing, ropes courses, and group games. These activities are designed to foster experiential learning and environmental awareness, building on the principles of experiential and environmental education.</p>
            <p className="oet-about-desp">
Through these outdoor experiences, students are encouraged to:</p>
              <div className="oet-specs">
                <li>
              Overcome adversity and build resilience
            </li>
            <li>
Enhance their personal growth and social development            </li>
            <li>
Develop a deeper connection with nature            </li>
              </div>
            <p className="oet-about-desp">
At Crescent Kids Campus, we organize outdoor educational visits and field trips to promote physical health, mental well-being, and self-confidence in our students. These trips are designed to be enjoyable and stress-free, providing hands-on activities that engage and inspire students, helping them become healthier, happier, and more courageous individuals.</p>
         
             </div>
          <div className="col-4">
            <img src={About_one} alt="" className="pt-5" />
          </div>
        </div>
      </div>
    </div>
  );
};
