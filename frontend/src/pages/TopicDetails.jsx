import React from "react";
import "./Dashboard.css";
import "./Topics.css";
import "../../node_modules/bootstrap-icons/font/bootstrap-icons.css";
import { Link, useLocation, useParams } from "react-router-dom";
import categories from "../assets/topics";

function TopicDetails() {
  const { id } = useParams();
  const { state } = useLocation();

  const topic = state || categories.find((category) => category.id == id);

  if (!topic) return null;

  return (
    <div className="defaultHome">
      <div className="AccountDashboard">
        <div className="moreBtn">
          <Link to={`/Quiz/${topic.id}`}>
            <button>Start</button>
          </Link>
        </div>

        <div className="QuizzNameBox">
          <h1 className="quiz_name">{topic.id} Quiz</h1>
          <p>Read the following instructions</p>
        </div>

        <div className="QuizzImage">
          <img src={topic.image} alt={topic.name} />
        </div>

        <div className="QuizzInf">
          <ul className="UlList">
            <li className="ULtitles">
              <ul>
                <li>Date:</li>
                <li>Time Limit:</li>
                <li>Attempts:</li>
                <li>Points:</li>
              </ul>
            </li>
            <li className="ULcontents">
              <ul>
                <li>28/07/2021</li>
                <li>30 Mins</li>
                <li>Once</li>
                <li>200 Points</li>
              </ul>
            </li>
          </ul>
        </div>

        <div className="QuizzInst">
          <h1>Instructions</h1>
          <p>
            This quiz consists of 5 multiple-choice questions. To be successful
            with the quizzes, it's important to be conversant with the topics.
            Keep the following in mind:
          </p>
          <p>
            Timing - You need to complete each of your attempts in one sitting,
            as you are allotted 30 minutes to each attempt. Answers - You may
            review your answer choices and compare them to the correct answers
            after your final attempt.
          </p>
          <p>
            To start, click the "Start" button. When finished, click the
            "Submit" button.
          </p>
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
  );
}

export default TopicDetails;
