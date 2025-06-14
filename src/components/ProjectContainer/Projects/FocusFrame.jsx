import React, { useState } from "react";
import "../ProjectContainer.css";
import { AiOutlineClose } from "react-icons/ai";
import "../ProjectPopUp.css";
import FocusFrame1 from "../../../assets/project-assets/FocusFrame1.png";
import FocusFrame2 from "../../../assets/project-assets/FocusFrame2.png";
import FocusFrame3 from "../../../assets/project-assets/FocusFrame3.png";
import FocusFrame4 from "../../../assets/project-assets/FocusFrame4.png";


const FocusFrame = () => {
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
        <h2 className="ProjectNameTitle">FocusFrame</h2>
        <button className="projectDetail-Button" onClick={openPopup}>
          Details
        </button>
      </div>
      <div className="project-container">
        <div className="card-img-box-1">
          <div className="card-img-top">
            <img
              src={FocusFrame1}
              alt="Preview 1"
              className="img1"
              onClick={openPopup}
            />
            <img
              src={FocusFrame2}
              alt="Preview 2"
              className="img2"
              onClick={openPopup}
            />
          </div>
          <div className="card-img-bottom">
            <img
              src={FocusFrame3}
              alt="Preview 3"
              className="img3"
              onClick={openPopup}
            />
          </div>
        </div>
        <div className="card-img-box-2">
          <img
            src={FocusFrame4}
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
            <h2 className="pop-up__projectName">FocusFrame</h2>
            <img src={FocusFrame2} alt="" className="projectMain-img" />
            <div className="pop-up__container">
              <div className="pop-up__projectText">
                <h3 style={{ textAlign: "center" }}>
                  📸 Welcome to FocusFrame – Capturing Moments Through Design
                </h3>
                <p>
                  FocusFrame is a sleek, elegant, and fully responsive HTML/CSS
                  website crafted to highlight the artistry and professionalism
                  of photography. Designed to serve as a digital portfolio for
                  photographers or studios, FocusFrame effectively showcases
                  photographic work, services, client testimonials, and brand
                  identity in a modern, minimalist aesthetic.
                  <br />
                  🧑‍🤝‍🧑 Built by a Collaborative Team of 6–7 Developers, this
                  project represents not only technical precision but also the
                  power of teamwork and collective creativity.
                </p>

                <h4>✨ Key Features</h4>
                <ul className="projectText-ul">
                  <li>
                    <strong>Striking Hero Section:</strong> Captivates visitors
                    instantly with high-resolution imagery and concise messaging
                    that reflects the essence of the brand.
                  </li>
                  <li>
                    <strong>About the Photographer(s):</strong> A dedicated
                    section for introducing the team’s story, vision, and
                    creative approach to photography.
                  </li>
                  <li>
                    <strong>Gallery Portfolio:</strong> A beautifully organized
                    grid layout to present various categories of photography —
                    from portrait to nature, events to commercial work.
                  </li>
                  <li>
                    <strong>Services & Pricing:</strong> Clearly structured
                    offerings and customizable packages for potential clients,
                    enabling efficient communication and booking.
                  </li>
                  <li>
                    <strong>Client Testimonials:</strong> Real feedback
                    displayed in a stylish carousel or grid format, enhancing
                    trust and authenticity.
                  </li>
                  <li>
                    <strong>Contact Section with Call to Action:</strong> Easily
                    accessible contact form and social links, inviting
                    collaboration and inquiries.
                  </li>
                  <li>
                    <strong>Mobile-First & Responsive Design:</strong> Designed
                    to perform flawlessly on all devices — from smartphones to
                    large screens.
                  </li>
                </ul>

                <h4>🛠️ Technologies Used</h4>
                <ul className="projectText-ul">
                  <li>
                    <b>Frontend:</b> HTML5, CSS3
                  </li>
                  <li>
                    <b>Layout Techniques:</b> CSS Grid, Flexbox
                  </li>
                  <li>
                    <b>Styling:</b> Clean typography, subtle animations, smooth
                    transitions
                  </li>
                  <li>
                    <b>Code Quality:</b> Semantic structure and accessible
                    design best practices
                  </li>
                </ul>

                <h4>👨‍💻 About the Project</h4>
                <p>
                  FocusFrame was developed as a collaborative team project by a
                  group of 6–7 front-end developers. From concept and
                  wireframing to execution and testing, every aspect of the site
                  was handled with attention to detail and a shared commitment
                  to high-quality results. <br />
                  Each team member contributed to different parts of the project
                  — layout, responsiveness, animations, content structure —
                  ensuring a well-rounded and professional outcome.
                </p>

                <h4>🚀 Final Words</h4>
                <p>
                  FocusFrame is more than just a photography website — it’s a digital lens through which talent and teamwork shine. Built with simplicity, elegance, and user experience in mind, this site provides a perfect foundation for photographers or studios to express their identity, attract clients, and grow their brand in the digital space.
                </p>
              </div>

              <div className="pop-up__projectLinkBox">
                <span className="pop-up__projectLink">
                  Repository:{" "}
                  <a
                    href="https://github.com/GroupG-FocusFrame/FocusFrame"
                    target="_blank"
                    rel="noopener noreferrer"
                  >
                    https://github.com/GroupG-FocusFrame/FocusFrame
                  </a>
                </span>
                <span className="pop-up__projectLink">
                  Live Demo:{" "}
                  <a
                    href="https://groupg-focusframe.github.io/FocusFrame/"
                    target="_blank"
                    rel="noopener noreferrer"
                  >
                    https://groupg-focusframe.github.io/FocusFrame/
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

export default FocusFrame;
