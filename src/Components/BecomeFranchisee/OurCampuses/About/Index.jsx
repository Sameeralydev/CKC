import React, { useEffect } from "react";
import "./About.css";
import AOS from "aos";
import "aos/dist/aos.css";
import "@fortawesome/fontawesome-free/css/all.min.css";


// 1. IMPORT THE CAMPUS DATA
import { campusDetails } from './CampusData'; 

export const AboutSection = () => {
  useEffect(() => {
    AOS.init({
      offset: 300,
      duration: 1000,
    });
  }, []);

  return (
    // Main container uses your provided classes
    <div className="container-fluid pb-4 mt-4 bg-air-color franchise-page-container">
      
      {/* --- Section Header (OUR FRANCHISES style) --- */}
      <div className="franchise-header" data-aos="fade-down">
        <h1 className="franchile-title">
          Our <span className="franchise-highlight">Franchises</span>
        </h1>
      </div>

      {/* --- Campus Grid Container --- */}
      <div className="campus-grid-container container">
        {campusDetails.map((campus, i) => {
          // Calculate the current row index (3 columns per row on desktop)
          const rowIndex = Math.floor(i / 3); 
          
          // Calculate the delay based on the row index (e.g., 300ms delay per row)
          const delay = rowIndex * 300; 
          
          // Conditional logic for phone and map
          const phoneContent = campus.phone ? campus.phone : 'Number Not Given';
          const mapLinkText = campus.mapUrl ? 'Open in Google Maps' : 'Location Not Given';

          return (
            <div 
              key={campus.id} 
              className="campus-franchise-card" 
              data-aos="fade-up" 
              data-aos-delay={delay} // Apply the calculated row delay
            >
              <h3 className="card-title-franchise">{campus.name}</h3>
              
              {/* LOCATION TEXT: Always show location icon */}
              <p className="card-location-franchise">
                {/* <i class="fa fa-street-view" aria-hidden="true"></i> {campus.location} */}
              </p>
              
              {/* PHONE NUMBER: Show phone icon and conditionally style the text */}
              <p className={`card-phone-franchise ${!campus.phone ? 'not-given' : ''}`}>
                <i className="fas fa-phone"></i> {phoneContent}
              </p>
              
              {/* MAP BUTTON: Conditional rendering based on mapUrl existence */}
              {campus.mapUrl ? (
                // Renders the functional button if mapUrl exists
                <a 
                  href={campus.mapUrl} 
                  target="_blank" 
                  rel="noopener noreferrer" 
                  className="map-button"
                >
                  <i className="fas fa-map-marker-alt"></i> {mapLinkText}
                </a>
              ) : (
                // Renders a disabled span if mapUrl is missing
                <span className="map-button disabled-map-button">
                  <i className="fas fa-map-marker-alt"></i> {mapLinkText}
                </span>
              )}
            </div>
          );
        })}
      </div>
      
    </div>
  );
};