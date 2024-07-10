import React from "react";
import { Link, useLocation, useParams } from "react-router-dom";
import topics from "../assets/topics";
import "./quiz.css";
import categories from "../assets/topics";


function Quiz() {
  const { id } = useParams();
  const { state } = useLocation();

  const topic = state || categories.find((category) => category.id == id);

  if (!topic) return null;
  
  return (
    <div className="defaultHome">
      <div className="AccountDashboard">
        <div className="moreBtn">
          <Link to="/Quiz">
            <button>Next</button>
          </Link>
        </div>
        <div className="StartQuiz">
          <ul>
            <li className="QuizName">
              <h1 className="quiz_name">{topic.id}</h1>
              <p>Answer the question below</p>
            </li>
            <li className="timer-quiz">timer : 30:00Mins</li>
            <li>
              <ul
                style={{
                  display: "flex",
                }}
              >
                <li className="Image">
                  <img src ={topic.image} alt="" />
                </li>
                <li className="QuizQuestion">
                  <h1>Question 1/5</h1>
                  <p>What is the capital of Nigeria?</p>
                </li>
              </ul>
            </li>

            <li className="QuestionAnswers">
              <p>Choose answer</p>
              <input type="radio" id="one" name="fav_language" value="ONE" />
              <label htmlFor="one">Choice one</label>
              <br />
              <input type="radio" id="two" name="fav_language" value="TWO" />
              <label htmlFor="two">Choice two</label>
              <br />
              <input
                type="radio"
                id="three"
                name="fav_language"
                value="THREE"
              />
              <label htmlFor="three">Choice three</label>
              <br />
              <input type="radio" id="four" name="fav_language" value="FOUR" />
              <label htmlFor="four">Choice four</label>
            </li>
          </ul>
        </div>
      </div>

      <div>
        <h1 className="QuizzTime greyy">Quiz Time</h1>
        <div className="Navbarr">
          <input type="text" placeholder="Search" className="search" />
          <button>Start Quiz</button>
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
  );
}

export default Quiz;
