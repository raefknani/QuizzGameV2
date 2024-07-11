import React from "react";
import "../validateQuiz.css";
import Question from "../assets/SuccessIcon.png";

function Submit() {
  return (
    <div className="QuizValidation">
      <img src={Question} alt="" />
      <p>Are you Sure you want 
      to submit Quiz?</p>
      <ul>
        <li>No</li>
        <li>Yes</li>
      </ul>
    </div>
  );
}

export default Submit;
