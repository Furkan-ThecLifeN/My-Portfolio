import React, { useEffect } from "react";
import { AiOutlineClose } from "react-icons/ai";
import "./ProjectPopUp.css";
import ProjectMain from "../../assets/project-assets/1-main.png";

const ProjectPopUp = ({ project, onClose }) => {
useEffect(() => {
  document.body.classList.add("modal-open");
  return () => {
    document.body.classList.remove("modal-open");
  };
}, []);
  



  return (
    <div className="popup-overlay" onClick={onClose}>
      <section className="project-popup" onClick={(e) => e.stopPropagation()}>
        <button className="popup-close-btn" onClick={onClose}>
          <AiOutlineClose size={24} />
        </button>
        <h2 className="pop-up__projectName">{project.projectName}</h2>
        <img src={ProjectMain} alt="" className="projectMain-img" />
        <div className="pop-up__container">
        </div>
      </section>
    </div>
  );
};

export default ProjectPopUp;
