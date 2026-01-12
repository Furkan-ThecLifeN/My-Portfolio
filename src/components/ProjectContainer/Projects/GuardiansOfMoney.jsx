import React, { useState } from "react";
import "../ProjectContainer.css";
import { AiOutlineClose } from "react-icons/ai";
import "../ProjectPopUp.css";

import ProjectMain from "../../../assets/project-assets/GuardiansOfMoney2.png"; 
// Buraya kendi görsellerini ekleyeceksin
import img1 from "../../../assets/project-assets/GuardiansOfMoney1.png";
import img2 from "../../../assets/project-assets/GuardiansOfMoney2.png";
import img3 from "../../../assets/project-assets/GuardiansOfMoney3.png";
import img4 from "../../../assets/project-assets/GuardiansOfMoney4.png";

const GuardiansOfMoney = () => {
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
        <h2 className='ProjectNameTitle'>Guardians of Money</h2>
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

            <h2 className="pop-up__projectName">Guardians of Money</h2>
            <img src={ProjectMain} alt="" className="projectMain-img" />

            <div className="pop-up__container">

              <div className="pop-up__projectText">
                <h3 style={{ textAlign: "center" }}>
                  Guardians of Money – Smart Personal Finance Tracker
                </h3>

                <p>
                  Guardians of Money is a structured personal finance management
                  application built to help users track expenses, analyze spending
                  habits, and maintain long-term financial health. Featuring category-
                  based budgeting, transaction history, and visual analytics,
                  Guardians of Money provides a simple yet powerful system for anyone
                  seeking financial awareness and stability.
                </p>

                <h4>Key Features</h4>
                <ul className="projectText-ul">
                  <li>Expense tracking with category organization</li>
                  <li>Monthly budgeting and progress indicators</li>
                  <li>Transaction history with filtering tools</li>
                  <li>Charts and spending analytics</li>
                  <li>Responsive interface for all devices</li>
                </ul>

                <h4>Technologies Used</h4>
                <ul className="projectText-ul">
                  <li>React, Context API or Redux (sen hangisini kullandıysan yazarsın)</li>
                  <li>Chart.js / Recharts (grafik için hangisini kullandıysan)</li>
                  <li>LocalStorage / Backend API (senin tercihine göre)</li>
                  <li>CSS / Styled Components</li>
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
                    https://github.com/GUARDIANSOFMONEYS/GUARDIANSOFMONEY-ReactProject.git
                  </a>
                </span>

                <span className="pop-up__projectLink">
                  Live Demo:{" "}
                  <a
                    href="YOUR_LIVE_URL"
                    target="_blank"
                    rel="noopener noreferrer"
                  >
                    https://guardiansofmoney-react-project-sden.vercel.app/
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

export default GuardiansOfMoney;
