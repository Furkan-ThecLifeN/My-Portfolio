import React, { useRef } from "react";
import emailjs from "@emailjs/browser";

import "./contact.css";
import { IoMdMail } from "react-icons/io";
import {
  FaArrowAltCircleRight,
  FaLinkedinIn,
  FaInstagram,
} from "react-icons/fa";
import { RiMessage3Fill } from "react-icons/ri";

const Contact = () => {
  const form = useRef();

  const sendEmail = (e) => {
    e.preventDefault();

    emailjs
      .sendForm("service_a84de5g", "template_dm3u1v8", form.current, {
        publicKey: "aC3o3MRtmIgG9etpO",
      })
    e.target.reset();
  };

  return (
    <section className="contact section" id="contact">
      <h2 className="section__title">get in touch</h2>
      <span className="section__subtitle">Contact Me</span>

      <div className="contact__container container grid">
        <div className="contact__content">
          <h3 className="contact__title">Talk to me</h3>

          <div className="contact__info">
            <div className="contact__card">
              <IoMdMail className="contact__card-icon" />
              <h3 className="contact__card-title">Email</h3>
              <span className="contact__card-data">
                furkantheclifen@gmail.com
              </span>

              <a
                href="mailto:furkantheclifen@gmail.com"
                className="contact__button"
              >
                Write me{" "}
                <FaArrowAltCircleRight className="contact__button-icon" />
              </a>
            </div>

            <div className="contact__card">
              <FaLinkedinIn className="contact__card-icon" />
              <h3 className="contact__card-title">Linkedın</h3>
              <span className="contact__card-data">Furkan ThecLifeN</span>

              <a
                href="https://www.linkedin.com/in/furkan-karaderili-369245216/"
                className="contact__button"
              >
                Write me{" "}
                <FaArrowAltCircleRight className="contact__button-icon" />
              </a>
            </div>

            <div className="contact__card">
              <FaInstagram className="contact__card-icon" />
              <h3 className="contact__card-title">Instagram</h3>
              <span className="contact__card-data">@furkan_theclifen</span>

              <a href="https://www.instagram.com/furkan_theclifen/" className="contact__button">
                Write me{" "}
                <FaArrowAltCircleRight className="contact__button-icon" />
              </a>
            </div>
          </div>
        </div>

        <div className="contact__content">
          <h3 className="contact__title">Write me your project</h3>

          <form ref={form} onSubmit={sendEmail} className="contact__form">
            <div className="contact__form-div">
              <label className="contact__form-tag">Name</label>
              <input
                type="text"
                name="name"
                placeholder="Insert your name"
                className="contact__form-input"
              />
            </div>

            <div className="contact__form-div">
              <label className="contact__form-tag">Mail</label>
              <input
                type="email"
                name="email"
                placeholder="Insert your email"
                className="contact__form-input"
              />
            </div>

            <div className="contact__form-div">
              <label className="contact__form-tag">Project</label>
              <textarea
                name="project"
                cols="30"
                rows="10"
                placeholder="Write your project"
                className="contact__form-input"
              ></textarea>
            </div>
            <button href="#contact" className="button button--flex">
              Send Message
              <RiMessage3Fill className="content__card-icon" />
            </button>
          </form>
        </div>
      </div>
    </section>
  );
};

export default Contact;
