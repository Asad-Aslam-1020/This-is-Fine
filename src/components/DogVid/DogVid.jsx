import React from "react";
import "./DogVid.css";
export default function DogVid() {
  return (
    <div id="dog-vid">
      <div id="dog-vid-container">
        <video id="video" loop autoPlay width={"100%"} height={"100%"}>
          <source src="/dog.mp4" type="video/mp4" />
        </video>
      </div>
      <div id="tokenomices">
        <div>
          <span id="token-heading">TOKENOMICS</span>
        </div>
        <div id="boxes-container">
          <div className="boxes">
            <span className="box-heading">BUY TAX</span>
            <span className="percentage">0%</span>
          </div>
          <div className="boxes">
            <span className="box-heading">SUPPLY</span>
            <span className="percentage">420,690,000,000,000</span>
            <span id="last-line"> (93% ADDED TO UNISWAP)</span>
          </div>
          <div className="boxes">
            <span className="box-heading">SELL TAX</span>
            <span className="percentage">0%</span>
          </div>
        </div>
      </div>
    </div>
  );
}
