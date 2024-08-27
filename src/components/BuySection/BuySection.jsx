import React from "react";
import "./BuySection.css";

export default function BuySection() {
  return (
    <div id="buy">
      <div id="empty"></div>
      <div id="heading-container">
        <span id="buy-heading">HOW TO BUY</span>
      </div>
      <ul id="points-container">
        <li className="points">
          Download Metamask or your wallet of choice from the app store or
          Google Play store for free. Desktop users, download the Google Chrome
          extension by going to metamask.io.
        </li>
        <li className="points">
          Have ETH in your wallet to switch to $FINE. If you don’t have any ETH,
          you can buy directly on Metamask, transfer from another wallet, or buy
          on another exchange and send it to your wallet.
        </li>
        <li className="points">
          Switch ETH for $FINE. We have 0% taxes so you don’t need to worry
          about buying with a specific slippage, although you may need to use
          slippage during times of market volatility.
        </li>
        <li id="last-point" className="points">
          CA:- 0x75c97384ca209f915381755c582ec0e2ce88c1ba
        </li>
      </ul>
      <div id="frame-container">
        <iframe
          id="frame"
          src="https://app.uniswap.org/#/swap?exactField=input&amp;exactAmount=10&amp;inputCurrency=0xC02aaA39b223FE8D0A0e5C4F27eAD9083C756Cc2"
        ></iframe>
      </div>
    </div>
  );
}
