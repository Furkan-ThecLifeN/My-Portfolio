import React, { useState } from "react";
import "../ProjectContainer.css";
import { AiOutlineClose } from "react-icons/ai";
import "../ProjectPopUp.css";
import ChefsKitchen1 from "../../../assets/project-assets/ChefsKitchen1.png";
import ChefsKitchen2 from "../../../assets/project-assets/ChefsKitchen2.png";
import ChefsKitchen3 from "../../../assets/project-assets/ChefsKitchen3.png";
import ChefsKitchen4 from "../../../assets/project-assets/ChefsKitchen4.png";

const ChefsKitchen = () => {
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
        <h2 className="ProjectNameTitle">Chef’s Kitchen</h2>
        <button className="projectDetail-Button" onClick={openPopup}>
          Details
        </button>
      </div>
      <div className="project-container">
        <div className="card-img-box-1">
          <div className="card-img-top">
            <img
              src={ChefsKitchen1}
              alt="Preview 1"
              className="img1"
              onClick={openPopup}
            />
            <img
              src={ChefsKitchen2}
              alt="Preview 2"
              className="img2"
              onClick={openPopup}
            />
          </div>
          <div className="card-img-bottom">
            <img
              src={ChefsKitchen3}
              alt="Preview 3"
              className="img3"
              onClick={openPopup}
            />
          </div>
        </div>
        <div className="card-img-box-2">
          <img
            src={ChefsKitchen4}
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
            <h2 className="pop-up__projectName">Chef’s Kitchen</h2>
            <img src={ChefsKitchen2} alt="" className="projectMain-img" />
            <div className="pop-up__container">
              <div className="pop-up__projectText">
                <h3 style={{ textAlign: "center" }}>
                  🍕 Welcome to Chef’s Kitchen – Where Flavor Meets Convenience
                </h3>
                <p>
                  Chef’s Kitchen is a modern, fully responsive pizza delivery
                  website built with HTML and CSS. Designed as a promotional and
                  functional platform for pizza restaurants and takeaway
                  businesses, this website combines simplicity, speed, and style
                  to elevate the customer ordering experience.
                </p>

                <h4>🔥 Key Features</h4>
                <ul className="projectText-ul">
                  <li>
                    <strong>Modern Landing Page:</strong> Eye-catching visuals
                    and a clean layout greet users, instantly conveying the
                    brand’s quality and reliability. Strong CTAs
                    (Call-to-Actions) guide users toward ordering with ease.
                  </li>
                  <li>
                    <strong>Menu Section:</strong> An organized and appealing
                    presentation of pizza varieties, with prices and ingredients
                    clearly displayed – making the browsing experience
                    delightful and intuitive.
                  </li>
                  <li>
                    <strong>Order Now Functionality (Frontend Layout):</strong>{" "}
                    Though built without backend integration, the design
                    simulates a real ordering flow with user-friendly forms,
                    pop-ups, and visual feedback for interactions.
                  </li>
                  <li>
                    <strong>Responsive Design:</strong> Seamlessly optimized for
                    all screen sizes, ensuring that users on mobile, tablet, or
                    desktop enjoy a consistent and accessible experience.
                  </li>
                  <li>
                    <strong>Modern UI/UX Design:</strong> Sleek fonts, vibrant
                    color palette, smooth hover effects, and clean animations
                    work together to create an inviting, high-end digital
                    experience.
                  </li>
                  <li>
                    <strong>Business-Oriented Layout:</strong> Sections include
                    company info, service hours, delivery zones, and promotional
                    areas — ideal for real-world pizza shops and restaurant
                    owners looking to build their online presence.
                  </li>
                </ul>

                <h4>🛠️ Technologies Used</h4>
                <ul className="projectText-ul">
                  <li>
                    <b>Frontend:</b> HTML5, CSS3
                  </li>
                  <li>
                    <b>Layout:</b> Flexbox, CSS Grid, Mobile-First Design
                  </li>
                  <li>
                    <b>Effects:</b> Transitions, Hover States, Responsive
                    Components
                  </li>
                  <li>
                    <b>Performance:</b> Clean code structure, optimized for fast
                    loading and high readability
                  </li>
                </ul>

                <h4>👨‍🍳 About the Developer</h4>
                <p>
                  Chef’s Kitchen was designed and developed entirely by me as a
                  solo project. Every line of code and every design element was
                  handcrafted to simulate a real-world business website. The
                  focus was on delivering a clean and effective frontend
                  solution that’s both practical and visually appealing.
                  <br />
                  This project also demonstrates my ability to design for real
                  clients – aligning brand needs with responsive web
                  technologies and modern UI/UX practices.
                </p>

                <h4>🚀 Final Words</h4>
                <p>
                  Chef’s Kitchen isn’t just a static HTML/CSS template — it’s a
                  ready-to-adapt digital storefront for pizza businesses aiming
                  to improve their online presence. With its sharp design and
                  solid structure, it lays the groundwork for further
                  integration with backend services or e-commerce platforms.
                  <br />
                  Whether it’s for showcasing a restaurant or setting up a
                  delivery portal, Chef’s Kitchen delivers taste, speed, and
                  style — right to your screen.
                </p>
              </div>

              <div className="pop-up__projectLinkBox">
                <span className="pop-up__projectLink">
                  Repository:{" "}
                  <a
                    href="https://github.com/Furkan-ThecLifeN/Chef-s-Kitchen"
                    target="_blank"
                    rel="noopener noreferrer"
                  >
                    https://github.com/Furkan-ThecLifeN/Chef-s-Kitchen
                  </a>
                </span>
                <span className="pop-up__projectLink">
                  Live Demo:{" "}
                  <a
                    href="https://furkan-theclifen.github.io/Chef-s-Kitchen/"
                    target="_blank"
                    rel="noopener noreferrer"
                  >
                    https://furkan-theclifen.github.io/Chef-s-Kitchen/
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

export default ChefsKitchen;
