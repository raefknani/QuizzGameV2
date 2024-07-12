// QuestionDisplay.jsx
import React from "react";

const QuestionDisplay = ({ currentQuestionIndex, question }) => {
  return (
    <li className="QuizQuestion">
      <h1>Question {currentQuestionIndex + 1}/5</h1>
      <p>{question}</p>
    </li>
  );
};

export default QuestionDisplay;
