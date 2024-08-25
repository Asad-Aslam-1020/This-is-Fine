import React from "react";
import "./Roadmap.css";

export default function Roadmap() {
  return (
    <div id="roadmap">
      <div id="roadmap-container">
        <div id="dog-img-container">
          <img id="dog-img" src="/tokenImg.webp" alt="token" />
        </div>
        <div id="heading">
            ROADMAP
        </div>
        <div id="cards-container">
          <div id="simple-cards">
            <div className="simple-card">
              <span className="text-head">PHASE 1</span>
              <span className="text">Token Launch</span>
              <span className="text">Website Launch</span>
              <span className="text">1,000 Holder</span>
              <span className="text">CG And CMC Listing</span>
              <span className="text">$Fine Trending On Twitter</span>
            </div>
            <div className="simple-card">
              <span className="text-head">PHASE 2</span>
              <span className="text">Community Partnerships</span>
              <span className="text">Exchange Listing</span>
              <span className="text">Release Official Partnership</span>
              <span className="text">Further Digital Markiting</span>
              <span className="text">5000 Holders</span>
            </div>
            <div className="simple-card">
              <span className="text-head">PHASE 3</span>
              <span className="text">International Communities</span>
              <span className="text">Website Revision</span>
              <span className="text">Meme Takeover</span>
              <span className="text">$Fine Academy</span>
              <span className="text">10,000 Holders</span>
            </div>
            <div id="gif-container" className="simple-card">
              <img id="gif" src="roadmap.gif" alt="gif" />
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
