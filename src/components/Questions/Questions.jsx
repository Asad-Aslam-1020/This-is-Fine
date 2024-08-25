import React from "react";
import "./Questions.css";
import { FaChevronDown, FaChevronLeft, FaChevronUp } from "react-icons/fa";

export default function Questions() {
  const firstQ = () => {
    const firstAnswer = document.querySelector("#answer-1");
    const firstDown = document.querySelector("#first-dn");
    const firstUp = document.querySelector("#first-up");
    firstAnswer.style.display = "inline-block";
    firstDown.style.display = "none";
    firstUp.style.display = "inline-block";
  };
  const firstA = () => {
    const firstAnswer = document.querySelector("#answer-1");
    const firstDown = document.querySelector("#first-dn");
    const firstUp = document.querySelector("#first-up");
    firstAnswer.style.display = "none";
    firstDown.style.display = "inline-block";
    firstUp.style.display = "none";
  };
  const secondQ = () => {
    const firstAnswer = document.querySelector("#answer-2");
    const firstDown = document.querySelector("#second-dn");
    const firstUp = document.querySelector("#second-up");
    firstAnswer.style.display = "inline-block";
    firstDown.style.display = "none";
    firstUp.style.display = "inline-block";
  };
  const secondA = () => {
    const firstAnswer = document.querySelector("#answer-2");
    const firstDown = document.querySelector("#second-dn");
    const firstUp = document.querySelector("#second-up");
    firstAnswer.style.display = "none";
    firstDown.style.display = "inline-block";
    firstUp.style.display = "none";
  };
  const thirdQ = () => {
    const firstAnswer = document.querySelector("#answer-3");
    const firstDown = document.querySelector("#third-dn");
    const firstUp = document.querySelector("#third-up");
    firstAnswer.style.display = "inline-block";
    firstDown.style.display = "none";
    firstUp.style.display = "inline-block";
  };
  const thirdA = () => {
    const firstAnswer = document.querySelector("#answer-3");
    const firstDown = document.querySelector("#third-dn");
    const firstUp = document.querySelector("#third-up");
    firstAnswer.style.display = "none";
    firstDown.style.display = "inline-block";
    firstUp.style.display = "none";
  };
  const fourthQ = () => {
    const firstAnswer = document.querySelector("#answer-4");
    const firstDown = document.querySelector("#fourth-dn");
    const firstUp = document.querySelector("#fourth-up");
    firstAnswer.style.display = "inline-block";
    firstDown.style.display = "none";
    firstUp.style.display = "inline-block";
  };
  const fourthA = () => {
    const firstAnswer = document.querySelector("#answer-4");
    const firstDown = document.querySelector("#fourth-dn");
    const firstUp = document.querySelector("#fourth-up");
    firstAnswer.style.display = "none";
    firstDown.style.display = "inline-block";
    firstUp.style.display = "none";
  };

  return (
    <>
      <div id="questions-container">
        <div id="question-cont">
          <div id="question-heading">
            <span>FREQUENTLY ASKED QUESTIONS</span>
          </div>
          <div id="questions">
            <div className="question">
              <div className="question-heading">
                <span>What is This is Fine ?</span>
                <FaChevronDown size={20} id="first-dn" onClick={firstQ} />
                <FaChevronLeft size={20} id="first-up" onClick={firstA} />
              </div>
              <span id="answer-1" className="answers">
                “This Is Fine” is unique as a meme for two reasons. One, while
                sometimes modified, it’s most commonly used in an unaltered
                state. Second, it’s still popular and used, despite now being
                nearly nine years old.
              </span>
            </div>
            <div className="question">
              <div className="question-heading">
                <span>How dose $Fine differ rom other crypto currencies ?</span>
                <FaChevronDown size={20} id="second-dn" onClick={secondQ} />
                <FaChevronLeft size={20} id="second-up" onClick={secondA} />
              </div>
              <span id="answer-2" className="answers">
                $Fine is a both a meme and culture coin, meaning it is heavily
                focused on the use of memes and community engagement.
              </span>
            </div>
            <div className="question">
              <div className="question-heading">
                <span>How can i get involved with $Fine ?</span>
                <FaChevronDown size={20} id="third-dn" onClick={thirdQ} />
                <FaChevronLeft size={20} id="third-up" onClick={thirdA} />
              </div>
              <span id="answer-3" className="answers">
                You can get involved with $Fine by purchasing tokens on Uniswap,
                participating in community discussions on Telegram, Twitter or
                medium, and spreading the word about $Fine through memes.
              </span>
            </div>
            <div className="question">
              <div className="question-heading">
                <span>How can i sell my $Fine ?</span>
                <FaChevronDown size={20} id="fourth-dn" onClick={fourthQ} />
                <FaChevronLeft size={20} id="fourth-up" onClick={fourthA} />
              </div>
              <span id="answer-4" className="answers">
                You can sell your $fine tokens on Uniswap, but the project
                encourages holding onto them and participating in the community
                to drive the price up.
              </span>
            </div>
          </div>
        </div>
      </div>
    </>
  );
}
