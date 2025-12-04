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
    <div className="container-fluid pb-4 mt-4  bg-charb-color">
      <div className="container">
        <div className="row">
          <div className="col-4">
            <img src={About} alt="" className="pt-5" />
          </div>
          <div className="col-4 d-flex flex-column align-items-center">
            <img src={About_two} alt="" />
            <h1 className="charb-about-title">
            	Character Building
            </h1>
            <p className="charb-about-desp">
Allah Almighty says in the Holy Qur'an, "I do not look at your faces, but at your hearts." The essence of education is not only to impart knowledge, but to purify the hearts and minds of individuals, guiding them to lead lives aligned with the will of Allah. Without good intentions, no action is acceptable in the sight of Allah. Living solely to please oneself or others is ultimately a failure. True success lies in adopting what pleases Allah and forsaking what He dislikes.
</p>
            <p className="charb-about-desp">
At Future Foundation Schools, we are committed to nurturing individuals who embody these values, guiding them to live in accordance with Allah's will. Our character-building program is designed to instill in students a deep sense of moral responsibility and spiritual integrity. We aim to cultivate true beliefs, sincere worship, and ethical dealings with others. Students are taught to uphold purity in their actions, modesty in their conduct, and justice in their interactions. We emphasize the importance of Taqwa (fear of Allah), patience (Sabr), and the careful balance of duties and rights, alongside thankfulness in all circumstances. By focusing on these core values, we seek to develop students who not only excel academically, but also grow into righteous individuals who will lead lives that reflect the teachings of Islam.
</p>
          </div>
          <div className="col-4">
            <img src={About_one} alt="" className="pt-5" />
          </div>
        </div>
      </div>
    </div>
  );
};
