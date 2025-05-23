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
    }

  return (
    <section className="services section" id="services">
      <h2 className="section__title">Services</h2>
      <span className="section__subtitle">What i offer</span>

      <div className="services__container container grid">
        <div className="services__content">
          <div>
            <SiAffinitydesigner className="services__card-icon" />
            <h3 className="services__title">
              Product <br />
              Designer
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

              <h3 className="services__modal-title">Product Designer</h3>
              <p className="services__modal-description">
                Lorem, ipsum dolor sit amet consectetur adipisicing elit. Saepe
                possimus ab repellendus, temporibus vero velit odio ducimus qui
                ipsa quibusdam?
              </p>
              <ul className="services__modal-services grid">
                <li className="services__modal-service">
                  <FaCheckCircle className="services__icon" />
                  <p className="services__modal-info">
                    I develop the user interface.
                  </p>
                </li>
                <li className="services__modal-service">
                  <FaCheckCircle className="services__icon" />
                  <p className="services__modal-info">Web page development.</p>
                </li>
                <li className="services__modal-service">
                  <FaCheckCircle className="services__icon" />
                  <p className="services__modal-info">
                    I create ux elemnt interactions.
                  </p>
                </li>

                <li className="services__modal-service">
                  <FaCheckCircle className="services__icon" />
                  <p className="services__modal-info">
                    I position your company brand.
                  </p>
                </li>
                <li className="services__modal-service">
                  <FaCheckCircle className="services__icon" />
                  <p className="services__modal-info">
                    Design and mockups of products for companies.
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
            View More
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
                Lorem, ipsum dolor sit amet consectetur adipisicing elit. Saepe
                possimus ab repellendus, temporibus vero velit odio ducimus qui
                ipsa quibusdam?
              </p>
              <ul className="services__modal-services grid">
                <li className="services__modal-service">
                  <FaCheckCircle className="services__icon" />
                  <p className="services__modal-info">
                    I develop the user interface.
                  </p>
                </li>
                <li className="services__modal-service">
                  <FaCheckCircle className="services__icon" />
                  <p className="services__modal-info">Web page development.</p>
                </li>
                <li className="services__modal-service">
                  <FaCheckCircle className="services__icon" />
                  <p className="services__modal-info">
                    I create ux elemnt interactions.
                  </p>
                </li>

                <li className="services__modal-service">
                  <FaCheckCircle className="services__icon" />
                  <p className="services__modal-info">
                    I position your company brand.
                  </p>
                </li>
                <li className="services__modal-service">
                  <FaCheckCircle className="services__icon" />
                  <p className="services__modal-info">
                    Design and mockups of products for companies.
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
              Visual <br />
              Designer
            </h3>
          </div>
          <span className="services__button" onClick={() => toggleTab(3)}>
            View More
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

              <h3 className="services__modal-title">Visual Designer</h3>
              <p className="services__modal-description">
                Lorem, ipsum dolor sit amet consectetur adipisicing elit. Saepe
                possimus ab repellendus, temporibus vero velit odio ducimus qui
                ipsa quibusdam?
              </p>
              <ul className="services__modal-services grid">
                <li className="services__modal-service">
                  <FaCheckCircle className="services__icon" />
                  <p className="services__modal-info">
                    I develop the user interface.
                  </p>
                </li>
                <li className="services__modal-service">
                  <FaCheckCircle className="services__icon" />
                  <p className="services__modal-info">Web page development.</p>
                </li>
                <li className="services__modal-service">
                  <FaCheckCircle className="services__icon" />
                  <p className="services__modal-info">
                    I create ux elemnt interactions.
                  </p>
                </li>

                <li className="services__modal-service">
                  <FaCheckCircle className="services__icon" />
                  <p className="services__modal-info">
                    I position your company brand.
                  </p>
                </li>
                <li className="services__modal-service">
                  <FaCheckCircle className="services__icon" />
                  <p className="services__modal-info">
                    Design and mockups of products for companies.
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
