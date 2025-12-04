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
    <div className="container-fluid pb-4 mt-4  bg-admissionpro-color">
      <div className="container">
        <div className="row">
          <div className="col-4">
            <img src={About} alt="" className="pt-5" />
          </div>
          <div className="col-4 d-flex flex-column align-items-center">
            <img src={About_two} alt="" />
            <h1 className="admissionpro-about-title">
              General Process            </h1>
            <p className="admissionpro-about-desp">
              The admission process at Crescent Kids Campus is simple and transparent. It works on the belief that a personal interaction between parents / authorized guardians, the prospective student and the school's authorized representatives is of far greater value than any conventional admission test. The process is aimed at giving us an insight into the type of education approach and environment you believe would be appropriate for your child to maximize his/her potential while giving us a glimpse of the child's strengths, learning needs and potential. It also gives you, as parents / authorized guardians, a first-hand opportunity to obtain an understanding of how our students and faculty engage with each other, our overall offering, curricula and our educational approach.</p>
            
            <p className="admissionpro-about-desp">
              The admission process at Crescent Kids Campus begins on the 15th of December and till the 15th of January of every calendar year. Admissions are granted on a first come first served basis till seats are available.</p>
            <p className="admissionpro-about-desp-head">
              The following are the steps in the admission process for Parents/ Authorized Guardians of the child:</p>
            <div className="admissionpro-specs">
              <p>
                <span>Step 1</span> – Put an inquiry at our admission office of Crescent Kids Campus to get an orientation and prospectus to learn about the school’s philosophy, approach and offering. If you have any special queries you can make an appointment school principal.
              </p>
              
              <p>
                <span>Step 2</span> – Fill in the Application Form and other required forms and submit them along with the required document stated below
              </p>
              <div className="admission-specs-list">
              <li>
                
                1 photograph
              </li>
              <li>
                A copy of the child’s Birth Certificate
              </li>
              <li>
                Academic records/transcripts for the last 3 years (if applicable)
              </li>
              <li>
                Extra-curricular records or achievement certificates, if any
              </li>
              <li>
                Transfer Certificate
              </li>
              <li>
                Health Form (if applicable)
              </li>
              </div>
              <p>
                <span>Step 3</span> – Interaction/Placement Test
              </p>
            </div>
            <p className="admissionpro-about-desp">
              Grades P.G to Grade Seven: Once the admission process is initiated, the school will schedule meetings with the designated evaluating teacher/ Head of Section to help us understand the child’s grade readiness. The offer for admission will be issued, based on the decision taken by the admissions team.</p>

          </div>
          <div className="col-4">
            <img src={About_one} alt="" className="pt-5" />
          </div>
        </div>
      </div>
    </div>
  );
};
