import React, { useState } from "react";
import "../ProjectContainer.css";
import { AiOutlineClose } from "react-icons/ai";
import "../ProjectPopUp.css";
import WebStudio1 from "../../../assets/project-assets/WebStudio1.png";
import WebStudio2 from "../../../assets/project-assets/WebStudio2.png";
import WebStudio3 from "../../../assets/project-assets/WebStudio3.png";
import WebStudio4 from "../../../assets/project-assets/WebStudio4.png";

const WebStudio = () => {
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
        <h2 className="ProjectNameTitle">Web Studio</h2>
        <button className="projectDetail-Button" onClick={openPopup}>
          Details
        </button>
      </div>
      <div className="project-container">
        <div className="card-img-box-1">
          <div className="card-img-top">
            <img
              src={WebStudio1}
              alt="Preview 1"
              className="img1"
              onClick={openPopup}
            />
            <img
              src={WebStudio2}
              alt="Preview 2"
              className="img2"
              onClick={openPopup}
            />
          </div>
          <div className="card-img-bottom">
            <img
              src={WebStudio3}
              alt="Preview 3"
              className="img3"
              onClick={openPopup}
            />
          </div>
        </div>
        <div className="card-img-box-2">
          <img
            src={WebStudio4}
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
            <h2 className="pop-up__projectName">Web Studio</h2>
            <img src={WebStudio2} alt="" className="projectMain-img" />
            <div className="pop-up__container">
              <div className="pop-up__projectText">
                <h3 style={{ textAlign: "center" }}>
                  💼 Welcome to WebStudio – Elevating Digital Experiences for
                  Modern Businesses
                </h3>
                <p>
                  WebStudio is a sleek, business-focused portfolio website built
                  using HTML and CSS, designed to promote custom web and mobile
                  app development services. Tailored for tech companies,
                  freelance developers, and digital agencies, this fully
                  responsive website serves as a powerful online presence to
                  showcase expertise, projects, and services.
                </p>

                <h4>✨ Key Features</h4>
                <ul className="projectText-ul">
                  <li>
                    <strong>Professional Landing Page:</strong> A bold and
                    engaging hero section with concise messaging that
                    immediately communicates professionalism and service value.
                  </li>
                  <li>
                    <strong>About Us Section:</strong> Introduces the company’s
                    mission, values, and team expertise — building trust with
                    potential clients.
                  </li>
                  <li>
                    <strong>Services Overview:</strong> Clearly defined service
                    offerings such as website development, UI/UX design, mobile
                    app solutions, and e-commerce development — structured for
                    easy navigation and quick understanding.
                  </li>
                  <li>
                    <strong>Portfolio Display:</strong> A visually compelling
                    showcase of past projects to demonstrate technical
                    capability and creative quality. Each project can be
                    presented with visuals, descriptions, and outcomes.
                  </li>
                  <li>
                    <strong>Client Testimonials:</strong> Space for authentic
                    client feedback to add credibility and demonstrate client
                    satisfaction.
                  </li>
                  <li>
                    <strong>Call to Action & Contact Form:</strong>{" "}
                    Strategically placed buttons and a responsive contact
                    section make it easy for visitors to initiate a project
                    discussion or request a quote.
                  </li>
                  <li>
                    <strong>Responsive & Cross-Device Compatible :</strong> Built with mobile-first design principles, ensuring optimal performance across smartphones, tablets, and desktops.
                  </li>
                </ul>

                <h4>🛠️ Technologies Used</h4>
                <ul className="projectText-ul">
                  <li>
                    <b>Frontend:</b> HTML5, CSS3
                  </li>
                  <li>
                    <b>Layout:</b> CSS Flexbox & Grid
                    Motion
                  </li>
                  <li>
                    <b>Design Elements:</b> Modern fonts, subtle animations, hover effects
                  </li>
                  <li>
                    <b>Best Practices:</b> Clean, maintainable code structure optimized for performance and accessibility
                  </li>
                </ul>

                <h4>👨‍💻 About the Developer</h4>
                <p>
                  This project was developed solo from scratch, with a clear focus on business needs and user engagement. The aim was to provide a polished, professional template suitable for companies or individuals looking to build trust with prospective clients through a well-structured and visually appealing online presence.
<br />
From the layout and color palette to spacing and interactivity, every detail of WebStudio was crafted to reflect the high standards of a real-world development agency.
                </p>

                <h4>🚀 Final Words</h4>
                <p>
                   <b>WebStudio</b> is more than just a static business website. It’s a versatile, ready-to-use template for modern service providers in the software and tech industries. Whether you're a freelancer, startup, or digital agency, WebStudio offers a professional and compelling way to showcase your work, attract clients, and grow your business.
                </p>
              </div>

              <div className="pop-up__projectLinkBox">
                <span className="pop-up__projectLink">
                  Repository:{" "}
                  <a
                    href="https://github.com/Furkan-ThecLifeN/WebStudio"
                    target="_blank"
                    rel="noopener noreferrer"
                  >
                    https://github.com/Furkan-ThecLifeN/WebStudio
                  </a>
                </span>
                <span className="pop-up__projectLink">
                  Live Demo:{" "}
                  <a
                    href="https://furkan-theclifen.github.io/WebStudio/"
                    target="_blank"
                    rel="noopener noreferrer"
                  >
                    https://furkan-theclifen.github.io/WebStudio/
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

export default WebStudio;
