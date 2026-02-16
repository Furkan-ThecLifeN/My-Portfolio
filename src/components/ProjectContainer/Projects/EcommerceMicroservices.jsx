import React, { useState } from "react";
import "../ProjectContainer.css";
import { AiOutlineClose } from "react-icons/ai";
import "../ProjectPopUp.css";

// Görsel yollarını assets klasörüne göre güncelleyebilirsin
import ProjectMain from "../../../assets/project-assets/Micro-Arch.png";
import img1 from "../../../assets/project-assets/Micro-Arch.png";
import img2 from "../../../assets/project-assets/Micro-Gateway.png";
import img3 from "../../../assets/project-assets/Micro-Kafka.png";
import img4 from "../../../assets/project-assets/Micro-Resilience.png";

const EcommerceMicroservices = () => {
  const [isPopupOpen, setIsPopupOpen] = useState(false);

  const openPopup = () => setIsPopupOpen(true);
  const closePopup = () => setIsPopupOpen(false);

  return (
    <section className="project-section">
      <div className="project-title">
        <h2 className="ProjectNameTitle">Event-Driven Microservices</h2>
        <button className="projectDetail-Button" onClick={openPopup}>
          Details
        </button>
      </div>

      <div className="project-container">
        <div className="card-img-box-1">
          <div className="card-img-top">
            <img src={img1} alt="System Architecture" className="img1" onClick={openPopup} />
            <img src={img2} alt="Kafka Event Flow" className="img2" onClick={openPopup} />
          </div>
          <div className="card-img-bottom">
            <img src={img3} alt="API Gateway & Routing" className="img3" onClick={openPopup} />
          </div>
        </div>

        <div className="card-img-box-2">
          <img src={img4} alt="Fault Tolerance (Resilience4j)" className="img4" onClick={openPopup} />
        </div>
      </div>

      {isPopupOpen && (
        <div className="popup-overlay" onClick={closePopup}>
          <section className="project-popup" onClick={(e) => e.stopPropagation()}>
            <button className="popup-close-btn" onClick={closePopup}>
              <AiOutlineClose size={24} />
            </button>

            <h2 className="pop-up__projectName">🚀 Enterprise Event-Driven E-Commerce Ecosystem</h2>
            <img src={ProjectMain} alt="Microservices Ecosystem" className="projectMain-img" />

            <div className="pop-up__container">
              <div className="pop-up__projectText">
                <h3 style={{ textAlign: "center" }}>
                  Scalable, Cloud-Native Architecture with Java 21 & Kafka
                </h3>

                <p>
                  Bu proje; dağıtık işlemler (distributed transactions), nihai tutarlılık (eventual consistency) ve gözlemlenebilirlik (observability) 
                  gibi gerçek dünya zorluklarını çözmek üzere tasarlanmış, tam kapsamlı bir e-ticaret backend ekosistemidir. 
                  Sistem, bağımsız ölçeklenebilir mikroservislerden oluşur ve servisler arası iletişim <strong>Apache Kafka</strong> ile asenkron olarak yönetilir.
                </p>

                <h4>Architectural Highlights</h4>
                <ul className="projectText-ul">
                  <li><strong>Event-Driven Design:</strong> Order ve Payment servisleri arasında Kafka üzerinden asenkron event akışı ve veri senkronizasyonu.</li>
                  <li><strong>Service Discovery & API Gateway:</strong> Netflix Eureka ile dinamik servis kaydı ve Spring Cloud Gateway üzerinden merkezi routing/güvenlik.</li>
                  <li><strong>Resilience & Fault Tolerance:</strong> Resilience4j entegrasyonu ile Circuit Breaker ve Retry mekanizmaları sayesinde sistem dayanıklılığı.</li>
                  <li><strong>Security Framework:</strong> RSA Key Pair şifreleme ile güçlendirilmiş, mikroservisler arası dağıtık JWT yetkilendirme sistemi.</li>
                  <li><strong>Observability:</strong> Correlation ID (X-Request-Id) ve MDC kullanarak uçtan uca istek takibi ve merkezi loglama altyapısı.</li>
                </ul>

                <h4>Technology Stack</h4>
                <ul className="projectText-ul">
                  <li><strong>Backend:</strong> Java 21, Spring Boot 3.3, Spring Cloud, Spring Data JPA</li>
                  <li><strong>Messaging & Cache:</strong> Apache Kafka, Redis</li>
                  <li><strong>Database & DevOps:</strong> MS SQL Server (MSSQL), Docker, Docker Compose</li>
                  <li><strong>Tools:</strong> Spring Actuator, Logback (JSON Formatter), Netflix Eureka</li>
                </ul>

                <h4>Core Logic Workflow</h4>
                <p style={{ fontSize: "14px", fontStyle: "italic" }}>
                  Sipariş oluşturulduğunda <strong>Order Service</strong> bir <code>OrderCreatedEvent</code> yayınlar. 
                  <strong>Payment Service</strong> bu mesajı tüketerek ödemeyi işler ve sonucu tekrar Kafka üzerinden sisteme bildirerek 
                  <strong>Eventual Consistency</strong> (Nihai Tutarlılık) sağlar.
                </p>
              </div>

              <div className="pop-up__projectLinkBox">
                <div className="pop-up__projectLink">
                   <strong>Project Link:</strong>{" "}
                  <a
                    href="https://github.com/Furkan-ThecLifeN/ecommerce-system.git"
                    target="_blank"
                    rel="noopener noreferrer"
                  >
                    Explore Microservices Architecture
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

export default EcommerceMicroservices;