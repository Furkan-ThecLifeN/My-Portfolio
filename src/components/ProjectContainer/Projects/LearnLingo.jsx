import React, { useState } from "react";
import "../ProjectContainer.css";
import { AiOutlineClose } from "react-icons/ai";
import "../ProjectPopUp.css";

// Görsel yollarını kendi projene göre düzenle
import ProjectMain from "../../../assets/project-assets/LL-1.png";
import img1 from "../../../assets/project-assets/LL-1.png";
import img2 from "../../../assets/project-assets/LL-2.png";
import img3 from "../../../assets/project-assets/LL-3.png";
import img4 from "../../../assets/project-assets/LL-4.png";

const LearnLingo = () => {
  const [isPopupOpen, setIsPopupOpen] = useState(false);

  const openPopup = () => setIsPopupOpen(true);
  const closePopup = () => setIsPopupOpen(false);

  return (
    <section className="project-section">
      <div className="project-title">
        <h2 className="ProjectNameTitle">LearnLingo</h2>
        <button className="projectDetail-Button" onClick={openPopup}>
          Details
        </button>
      </div>

      <div className="project-container">
        <div className="card-img-box-1">
          <div className="card-img-top">
            <img
              src={img1}
              alt="Tutors Gallery"
              className="img1"
              onClick={openPopup}
            />
            <img
              src={img2}
              alt="Filtering System"
              className="img2"
              onClick={openPopup}
            />
          </div>
          <div className="card-img-bottom">
            <img
              src={img3}
              alt="Favorites System"
              className="img3"
              onClick={openPopup}
            />
          </div>
        </div>

        <div className="card-img-box-2">
          <img
            src={img4}
            alt="Booking Trial"
            className="img4"
            onClick={openPopup}
          />
        </div>
      </div>

      {isPopupOpen && (
        <div className="popup-overlay" onClick={closePopup}>
          <section
            className="project-popup"
            onClick={(e) => e.stopPropagation()}
          >
            <button className="popup-close-btn" onClick={closePopup}>
              <AiOutlineClose size={24} />
            </button>

            <h2 className="pop-up__projectName">
              LearnLingo – Professional Language Tutor Platform
            </h2>
            <img
              src={ProjectMain}
              alt="LearnLingo Platform"
              className="projectMain-img"
            />

            <div className="pop-up__container">
              <div className="pop-up__projectText">
                <h3 style={{ textAlign: "center" }}>
                  Connecting Students with Professional Tutors Worldwide
                </h3>

                <p>
                  LearnLingo is a modern, high-performance web application
                  designed for the educational technology sector. It offers a
                  seamless experience for discovering professional language
                  tutors, featuring advanced filtering, real-time data fetching,
                  and a personalized favorites system. The platform is
                  engineered with a focus on "Enterprise-Grade" styling and
                  robust data persistence.
                </p>

                <h4>Key Technical Features</h4>
                <ul className="projectText-ul">
                  <li>
                    <strong>Firebase 11 Integration:</strong> Secure
                    Authentication (Email/Password) and Realtime Database for
                    persistent data management.
                  </li>
                  <li>
                    <strong>Dynamic Teachers Gallery:</strong> Real-time data
                    fetching with custom pagination (4 cards per load).
                  </li>
                  <li>
                    <strong>Advanced Filtering:</strong> Multidimensional
                    filtering by language, student level, and hourly rate.
                  </li>
                  <li>
                    <strong>Persistence Layer:</strong> Favorites system
                    synchronized across sessions via localStorage and Firebase.
                  </li>
                  <li>
                    <strong>Lesson Booking:</strong> Interactive trial lesson
                    booking system using React Portals for modal management.
                  </li>
                  <li>
                    <strong>Validation Architecture:</strong> Schema-based form
                    validation using React Hook Form and Yup.
                  </li>
                </ul>

                <h4>Technologies Used</h4>
                <ul className="projectText-ul">
                  <li>React 18 (Hooks, Context API, Functional Components)</li>
                  <li>React Router v6 (Client-side routing)</li>
                  <li>Firebase 11 (Auth & Realtime Database)</li>
                  <li>CSS3 Custom Variables (Modular design system)</li>
                  <li>Lucide React (Modern iconography)</li>
                  <li>React Hook Form & Yup (Form logic)</li>
                </ul>
              </div>

              {/* REPO + LIVE */}
              <div className="pop-up__projectLinkBox">
                <span className="pop-up__projectLink">
                  Repository:{" "}
                  <a
                    href="https://github.com/Furkan-ThecLifeN/WebStudio"
                    target="_blank"
                    rel="noopener noreferrer"
                  >
                    https://github.com/Furkan-ThecLifeN/learn-lingo-tutor-platform.git
                  </a>
                </span>
                <span className="pop-up__projectLink">
                  Live Demo:{" "}
                  <a
                    href="YOUR_W1_LIVE_URL"
                    target="_blank"
                    rel="noopener noreferrer"
                  >
                    https://learn-lingo-tutor-platform.vercel.app/
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

export default LearnLingo;
