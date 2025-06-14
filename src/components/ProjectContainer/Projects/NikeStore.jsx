import React, { useState } from "react";
import "../ProjectContainer.css";
import { AiOutlineClose } from "react-icons/ai";
import "../ProjectPopUp.css";
import NikeStore1 from "../../../assets/project-assets/NikeStore1.png";
import NikeStore2 from "../../../assets/project-assets/NikeStore2.png";
import NikeStore3 from "../../../assets/project-assets/NikeStore3.png";
import NikeStore4 from "../../../assets/project-assets/NikeStore4.png";


const NikeStore = () => {
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
        <h2 className="ProjectNameTitle">Nike Store</h2>
        <button className="projectDetail-Button" onClick={openPopup}>
          Details
        </button>
      </div>
      <div className="project-container">
        <div className="card-img-box-1">
          <div className="card-img-top">
            <img
              src={NikeStore1}
              alt="Preview 1"
              className="img1"
              onClick={openPopup}
            />
            <img
              src={NikeStore2}
              alt="Preview 2"
              className="img2"
              onClick={openPopup}
            />
          </div>
          <div className="card-img-bottom">
            <img
              src={NikeStore3}
              alt="Preview 3"
              className="img3"
              onClick={openPopup}
            />
          </div>
        </div>
        <div className="card-img-box-2">
          <img
            src={NikeStore4}
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
            <h2 className="pop-up__projectName">Nike Store</h2>
            <img src={NikeStore2} alt="" className="projectMain-img" />
            <div className="pop-up__container">
              <div className="pop-up__projectText">
                <h3 style={{ textAlign: "center" }}>
                  🛍️ Welcome to Nike Store – A Sleek & Dynamic Shoe Shopping
                  Experience
                </h3>
                <p>
                  Nike Store is a fully responsive, high-performance e-commerce
                  web application built from scratch using Vite and Vanilla
                  JavaScript. This project delivers a seamless and visually
                  engaging user experience, combining modern UI principles with
                  powerful features such as product filtering, favorite lists,
                  and custom API integration — all designed to reflect the
                  sophistication of a professional online storefront.
                </p>

                <h4>🧩 Key Features</h4>
                <ul className="projectText-ul">
                  <li>
                    <strong>Custom Shoe Data API:</strong> In the absence of a
                    public sneaker API, a custom JavaScript-based API system was
                    developed manually. Each shoe product includes detailed
                    metadata such as multiple images, descriptions, and prices —
                    all structured and served efficiently for dynamic rendering.
                  </li>
                  <li>
                    <strong>Add to Favorites Functionality:</strong> Users can
                    easily save and manage their favorite shoe models. This
                    feature utilizes localStorage, ensuring that users’
                    selections are preserved across sessions, even after page
                    reloads.
                  </li>
                  <li>
                    <strong>Advanced Product Filtering:</strong> Intuitive
                    filtering options allow users to explore shoes based on
                    categories, styles, or preferences — providing a
                    personalized shopping journey.
                  </li>
                  <li>
                    <strong>100% Custom UI Design:</strong> Every interface
                    element — from product cards to modals and buttons — has
                    been meticulously designed from the ground up, ensuring
                    brand consistency and visual polish throughout the site.
                  </li>
                  <li>
                    <strong>Responsive Design for All Devices:</strong> Built
                    with mobile-first principles, Nike Store adapts flawlessly
                    to all screen sizes — offering an optimal browsing
                    experience on desktops, tablets, and smartphones.
                  </li>
                  <li>
                    <strong>Stylish Animated Pop-ups & Navigation:</strong>{" "}
                    Smooth transition effects, interactive pop-ups, and dynamic
                    page interactions contribute to a professional-grade user
                    experience that’s as fast as it is visually appealing.
                  </li>
                </ul>

                <h4>🛠️ Technologies Used</h4>
                <ul className="projectText-ul">
                  <li>
                    <b>Frontend:</b> Vite, HTML5, CSS3, Vanilla JavaScript
                  </li>
                  <li>
                    <b>API:</b> <b>API:</b> React Icons, Lottie Files, Framer
                  </li>
                  <li>
                    <b>Data Storage:</b> localStorage
                  </li>
                  <li>
                    <b>Design Approach:</b> Responsive, mobile-first design,
                    modular code structure
                  </li>
                  <li>
                    <b>UI Components:</b> Custom modals, dynamic loaders,
                    animated transitions
                  </li>
                </ul>

                <h4>👟 About the Project</h4>
                <p>
                  Nike Store was conceived and built as a solo project to
                  showcase both frontend development skill and creative design
                  thinking. From UI/UX planning and styling to API structuring
                  and logic implementation, every line of code and visual
                  element was crafted by hand to simulate a real-world
                  e-commerce experience. <br />
                  The creation of a custom data API highlights the flexibility
                  of Vanilla JS and demonstrates the ability to simulate real
                  backend data flow in a frontend-only environment — perfect for
                  showcasing technical capability without relying on third-party
                  APIs.
                </p>

                <h4>🚀 Final Words</h4>
                <p>
                  Nike Store is more than just a shoe catalog — it's a complete
                  frontend e-commerce solution that merges function and form.
                  Designed for users who expect both aesthetic quality and
                  technical smoothness, it delivers a modern shopping interface
                  that feels real, fast, and future-ready. <br />
                  Whether you're exploring designs or saving your favorites,
                  Nike Store offers a stylish, responsive, and high-fidelity
                  digital retail experience.
                </p>
              </div>

              <div className="pop-up__projectLinkBox">
                <span className="pop-up__projectLink">
                  Repository:{" "}
                  <a
                    href="https://github.com/Furkan-ThecLifeN/Nike-Store-Website"
                    target="_blank"
                    rel="noopener noreferrer"
                  >
                    https://github.com/Furkan-ThecLifeN/Nike-Store-Website
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

export default NikeStore;
