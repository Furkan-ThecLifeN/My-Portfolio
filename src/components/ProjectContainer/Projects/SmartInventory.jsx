import React, { useState } from "react";
import "../ProjectContainer.css";
import { AiOutlineClose, AiOutlineDesktop } from "react-icons/ai";
import "../ProjectPopUp.css";

import ProjectMain from "../../../assets/project-assets/SmartInventory-Main.png";
import img1 from "../../../assets/project-assets/SI-Desktop.png";
import img2 from "../../../assets/project-assets/SI-Architecture.png";
import img3 from "../../../assets/project-assets/SI-Dashboard.png";
import img4 from "../../../assets/project-assets/SI-Kafka.png";
import {
  LuActivity,
  LuCpu,
  LuLayers,
  LuRocket,
  LuShieldCheck,
  LuTerminal,
} from "react-icons/lu";

const SmartInventory = () => {
  const [isPopupOpen, setIsPopupOpen] = useState(false);

  const openPopup = () => setIsPopupOpen(true);
  const closePopup = () => setIsPopupOpen(false);

  
  return (
    <section className="project-section">
      <div className="project-title">
        <h2 className="ProjectNameTitle">
          Smart Inventory & Sales Management System
        </h2>
        <button className="projectDetail-Button" onClick={openPopup}>
          Details
        </button>
      </div>

      <div className="project-container">
        <div className="card-img-box-1">
          <div className="card-img-top">
            <img
              src={img1}
              alt="Desktop Application"
              className="img1"
              onClick={openPopup}
            />
            <img
              src={img2}
              alt="Dashboard View"
              className="img2"
              onClick={openPopup}
            />
          </div>
          <div className="card-img-bottom">
            <img
              src={img3}
              alt="System Architecture"
              className="img3"
              onClick={openPopup}
            />
          </div>
        </div>

        <div className="card-img-box-2">
          <img
            src={img4}
            alt="Kafka Event Flow"
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
            style={{
              padding: "40px",
              maxWidth: "1200px",
              width: "90%",
              backgroundColor: "#f9f9f9",
              border: "1px solid #e2e8f0",
              borderRadius: "24px",
              boxShadow: "0 25px 50px -12px rgba(0, 0, 0, 0.15)",
            }}
          >
            <button className="popup-close-btn" onClick={closePopup}>
              <AiOutlineClose size={28} color="#475569" />
            </button>

            {/* HEADER SECTION */}
            <div style={{ textAlign: "center", marginBottom: "32px" }}>
              <h2
                className="pop-up__projectName"
                style={{
                  fontSize: "2.2rem",
                  background: "linear-gradient(to right, #0f172a, #2563eb)",
                  WebkitBackgroundClip: "text",
                  WebkitTextFillColor: "transparent",
                  fontWeight: "800",
                }}
              >
                Smart Inventory & Sales Management System
              </h2>
              <div
                style={{
                  width: "100px",
                  height: "4px",
                  background: "linear-gradient(to right, #2563eb, #60a5fa)",
                  margin: "12px auto",
                  borderRadius: "10px",
                }}
              ></div>
              <p
                style={{
                  color: "#2563eb",
                  fontSize: "1.2rem",
                  fontWeight: "700",
                  letterSpacing: "1px",
                }}
              >
                ENTERPRISE EDITION | HYBRID ARCHITECTURE
              </p>
            </div>

            {/* IMAGE WRAPPER */}
            <div
              style={{
                marginLeft: "-40px",
                marginRight: "-40px",
                padding: "0 40px",
              }}
            >
              <div
                style={{
                  borderRadius: "20px",
                  overflow: "hidden",
                  border: "4px solid #fff",
                  boxShadow: "0 10px 40px rgba(0,0,0,0.1)",
                  background: "#fff",
                }}
              >
                <img
                  src={ProjectMain}
                  alt="Smart Inventory System Overview"
                  style={{
                    display: "block",
                    width: "100%",
                    height: "auto",
                    maxHeight: "65vh",
                    objectFit: "contain",
                  }}
                />
              </div>
            </div>

            <div className="pop-up__container" style={{ marginTop: "40px" }}>
              <div className="pop-up__projectText">
                {/* ABOUT SECTION */}
                <div style={{ marginBottom: "48px" }}>
                  <h3
                    style={{
                      display: "flex",
                      alignItems: "center",
                      gap: "12px",
                      color: "#1e293b",
                      fontSize: "1.5rem",
                    }}
                  >
                    <LuRocket color="#2563eb" size={28} /> Proje Hakkında
                  </h3>
                  <p
                    style={{
                      color: "#475569",
                      lineHeight: "1.8",
                      marginTop: "16px",
                      fontSize: "1.1rem",
                    }}
                  >
                    Bu sistem, modern işletmelerin karmaşık stok ve satış
                    süreçlerini uçtan uca yöneten hibrit bir ekosistemdir.
                    Sadece bir CRUD uygulaması değil;{" "}
                    <strong style={{ color: "#0f172a" }}>asenkron iletişim</strong>,{" "}
                    <strong style={{ color: "#0f172a" }}>offline veri tutarlılığı</strong> ve
                    <strong style={{ color: "#0f172a" }}>dağıtık sistem prensipleri</strong> üzerine inşa
                    edilmiş yüksek mühendislik ürünüdür.
                  </p>
                </div>

                {/* ARCHITECTURE TABLES (GRID) */}
                <div
                  style={{
                    display: "grid",
                    gridTemplateColumns: "repeat(auto-fit, minmax(320px, 1fr))",
                    gap: "24px",
                    marginBottom: "48px",
                  }}
                >
                  {/* Backend Table */}
                  <div
                    style={{
                      background: "#ffffff",
                      padding: "24px",
                      borderRadius: "16px",
                      border: "1px solid #e2e8f0",
                      boxShadow: "0 4px 6px -1px rgba(0, 0, 0, 0.05)",
                    }}
                  >
                    <h4
                      style={{
                        color: "#2563eb",
                        marginBottom: "16px",
                        display: "flex",
                        alignItems: "center",
                        gap: "8px",
                      }}
                    >
                      <LuLayers size={20} /> Core Backend (Sunucu)
                    </h4>
                    <table
                      style={{
                        width: "100%",
                        color: "#334155",
                        fontSize: "0.95rem",
                      }}
                    >
                      <tbody>
                        <tr style={{ borderBottom: "1px solid #f1f5f9" }}>
                          <td style={{ padding: "10px 0" }}>
                            <strong style={{ color: "#64748b" }}>Dil & Framework</strong>
                          </td>
                          <td>Java 21, Spring Boot 3.x</td>
                        </tr>
                        <tr style={{ borderBottom: "1px solid #f1f5f9" }}>
                          <td style={{ padding: "10px 0" }}>
                            <strong style={{ color: "#64748b" }}>Güvenlik</strong>
                          </td>
                          <td>Spring Security + JWT</td>
                        </tr>
                        <tr style={{ borderBottom: "1px solid #f1f5f9" }}>
                          <td style={{ padding: "10px 0" }}>
                            <strong style={{ color: "#64748b" }}>Veritabanı</strong>
                          </td>
                          <td>MSSQL & Redis Cache</td>
                        </tr>
                        <tr>
                          <td style={{ padding: "10px 0" }}>
                            <strong style={{ color: "#64748b" }}>Mesajlaşma</strong>
                          </td>
                          <td>Apache Kafka</td>
                        </tr>
                      </tbody>
                    </table>
                  </div>

                  {/* Desktop Table */}
                  <div
                    style={{
                      background: "#ffffff",
                      padding: "24px",
                      borderRadius: "16px",
                      border: "1px solid #e2e8f0",
                      boxShadow: "0 4px 6px -1px rgba(0, 0, 0, 0.05)",
                    }}
                  >
                    <h4
                      style={{
                        color: "#2563eb",
                        marginBottom: "16px",
                        display: "flex",
                        alignItems: "center",
                        gap: "8px",
                      }}
                    >
                      <AiOutlineDesktop size={20} /> Desktop App (Offline)
                    </h4>
                    <table
                      style={{
                        width: "100%",
                        color: "#334155",
                        fontSize: "0.95rem",
                      }}
                    >
                      <tbody>
                        <tr style={{ borderBottom: "1px solid #f1f5f9" }}>
                          <td style={{ padding: "10px 0" }}>
                            <strong style={{ color: "#64748b" }}>UI Framework</strong>
                          </td>
                          <td>JavaFX + Gluon</td>
                        </tr>
                        <tr style={{ borderBottom: "1px solid #f1f5f9" }}>
                          <td style={{ padding: "10px 0" }}>
                            <strong style={{ color: "#64748b" }}>Yerel DB</strong>
                          </td>
                          <td>SQLite</td>
                        </tr>
                        <tr style={{ borderBottom: "1px solid #f1f5f9" }}>
                          <td style={{ padding: "10px 0" }}>
                            <strong style={{ color: "#64748b" }}>Çalışma Modu</strong>
                          </td>
                          <td>Offline-First</td>
                        </tr>
                        <tr>
                          <td style={{ padding: "10px 0" }}>
                            <strong style={{ color: "#64748b" }}>Senkronizasyon</strong>
                          </td>
                          <td>Sync Engine</td>
                        </tr>
                      </tbody>
                    </table>
                  </div>
                </div>

                {/* TECHNICAL DEPTH (Cyber Cards) */}
                <div style={{ marginBottom: "48px" }}>
                  <h3
                    style={{
                      display: "flex",
                      alignItems: "center",
                      gap: "12px",
                      color: "#1e293b",
                      marginBottom: "24px",
                    }}
                  >
                    <LuCpu color="#2563eb" size={28} /> Teknik Derinlik
                  </h3>
                  <div style={{ display: "grid", gap: "20px" }}>
                    <div
                      style={{
                        background: "#eff6ff",
                        padding: "20px",
                        borderRadius: "12px",
                        borderLeft: "5px solid #3b82f6",
                      }}
                    >
                      <h5 style={{ color: "#1e3a8a", marginBottom: "8px" }}>
                        🔁 Sync Engine (Senkronizasyon Motoru)
                      </h5>
                      <p style={{ color: "#475569", fontSize: "0.95rem" }}>
                        İnternet kesintilerine karşı dayanıklıdır;{" "}
                        <code style={{ background: "#dbeafe", color: "#1e40af", padding: "2px 6px", borderRadius: "4px" }}>sync_status</code> flag mekanizması ile yerel
                        değişiklikleri izler ve{" "}
                        <strong style={{ color: "#1e3a8a" }}>optimistic locking</strong> ile veri
                        çakışmalarını önler.
                      </p>
                    </div>
                    <div
                      style={{
                        background: "#f0fdf4",
                        padding: "20px",
                        borderRadius: "12px",
                        borderLeft: "5px solid #22c55e",
                      }}
                    >
                      <h5 style={{ color: "#14532d", marginBottom: "8px" }}>
                        📡 Event-Driven Mimari
                      </h5>
                      <p style={{ color: "#475569", fontSize: "0.95rem" }}>
                        Stok değişimleri <code style={{ background: "#dcfce7", color: "#15803d", padding: "2px 6px", borderRadius: "4px" }}>StockDecreasedEvent</code> olarak
                        Kafka'ya iletilir ve WebSocket üzerinden tüm
                        platformlara anlık yansıtılır.
                      </p>
                    </div>
                  </div>
                </div>

                {/* TERMINAL / STRUCTURE */}
                <div style={{ marginBottom: "48px" }}>
                  <h3
                    style={{
                      display: "flex",
                      alignItems: "center",
                      gap: "12px",
                      color: "#1e293b",
                      marginBottom: "16px",
                    }}
                  >
                    <LuTerminal color="#2563eb" size={28} /> Proje Yapısı & CLI
                  </h3>
                  <div
                    style={{
                      background: "#1e293b",
                      padding: "24px",
                      borderRadius: "16px",
                      border: "1px solid #334155",
                      position: "relative",
                      boxShadow: "0 10px 15px -3px rgba(0, 0, 0, 0.1)",
                    }}
                  >
                    <div
                      style={{
                        display: "flex",
                        gap: "6px",
                        position: "absolute",
                        top: "12px",
                        left: "12px",
                      }}
                    >
                      <div style={{ width: "10px", height: "10px", borderRadius: "50%", background: "#ff5f56" }}></div>
                      <div style={{ width: "10px", height: "10px", borderRadius: "50%", background: "#ffbd2e" }}></div>
                      <div style={{ width: "10px", height: "10px", borderRadius: "50%", background: "#27c93f" }}></div>
                    </div>
                    <code
                      style={{
                        fontFamily: "'Fira Code', monospace",
                        fontSize: "0.95rem",
                      }}
                    >
                      <div style={{ color: "#4ade80", marginBottom: "8px" }}>
                        // Sistemi tek tıkla ayağa kaldırın
                      </div>
                      <div style={{ color: "#f8fafc" }}>
                        <span style={{ color: "#60a5fa" }}>PS C:\&gt;</span>{" "}
                        .\run_project.ps1
                      </div>
                      <div style={{ color: "#94a3b8", marginTop: "16px" }}>
                        {`smart-inventory-sales/
├── backend/            # Spring Boot, Kafka & Security Logic
├── frontend-web/       # React 18, Vite & Tailwind 
└── frontend-desktop/   # JavaFX, SQLite & Sync Engine`}
                      </div>
                    </code>
                  </div>
                </div>

                {/* TEST & QUALITY */}
                <div
                  style={{
                    marginBottom: "48px",
                    display: "flex",
                    gap: "30px",
                    flexWrap: "wrap",
                  }}
                >
                  <div style={{ flex: 1, minWidth: "250px" }}>
                    <h4
                      style={{
                        color: "#1e293b",
                        display: "flex",
                        alignItems: "center",
                        gap: "8px",
                        marginBottom: "12px",
                      }}
                    >
                      <LuActivity color="#22c55e" /> Sistem Sağlığı
                    </h4>
                    <p style={{ color: "#64748b", fontSize: "0.9rem" }}>
                      Actuator & Audit loglama ile %80+ test kapsama oranı.
                    </p>
                  </div>
                  <div style={{ flex: 1, minWidth: "250px" }}>
                    <h4
                      style={{
                        color: "#1e293b",
                        display: "flex",
                        alignItems: "center",
                        gap: "8px",
                        marginBottom: "12px",
                      }}
                    >
                      <LuShieldCheck color="#2563eb" /> Güvenlik
                    </h4>
                    <p style={{ color: "#64748b", fontSize: "0.9rem" }}>
                      RBAC Hiyerarşisi ve Stateless JWT ile kurumsal koruma.
                    </p>
                  </div>
                </div>
              </div>
            </div>
            {/* FOOTER */}
            <div
              style={{
                borderTop: "2px solid #e2e8f0",
                paddingTop: "32px",
                display: "flex",
                justifyContent: "space-between",
                alignItems: "center",
                flexWrap: "wrap",
                gap: "20px",
                width: "95%",
              }}
            >
              <div>
                <span
                  style={{
                    color: "#64748b",
                    fontSize: "0.85rem",
                    textTransform: "uppercase",
                    tracking: "1px",
                  }}
                >
                  Lead Developer
                </span>
                <p
                  style={{
                    color: "#0f172a",
                    fontSize: "1.1rem",
                    fontWeight: "700",
                  }}
                >
                  Furkan K.
                </p>
              </div>
              <div style={{ display: "flex", gap: "16px" }}>
                <a
                  href="https://github.com/Furkan-ThecLifeN/smart-inventory-sales-management"
                  target="_blank"
                  rel="noopener noreferrer"
                  style={{
                    background: "#2563eb",
                    color: "#fff",
                    padding: "10px 24px",
                    borderRadius: "10px",
                    textDecoration: "none",
                    fontWeight: "600",
                    boxShadow: "0 4px 14px rgba(37, 99, 235, 0.3)",
                  }}
                >
                  GitHub Repository
                </a>
              </div>
            </div>
          </section>
        </div>
      )}
    </section>
  );
};

export default SmartInventory;
