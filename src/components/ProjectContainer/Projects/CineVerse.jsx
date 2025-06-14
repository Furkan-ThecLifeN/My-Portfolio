import React, { useState } from 'react';
import "../ProjectContainer.css";
import { AiOutlineClose } from "react-icons/ai";
import "../ProjectPopUp.css";
import ProjectMain from "../../../assets/project-assets/1-main.png";
import img1 from "../../../assets/project-assets/1.1.png";
import img2 from "../../../assets/project-assets/1.2.png";
import img3 from "../../../assets/project-assets/1.3.png";
import img4 from "../../../assets/project-assets/1.4.png";

const CineVerse = () => {
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
        <h2 className='ProjectNameTitle'>CineVerse</h2>
        <button className='projectDetail-Button' onClick={openPopup}>Details</button>
      </div>
      <div className="project-container">
        <div className="card-img-box-1">
          <div className="card-img-top">
            <img 
              src={img1}
              alt="Preview 1" 
              className='img1' 
              onClick={openPopup} 
            />
            <img 
              src={img2} 
              alt="Preview 2" 
              className='img2' 
              onClick={openPopup} 
            />
          </div>
          <div className="card-img-bottom">
            <img 
              src={img3} 
              alt="Preview 3" 
              className='img3' 
              onClick={openPopup} 
            />
          </div>
        </div>
        <div className="card-img-box-2">
          <img 
            src={img4} 
            alt="Preview 4" 
            className='img4' 
            onClick={openPopup} 
          />
        </div>
      </div>

      {isPopupOpen && (
        <div className="popup-overlay" onClick={closePopup}>
          <section className="project-popup" onClick={(e) => e.stopPropagation()}>
            <button className="popup-close-btn" onClick={closePopup}>
              <AiOutlineClose size={24} />
            </button>
            <h2 className="pop-up__projectName">CineVerse</h2>
            <img src={ProjectMain} alt="" className="projectMain-img" />
            <div className="pop-up__container">
              <div className="pop-up__projectText">
                <h3 style={{ textAlign: "center" }}>
                  🌟 Welcome to CineVerse – Your Ultimate Movie Discovery Experience
                </h3>
                <p>
                  CineVerse is a modern, fully responsive web application designed
                  to revolutionize how users discover, explore, and engage with
                  movies. Built entirely with the latest technologies in the React
                  ecosystem, CineVerse offers a seamless and visually stunning
                  experience for film enthusiasts of all kinds.
                </p>

                <h4>🎬 Key Features</h4>
                <ul className="projectText-ul">
                  <li>
                    <strong>Real-Time Movie Data:</strong> Powered by the TMDb API,
                    CineVerse fetches up-to-date info on popular, top-rated,
                    upcoming, and trending movies.
                  </li>
                  <li>
                    <strong>Advanced Search & Filtering:</strong> Search by title,
                    genre, release year, and ratings using powerful filter options.
                  </li>
                  <li>
                    <strong>Interactive Reviews & Ratings:</strong> CineVerse
                    enables movie enthusiasts to create accounts and log in,
                    fostering a community-driven platform tailored for film lovers.
                  </li>
                  <li>
                    <strong>Fully Responsive Design:</strong> Works flawlessly
                    across desktop, tablet, and mobile.
                  </li>
                  <li>
                    <strong>Authentication System:</strong> Secure
                    login/registration via a custom Node.js/Express backend.
                  </li>
                  <li>
                    <strong>Custom Backend Integration:</strong> Dynamic content
                    filtering and secure user data management.
                  </li>
                  <li>
                    <strong>Modern UI:</strong> Uses React Icons and utility-first
                    styling for an elegant visual design.
                  </li>
                </ul>

                <h4>🛠️ Technologies Used</h4>
                <ul className="projectText-ul">
                  <li>
                    <b>Frontend:</b> React.js, Tailwind CSS / Styled Components,
                    React Router, Axios
                  </li>
                  <li>
                    <b>Backend:</b> Node.js, Express.js
                  </li>
                  <li>
                    <b>API:</b> TMDb API
                  </li>
                  <li>
                    <b>Authentication:</b> Custom login system
                  </li>
                  <li>
                    <b>UI Libraries:</b> React Icons & more
                  </li>
                  <li>
                    <b>Responsive:</b> Mobile-first, media queries
                  </li>
                </ul>

                <h4>👨‍💻 About the Developer</h4>
                <p>
                  I designed and developed this project from scratch, handling every
                  aspect including UI/UX, frontend/backend, API integration, and
                  responsiveness. It was both a technical and creative journey aimed
                  at delivering a high-quality movie experience.
                </p>

                <h4>🚀 Final Words</h4>
                <p>
                  CineVerse is not just a movie app — it's a dynamic, scalable,
                  user-focused platform for real movie fans. Discover, interact, and
                  enjoy cinema like never before.
                </p>
              </div>

              <div className="pop-up__projectLinkBox">
                <span className="pop-up__projectLink">
                  Repository:{" "}
                  <a
                    href="https://github.com/Furkan-ThecLifeN/CineVerse"
                    target="_blank"
                    rel="noopener noreferrer"
                  >
                    https://github.com/Furkan-ThecLifeN/CineVerse
                  </a>
                </span>
                <span className="pop-up__projectLink">
                  Live Demo:{" "}
                  <a href="https://cine-verse-theta.vercel.app/" target="_blank" rel="noopener noreferrer">
                    https://cine-verse-theta.vercel.app/
                  </a>
                </span>
              </div>
            </div>
          </section>
        </div>
      )}
    </section>
  );
}

export default CineVerse;