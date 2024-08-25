import React from "react";
import "./Navbar.css";
import { FaArrowLeft, FaArrowRight } from "react-icons/fa";
import { GiHamburgerMenu } from "react-icons/gi";

export default function Navbar() {
  const MenuOpen = () => {
    let menu = document.querySelector("#navbar-link-menu");
    menu.style.transform = "translateX(0%)";
    menu.style.display = "inline-block";
    menu.style.transition = "transform 10s linear ";
  };

  const MenuClose = () => {
    let menu = document.querySelector("#navbar-link-menu");
    menu.style.transform = "translateX(100%)";
    menu.style.display = "none";
  };
  return (
    <>
      <div id="navbar-desktop">
        <div id="navbar-logo">
          <img id="logo-img" src="logo.webp" alt="logo" />
        </div>
        <div id="navbar-container">
          <div className="navbar-links">
            <button className="nav-btn">HOME</button>
            <div>
              <ul id="navbar-links-container">
                <li className="navbar-link">HOW TO BUY</li>
                <li className="navbar-link">FAQ</li>
                <li className="navbar-link">ABOUT</li>
                <li className="navbar-link">TOKENOMICS</li>
                <li className="navbar-link">ROAD MAP</li>
              </ul>
            </div>
            <button className="nav-btn">INSTALL OKX</button>
          </div>
        </div>
        <div id="menu-btn-container">
          <FaArrowLeft id="menu-arrow" />
          <span id="menu-btn-text">MENU</span>
        </div>
      </div>
      <div id="navbar-mobile">
        <div id="navbar-mobile-logo">
          <img id="logo-img" src="logo.webp" alt="logo" />
        </div>
        <div id="hamgurger-icon-container">
          <GiHamburgerMenu id="hamburger-icon" onClick={MenuOpen} />
        </div>
        <div id="navbar-link-menu">
          <div id="mobile-navbar-container">
            <div id="backArrow">
              <FaArrowRight id="back-arrow" onClick={MenuClose} />
            </div>
            <ul id="mobile-navbar-links-container">
              <li className="mobile-navbar-link">HOW TO BUY</li>
              <li className="mobile-navbar-link">FAQ</li>
              <li className="mobile-navbar-link">ABOUT</li>
              <li className="mobile-navbar-link">TOKENOMICS</li>
            </ul>
            <div id="navbar-menu-btn-container">
              <button id="navbar-menu-btn">OKX WALLET</button>
            </div>
          </div>
        </div>
      </div>
    </>
  );
}
