import React from "react";
import "./skills.css"
import Fronted from "./Fronted";
import Backend from "./Backend";


const Skills = () => {
  return (
    <section className="skills section" id="skills">
      <h2 className="section__title">Skills</h2>
          <span className="section__subtitle">My techinical level</span>
          
          <div className="skills__container container grid">
              <Fronted />
              <Backend />
          </div>
    </section>
  );
};

export default Skills;
