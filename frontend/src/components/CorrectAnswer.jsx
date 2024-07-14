import React from "react";

const CorrectAnswer = ({ correctAnswer, answer }) => {
  return (
    <label
      style={{
        color: "blue",
        marginLeft: "20px",
        position: "relative",
        left: "150px",
      }}
      htmlFor={answer}
    >
      Correct Answer
    </label>
  );
};

export default CorrectAnswer;
