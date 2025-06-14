import React from 'react'
import { FaXTwitter } from "react-icons/fa6";

const Social = () => {
  return (
    <div className="home__social">
      <a
        href="https://www.instagram.com/furkan_theclifen/"
        className="home__social-icon"
        target="_blank"
        rel="noreferrer"
      >
        <i class="uil uil-instagram-alt"></i>
      </a>

      <a
        href="https://x.com/furkantheclifen"
        className="home__social-icon"
        target="_blank"
        rel="noreferrer"
      >
        <FaXTwitter />
      </a>

      <a
        href="https://github.com/Furkan-ThecLifeN"
        className="home__social-icon"
        target="_blank"
        rel="noreferrer"
      >
        <i class="uil uil-github-alt"></i>
      </a>
    </div>
  );
}

export default Social