import React from "react";
import "./About.css";
import { FaArrowRight } from "react-icons/fa";
import { IoClipboardOutline } from "react-icons/io5";

export default function About() {
  return (
    <div id="about">
      <div id="about-container">
        <div id="dog-container">
          <div id="rotating-dog-container">
            <img id="dog-img" src="/dog-img.webp" alt="" />
          </div>
        </div>
        <div id="about-text">
          <div id="about-text-container">
            <div id="first-line">Who AM I</div>
            <div className="lines">
              I’m okay with the events that are unfolding currently.
            </div>
            <div className="lines">
              The taxes on this are decent. It’s 0% Buy / Sell.
            </div>
            <div className="lines">
              My devs have some alright previous projects on their résumé, did a
              couple billion or whatever. The contract seems to be renounced,
              the website is fine, and liquidity is BURNED which also seems meh.
              Overall, seems like All Is Fine.
            </div>
            <div>
              <span className="lines">BUY $FINE</span>
              <FaArrowRight />
            </div>
            <div id="code-text">
              <span id="code" className="lines">
                CA:-0x75c97384ca209f915381755c582ec0e2ce88c1ba
              </span>
              <IoClipboardOutline id="board-icon" />
            </div>
            <div id="logos-container">
              <div>
                <img className="logo-img" src="/twitter.webp" alt="twitter" />
              </div>
              <div>
                <img className="logo-img" src="/dextools.webp" alt="dextools" />
              </div>
              <div>
                <img
                  className="logo-img"
                  src="/etherscan.webp"
                  alt="etherscan"
                />
              </div>
              <div>
                <img className="logo-img" src="/telegram.webp" alt="telegram" />
              </div>
              <div>
                <img className="logo-img" src="/chipkali.webp" alt="chipkali" />
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
