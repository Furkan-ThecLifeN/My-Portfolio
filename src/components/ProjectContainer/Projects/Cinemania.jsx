import React, { useState } from "react";
import "../ProjectContainer.css";
import { AiOutlineClose } from "react-icons/ai";
import "../ProjectPopUp.css";
import Cinemania1 from "../../../assets/project-assets/Cinemania1.png";
import Cinemania2 from "../../../assets/project-assets/Cinemania2.png";
import Cinemania3 from "../../../assets/project-assets/Cinemania3.png";
import Cinemania4 from "../../../assets/project-assets/Cinemania4.png";

const Cinemania = () => {
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
        <h2 className="ProjectNameTitle">Cinemania</h2>
        <button className="projectDetail-Button" onClick={openPopup}>
          Details
        </button>
      </div>
      <div className="project-container">
        <div className="card-img-box-1">
          <div className="card-img-top">
            <img
              src={Cinemania1}
              alt="Preview 1"
              className="img1"
              onClick={openPopup}
            />
            <img
              src={Cinemania2}
              alt="Preview 2"
              className="img2"
              onClick={openPopup}
            />
          </div>
          <div className="card-img-bottom">
            <img
              src={Cinemania3}
              alt="Preview 3"
              className="img3"
              onClick={openPopup}
            />
          </div>
        </div>
        <div className="card-img-box-2">
          <img
            src={Cinemania4}
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
            <h2 className="pop-up__projectName">Cinemania</h2>
            <img src={Cinemania2} alt="" className="projectMain-img" />
            <div className="pop-up__container">
              <div className="pop-up__projectText">
                <h3 style={{ textAlign: "center" }}>
                  🎬 Welcome to Cinemania – Discover, Track, and Share the World
                  of Film and Series
                </h3>
                <p>
                  Cinemania is a modern, fully responsive web platform built
                  with Vanilla JavaScript, designed to transform the way users
                  discover and interact with films and TV shows. Developed by a
                  dedicated 6-person team (Group C), Cinemania brings together
                  real-time movie and series data, a sleek user experience, and
                  dynamic interface — all within a single, seamless environment.
                </p>

                <h4>🎬 Core Features</h4>
                <ul className="projectText-ul">
                  <li>
                    <strong>Real-Time Content via TMDb API:</strong> Cinemania
                    integrates with the TMDb API to deliver up-to-date
                    information on trending, top-rated, popular, and upcoming
                    movies and series, ensuring that users are always in touch
                    with the latest in entertainment.
                  </li>
                  <li>
                    <strong>Advanced Search & Categorization:</strong> Users can
                    easily search and filter movies or shows by title, genre,
                    release year, and more. Each item is presented with detailed
                    overviews, posters, trailers, and ratings.
                  </li>
                  <li>
                    <strong>Personal Watchlists:</strong> Visitors can create
                    personal lists to track their favorite films and series,
                    allowing a customized experience and convenient access to
                    saved content.
                  </li>
                  <li>
                    <strong>Mobile-First & Fully Responsive Design:</strong>{" "}
                    Cinemania is designed with responsiveness at its core —
                    offering a consistent and intuitive layout across desktops,
                    tablets, and smartphones.
                  </li>
                  <li>
                    <strong>Smooth UX with Interactive UI Elements:</strong>{" "}
                    Thoughtfully crafted animations and transitions provide a
                    refined user experience without the need for heavy
                    frameworks — thanks to clean and efficient Vanilla JS logic.
                  </li>
                  <li>
                    <strong>
                      🧑‍💻 Clean Code Architecture & Component Structure:
                    </strong>{" "}
                    Developed using modular React components and clear logic
                    separation, the application is maintainable, scalable, and
                    production-ready.
                  </li>
                </ul>

                <h4>🛠️ Technologies Used</h4>
                <ul className="projectText-ul">
                  <li>
                    <b>Frontend:</b> HTML5, CSS3, Vanilla JavaScript
                  </li>
                  <li>
                    <b>Design Principles:</b> Mobile-first design, media
                    queries, modular architecture
                  </li>
                  <li>
                    <b>Data Source:</b> TMDb (The Movie Database) API
                  </li>
                  <li>
                    <b>Version Control:</b> Git & GitHub (team collaboration)
                  </li>
                  <li>
                    <b>Project Workflow:</b> Agile methodology with task
                    distribution via GitHub Projects and Trello
                  </li>
                </ul>

                <h4>👨‍💻 About the Team</h4>
                <p>
                  Cinemania was collaboratively designed and developed by Group
                  C, consisting of six developers with a shared passion for
                  frontend development and clean UI. From concept to deployment,
                  each member contributed to planning, UI/UX, API integration,
                  testing, and optimization. The result is a dynamic platform
                  that highlights the power of Vanilla JS and team synergy.
                </p>

                <h4>🚀 Final Words</h4>
                <p>
                  Cinemania is more than just a movie database — it's a gateway
                  to discovering, tracking, and sharing the world of cinema and
                  television. Whether you're a casual viewer or a dedicated
                  cinephile, Cinemania provides the tools to curate your
                  watchlist, explore hidden gems, and stay connected with the
                  entertainment universe — beautifully and efficiently.
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
                    https://github.com/Furkan-ThecLifeN/TeamC-Cinemania-Project{" "}
                  </a>
                </span>
                <span className="pop-up__projectLink">
                  Live Demo:{" "}
                  <a
                    href="https://cine-verse-theta.vercel.app/"
                    target="_blank"
                    rel="noopener noreferrer"
                  >
                    https://furkan-theclifen.github.io/TeamC-Cinemania-Project/
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

export default Cinemania;
