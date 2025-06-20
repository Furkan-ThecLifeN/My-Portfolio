import React, { useState } from "react";
import "./qualification.css";
import { FaUserGraduate } from "react-icons/fa";
import { FaBriefcaseMedical } from "react-icons/fa";
import { BsCalendarDate } from "react-icons/bs";

const Qualification = () => {
  const [toggleState, setToggleState] = useState(1); // Başlangıçta 1 seçili olsun

  const ToggleTab = (index) => {
    setToggleState(index);
  };

  return (
    <section className="qualification section" id="portfolio">
      <h2 className="section__title">Qualification</h2>
      <span className="section__subtitle">My personal journey</span>

      <div className="qualification__container container">
        <div className="qualification__tabs">
          <div
            className={
              toggleState === 1
                ? "qualification__button qualification__active button--flex"
                : "qualification__button button--flex"
            }
            onClick={() => ToggleTab(1)}
          >
            <FaUserGraduate className="qualification__icon" /> Education
          </div>

          <div
            className={
              toggleState === 2
                ? "qualification__button qualification__active button--flex"
                : "qualification__button button--flex"
            }
            onClick={() => ToggleTab(2)}
          >
            <FaBriefcaseMedical className="qualification__icon" /> Experience
          </div>
        </div>

        <div className="qualification__sections">
          {/* Education Content */}
          <div
            className={
              toggleState === 1
                ? "qualification__content qualification__content-active"
                : "qualification__content"
            }
          >
            <div className="qualification__data">
              <div>
                <h3 className="qualification__title">HTML & CSS</h3>
                <span className="qualification__subtitle">
                  Fullstack Web Development Certificate
                </span>
                <div className="qualification__calendar">
                  <div className="calendar-right">
                    <BsCalendarDate /> 2024 - Present
                  </div>
                </div>
              </div>
              <div>
                <span className="qualification__rounder"></span>
                <span className="qualification__line"></span>
              </div>
            </div>

            <div className="qualification__data">
              <div></div>

              <div>
                <span className="qualification__rounder"></span>
                <span className="qualification__line"></span>
              </div>

              <div>
                <h3 className="qualification__title">JavaScript</h3>
                <span className="qualification__subtitle">
                  Fullstack Web Development Certificate
                </span>
                <div className="qualification__calendar">
                  <BsCalendarDate /> 2025 - Present
                </div>
              </div>
            </div>

            <div className="qualification__data">
              <div>
                <h3 className="qualification__title">Bootstrap 5</h3>
                <span className="qualification__subtitle">BTK Akademi</span>
                <div className="qualification__calendar">
                  <div className="calendar-right">
                    <BsCalendarDate /> 2025
                  </div>
                </div>
              </div>
              <div>
                <span className="qualification__rounder"></span>
                <span className="qualification__line"></span>
              </div>
            </div>

            <div className="qualification__data">
              <div></div>

              <div>
                <span className="qualification__rounder"></span>
                <span className="qualification__line"></span>
              </div>

              <div>
                <h3 className="qualification__title">React</h3>
                <span className="qualification__subtitle">
                  Fullstack Web Development Certificate
                </span>
                <div className="qualification__calendar">
                  <BsCalendarDate /> 2025 - Present
                </div>
              </div>
            </div>

            <div className="qualification__data">
              <div>
                <h3 className="qualification__title">React Native</h3>
                <span className="qualification__subtitle">BTK Akademi</span>
                <div className="qualification__calendar">
                  <div className="calendar-right">
                    <BsCalendarDate /> 2025
                  </div>
                </div>
              </div>
              <div>
                <span className="qualification__rounder"></span>
                <span className="qualification__line"></span>
              </div>
            </div>

            <div className="qualification__data">
              <div></div>

              <div>
                <span className="qualification__rounder"></span>
                <span className="qualification__line"></span>
              </div>

              <div>
                <h3 className="qualification__title">Node JS</h3>
                <span className="qualification__subtitle">
                  Fullstack Web Development Certificate
                </span>
                <div className="qualification__calendar">
                  <BsCalendarDate /> 2025 - Present
                </div>
              </div>
            </div>

            <div className="qualification__data">
              <div>
                <h3 className="qualification__title">Python</h3>
                <span className="qualification__subtitle">BTK Akademi</span>
                <div className="qualification__calendar">
                  <BsCalendarDate /> 2025 - Present
                </div>
              </div>
              <div>
                <span className="qualification__rounder"></span>
                <span className="qualification__line"></span>
              </div>
            </div>

            <div className="qualification__data">
              <div></div>

              <div>
                <span className="qualification__rounder"></span>
                <span className="qualification__line"></span>
              </div>

              <div>
                <h3 className="qualification__title">English for IT</h3>
                <span className="qualification__subtitle">BTK Akademi</span>
                <div className="qualification__calendar">
                  <BsCalendarDate /> 2025
                </div>
              </div>
            </div>

            <div className="qualification__data">
              <div>
                <h3 className="qualification__title">English (B1 Level)</h3>
                <span className="qualification__subtitle">BTK Akademi</span>
                <div className="qualification__calendar">
                  <div className="calendar-right">
                    <BsCalendarDate /> 2025
                  </div>
                </div>
              </div>
              <div>
                <span className="qualification__rounder"></span>
                <span className="qualification__line"></span>
              </div>
            </div>

            <div className="qualification__data">
              <div></div>

              <div>
                <span className="qualification__rounder"></span>
                <span className="qualification__line"></span>
              </div>

              <div>
                <h3 className="qualification__title">Git & Github</h3>
                <span className="qualification__subtitle">BTK Akademi</span>
                <div className="qualification__calendar">
                  <BsCalendarDate /> 2025
                </div>
              </div>
            </div>

            <div className="qualification__data">
              <div>
                <h3 className="qualification__title">Unreal Engine 5</h3>
                <span className="qualification__subtitle">BTK Akademi</span>
                <div className="qualification__calendar">
                  <div className="calendar-right">
                    <BsCalendarDate /> 2024
                  </div>
                </div>
              </div>
              <div>
                <span className="qualification__rounder"></span>
                <span className="qualification__line"></span>
              </div>
            </div>
          </div>

          {/* Experience Content */}
          <div
            className={
              toggleState === 2
                ? "qualification__content qualification__content-active"
                : "qualification__content"
            }
          >
            <div className="qualification__data">
              <div>
                <h3 className="qualification__title">CineVerse</h3>
                <span className="qualification__subtitle">
                  CineVerse is a dynamic React web app for discovering, rating,
                  and reviewing movies using real-time data.{" "}
                </span>
                <div className="qualification__calendar">
                  <div className="calendar-right">
                    <BsCalendarDate /> 2025
                  </div>
                </div>
              </div>
              <div>
                <span className="qualification__rounder"></span>
                <span className="qualification__line"></span>
              </div>
            </div>

            <div className="qualification__data">
              <div></div>

              <div>
                <span className="qualification__rounder"></span>
                <span className="qualification__line"></span>
              </div>

              <div>
                <h3 className="qualification__title">W1</h3>
                <span className="qualification__subtitle">
                  W1 is a React Native social media app built to connect people through dynamic content sharing and real-time interaction.
                </span>
                <div className="qualification__calendar">
                  <BsCalendarDate /> 2025 - Present
                </div>
              </div>
            </div>

            <div className="qualification__data">
              <div>
                <h3 className="qualification__title">My Portfolio</h3>
                <span className="qualification__subtitle">
                  My Portfolio is a modern, fully responsive React website
                  showcasing projects, skills, and experience.
                </span>
                <div className="qualification__calendar">
                  <div className="calendar-right">
                    <BsCalendarDate /> 2025
                  </div>
                </div>
              </div>
              <div>
                <span className="qualification__rounder"></span>
                <span className="qualification__line"></span>
              </div>
            </div>

            <div className="qualification__data">
              <div></div>

              <div>
                <span className="qualification__rounder"></span>
                <span className="qualification__line"></span>
              </div>

              <div>
                <h3 className="qualification__title">DailyO</h3>
                <span className="qualification__subtitle">
                  DailyO is a multi-purpose web platform integrating various
                  APIs to deliver weather, news, finance, horoscopes, and
                  recipes in one place.
                </span>
                <div className="qualification__calendar">
                  <BsCalendarDate /> 2025 - Present
                </div>
              </div>
            </div>

            <div className="qualification__data">
              <div>
                <h3 className="qualification__title">Cinemania</h3>
                <span className="qualification__subtitle">
                  Cinemania is a film and series discovery platform by Group C,
                  enabling users to find, list, and share their favorite titles.
                </span>
                <div className="qualification__calendar">
                  <div className="calendar-right">
                    <BsCalendarDate /> 2025
                  </div>
                </div>
              </div>
              <div>
                <span className="qualification__rounder"></span>
                <span className="qualification__line"></span>
              </div>
            </div>

            <div className="qualification__data">
              <div></div>

              <div>
                <span className="qualification__rounder"></span>
                <span className="qualification__line"></span>
              </div>

              <div>
                <h3 className="qualification__title">Nike Store</h3>
                <span className="qualification__subtitle">
                  Nike Store is a responsive e-commerce web app built with Vite
                  and JavaScript, featuring product filtering and local storage.
                </span>
                <div className="qualification__calendar">
                  <BsCalendarDate /> 2025
                </div>
              </div>
            </div>

            <div className="qualification__data">
              <div>
                <h3 className="qualification__title">FocusFrame</h3>
                <span className="qualification__subtitle">
                  FocusFrame is a sleek HTML/CSS website that showcases the art
                  of photography.
                </span>
                <div className="qualification__calendar">
                  <div className="calendar-right">
                    <BsCalendarDate /> 2024
                  </div>
                </div>
              </div>
              <div>
                <span className="qualification__rounder"></span>
                <span className="qualification__line"></span>
              </div>
            </div>

            <div className="qualification__data">
              <div></div>

              <div>
                <span className="qualification__rounder"></span>
                <span className="qualification__line"></span>
              </div>

              <div>
                <h3 className="qualification__title">Portfolio-Website</h3>
                <span className="qualification__subtitle">
                  A stylish, modern, and fully responsive portfolio website
                  built with HTML and CSS.{" "}
                </span>
                <div className="qualification__calendar">
                  <BsCalendarDate /> 2024
                </div>
              </div>
            </div>

            <div className="qualification__data">
              <div>
                <h3 className="qualification__title">Chef-s-Kitchen</h3>
                <span className="qualification__subtitle">
                  Chef’s Kitchen is a responsive HTML/CSS website for a pizza
                  delivery service, highlighting fast and convenient ordering.{" "}
                </span>
                <div className="qualification__calendar">
                  <div className="calendar-right">
                    <BsCalendarDate /> 2024
                  </div>
                </div>
              </div>
              <div>
                <span className="qualification__rounder"></span>
                <span className="qualification__line"></span>
              </div>
            </div>

            <div className="qualification__data">
              <div></div>

              <div>
                <span className="qualification__rounder"></span>
                <span className="qualification__line"></span>
              </div>

              <div>
                <h3 className="qualification__title">WebStudio</h3>
                <span className="qualification__subtitle">
                  WebStudio is a business-focused HTML/CSS website designed to
                  promote custom web and app development services.
                </span>
                <div className="qualification__calendar">
                  <BsCalendarDate /> 2024
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Qualification;
