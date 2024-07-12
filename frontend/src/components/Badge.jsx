import React from "react";
import "./BadgeQuiz.css";
import Badge1 from "../assets/Badge1.png";
import Badge2 from "../assets/Badge2.png";
import Badge3 from "../assets/Badge3.png";

function Badge({ score }) {
  let passedMessage = "Congratulations you have passed";
  let notPassedMessage = "Sorry you haven't passed";

  const printMessage = () => {
    let message = "";
    if (score > 20) {
      message = passedMessage;
    } else {
      message = notPassedMessage;
    }
    return message;
  };

  function reward() {
    let badge = null;
    if (score < 39) {
      badge = null;
    } else if (score > 39 && score < 61) {
      badge = Badge1;
    } else if (score > 60 && score < 90) {
      badge = Badge2;
    } else if (score == 100) {
      badge = Badge3;
    }
    return badge;
  }

  const badgeValue = reward();

  return (
    <div className="BadgeQuiz">
      {badgeValue && <img src={badgeValue} alt="badge" />}
      <p
        style={{
          fontWeight: 700,
          fontSize: "19px",
          lineHeight: "30px",
        }}
      >
        {printMessage()}
      </p>
      <p
        style={{
          fontWeight: 400,
          fontSize: "16px",
          lineHeight: "24px",
        }}
      >
        You scored {score}%
      </p>
      <p
        className="QuizReview"
        style={{
          fontWeight: 700,
          fontSize: "16px",
          lineHeight: "24px",
        }}
      >
        Review Quiz
      </p>
    </div>
  );
}

export default Badge;
