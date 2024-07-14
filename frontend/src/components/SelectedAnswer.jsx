import React from "react";

const SelectedAnswer = ({ selectedAnswer, answer }) => {
  return (
    <label
      style={{
        color: selectedAnswer === answer ? "#F24E1E" : "white",
        marginLeft: "20px",
        position: "relative",
        left: "150px",
      }}
      htmlFor={answer}
    >
      Your Answer
    </label>
  );
};

export default SelectedAnswer;
