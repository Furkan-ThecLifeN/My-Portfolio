import React from "react";
import { LuBadgeCheck } from "react-icons/lu";

const Fronted = () => {
  return (
    <div className="skills__content">
      <h3 className="skills__title">Frontend & Mobile Development</h3>

      <div className="skills__box">
        {/* Grup 1: Core UI & Logic */}
        <div className="skills__group">
          <div className="skills__data">
            <LuBadgeCheck className="fronted-icon" />
            <div>
              <h3 className="skills__name">React.js</h3>
              <span className="skills__level">Advanced</span>
            </div>
          </div>

          <div className="skills__data">
            <LuBadgeCheck className="fronted-icon" />
            <div>
              <h3 className="skills__name">JavaScript / TS</h3>
              <span className="skills__level">Advanced</span>
            </div>
          </div>

          <div className="skills__data">
            <LuBadgeCheck className="fronted-icon" />
            <div>
              <h3 className="skills__name">HTML5 / CSS3</h3>
              <span className="skills__level">Advanced</span>
            </div>
          </div>

          <div className="skills__data">
            <LuBadgeCheck className="fronted-icon" />
            <div>
              <h3 className="skills__name">Tailwind CSS</h3>
              <span className="skills__level">Advanced</span>
            </div>
          </div>
        </div>

        {/* Grup 2: Mobile & Libraries */}
        <div className="skills__group">
          <div className="skills__data">
            <LuBadgeCheck className="fronted-icon" />
            <div>
              <h3 className="skills__name">React Native</h3>
              <span className="skills__level">Intermediate</span>
            </div>
          </div>

          <div className="skills__data">
            <LuBadgeCheck className="fronted-icon" />
            <div>
              <h3 className="skills__name">Ant Design</h3>
              <span className="skills__level">Intermediate</span>
            </div>
          </div>

          <div className="skills__data">
            <LuBadgeCheck className="fronted-icon" />
            <div>
              <h3 className="skills__name">Vite</h3>
              <span className="skills__level">Advanced</span>
            </div>
          </div>

          <div className="skills__data">
            <LuBadgeCheck className="fronted-icon" />
            <div>
              <h3 className="skills__name">Framer Motion</h3>
              <span className="skills__level">Intermediate</span>
            </div>
          </div>
        </div>

        {/* Grup 3: Tools & Workflow */}
        <div className="skills__group">
          <div className="skills__data">
            <LuBadgeCheck className="fronted-icon" />
            <div>
              <h3 className="skills__name">Git / GitHub</h3>
              <span className="skills__level">Advanced</span>
            </div>
          </div>

          <div className="skills__data">
            <LuBadgeCheck className="fronted-icon" />
            <div>
              <h3 className="skills__name">npm / Maven</h3>
              <span className="skills__level">Advanced</span>
            </div>
          </div>

          <div className="skills__data">
            <LuBadgeCheck className="fronted-icon" />
            <div>
              <h3 className="skills__name">Firebase Auth</h3>
              <span className="skills__level">Intermediate</span>
            </div>
          </div>

          <div className="skills__data">
            <LuBadgeCheck className="fronted-icon" />
            <div>
              <h3 className="skills__name">System Design</h3>
              <span className="skills__level">Intermediate</span>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Fronted;