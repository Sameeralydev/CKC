import React, { useState, useEffect } from "react";
import { Layout } from "../layout/Index";
import { HeroSection } from "../Components/Holistic/PhysicalDev/Hero/Index";
import { AboutSection } from "../Components/Holistic/PhysicalDev/About/Index";
import { FaWhatsappSquare } from "react-icons/fa";
import Scroll from "../assets/images/scroll.png";

export const PhysicalDevelopment = () => {
  const [isVisible, setIsVisible] = useState(false);

  // Handle scroll event to show/hide button
  useEffect(() => {
    const handleScroll = () => {
      if (window.scrollY > 200) {
        setIsVisible(true);
      } else {
        setIsVisible(false);
      }
    };

    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  // Scroll to top function
  const scrollToTop = () => {
    window.scrollTo({ top: 0, behavior: "smooth" });
  };

  return (
    <Layout>
      <HeroSection />
      <AboutSection />
      <a
        href="https://wa.me/yourphonenumber"
        target="_blank"
        className="position-fixed"
        style={{
          fontSize: "3.5rem",
          color: "#25D366",
          zIndex: "4",
          bottom: "10px",
          right: "10px",
          transition: "transform 0.3s ease-in-out",
        }}
        onMouseEnter={(e) =>
          (e.currentTarget.style.transform = "translateY(-5px)")
        }
        onMouseLeave={(e) =>
          (e.currentTarget.style.transform = "translateY(0)")
        }
      >
        <FaWhatsappSquare />
      </a>

      {isVisible && (
        <span
          className="position-fixed"
          onClick={scrollToTop}
          style={{
            zIndex: "4",
            bottom: "10px",
            left: "20px",
            transition: "transform 0.3s ease-in-out",
            cursor: "pointer",
          }}
          onMouseEnter={(e) =>
            (e.currentTarget.style.transform = "translateY(-5px)")
          }
          onMouseLeave={(e) =>
            (e.currentTarget.style.transform = "translateY(0)")
          }
        >
          <img src={Scroll} alt="" />
        </span>
      )}
    </Layout>
  );
};
