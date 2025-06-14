import React, { useState } from "react";
import "../ProjectContainer.css";
import { AiOutlineClose } from "react-icons/ai";
import "../ProjectPopUp.css";
import img1 from "../../../assets/project-assets/1.1.png";
import img2 from "../../../assets/project-assets/1.2.png";
import img3 from "../../../assets/project-assets/1.3.png";
import img4 from "../../../assets/project-assets/1.4.png";
import ComingSoon from "../../../assets/ComingSoon.png";

const BeatVerse = () => {
  const [isPopupOpen, setIsPopupOpen] = useState(false);

  const openPopup = () => {
    setIsPopupOpen(true);
  };

  const closePopup = () => {
    setIsPopupOpen(false);
  };

  return (
    <section className="project-section">
      <div className="project-title">
        <h2 className="ProjectNameTitle">BeatVerse</h2>
        <button className="projectDetail-Button" onClick={openPopup}>
          Details
        </button>
      </div>
      <div className="project-container">
        <div className="card-img-box-1">
          <div className="card-img-top">
            <img
              src={ComingSoon}
              alt="Preview 1"
              className="img1"
              onClick={openPopup}
            />
            <img
              src={ComingSoon}
              alt="Preview 2"
              className="img2"
              onClick={openPopup}
            />
          </div>
          <div className="card-img-bottom">
            <img
              src={ComingSoon}
              alt="Preview 3"
              className="img3"
              onClick={openPopup}
            />
          </div>
        </div>
        <div className="card-img-box-2">
          <img
            src={ComingSoon}
            alt="Preview 4"
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
            <h2 className="pop-up__projectName">BeatVerse</h2>
            <img src={ComingSoon} alt="" className="projectMain-img" />
            <div className="pop-up__container">
              <div className="pop-up__projectText">
                <h3 style={{ textAlign: "center" }}>
                  🌟 BeatVerse'e Hoş Geldiniz – Müzik Keşfetmenin Yeni Deneyimi
                </h3>
                <p>
                  BeatVerse is a cutting-edge, mobile-first application built
                  with React Native, designed to transform how users discover,
                  explore, and connect with music. Currently under active
                  development, BeatVerse aims to be the go-to platform for music
                  lovers who seek a smart, stylish, and immersive music
                  experience — all in one app.
                </p>

                <h4>🎧 Key Features</h4>
                <ul className="projectText-ul">
                  <li>
                    <strong>Real-Time Music Data:</strong> BeatVerse integrates
                    with leading music APIs to provide users with up-to-date
                    tracks, albums, trending hits, and artist information from
                    around the world.
                  </li>
                  <li>
                    <strong>Advanced Search & Filtering:</strong> Discover songs
                    by title, genre, artist, release year, and popularity. The
                    intelligent filter system helps users tailor their music
                    experience to their unique tastes.
                  </li>
                  <li>
                    <strong>Interactive Favorites System:</strong> Users can
                    create an account, log in, and add tracks or albums to their
                    personal favorites list — making it easy to build and
                    revisit their ultimate playlists.
                  </li>
                  <li>
                    <strong>Fully Responsive Mobile Design:</strong> Built with
                    React Native, BeatVerse delivers a consistent, elegant, and
                    fast experience across iOS and Android devices.
                  </li>
                  <li>
                    <strong>Secure Authentication:</strong> Custom user
                    authentication is managed through a robust Node.js and
                    Express backend, ensuring smooth, secure login and
                    registration.
                  </li>
                  <li>
                    <strong>Dedicated Backend & API Integration:</strong> The
                    backend handles everything from API calls and user data
                    management to search logic and account preferences — keeping
                    the app dynamic and responsive.
                  </li>
                  <li>
                    <strong>Modern UI/UX Aesthetics:</strong> Leveraging
                    libraries like React Native Elements and vector icons,
                    BeatVerse delivers a visually rich and intuitive interface
                    that feels both modern and minimal.
                  </li>
                </ul>

                <h4>🛠️ Technologies Used</h4>
                <ul className="projectText-ul">
                  <li>
                    <b>Frontend:</b> React Native, React Navigation, Axios,
                    Styled Components / Tailwind-like utilities with NativeWind
                  </li>
                  <li>
                    <b>Backend:</b> Node.js, Express.js
                  </li>
                  <li>
                    <b>API Integration:</b> Music data provided via third-party
                    music APIs (e.g., Spotify, Deezer, or similar)
                  </li>
                  <li>
                    <b>Authentication:</b> Custom-built user login &
                    registration system
                  </li>
                  <li>
                    <b>UI Libraries:</b> React Native Elements, React Native
                    Vector Icons
                  </li>
                  <li>
                    <b>Responsive:</b> Mobile-first, media queries
                  </li>
                  <li>
                    <b>Platform:</b> iOS & Android with responsive and
                    performant design
                  </li>
                </ul>

                <h4>👨‍💻 About the Developer</h4>
                <p>
                  BeatVerse is being developed solely by me — from concept to
                  code. Every screen, interaction, and backend logic is
                  carefully crafted to ensure a smooth and powerful user
                  experience. My focus is not just on functionality, but also on
                  delivering a design that resonates with music lovers. <br />
                  This is not just another app — it's a passion project that
                  reflects my love for music, mobile development, and creating
                  intuitive digital experiences.
                </p>

                <h4>🚀 Final Words</h4>
                <p>
                  BeatVerse is more than just a music discovery app — it's a personalized, evolving, and community-oriented experience for anyone who lives and breathes music. Whether you're exploring new tracks, diving into trending albums, or saving your all-time favorites, BeatVerse gives you the tools and interface to enjoy music like never before — beautifully, effortlessly, and on the go.
                </p>
              </div>

              <div className="pop-up__projectLinkBox">
                <span className="pop-up__projectLink">
                  Repository:{" "}
                  <a
                    href="https://github.com/Furkan-ThecLifeN/BeatVerse"
                    target="_blank"
                    rel="noopener noreferrer"
                  >
                    https://github.com/Furkan-ThecLifeN/BeatVerse
                  </a>
                </span>
                <span className="pop-up__projectLink">
                  Live Demo:{" "}
                  <a
                    href="#"
                    target="_blank"
                    rel="noopener noreferrer"
                  >
                    Soon (This project is under development.)
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

export default BeatVerse;
