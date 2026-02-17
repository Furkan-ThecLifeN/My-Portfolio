import React, { useState } from "react";
import "../ProjectContainer.css";
import { AiOutlineClose } from "react-icons/ai";
import "../ProjectPopUp.css";

import myPortfolio1 from "../../../assets/project-assets/myPortfolio1.png";
import myPortfolio2 from "../../../assets/project-assets/myPortfolio2.png";
import myPortfolio3 from "../../../assets/project-assets/myPortfolio3.png";
import myPortfolio4 from "../../../assets/project-assets/myPortfolio4.png";

const MyPortfolio = () => {
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
        <h2 className="ProjectNameTitle">Portfolio</h2>
        <button className="projectDetail-Button" onClick={openPopup}>
          Details
        </button>
      </div>
      <div className="project-container">
        <div className="card-img-box-1">
          <div className="card-img-top">
            <img
              src={myPortfolio1}
              alt="Preview 1"
              className="img1"
              onClick={openPopup}
            />
            <img
              src={myPortfolio2}
              alt="Preview 2"
              className="img2"
              onClick={openPopup}
            />
          </div>
          <div className="card-img-bottom">
            <img
              src={myPortfolio3}
              alt="Preview 3"
              className="img3"
              onClick={openPopup}
            />
          </div>
        </div>
        <div className="card-img-box-2">
          <img
            src={myPortfolio4}
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
            <h2 className="pop-up__projectName">Portfolio</h2>
            <img src={myPortfolio1} alt="" className="projectMain-img" />
            <div className="pop-up__container">
              <div className="pop-up__projectText">
                <h3 style={{ textAlign: "center" }}>
                  🌟 Welcome to My Portfolio – A Modern & Interactive Web
                  Showcase
                </h3>
                <p>
                  This portfolio is a fully responsive and feature-rich web
                  application built with React, crafted to represent my personal
                  and professional identity in the most modern and dynamic way
                  possible. Designed with performance, clarity, and aesthetics
                  in mind, this site offers a complete view of my background,
                  skills, projects, and achievements — all in one elegant
                  interface.
                </p>

                <h4>💼 Key Highlights</h4>
                <ul className="projectText-ul">
                  <li>
                    <strong>Interactive Home & Navigation Experience:</strong>{" "}
                    With smooth animations, scroll effects, and a clean layout,
                    users can easily navigate across sections like About Me,
                    Projects, Services, Contact, and more — all while enjoying a
                    seamless UI experience.
                  </li>
                  <li>
                    <strong>About Me & Education Section:</strong> Get to know
                    who I am, my journey so far, and my academic background —
                    all presented with visual clarity and a storytelling touch.
                  </li>
                  <li>
                    <strong>Project Showcase:</strong> Real-world projects that
                    demonstrate my skills in web development. Each project
                    includes a live demo, description, and the technologies
                    used.
                  </li>
                  <li>
                    <strong>Services & Skills:</strong> This section clearly
                    outlines what I can do — from frontend development and
                    responsive UI/UX design to backend integration.
                  </li>
                  <li>
                    <strong>Recommendations & Testimonials:</strong> Real
                    messages and references from those who have worked with or
                    mentored me. These give insight into my character and work
                    ethic.
                  </li>
                  <li>
                    <strong>Certificate Display:</strong> A visual collection of
                    the certificates I’ve earned from various courses and
                    programs to back up my continuous learning.
                  </li>
                  <li>
                    <strong>Downloadable CV:</strong> A modern, professionally
                    designed CV is available for download, offering recruiters
                    and collaborators an offline summary of my profile.
                  </li>
                  <li>
                    <strong>Fully Responsive & Accessible:</strong> Built with a
                    mobile-first approach, the design adapts perfectly across
                    all devices — from desktops to tablets and smartphones.
                  </li>
                  <li>
                    <strong>Modern Animations & Effects:</strong> Leveraging
                    libraries such as Framer Motion and React Icons, the
                    interface is brought to life with interactive visuals
                    without compromising performance.
                  </li>
                </ul>

                <h4>🛠️ Technologies Used</h4>
                <ul className="projectText-ul">
                  <li>
                    <b>Frontend:</b> React.js, React Router, Tailwind CSS /
                    Styled Components, Framer Motion, Axios
                  </li>
                  <li>
                    <b>Animations & Icons:</b> React Icons, Lottie Files, Framer
                    Motion
                  </li>
                  <li>
                    <b>Other Tools:</b> EmailJS for contact form integration,
                    responsive design with media queries, Git & GitHub for
                    version control
                  </li>
                  <li>
                    <b>Design Approach:</b> Mobile-first, component-driven
                    structure, clean code architecture
                  </li>
                </ul>

                <h4>👨‍💻 About the Developer</h4>
                <p>
                  This portfolio was entirely built and designed by me from the
                  ground up. From planning the user experience to implementing
                  each detail in the codebase, I focused on creating a space
                  that not only showcases my capabilities but also reflects my
                  dedication to clean, scalable, and purposeful web development.
                </p>

                <h4>🚀 Final Words</h4>
                <p>
                  This is more than a portfolio — it's a personal platform built
                  with precision, creativity, and ambition. Whether you're a
                  recruiter, collaborator, or fellow developer, I invite you to
                  explore my work, understand my background, and connect with
                  me. Let’s build something impactful together.
                </p>
              </div>

              <div className="pop-up__projectLinkBox">
                <span className="pop-up__projectLink">
                  Repository:{" "}
                  <a
                    href="https://github.com/Furkan-ThecLifeN/My-Portfolio"
                    target="_blank"
                    rel="noopener noreferrer"
                  >
                    https://github.com/Furkan-ThecLifeN/My-Portfolio
                  </a>
                </span>
                <span className="pop-up__projectLink">
                  Live Demo:{" "}
                  <a
                    href="https://my-portfolio-umber-nine-57.vercel.app/"
                    target="_blank"
                    rel="noopener noreferrer"
                  >
                    https://my-portfolio-umber-nine-57.vercel.app/
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

export default MyPortfolio;
