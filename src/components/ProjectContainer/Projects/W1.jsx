import React, { useState } from "react";
import "../ProjectContainer.css";
import { AiOutlineClose } from "react-icons/ai";
import "../ProjectPopUp.css";

// Visual placeholders — kendi görsellerini ekleyeceksin
import ProjectMain from "../../../assets/project-assets/W1-1.png";
import img1 from "../../../assets/project-assets/W1-1.png";
import img2 from "../../../assets/project-assets/W1-2.png";
import img3 from "../../../assets/project-assets/W1-3.png";
import img4 from "../../../assets/project-assets/W1-4.png";

const W1 = () => {
  const [isPopupOpen, setIsPopupOpen] = useState(false);

  const openPopup = () => setIsPopupOpen(true);
  const closePopup = () => setIsPopupOpen(false);

  return (
    <section className="project-section">
      <div className="project-title">
        <h2 className="ProjectNameTitle">W1</h2>
        <button className="projectDetail-Button" onClick={openPopup}>
          Details
        </button>
      </div>

      <div className="project-container">
        <div className="card-img-box-1">
          <div className="card-img-top">
            <img src={img1} alt="Preview 1" className="img1" onClick={openPopup} />
            <img src={img2} alt="Preview 2" className="img2" onClick={openPopup} />
          </div>
          <div className="card-img-bottom">
            <img src={img3} alt="Preview 3" className="img3" onClick={openPopup} />
          </div>
        </div>

        <div className="card-img-box-2">
          <img src={img4} alt="Preview 4" className="img4" onClick={openPopup} />
        </div>
      </div>

      {isPopupOpen && (
        <div className="popup-overlay" onClick={closePopup}>
          <section className="project-popup" onClick={(e) => e.stopPropagation()}>
            <button className="popup-close-btn" onClick={closePopup}>
              <AiOutlineClose size={24} />
            </button>

            <h2 className="pop-up__projectName">W1 – Full-Stack Social Media Platform</h2>
            <img src={ProjectMain} alt="" className="projectMain-img" />

            <div className="pop-up__container">

              {/* MAIN PARAGRAPH */}
              <div className="pop-up__projectText">
                <h3 style={{ textAlign: "center" }}>
                  W1 – Redefining Social Media with Feelings, Posts, Feed & Stories
                </h3>

                <p>
                  W1 is a fully responsive, full-stack social media platform engineered to deliver a clean, fast and 
                  secure user experience. It features three dynamic content systems — short-form “Feelings”, 
                  visual “Posts”, and video-based “Feed”. The platform integrates real-time messaging, profile 
                  customization, advanced privacy modes, activity status, discover page with Shorts-style algorithm,
                  and a modern interface powered by Framer Motion animations. W1 also includes rich Story support 
                  (Coming Soon), local demos, and a future-ready Live streaming module.
                </p>

                {/* FEATURES */}
                <h4>Key Features</h4>
                <ul className="projectText-ul">
                  <li>Feeling system for expressive short posts</li>
                  <li>High-quality image Posts with albums & captions</li>
                  <li>Feed videos with YouTube Shorts embedding</li>
                  <li>Advanced Privacy Controls (Public / Friends / Close Friends / Only Me)</li>
                  <li>Friend Activity Status (online/offline)</li>
                  <li>Private Messaging</li>
                  <li>Discover page with trending video integration</li>
                  <li>Stories module (Coming Soon)</li>
                  <li>Post / Feed / Feeling demo modules for instant testing</li>
                  <li>Dark/Light theme engine</li>
                </ul>

                {/* TECHNOLOGIES */}
                <h4>Technologies Used</h4>
                <ul className="projectText-ul">
                  <li>React.js, React Router</li>
                  <li>Firebase (Auth, Firestore, Storage, Security Rules)</li>
                  <li>Node.js & Express (backend services)</li>
                  <li>Framer Motion (UI animations)</li>
                  <li>Module CSS & custom design system</li>
                  <li>YouTube Embed API (Shorts integration)</li>
                </ul>
              </div>

              {/* REPO + LIVE */}
              <div className="pop-up__projectLinkBox">
                <span className="pop-up__projectLink">
                  Live Demo:{" "}
                  <a
                    href="YOUR_W1_LIVE_URL"
                    target="_blank"
                    rel="noopener noreferrer"
                  >
                    https://www.wone-quantumtag.com
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

export default W1;
