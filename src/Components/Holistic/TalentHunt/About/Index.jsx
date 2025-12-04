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
    <div className="container-fluid pb-4 mt-4  bg-talenthunt-color">
      <div className="container">
        <div className="row">
          <div className="col-4">
            <img src={About} alt="" className="pt-5" />
          </div>
          <div className="col-4 d-flex flex-column align-items-center">
            <img src={About_two} alt="" />
            <h1 className="talenthunt-about-title">
            	Intellectual Development: Talent Hunt
            </h1>
            <p className="talenthunt-about-desp">
The purpose of school should be to develop bits of intelligence and to help people reach vocational and vocational goals appropriate to their particular spectrum of intelligence. People who are helped to do so, I believe, feel more engaged and competent and therefore more inclined to serve society in a constructive way </p>
            <span className="span">(Howard Gardner).</span>
            <p className="talenthunt-about-desp">
Each child has unique talents, interests and intelligence. Dr. Howard Gardner has presented 8 different intelligences that each one of us has in varying degrees. This means that all children have a deep potential and natural talent in certain areas. They require the right environment, nurture and exposure to explore and enhance their talents to develop further within these areas.</p>
            <p className="talenthunt-about-desp-head">
Program Objectives</p>
              <div className="talenthunt-specs">
                <li>
                  To enable children to explore and enhance each of their multiple intelligences.
                </li>
                <li>
                  To recognize & develop children's strengths, interests and talents.
                </li>
                
              </div>
              <h3 className="talenthunt-about-title">
            	The Talent Development Program at Crescent Kids Campus
            </h3>
            <p className="talenthunt-about-desp">
              We have developed the talent development program in the school to identify and nurture students' talents. The program goes beyond age or grade-level expectations by providing challenges as per the learner's interest and readiness.</p>
         
             </div>
          <div className="col-4">
            <img src={About_one} alt="" className="pt-5" />
          </div>
        </div>
      </div>
    </div>
  );
};
