import React from "react";

const CorrectAnswer = ({ correctAnswer, answer }) => {
  return (
    <label
      style={{
        color: "blue",
        marginLeft: "10px",
      }}
      htmlFor={answer}
    >
      Correct Answer
    </label>
  );
};

export default CorrectAnswer;
