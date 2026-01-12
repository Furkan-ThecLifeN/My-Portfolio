import React, { useState } from "react";
import "../ProjectContainer.css";
import { AiOutlineClose } from "react-icons/ai";
import "../ProjectPopUp.css";

// Bu görselleri kendi klasörlerine göre değiştireceksin
import ProjectMain from "../../../assets/project-assets/TaskHive2.png";
import img1 from "../../../assets/project-assets/TaskHive1.png";
import img2 from "../../../assets/project-assets/TaskHive2.png";
import img3 from "../../../assets/project-assets/TaskHive3.png";
import img4 from "../../../assets/project-assets/TaskHive4.png";

const TaskHive = () => {
  const [isPopupOpen, setIsPopupOpen] = useState(false);

  const openPopup = () => {
    setIsPopupOpen(true);
  };

  const closePopup = () => {
    setIsPopupOpen(false);
  };

  return (
    <section className='project-section'>
      <div className="project-title">
        <h2 className='ProjectNameTitle'>TaskHive</h2>
        <button className='projectDetail-Button' onClick={openPopup}>
          Details
        </button>
      </div>

      <div className="project-container">
        <div className="card-img-box-1">
          <div className="card-img-top">
            <img src={img1} alt="Preview 1" className='img1' onClick={openPopup} />
            <img src={img2} alt="Preview 2" className='img2' onClick={openPopup} />
          </div>
          <div className="card-img-bottom">
            <img src={img3} alt="Preview 3" className='img3' onClick={openPopup} />
          </div>
        </div>

        <div className="card-img-box-2">
          <img src={img4} alt="Preview 4" className='img4' onClick={openPopup} />
        </div>
      </div>

      {isPopupOpen && (
        <div className="popup-overlay" onClick={closePopup}>
          <section className="project-popup" onClick={(e) => e.stopPropagation()}>
            <button className="popup-close-btn" onClick={closePopup}>
              <AiOutlineClose size={24} />
            </button>

            <h2 className="pop-up__projectName">TaskHive</h2>
            <img src={ProjectMain} alt="" className="projectMain-img" />

            <div className="pop-up__container">

              <div className="pop-up__projectText">
                <h3 style={{ textAlign: "center" }}>
                  TaskHive – Smart Task Management & Productivity Platform
                </h3>

                <p>
                  TaskHive is a productivity-focused task management application
                  designed to help users organize work, track progress, and stay
                  consistent with daily goals. Featuring dynamic task creation,
                  filtering tools, priority labeling, progress indicators, and clean
                  UI components, TaskHive enhances workflow efficiency and provides a
                  seamless experience across all devices.
                </p>

                <h4>Key Features</h4>
                <ul className="projectText-ul">
                  <li>Create, delete, and organize tasks instantly</li>
                  <li>Priority levels and task status management</li>
                  <li>Filtering tools for quick task discovery</li>
                  <li>Progress indicators (daily or weekly workflow)</li>
                  <li>Fully responsive layout</li>
                </ul>

                <h4>Technologies Used</h4>
                <ul className="projectText-ul">
                  <li>React.js, Context API or Redux (sen hangisini kullandıysan)</li>
                  <li>LocalStorage / backend option</li>
                  <li>CSS Modules / Styled Components</li>
                </ul>
              </div>

              <div className="pop-up__projectLinkBox">
                <span className="pop-up__projectLink">
                  Repository:{" "}
                  <a
                    href="YOUR_REPO_URL"
                    target="_blank"
                    rel="noopener noreferrer"
                  >
                    https://github.com/TaskHive-TaskPro/TaskPro.git
                  </a>
                </span>

                <span className="pop-up__projectLink">
                  Live Demo:{" "}
                  <a
                    href="YOUR_LIVE_URL"
                    target="_blank"
                    rel="noopener noreferrer"
                  >
                    https://taskpro-frontend.onrender.com/
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

export default TaskHive;
