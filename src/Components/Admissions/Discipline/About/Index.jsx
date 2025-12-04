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
    <div className="container-fluid pb-4 mt-4  bg-discipline-color">
      <div className="container">
        <div className="row">
          <div className="col-4">
            <img src={About} alt="" className="pt-5" />
          </div>
          <div className="col-4 d-flex flex-column align-items-center">
            <img src={About_two} alt="" />
            <h1 className="discipline-about-title">
              Code of Dress            </h1>
            <li className="discipline-about-desp">
              The purpose of discipline, conduct and code of dress regulations at Crescent Kids Campus is to help the student set a standard for their appearance that is appropriate within the accepted guidelines of Crescent Kids Campus.  Every student is expected to demonstrate pride in their appearance, because it reflects throughout Crescent Kids Campus on each student, individually as well as collectively.  Part of career planning is learning to dress appropriately for the job and various occasions.</li>

            <li className="discipline-about-desp">
              Crescent Kids Campus strives to create an environment where dress and grooming standards minimize distractions from learning and promote a sense of school pride and professionalism.  We also hope to deemphasize clothing as a means of promoting negative influences within the student body.  Having a standardized dress code will help support a safe school environment and will contribute to creating a productive and positive learning environment.  </li>
            <h4 className="discipline-about-title2">
              ACCEPTABLE WEAR FOR CRESCENT KIDS CAMPUS           </h4>
              <div className="discipline-specs-container">
                <p>
                  PRE-SCHOOL GIRLS STUDENT DRESS APPAREL (Montessori Junior, senior and advanced)
                </p>
                <div className="admission-specs-list">
                <li>
                  Frocks – Blue & white lining with white baby collar and cuffs. At the bottom of the frocks, there should be three navy blue ribbons. Frocks of the appropriate size for the student.
                </li>
                <li>
                  Tights – White tights of appropriate size for students
                </li>
                </div>
              </div>
              <div className="discipline-specs-container">
                <p>
                  BOYS STUDENT DRESS APPAREL (Montessori Junior to Grade Ten)
                </p>
                <div className="admission-specs-list">
                <li>
                  Pants – Navy Blue: Pants of the appropriate size for the student.  No sweats, spandex, sleepwear, or torn clothing will be permitted.  Pants and shorts must fit at the waist, hips, and legs.
                </li>
                <li>
                  Shirts – Blue & White check shirts with plain white cuff and collars: dress shirt, all shirts must be long sleeve.  All shirts must be tucked in.
                </li>
                </div>
              </div>
              <div className="discipline-specs-container">
                <p>
                  GIRLS STUDENT DRESS APPAREL (Grade One to Grade Ten)
                </p>
                <div className="admission-specs-list">
                <li>
                  Shirts/Qameez – Blue & White lining Shirts with white coat collar and white cuffs
                </li>
                <li>
                  Shalwar – plain white Shalwar: tight-fitting and borders on Shalwar not permitted
                </li>
                <li>
                  Visor – White visors with navy blue strip
                </li>
                <li>
                  All the dresses must be of the appropriate size for girls. No sweats, jean fabric pants, shorts, spandex, extra tight-fitting or sleepwear will be permitted.
                </li>
                </div>
              </div>
              <div className="discipline-specs-container">
                <p>
                  FOOTWEAR APPAREL FOR ALL GRADE STUDENTS
                </p>
                <div className="admission-specs-list">
                <li>
                  Foot Wear - Black Boots with White socks: No combat boots, steel-toed work boots, backless sandals, flip-flops, slippers, or heels exceeding one inch will be permitted.
                </li>
                </div>
              </div>
              
          </div>
          <div className="col-4">
            <img src={About_one} alt="" className="pt-5" />
          </div>
        </div>
      </div>
    </div>
  );
};
