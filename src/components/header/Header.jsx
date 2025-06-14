import React, { useState, useEffect } from "react";
import { Link, useLocation } from "react-router-dom";
import "./header.css";

const Header = () => {
  const [Toggle, showMenu] = useState(false);
  const [activeNav, setActiveNav] = useState("#home");
  const location = useLocation();

  // Scroll event için useEffect
  useEffect(() => {
    const onScroll = () => {
      const header = document.querySelector(".header");
      if (window.scrollY >= 80) {
        header.classList.add("scroll-header");
      } else {
        header.classList.remove("scroll-header");
      }
    };

    window.addEventListener("scroll", onScroll);

    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  // Link dizileri
  const homeLinks = [
    { href: "#home", label: "Home", icon: "uil-estate" },
    { href: "#about", label: "About", icon: "uil-user" },
    { href: "#skills", label: "Skills", icon: "uil-file-alt" },
    { href: "#services", label: "Services", icon: "uil-briefcase-alt" },
    { href: "#portfolio", label: "Portfolio", icon: "uil-scenery" },
    { href: "#testimonials", label: "Testimonials", icon: "uil-scenery" },
    { href: "#contact", label: "Contact", icon: "uil-message" },
    { to: "/projects", label: "My Projects", icon: "uil-folder" },
  ];

  const projectsLinks = [
    { to: "/", label: "Home", icon: "uil-estate" },
    { to: "/projects", label: "My Projects", icon: "uil-folder" },
  ];

  const linksToRender =
    location.pathname === "/" ? homeLinks : projectsLinks;

  useEffect(() => {
    if (location.pathname === "/projects") {
      setActiveNav("/projects");
    } else {
      setActiveNav("#home");
    }
  }, [location.pathname]);

  return (
    <header className="header">
      <nav className="nav container">
        <Link to="/" className="nav__logo" onClick={() => setActiveNav("#home")}>
          ThecLifeN
        </Link>

        <div className={Toggle ? "nav__menu show-menu" : "nav__menu"}>
          <ul className="nav__list grid">
            {linksToRender.map(({ href, to, label, icon }) => (
              <li className="nav__item" key={label}>
                {to ? (
                  <Link
                    to={to}
                    onClick={() => {
                      setActiveNav(to);
                      showMenu(false);
                    }}
                    className={activeNav === to ? "nav__link active-link" : "nav__link"}
                  >
                    <i className={`uil ${icon} nav__icon`}></i> {label}
                  </Link>
                ) : (
                  <a
                    href={href}
                    onClick={() => {
                      setActiveNav(href);
                      showMenu(false);
                    }}
                    className={activeNav === href ? "nav__link active-link" : "nav__link"}
                  >
                    <i className={`uil ${icon} nav__icon`}></i> {label}
                  </a>
                )}
              </li>
            ))}
          </ul>
          <i
            className="uil uil-times nav__close"
            onClick={() => showMenu(false)}
          ></i>
        </div>

        <div className="nav__toggle" onClick={() => showMenu(!Toggle)}>
          <i className="uil uil-apps"></i>
        </div>
      </nav>
    </header>
  );
};

export default Header;
