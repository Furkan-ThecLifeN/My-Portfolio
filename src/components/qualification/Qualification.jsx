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
          {/* EDUCATION SECTION */}
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

          {/* EXPERIENCE SECTION */}
          <div
            className={
              toggleState === 2
                ? "qualification__content qualification__content-active"
                : "qualification__content"
            }
          >
            {/* 1. W1 (EN ÜSTTE) */}
            <div className="qualification__data">
              <div>
                <h3 className="qualification__title">W1</h3>
                <span className="qualification__subtitle">
                  Advanced full-stack React web application built for dynamic content sharing, real-time interaction, and seamless social connectivity.
                </span>
                <div className="qualification__calendar">
                  <div className="calendar-right">
                    <BsCalendarDate /> 2025 – 2026
                  </div>
                </div>
              </div>
              <div>
                <span className="qualification__rounder"></span>
                <span className="qualification__line"></span>
              </div>
            </div>

            {/* 2. Smart Inventory Management */}
            <div className="qualification__data">
              <div></div>
              <div>
                <span className="qualification__rounder"></span>
                <span className="qualification__line"></span>
              </div>
              <div>
                <h3 className="qualification__title">Smart Inventory Management</h3>
                <span className="qualification__subtitle">
                  Hybrid Web and Desktop architecture featuring Kafka-based stock tracking and an Offline-First synchronization system supported by SQLite.
                </span>
                <div className="qualification__calendar">
                  <BsCalendarDate /> 2026
                </div>
              </div>
            </div>

            {/* 3. Event-Driven Microservices */}
            <div className="qualification__data">
              <div>
                <h3 className="qualification__title">Event-Driven Microservices</h3>
                <span className="qualification__subtitle">
                  Developed with Java 21, Spring Boot 3.3, and Kafka; a scalable infrastructure featuring asynchronous order flows and distributed logging.
                </span>
                <div className="qualification__calendar">
                  <div className="calendar-right">
                    <BsCalendarDate /> 2026
                  </div>
                </div>
              </div>
              <div>
                <span className="qualification__rounder"></span>
                <span className="qualification__line"></span>
              </div>
            </div>

            {/* 4. Enterprise Auth System */}
            <div className="qualification__data">
              <div></div>
              <div>
                <span className="qualification__rounder"></span>
                <span className="qualification__line"></span>
              </div>
              <div>
                <h3 className="qualification__title">Enterprise Auth System</h3>
                <span className="qualification__subtitle">
                  High-security framework featuring Java 21, Spring Boot 3, and JWT. Implements RBAC, BCrypt hashing, and Docker orchestration for scalable solutions.
                </span>
                <div className="qualification__calendar">
                  <BsCalendarDate /> 2026
                </div>
              </div>
            </div>

            {/* 5. LearnLingo */}
            <div className="qualification__data">
              <div>
                <h3 className="qualification__title">LearnLingo</h3>
                <span className="qualification__subtitle">
                  Language tutor platform built with React 18 and Firebase 11. Features real-time tutor discovery, lesson booking, and secure authentication.
                </span>
                <div className="qualification__calendar">
                  <div className="calendar-right">
                    <BsCalendarDate /> 2026
                  </div>
                </div>
              </div>
              <div>
                <span className="qualification__rounder"></span>
                <span className="qualification__line"></span>
              </div>
            </div>

            {/* 6. TravelTrucks */}
            <div className="qualification__data">
              <div></div>
              <div>
                <span className="qualification__rounder"></span>
                <span className="qualification__line"></span>
              </div>
              <div>
                <h3 className="qualification__title">TravelTrucks</h3>
                <span className="qualification__subtitle">
                  Modern camper rental platform built with React and Redux Toolkit, enabling users to browse campers and manage favorites.
                </span>
                <div className="qualification__calendar">
                  <BsCalendarDate /> 2025
                </div>
              </div>
            </div>

            {/* 7. Guardians of Money */}
            <div className="qualification__data">
              <div>
                <h3 className="qualification__title">Guardians of Money</h3>
                <span className="qualification__subtitle">
                  Finance management app developed with React and Redux Toolkit, offering income-expense tracking and real-time currency data.
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

            {/* 8. TaskHive / TaskPro */}
            <div className="qualification__data">
              <div></div>
              <div>
                <span className="qualification__rounder"></span>
                <span className="qualification__line"></span>
              </div>
              <div>
                <h3 className="qualification__title">TaskHive / TaskPro</h3>
                <span className="qualification__subtitle">
                  Collaborative project built with React and Node.js, designed to manage tasks and streamline team productivity in real time.
                </span>
                <div className="qualification__calendar">
                  <BsCalendarDate /> 2024 – 2025
                </div>
              </div>
            </div>

            {/* 9. Cinemania */}
            <div className="qualification__data">
              <div>
                <h3 className="qualification__title">Cinemania</h3>
                <span className="qualification__subtitle">
                  A discovery platform for movies and series, enabling users to explore and list their favorite titles.
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

            {/* 10. Nike Store */}
            <div className="qualification__data">
              <div></div>
              <div>
                <span className="qualification__rounder"></span>
                <span className="qualification__line"></span>
              </div>
              <div>
                <h3 className="qualification__title">Nike Store</h3>
                <span className="qualification__subtitle">
                  Responsive e-commerce web application built with JavaScript and Vite, featuring product filtering and local storage.
                </span>
                <div className="qualification__calendar">
                  <BsCalendarDate /> 2025
                </div>
              </div>
            </div>

            {/* 11. FocusFrame */}
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

            {/* 12. Portfolio Website */}
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

            {/* 13. Chef’s Kitchen */}
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

            {/* 14. WebStudio */}
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