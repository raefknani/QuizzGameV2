import React, { useState } from "react";
import "../validateQuiz.css";
import Question from "../assets/SuccessIcon.png";
import Badge from "./Badge";

function Submit({ onYes, onNo }) {
  const [showBadge, setShowBadge] = useState(false);

  const handleYesClick = () => {
    onYes();
    setShowBadge(true);
  };

  const handleNoClick = () => {
    onNo();
    setShowBadge(false);
  };

  return (
    <div className="QuizValidation">
      <img src={Question} alt="" />
      <p>Are you sure you want to submit the quiz?</p>
      <ul className="liUl">
        <div className="NoElement" onClick={handleNoClick}>
          <li>No</li>
        </div>
        <div>
          <li className="YesElement" onClick={handleYesClick}>
            Yes
          </li>
        </div>
      </ul>
      {showBadge && <Badge />}
    </div>
  );
}

export default Submit; // Ensure this line is present
