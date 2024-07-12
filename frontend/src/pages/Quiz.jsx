import React, { useState, useEffect } from "react";
import { Link, useLocation, useParams } from "react-router-dom";
import axios from "axios";
import "./quiz.css";
import categories from "../assets/topics";
import Submit from "../components/Submit.jsx";
import Badge from "../components/Badge"; // Import Badge component

function Quiz() {
  const { id } = useParams();
  const { state } = useLocation();
  const [questions, setQuestions] = useState([]);
  const [currentQuestionIndex, setCurrentQuestionIndex] = useState(0);
  const [timeLeft, setTimeLeft] = useState(1800);
  const [selectedAnswer, setSelectedAnswer] = useState("");
  const [answers, setAnswers] = useState([]);
  const [error, setError] = useState(null);
  const [userAnswers, setUserAnswers] = useState([]);
  const [timerId, setTimerId] = useState(null);
  const [showSubmitPopup, setShowSubmitPopup] = useState(false);
  const [showBadge, setShowBadge] = useState(false);
  const [score, setScore] = useState(0);
  const [reviewQuiz, setReviewQuiz] = useState(false); // State to track review action

  const topic = state || categories.find((category) => category.id === id);

  useEffect(() => {
    const fetchQuestions = async (retries = 1, delay = 1800000) => {
      const url =
        topic.id === "any"
          ? "https://opentdb.com/api.php?amount=5"
          : `https://opentdb.com/api.php?amount=5&category=${topic.categorie_id}`;

      try {
        const response = await axios.get(url);
        const fetchedQuestions = response.data.results;
        setQuestions(fetchedQuestions);
      } catch (error) {
        if (error.response && error.response.status === 429 && retries > 0) {
          setTimeout(() => fetchQuestions(retries - 1, delay * 2), delay);
        } else {
          setError(error.message);
        }
      }
    };

    fetchQuestions();
  }, [topic.id]);

  useEffect(() => {
    const timer = setInterval(() => {
      setTimeLeft((prevTime) => (prevTime > 0 ? prevTime - 1 : 0));
    }, 1000);

    setTimerId(timer);

    return () => clearInterval(timer);
  }, []);

  useEffect(() => {
    if (questions.length > 0 && currentQuestionIndex < questions.length) {
      const currentQuestion = questions[currentQuestionIndex];
      console.log(currentQuestion.correct_answer);
      const shuffledAnswers = [
        currentQuestion.correct_answer,
        ...currentQuestion.incorrect_answers,
      ].sort();
      setAnswers(shuffledAnswers);
    }
  }, [questions, currentQuestionIndex]);

  if (!topic) return null;

  const currentQuestion = questions[currentQuestionIndex];

  const handleNextQuestion = () => {
    const updatedUserAnswers = [...userAnswers, selectedAnswer];
    setUserAnswers(updatedUserAnswers);

    if (currentQuestionIndex < questions.length - 1) {
      setCurrentQuestionIndex(currentQuestionIndex + 1);
      setSelectedAnswer("");
    } else {
      clearInterval(timerId); // Stop the timer
      setShowSubmitPopup(true); // Show the submit popup
    }
  };

  const handleSubmit = () => {
    clearInterval(timerId);
    const allAnswers = questions.map((question) => question.correct_answer);

    const correctAnswersCount = userAnswers.reduce(
      (count, answer, index) =>
        answer === allAnswers[index] ? count + 1 : count,
      0
    );
    const percentage = (correctAnswersCount / questions.length) * 100;
    setScore(percentage);
    console.log(`percentage: ${percentage}%`);
    setShowBadge(true); // Show the badge
    setShowSubmitPopup(false); // Close the popup
  };

  const handleCancel = () => {
    setShowSubmitPopup(false); // Close the popup
    // Restart the timer
    const timer = setInterval(() => {
      setTimeLeft((prevTime) => (prevTime > 0 ? prevTime - 1 : 0));
    }, 1000);
    setTimerId(timer);
  };

  const handleReview = () => {
    setReviewQuiz(true);
  };

  const formatTime = (seconds) => {
    const minutes = Math.floor(seconds / 60);
    const secs = seconds % 60;
    return `${minutes}:${secs < 10 ? "0" : ""}${secs}`;
  };

  return (
    <>
      {showBadge && <Badge score={score} onReview={handleReview} />}
      {showSubmitPopup && <Submit onYes={handleSubmit} onNo={handleCancel} />}
      {reviewQuiz && (
        <div className="review-section">Review the quiz here.</div>
      )}{" "}
      {/* Render the review section */}
      <div className="ALL">
        <div className="defaultHome">
          <div className="AccountDashboard">
            <div className="moreBtn">
              <button onClick={handleNextQuestion}>Next</button>
            </div>
            <div className="StartQuiz">
              <ul>
                <li className="QuizName">
                  <h1 className="quiz_name">{topic.id} Quiz</h1>
                  <p>Answer the question below</p>
                </li>
                <li className="timer-quiz">Timer: {formatTime(timeLeft)}</li>
                {error ? (
                  <li className="error-message">
                    <p>Failed to load questions: {error}</p>
                  </li>
                ) : (
                  currentQuestion && (
                    <>
                      <li>
                        <ul style={{ display: "flex" }}>
                          <li className="Image">
                            <img src={topic.image} alt="" />
                          </li>
                          <li className="QuizQuestion">
                            <h1>Question {currentQuestionIndex + 1}/5</h1>
                            <p>{currentQuestion.question}</p>
                          </li>
                        </ul>
                      </li>
                      <li className="QuestionAnswers">
                        <p>Choose answer</p>
                        {answers.map((answer, index) => (
                          <div key={index}>
                            <input
                              type="radio"
                              id={answer}
                              name="answer"
                              value={answer}
                              onChange={(e) =>
                                setSelectedAnswer(e.target.value)
                              }
                              checked={selectedAnswer === answer}
                            />
                            <label htmlFor={answer}>{answer}</label>
                            <br />
                          </div>
                        ))}
                      </li>
                    </>
                  )
                )}
              </ul>
            </div>
          </div>
          <div>
            <h1 className="QuizzTime greyy">Quiz Time</h1>
            <div className="Navbarr">
              <input type="text" placeholder="Search" className="search" />
              <Link to="/topics">
                <button>Start Quiz</button>
              </Link>
              <div className="FullProfile">
                <i className="bi bi-person-circle profile"></i>
                <span className="profileName">John Doe</span>
              </div>
            </div>
            <ul className="dashboardList">
              <div className="mainButtons">
                <Link to="/dashboard">
                  <li className="greyy dashboard">
                    <i className="bi bi-grid-1x2-fill icons">
                      <span>Dashboard</span>
                    </i>
                  </li>
                </Link>
                <Link to="/support">
                  <li className="greyy">
                    <i className="bi bi-headset">
                      <span>Support</span>
                    </i>
                  </li>
                </Link>
                <Link to="/notifications">
                  <li className="greyy">
                    <i className="bi bi-bell-fill">
                      <span>Notification</span>
                    </i>
                  </li>
                </Link>
              </div>
              <Link to="/login">
                <li className="greyy logout">
                  <i className="bi bi-box-arrow-left"></i>Log Out
                </li>
              </Link>
            </ul>
          </div>
        </div>
      </div>
    </>
  );
}

export default Quiz;
