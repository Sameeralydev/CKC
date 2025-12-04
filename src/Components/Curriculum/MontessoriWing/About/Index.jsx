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
    <div className="container-fluid pb-4 mt-4  bg-mon-color">
      <div className="container">
        <div className="row">
          <div className="col-4">
            <img src={About} alt="" className="pt-5" />
          </div>
          <div className="col-4 d-flex flex-column align-items-center">
            <img src={About_two} alt="" />
            <h1 className="mon-about-title">
              Montessori Wing
            </h1>
            <p className="mon-about-desp">
              The Montessori Wing at Future Foundation Schools is designed to create a nurturing environment where young learners can flourish. The first six years of life are a critical period for setting the foundation of learning, and our Montessori approach focuses on holistic development through hands-on activities and age-appropriate materials. Preschool education here is not only about academic learning but also about social development, motor skills, and emotional growth, setting the stage for lifelong learning and scholastic success.
            </p>
            <h3 className="mon-specs-title">	Montessori Wing Specialties</h3>
            <p className="mon-specs-head">
              Our Montessori Wing offers an enriched learning environment that emphasizes:
            </p>
            <li className="mon-specs-list">
              Fun, Healthy, and Safe Environment: We provide a safe, secure, and welcoming space where children can explore and learn through play.
            </li>
            <li className="mon-specs-list">
High-Quality Care and Education: Our curriculum is designed to provide quality care and developmentally appropriate education for children below statutory school age.            </li>
            <li className="mon-specs-list">
Physical and Cognitive Development: Activities are carefully planned to develop both gross motor and fine motor skills, alongside cognitive and emotional growth.            </li>
            <li className="mon-specs-list">
Social and Emotional Development: Encouraging kindness, understanding, and positive interactions with peers.            </li>
            <li className="mon-specs-list">
Smooth Transitions: Supporting children in making the transition from home to Preschool and later, from Preschool to school with confidence.            </li>
            <li className="mon-specs-list">
Promoting Self-Esteem and Independence: We nurture self-confidence and independence through engaging activities.            </li>
            <li className="mon-specs-list">
Equal Opportunities for All: Our environment is inclusive, ensuring every child has access to the same opportunities for learning and growth.            </li>
            <li className="mon-specs-list">
Partnership with Parents: We work closely with parents, maintaining strong, supportive relationships and providing access to regular development assessments and Early Learning Goals.            </li>
          
          <div className="mon-specs-container2">
             <h3 className="mon-specs-title">	Emphasis on Writing Workshops and Handwriting Uniformity</h3>
            <p className="mon-specs-head2">
              At Crescent Kids Campus, we place a strong emphasis on developing writing skills from an early age. Writing workshops are a key component of our Preschool curriculum, designed to:
            </p>
            <li className="mon-specs-list2">
Promote Early Writing Skills: Children are encouraged to practice writing through creative activities and structured exercises that focus on letter formation and early writing skills.            </li>
            <li className="mon-specs-list2">
Handwriting Uniformity: We aim to establish uniform handwriting practices, ensuring that children develop consistent, legible handwriting from the start.            </li>
            <li className="mon-specs-list2">
Fine Motor Skill Development: Writing activities also help strengthen fine motor skills, crucial for physical coordination and academic success.           </li>
            <li className="mon-specs-list2">
Building Confidence in Writing: By providing a supportive and positive environment, we encourage children to express themselves confidently through writing.            </li>


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
