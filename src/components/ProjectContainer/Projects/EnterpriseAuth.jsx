import React, { useState } from "react";
import "../ProjectContainer.css";
import { AiOutlineClose } from "react-icons/ai";
import "../ProjectPopUp.css";

// Görsel yolları (Assets klasörüne eklemeyi unutma)
import ProjectMain from "../../../assets/project-assets/Auth-Swagger.png";
import img1 from "../../../assets/project-assets/Auth-Login.png";
import img2 from "../../../assets/project-assets/Auth-Swagger.png";
import img3 from "../../../assets/project-assets/Auth-Docker.png";
import img4 from "../../../assets/project-assets/Auth-DB.png";

const EnterpriseAuth = () => {
  const [isPopupOpen, setIsPopupOpen] = useState(false);

  const openPopup = () => setIsPopupOpen(true);
  const closePopup = () => setIsPopupOpen(false);

  return (
    <section className="project-section">
      <div className="project-title">
        <h2 className="ProjectNameTitle">Enterprise Security System</h2>
        <button className="projectDetail-Button" onClick={openPopup}>
          Details
        </button>
      </div>

      <div className="project-container">
        <div className="card-img-box-1">
          <div className="card-img-top">
            <img src={img1} alt="Secure Login" className="img1" onClick={openPopup} />
            <img src={img2} alt="API Documentation" className="img2" onClick={openPopup} />
          </div>
          <div className="card-img-bottom">
            <img src={img3} alt="Docker Orchestration" className="img3" onClick={openPopup} />
          </div>
        </div>

        <div className="card-img-box-2">
          <img src={img4} alt="MSSQL Architecture" className="img4" onClick={openPopup} />
        </div>
      </div>

      {isPopupOpen && (
        <div className="popup-overlay" onClick={closePopup}>
          <section className="project-popup" onClick={(e) => e.stopPropagation()}>
            <button className="popup-close-btn" onClick={closePopup}>
              <AiOutlineClose size={24} />
            </button>

            <h2 className="pop-up__projectName">🛡️ Enterprise-Grade Auth & Security Framework</h2>
            <img src={ProjectMain} alt="Security Architecture" className="projectMain-img" />

            <div className="pop-up__container">
              <div className="pop-up__projectText">
                <h3 style={{ textAlign: "center" }}>
                  Advanced Security Architecture for Modern Enterprise Systems
                </h3>

                <p>
                  Bu proje, mikroservis ve monolitik mimariler için tasarlanmış, güvenliği merkeze alan tam kapsamlı bir 
                  <strong> Security Framework</strong> çözümüdür. Stateless JWT mimarisi üzerine kurulu sistem, 
                  yüksek ölçeklenebilirlik ve granular (hassas) yetkilendirme süreçlerini kurumsal standartlarda yönetir.
                </p>

                <h4>Core Capabilities</h4>
                <ul className="projectText-ul">
                  <li><strong>Stateless JWT Architecture:</strong> Sunucu tarafında oturum yükü oluşturmayan, yüksek performanslı token tabanlı yapı.</li>
                  <li><strong>RBAC (Role-Based Access Control):</strong> ADMIN ve USER rolleri ile metod bazlı granular yetki yönetimi.</li>
                  <li><strong>Security Filter Chain:</strong> Spring Security 6 ile özelleştirilmiş, her isteği denetleyen gelişmiş filtre zinciri.</li>
                  <li><strong>Production-Ready DevOps:</strong> Frontend, Backend ve MSSQL veritabanının Docker konteynerleri ile tam izolasyonu.</li>
                  <li><strong>Automated Documentation:</strong> Swagger/OpenAPI entegrasyonu ile interaktif ve güncel API dökümantasyonu.</li>
                </ul>

                <h4>Technical Stack</h4>
                <ul className="projectText-ul">
                  <li><strong>Backend:</strong> Java 21, Spring Boot 3.4.2, Spring Security 6, JJWT, JPA/Hibernate</li>
                  <li><strong>Frontend:</strong> React, Axios, Lucide Icons</li>
                  <li><strong>Infrastructure:</strong> MSSQL Server 2022, Docker & Docker Compose, Nginx</li>
                </ul>

                <h4>Security Workflow</h4>
                <p style={{ fontSize: "14px", fontStyle: "italic" }}>
                  Kullanıcı kayıt aşamasında şifreler <strong>BCrypt</strong> ile hash'lenir. Giriş sonrası üretilen <strong>Access Token</strong>, 
                  Authorization: Bearer başlığıyla her istekte doğrulanır ve <strong>JwtAuthenticationFilter</strong> aracılığıyla 
                  yetki kontrolleri saniyenin altında gerçekleştirilir.
                </p>
              </div>

              <div className="pop-up__projectLinkBox">
                <div className="pop-up__projectLink">
                   <strong>GitHub Repository:</strong>{" "}
                  <a
                    href="https://github.com/Furkan-ThecLifeN/enterprise-system"
                    target="_blank"
                    rel="noopener noreferrer"
                  >
                    View Source Code
                  </a>
                </div>
              </div>
            </div>
          </section>
        </div>
      )}
    </section>
  );
};

export default EnterpriseAuth;