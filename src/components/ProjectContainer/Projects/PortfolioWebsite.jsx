import React, { useState } from "react";
import "../ProjectContainer.css";
import { AiOutlineClose } from "react-icons/ai";
import "../ProjectPopUp.css";
import PortfolioWebsite1 from "../../../assets/project-assets/PortfolioWebsite1.png";
import PortfolioWebsite2 from "../../../assets/project-assets/PortfolioWebSite2.png";
import PortfolioWebsite3 from "../../../assets/project-assets/PortfolioWebsite3.png";
import PortfolioWebsite4 from "../../../assets/project-assets/PortfolioWebsite4.png";

const PortfolioWebsite = () => {
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
        <h2 className="ProjectNameTitle">Portfolio Website</h2>
        <button className="projectDetail-Button" onClick={openPopup}>
          Details
        </button>
      </div>
      <div className="project-container">
        <div className="card-img-box-1">
          <div className="card-img-top">
            <img
              src={PortfolioWebsite1}
              alt="Preview 1"
              className="img1"
              onClick={openPopup}
            />
            <img
              src={PortfolioWebsite2}
              alt="Preview 2"
              className="img2"
              onClick={openPopup}
            />
          </div>
          <div className="card-img-bottom">
            <img
              src={PortfolioWebsite3}
              alt="Preview 3"
              className="img3"
              onClick={openPopup}
            />
          </div>
        </div>
        <div className="card-img-box-2">
          <img
            src={PortfolioWebsite4}
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
            <h2 className="pop-up__projectName">Portfolio Website</h2>
            <img src={PortfolioWebsite2} alt="" className="projectMain-img" />
            <div className="pop-up__container">
              <div className="pop-up__projectText">
                <h3 style={{ textAlign: "center" }}>
                  🌐 Welcome to Portfolio Website – A Digital Reflection of Who
                  I Am
                </h3>
                <p>
                  Portfolio-Website is a sleek, futuristic, and fully responsive
                  personal portfolio site built entirely with HTML and CSS.
                  Designed with precision and modern aesthetics, this project
                  serves as a professional online identity – showcasing skills,
                  background, projects, and personal branding in a clean and
                  engaging format.
                </p>

                <h4>🎯 Key Features</h4>
                <ul className="projectText-ul">
                  <li>
                    <strong>About Me Section:</strong> A compelling introduction
                    that highlights your personality, career goals, and what
                    makes you unique. This section is crafted to create an
                    immediate connection with visitors or potential employers.
                  </li>
                  <li>
                    <strong>Projects Showcase:</strong> A well-organized gallery
                    of completed works, featuring descriptions and links to live
                    demos or repositories. This allows visitors to explore your
                    creative and technical capabilities at a glance.
                  </li>
                  <li>
                    <strong>Skills & Expertise:</strong> Clearly listed core
                    competencies and technologies you work with, presented in a
                    visually clean format. Each skill is categorized to enhance
                    readability and clarity.
                  </li>
                  <li>
                    <strong>Responsive Design :</strong> This section clearly
                    outlines what I can do — from frontend development and
                    responsive UI/UX design to backend integration.
                  </li>
                  <li>
                    <strong>Futuristic UI:</strong> With a stylish, high-tech
                    aesthetic, the interface features smooth scroll behavior,
                    geometric layouts, bold typography, and minimalist color
                    schemes — all reflecting a forward-thinking and
                    design-conscious personality.
                  </li>
                  <li>
                    <strong>Contact Section:</strong> A user-friendly contact
                    area allows recruiters or collaborators to reach out easily
                    via email or social platforms, contributing to effective
                    personal branding.
                  </li>
                </ul>

                <h4>🛠️ Technologies Used</h4>
                <ul className="projectText-ul">
                  <li>
                    <b>Frontend:</b> HTML5, CSS3
                  </li>
                  <li>
                    <b>Design System:</b> Mobile-first responsive layout,
                    Flexbox & Grid
                  </li>
                  <li>
                    <b>UI/UX Elements:</b> Custom buttons, hover effects, smooth
                    transitions
                  </li>
                  <li>
                    <b>Performance:</b> Lightweight, fast-loading static site
                  </li>
                </ul>

                <h4>👤 About the Project</h4>
                <p>
                  This portfolio site was designed and coded from scratch to
                  serve as a professional online presence — ideal for
                  freelancers, developers, creatives, and students. The project
                  reflects both technical skill and design sensibility,
                  providing a strong foundation for networking, job
                  applications, or freelance opportunities. <br />
                  Everything from layout choices to content structure was built
                  with a purpose: to communicate identity, competence, and
                  ambition in a visually compelling and efficient way.
                </p>

                <h4>🚀 Final Words</h4>
                <p>
                  <b>Portfolio-Website</b> isn’t just a place to list achievements — it’s a personal brand, a digital business card, and a creative showcase rolled into one. Designed to leave a lasting impression, this website sets the stage for future collaborations, career opportunities, and personal growth.
                </p>
              </div>

              <div className="pop-up__projectLinkBox">
                <span className="pop-up__projectLink">
                  Repository:{" "}
                  <a
                    href="https://github.com/Furkan-ThecLifeN/Portfolio-Website"
                    target="_blank"
                    rel="noopener noreferrer"
                  >
                   https://github.com/Furkan-ThecLifeN/Portfolio-Website
                  </a>
                </span>
                <span className="pop-up__projectLink">
                  Live Demo:{" "}
                  <a
                    href="https://furkan-theclifen.github.io/Portfolio-Website/"
                    target="_blank"
                    rel="noopener noreferrer"
                  >
                    https://furkan-theclifen.github.io/Portfolio-Website/
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

export default PortfolioWebsite;
