import React from "react";
import CorrectAnswer from "./CorrectAnswer";
import SelectedAnswer from "./SelectedAnswer";

const ReviewQuestion = ({ answers, selectedAnswer, correctAnswer }) => {
  return (
    <li className="QuestionAnswers">
      <p>Choose answer</p>
      {answers.map((answer, index) => (
        <div key={index}>
          <div
            style={{
              display: "inline-block",
              height: "10px",
              width: "10px",
              border: "1px solid grey",
              borderRadius: "50%",
              backgroundColor: selectedAnswer === answer ? "grey" : "white",
              marginRight: "25px",
            }}
          ></div>
          <label htmlFor={answer}>{answer}</label>
          {selectedAnswer === answer && correctAnswer === answer ? (
            <CorrectAnswer correctAnswer={correctAnswer} answer={answer} />
          ) : (
            <>
              {selectedAnswer === answer && (
                <SelectedAnswer
                  selectedAnswer={selectedAnswer}
                  answer={answer}
                />
              )}
              {correctAnswer === answer && (
                <CorrectAnswer correctAnswer={correctAnswer} answer={answer} />
              )}
            </>
          )}
          <br />
        </div>
      ))}
    </li>
  );
};

export default ReviewQuestion;
