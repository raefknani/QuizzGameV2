// AnswerOptions.jsx
import React from "react";

const ReviewQuestion = ({ answers, selectedAnswer }) => {
  return (
    <li className="QuestionAnswers">
      <p>Choose answer</p>
      {answers.map((answer, index) => (
        <div key={index}>
          <div
            style={{
              height: "5px",
              width: "5px",
              borderRadius: "50%",
              backgroundColor: selectedAnswer === answer ? "blue" : "white",
            }}
          ></div>
          <label htmlFor={answer}>{answer}</label>
          <br />
        </div>
      ))}
    </li>
  );
};

export default ReviewQuestion;
