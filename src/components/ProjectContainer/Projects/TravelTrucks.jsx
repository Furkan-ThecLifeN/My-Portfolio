import React, { useState } from "react";
import "../ProjectContainer.css";
import { AiOutlineClose } from "react-icons/ai";
import "../ProjectPopUp.css";

import ProjectMain from "../../../assets/project-assets/TravelTracks1.png"; 
import img1 from "../../../assets/project-assets/TravelTracks1.png";
import img2 from "../../../assets/project-assets/TravelTracks2.png";
import img3 from "../../../assets/project-assets/TravelTracks3.png";
import img4 from "../../../assets/project-assets/TravelTracks4.png";

const TravelTrucks = () => {
  const [isPopupOpen, setIsPopupOpen] = useState(false);

  const openPopup = () => {
    setIsPopupOpen(true);
  };

  const closePopup = () => {
    setIsPopupOpen(false);
  };

  return (
    <section className='project-section'>
      <div className="project-title">
        <h2 className='ProjectNameTitle'>TravelTrucks</h2>
        <button className='projectDetail-Button' onClick={openPopup}>
          Details
        </button>
      </div>

      <div className="project-container">
        <div className="card-img-box-1">
          <div className="card-img-top">
            <img src={img1} alt="Preview 1" className='img1' onClick={openPopup} />
            <img src={img2} alt="Preview 2" className='img2' onClick={openPopup} />
          </div>
          <div className="card-img-bottom">
            <img src={img3} alt="Preview 3" className='img3' onClick={openPopup} />
          </div>
        </div>

        <div className="card-img-box-2">
          <img src={img4} alt="Preview 4" className='img4' onClick={openPopup} />
        </div>
      </div>

      {isPopupOpen && (
        <div className="popup-overlay" onClick={closePopup}>
          <section className="project-popup" onClick={(e) => e.stopPropagation()}>
            <button className="popup-close-btn" onClick={closePopup}>
              <AiOutlineClose size={24} />
            </button>

            <h2 className="pop-up__projectName">TravelTrucks</h2>
            <img src={ProjectMain} alt="" className="projectMain-img" />

            <div className="pop-up__container">

              <div className="pop-up__projectText">
                <h3 style={{ textAlign: "center" }}>
                  TravelTrucks – Modern Camper Rental Experience
                </h3>
                <p>
                  TravelTrucks is a modern camper rental application built with React,
                  Redux Toolkit, Vite, and MockAPI. Users can explore a wide selection
                  of campers, filter by features, view detailed specifications, compare
                  options, and save favorites for quick access. Designed with clean UI
                  and fast data handling, TravelTrucks delivers a smooth and intuitive
                  booking experience across all devices.
                </p>

                <h4>Key Features</h4>
                <ul className="projectText-ul">
                  <li>Camper listing with advanced feature filters</li>
                  <li>Favorites system with persistent storage</li>
                  <li>Camper detail pages with full specifications</li>
                  <li>Responsive, fast-loading interface</li>
                </ul>

                <h4>Technologies Used</h4>
                <ul className="projectText-ul">
                  <li>React, Redux Toolkit, Vite</li>
                  <li>MockAPI</li>
                  <li>CSS Modules</li>
                </ul>
              </div>

              <div className="pop-up__projectLinkBox">
                <span className="pop-up__projectLink">
                  Repository:{" "}
                  <a
                    href="YOUR_REPO_URL"
                    target="_blank"
                    rel="noopener noreferrer"
                  >
                    https://github.com/Furkan-ThecLifeN/TravelTrucks.git
                  </a>
                </span>

                <span className="pop-up__projectLink">
                  Live Demo:{" "}
                  <a
                    href="YOUR_LIVE_URL"
                    target="_blank"
                    rel="noopener noreferrer"
                  >
                    https://travel-trucks-pearl-kappa.vercel.app/
                  </a>
                </span>
              </div>

            </div>
          </section>
        </div>
      )}
    </section>
  );
};

export default TravelTrucks;
