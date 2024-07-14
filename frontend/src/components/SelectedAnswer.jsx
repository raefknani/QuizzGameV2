import React from "react";

const SelectedAnswer = ({ selectedAnswer, answer }) => {
  return (
    <label
      style={{
        color: selectedAnswer === answer ? "#F24E1E" : "white",
        marginLeft: "10px",
      }}
      htmlFor={answer}
    >
      Your Answer
    </label>
  );
};

export default SelectedAnswer;
