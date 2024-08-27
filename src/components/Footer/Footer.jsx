import React from "react";
import { FaArrowUp } from "react-icons/fa";
import "./Footer.css";

export default function Footer() {
  const scrollToTop = () => {
    window.scrollTo({
      top: 0,
      behavior: "smooth",
    });
  };

  return (
    <div id="footer">
      <div id="first-section">
        <div id="footer-logo">
          <img id="footer-logo-img" src="logo.webp" alt="logo" />
        </div>
        <div className="to-top">
          <span>TO TOP</span>
          <div id="up-arrow-container" onClick={scrollToTop}>
            <FaArrowUp id="up-arrow" />
          </div>
        </div>
      </div>
      <div id="second-section">
        <div className="social">
          <div id="social-container">
            <span>Telegram</span>
            <span>Twitter</span>
            <span>Chart</span>
            <span>Mail</span>
          </div>
        </div>
        <div className="reserved">
          <span id="big">© 2023 THIS IS FINE. ALL RIGHTS RESERVED.</span>
          <span>team@finerc.vip</span>
        </div>
      </div>
    </div>
  );
}
