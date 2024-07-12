// AnswerOptions.jsx
import React from "react";

const AnswerOptions = ({ answers, selectedAnswer, setSelectedAnswer }) => {
  return (
    <li className="QuestionAnswers">
      <p>Choose answer</p>
      {answers.map((answer, index) => (
        <div key={index}>
          <input
            type="radio"
            id={answer}
            name="answer"
            value={answer}
            onChange={(e) => setSelectedAnswer(e.target.value)}
            checked={selectedAnswer === answer}
          />
          <label htmlFor={answer}>{answer}</label>
          <br />
        </div>
      ))}
    </li>
  );
};

export default AnswerOptions;
