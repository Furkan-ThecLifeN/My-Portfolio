import React, { useState } from "react";
import "../ProjectContainer.css";
import { AiOutlineClose } from "react-icons/ai";
import "../ProjectPopUp.css";
import myPortfolio1 from "../../../assets/project-assets/myPortfolio1.png";
import myPortfolio2 from "../../../assets/project-assets/myPortfolio2.png";
import myPortfolio3 from "../../../assets/project-assets/myPortfolio3.png";
import myPortfolio4 from "../../../assets/project-assets/myPortfolio4.png";
import ComingSoon from "../../../assets/ComingSoon.png";

const DailyO = () => {
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
        <h2 className="ProjectNameTitle">DailyO</h2>
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
            <h2 className="pop-up__projectName">DailyO</h2>
            <img src={ComingSoon} alt="" className="projectMain-img" />
            <div className="pop-up__container">
              <div className="pop-up__projectText">
                <h3 style={{ textAlign: "center" }}>
                  🌐 Welcome to DailyO – Your All-in-One Daily Companion
                </h3>
                <p>
                  DailyO is a powerful, multi-functional web platform built to
                  centralize essential daily information into a single, seamless
                  user experience. Whether you want to check the weather, stay
                  up-to-date with global news, follow market trends, explore
                  recipes, or dive into astrology — DailyO brings it all
                  together in one intuitive interface. <br />
                  Developed collaboratively by a team of seven using Vite and
                  Vanilla JavaScript, this project harnesses the power of modern
                  APIs to deliver real-time, relevant, and personalized content
                  across multiple categories.
                </p>

                <h4>🧠 Key Features</h4>
                <ul className="projectText-ul">
                  <li>
                    <strong>📰 Real-Time News Feed:</strong>{" "}
                    Stay informed with the latest news across various categories, powered by reliable and up-to-date news APIs.
                  </li>
                  <li>
                    <strong>🌦️ Weather Forecasts:</strong> Get current and upcoming weather conditions tailored to your location, with accurate data pulled from trusted weather services.
                  </li>
                  <li>
                    <strong>🍳 Recipes & Meal Inspiration:</strong> Browse a rich collection of diverse recipes, complete with ingredients, cooking steps, and dietary filters.
                  </li>
                  <li>
                    <strong>🔮 Astrology Insights:</strong> Explore your daily horoscope, read detailed zodiac interpretations, and even calculate your rising sign with a built-in rising sign calculator.
                  </li>
                  <li>
                    <strong>💱 Finance Dashboard:</strong> Track the latest cryptocurrency values, exchange rates, and financial trends in real time using advanced finance and market APIs.
                  </li>
                  <li>
                    <strong>📲 Centralized User Experience:</strong> Instead of using separate platforms for different needs, DailyO offers a streamlined solution where everything is available in one place.
                  </li>
                </ul>

                <h4>🛠️ Technologies Used</h4>
                <ul className="projectText-ul">
                  <li>
                    <b>Frontend:</b> Vite, Vanilla JavaScript, HTML5, CSS3
                  </li>
                  <li>
                    <b>API Integration:</b> News APIs, Weather APIs, Astrology APIs, Recipe APIs, Cryptocurrency & Forex APIs
                  </li>
                  <li>
                    <b>Design Approach:</b> Fully responsive, mobile-first design principles
                  </li>
                  <li>
                    <b>Team Workflow:</b> Agile development by a 7-member team, using Git and GitHub for version control and collaboration
                  </li>
                </ul>

                <h4>👨‍💻 About the Developer</h4>
                <p>
                  DailyO is a collaborative initiative driven by the idea of simplifying users’ digital routines. Each team member played a crucial role in designing and developing the core modules, ensuring modularity, clean code architecture, and scalability. Our goal is to deliver a reliable, informative, and user-friendly platform that becomes part of your everyday digital habits.
                </p>

                <h4>🚀 Final Words</h4>
                <p>
                  DailyO is not just a web app — it’s a daily assistant. Whether you're planning your day, exploring meals, checking your horoscope, or tracking the markets, DailyO offers the tools, design, and content you need — efficiently and beautifully. It's your entire day, on one screen.
                </p>
              </div>

              <div className="pop-up__projectLinkBox">
                <span className="pop-up__projectLink">
                  Repository:{" "}
                  <a
                    href="https://github.com/DailyO-personal/dailyo"
                    target="_blank"
                    rel="noopener noreferrer"
                  >
                    https://github.com/DailyO-personal/dailyo
                  </a>
                </span>
                <span className="pop-up__projectLink">
                  Live Demo:{" "}
                  <a
                    href=" https://github.com/DailyO-personal/dailyo"
                    target="_blank"
                    rel="noopener noreferrer"
                  >
                    Soon
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

export default DailyO;
