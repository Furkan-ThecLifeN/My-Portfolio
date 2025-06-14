import React, { useState } from "react";
import "./services.css";
import {
  FaArrowAltCircleRight,
  FaRegEdit,
  FaCheckCircle,
} from "react-icons/fa";
import { TiDelete } from "react-icons/ti";
import { FaCode } from "react-icons/fa6";
import { SiAffinitydesigner } from "react-icons/si";

const Services = () => {
  const [toggleState, setToggleState] = useState(0);

  const toggleTab = (index) => {
    setToggleState(index);
  };

  return (
    <section className="services section" id="services">
      <h2 className="section__title">Services</h2>
      <span className="section__subtitle">What i offer</span>

      <div className="services__container container grid">
        <div className="services__content">
          <div>
            <SiAffinitydesigner className="services__card-icon" />
            <h3 className="services__title">
              Web <br />
              Development
            </h3>
          </div>
          <span className="services__button" onClick={() => toggleTab(1)}>
            View More
            <FaArrowAltCircleRight className="services__button-icon" />
          </span>

          <div
            className={
              toggleState === 1
                ? "services__modal active-modal"
                : "services__modal"
            }
          >
            <div className="services__modal-content">
              <TiDelete
                onClick={() => toggleTab(0)}
                className="services__icon-closed"
              />

              <h3 className="services__modal-title">Web Development</h3>
              <p className="services__modal-description">
                I build modern, fast, and user-friendly websites. Each project
                combines functionality with design to deliver custom digital
                solutions.
              </p>
              <ul className="services__modal-services grid">
                <li className="services__modal-service">
                  <FaCheckCircle className="services__icon" />
                  <p className="services__modal-info">
                    Mobile-responsive design
                  </p>
                </li>
                <li className="services__modal-service">
                  <FaCheckCircle className="services__icon" />
                  <p className="services__modal-info">SEO-friendly structure</p>
                </li>
                <li className="services__modal-service">
                  <FaCheckCircle className="services__icon" />
                  <p className="services__modal-info">Fast loading times</p>
                </li>

                <li className="services__modal-service">
                  <FaCheckCircle className="services__icon" />
                  <p className="services__modal-info">
                    Clean and readable code
                  </p>
                </li>
                <li className="services__modal-service">
                  <FaCheckCircle className="services__icon" />
                  <p className="services__modal-info">
                    Easily manageable content
                  </p>
                </li>
              </ul>
            </div>
          </div>
        </div>

        <div className="services__content">
          <div>
            <FaCode className="services__card-icon" />
            <h3 className="services__title">
              Ui / Ux <br />
              Designer
            </h3>
          </div>
          <span className="services__button" onClick={() => toggleTab(2)}>
            UI/UX Design
            <FaArrowAltCircleRight className="services__button-icon" />
          </span>

          <div
            className={
              toggleState === 2
                ? "services__modal active-modal"
                : "services__modal"
            }
          >
            <div className="services__modal-content">
              <TiDelete
                onClick={() => toggleTab(0)}
                className="services__icon-closed"
              />

              <h3 className="services__modal-title">Ui / Ux Designer</h3>
              <p className="services__modal-description">
                With a user-centered design approach, I create digital experiences that are both visually appealing and highly functional.
              </p>
              <ul className="services__modal-services grid">
                <li className="services__modal-service">
                  <FaCheckCircle className="services__icon" />
                  <p className="services__modal-info">
                    Intuitive user interface design
                  </p>
                </li>
                <li className="services__modal-service">
                  <FaCheckCircle className="services__icon" />
                  <p className="services__modal-info">Interactive prototypes</p>
                </li>
                <li className="services__modal-service">
                  <FaCheckCircle className="services__icon" />
                  <p className="services__modal-info">
                    Consistent typography and color schemes
                  </p>
                </li>

                <li className="services__modal-service">
                  <FaCheckCircle className="services__icon" />
                  <p className="services__modal-info">
                    UX research and analysis
                  </p>
                </li>
                <li className="services__modal-service">
                  <FaCheckCircle className="services__icon" />
                  <p className="services__modal-info">
                    Cohesive design systems
                  </p>
                </li>
              </ul>
            </div>
          </div>
        </div>

        <div className="services__content">
          <div>
            <FaRegEdit className="services__card-icon" />
            <h3 className="services__title">
              Backend <br />
              Solutions
            </h3>
          </div>
          <span className="services__button" onClick={() => toggleTab(3)}>
            Backend Solutions
            <FaArrowAltCircleRight className="services__button-icon" />
          </span>

          <div
            className={
              toggleState === 3
                ? "services__modal active-modal"
                : "services__modal"
            }
          >
            <div className="services__modal-content">
              <TiDelete
                onClick={() => toggleTab(0)}
                className="services__icon-closed"
              />

              <h3 className="services__modal-title">Backend Solutions</h3>
              <p className="services__modal-description">
                I offer backend solutions focused on data management, security, and performance, ensuring all behind-the-scenes operations run smoothly.
              </p>
              <ul className="services__modal-services grid">
                <li className="services__modal-service">
                  <FaCheckCircle className="services__icon" />
                  <p className="services__modal-info">
                    RESTful API development
                  </p>
                </li>
                <li className="services__modal-service">
                  <FaCheckCircle className="services__icon" />
                  <p className="services__modal-info">Robust database architecture</p>
                </li>
                <li className="services__modal-service">
                  <FaCheckCircle className="services__icon" />
                  <p className="services__modal-info">
                    Authentication and security
                  </p>
                </li>

                <li className="services__modal-service">
                  <FaCheckCircle className="services__icon" />
                  <p className="services__modal-info">
                    Performance optimization
                  </p>
                </li>
                <li className="services__modal-service">
                  <FaCheckCircle className="services__icon" />
                  <p className="services__modal-info">
                    Scalable server structure
                  </p>
                </li>
              </ul>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Services;
