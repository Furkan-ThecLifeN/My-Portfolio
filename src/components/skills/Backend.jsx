import React from 'react'
import { LuBadgeCheck } from "react-icons/lu";

function Backend() {
  return (
    <div className="skills__content">
      <h3 className="skills__title">Backend Development & Systems</h3>

      <div className="skills__box">
        <div className="skills__group">
          <div className="skills__data">
            <LuBadgeCheck className="fronted-icon" />
            <div>
              <h3 className="skills__name">Java</h3>
              <span className="skills__level">Intermediate</span>
            </div>
          </div>

          <div className="skills__data">
            <LuBadgeCheck className="fronted-icon" />
            <div>
              <h3 className="skills__name">Spring Boot 3</h3>
              <span className="skills__level">Intermediate</span>
            </div>
          </div>

          <div className="skills__data">
            <LuBadgeCheck className="fronted-icon" />
            <div>
              <h3 className="skills__name">Spring Security / JPA</h3>
              <span className="skills__level">Intermediate</span>
            </div>
          </div>

          <div className="skills__data">
            <LuBadgeCheck className="fronted-icon" />
            <div>
              <h3 className="skills__name">Node.js & Express</h3>
              <span className="skills__level">Intermediate</span>
            </div>
          </div>
        </div>

        {/* Grup 2: Data, Messaging & API */}
        <div className="skills__group">
          <div className="skills__data">
            <LuBadgeCheck className="fronted-icon" />
            <div>
              <h3 className="skills__name">MSSQL / PostgreSQL</h3>
              <span className="skills__level">Intermediate</span>
            </div>
          </div>

          <div className="skills__data">
            <LuBadgeCheck className="fronted-icon" />
            <div>
              <h3 className="skills__name">Kafka & Redis</h3>
              <span className="skills__level">Intermediate</span>
            </div>
          </div>

          <div className="skills__data">
            <LuBadgeCheck className="fronted-icon" />
            <div>
              <h3 className="skills__name">MongoDB / SQLite</h3>
              <span className="skills__level">Intermediate</span>
            </div>
          </div>

          <div className="skills__data">
            <LuBadgeCheck className="fronted-icon" />
            <div>
              <h3 className="skills__name">RESTful API Design</h3>
              <span className="skills__level">Advanced</span>
            </div>
          </div>
        </div>

        {/* Grup 3: DevOps & Architecture */}
        <div className="skills__group">
          <div className="skills__data">
            <LuBadgeCheck className="fronted-icon" />
            <div>
              <h3 className="skills__name">Docker & Compose</h3>
              <span className="skills__level">Intermediate</span>
            </div>
          </div>

          <div className="skills__data">
            <LuBadgeCheck className="fronted-icon" />
            <div>
              <h3 className="skills__name">Event-Driven Arch</h3>
              <span className="skills__level">Intermediate</span>
            </div>
          </div>

          <div className="skills__data">
            <LuBadgeCheck className="fronted-icon" />
            <div>
              <h3 className="skills__name">RBAC & Data Sync</h3>
              <span className="skills__level">Advanced</span>
            </div>
          </div>

          <div className="skills__data">
            <LuBadgeCheck className="fronted-icon" />
            <div>
              <h3 className="skills__name">WebSocket / Firebase</h3>
              <span className="skills__level">Intermediate</span>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default Backend;