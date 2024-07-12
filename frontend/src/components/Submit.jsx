import React from "react";
import "../validateQuiz.css";
import Question from "../assets/SuccessIcon.png";

function Submit() {
  // Define the click handler function
  const handleYesClick = () => {
    console.log("Yes item clicked");
  };
  const handleNoClick = () => {
    console.log("No item clicked");
    let home = document.getElementsByClassName("ALL")[0];
    home.style.filter = "grayscale(0)";
    home.style.filter = "brightness(100%)";
    let quizValidation = document.getElementsByClassName("QuizValidation")[0];
    quizValidation.remove();
  };

  return (
    <div className="QuizValidation">
      <img src={Question} alt="" />
      <p>Are you Sure you want to submit Quiz?</p>
      <ul className="liUl">
        <div className="NoElement" onClick={handleNoClick}>
          <li>No</li>
        </div>
        <div>
          <li className="YesElement" onClick={handleYesClick} >
            Yes
          </li>
        </div>
      </ul>
    </div>
  );
}

export default Submit;
