import React, { useState } from "react";
import "./qualification.css";
import { FaUserGraduate } from "react-icons/fa";
import { FaBriefcaseMedical } from "react-icons/fa";
import { BsCalendarDate } from "react-icons/bs";

const Qualification = () => {
  const [toggleState, setToggleState] = useState(1);

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
          {/* EDUCATION */}
          <div
            className={
              toggleState === 1
                ? "qualification__content qualification__content-active"
                : "qualification__content"
            }
          >
            <div className="qualification__data">
              <div>
                <h3 className="qualification__title">Fullstack Developer Program</h3>
                <span className="qualification__subtitle">
                  GOIT – International Diploma (Completed)
                </span>
                <div className="qualification__calendar">
                  <div className="calendar-right">
                    <BsCalendarDate /> 2024 – 2025
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
                <h3 className="qualification__title">Computer Programming</h3>
                <span className="qualification__subtitle">
                  Ondokuz Mayıs University – Associate Degree
                </span>
                <div className="qualification__calendar">
                  <BsCalendarDate /> 2025 – Present
                </div>
              </div>
            </div>

            <div className="qualification__data">
              <div>
                <h3 className="qualification__title">English (B1 Level)</h3>
                <span className="qualification__subtitle">Self-development</span>
                <div className="qualification__calendar">
                  <div className="calendar-right">
                    <BsCalendarDate /> 2024 – Present
                  </div>
                </div>
              </div>
              <div>
                <span className="qualification__rounder"></span>
              </div>
            </div>
          </div>

          {/* EXPERIENCE */}
          <div
            className={
              toggleState === 2
                ? "qualification__content qualification__content-active"
                : "qualification__content"
            }
          >
            {/* W1 – en üste */}
            <div className="qualification__data">
              <div>
                <h3 className="qualification__title">W1</h3>
                <span className="qualification__subtitle">
                  W1 is an advanced full-stack React web application built for dynamic content sharing, real-time interaction, and seamless social connectivity.
                </span>
                <div className="qualification__calendar">
                  <div className="calendar-right">
                    <BsCalendarDate /> 2025 – Present
                  </div>
                </div>
              </div>
              <div>
                <span className="qualification__rounder"></span>
                <span className="qualification__line"></span>
              </div>
            </div>

            {/* TravelTrucks */}
            <div className="qualification__data">
              <div></div>
              <div>
                <span className="qualification__rounder"></span>
                <span className="qualification__line"></span>
              </div>
              <div>
                <h3 className="qualification__title">TravelTrucks</h3>
                <span className="qualification__subtitle">
                  TravelTrucks is a modern camper rental platform built with React, Redux Toolkit, Vite, and MockAPI, enabling users to browse campers, filter features, view details, and save favorites.
                </span>
                <div className="qualification__calendar">
                  <BsCalendarDate /> 2025
                </div>
              </div>
            </div>

            {/* Guardians of Money */}
            <div className="qualification__data">
              <div>
                <h3 className="qualification__title">Guardians of Money</h3>
                <span className="qualification__subtitle">
                  Guardians of Money is a modern finance management app developed with React, Redux Toolkit, and Vite, offering income-expense tracking, real-time currency data, visual charts, and responsive UI.
                </span>
                <div className="qualification__calendar">
                  <div className="calendar-right">
                    <BsCalendarDate /> 2024 – 2025
                  </div>
                </div>
              </div>
              <div>
                <span className="qualification__rounder"></span>
                <span className="qualification__line"></span>
              </div>
            </div>

            {/* TaskHive / TaskPro */}
            <div className="qualification__data">
              <div></div>
              <div>
                <span className="qualification__rounder"></span>
                <span className="qualification__line"></span>
              </div>
              <div>
                <h3 className="qualification__title">TaskHive / TaskPro</h3>
                <span className="qualification__subtitle">
                  TaskHive is a collaborative project built with React and Node.js, designed to manage tasks, organize workflow, and streamline team productivity in real time.
                </span>
                <div className="qualification__calendar">
                  <BsCalendarDate /> 2024 – 2025
                </div>
              </div>
            </div>

            {/* Other existing projects */}
            <div className="qualification__data">
              <div>
                <h3 className="qualification__title">Cinemania</h3>
                <span className="qualification__subtitle">
                  Cinemania is a discovery platform for movies and series, enabling users to explore, list, and manage their favorite titles.
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
                  A responsive e-commerce web application built with JavaScript and Vite, featuring product filtering and local storage support.
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
                  A clean and modern photography showcase website developed with HTML and CSS.
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
                <h3 className="qualification__title">Portfolio Website</h3>
                <span className="qualification__subtitle">
                  A modern and fully responsive personal portfolio developed with HTML, CSS, and JavaScript.
                </span>
                <div className="qualification__calendar">
                  <BsCalendarDate /> 2024
                </div>
              </div>
            </div>

            <div className="qualification__data">
              <div>
                <h3 className="qualification__title">Chef’s Kitchen</h3>
                <span className="qualification__subtitle">
                  A responsive HTML/CSS restaurant website designed for fast pizza ordering.
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
              </div>
              <div>
                <h3 className="qualification__title">WebStudio</h3>
                <span className="qualification__subtitle">
                  A business-focused HTML/CSS website built to showcase custom web development services.
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
