import React from "react";
import "./footer.css";
import { FaSquareXTwitter } from "react-icons/fa6";


const Footer = () => {
  return (
    <footer className="footer">
      <div className="footer__container container">
        <h1 className="footer__title">ThecLifeN</h1>
        <ul className="footer__list">
          <li>
            <a href="#about" className="footer__link">
              About
            </a>
          </li>
          <li>
            <a href="#portfolio" className="footer__link">
              Projects
            </a>
          </li>
          <li>
            <a href="#testimonials" className="footer__link">
              Testimonials
            </a>
          </li>
        </ul>

        <div className="footer__social">
          <a
            href="https://www.instagram.com/furkan_theclifen/"
            className="footer__social-link"
            target="_blank"
            rel="noreferrer"
          >
            <i class="uil uil-instagram-alt"></i>
          </a>

          <a
            href="https://x.com/furkantheclifen"
            className="footer__social-link"
            target="_blank"
            rel="noreferrer"
          >
            <FaSquareXTwitter />
            </a>

          <a
            href="https://github.com/Furkan-ThecLifeN"
            className="footer__social-link"
            target="_blank"
            rel="noreferrer"
          >
            <i class="uil uil-github-alt"></i>
          </a>
        </div>

        <span className="footer__copy">
          &#169; furkantheclifen. All rights reserved
        </span>
      </div>
    </footer>
  );
};

export default Footer;
