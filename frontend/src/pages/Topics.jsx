import React from "react";
import "./Dashboard.css";
import "./Topics.css";
import "../../node_modules/bootstrap-icons/font/bootstrap-icons.css";
import { Link } from "react-router-dom";
import topics from "../assets/topics";
import TopicBox from "../components/TopicBox";

function Topics() {
  return (
    <div className="defaultHome">
      <div className="AccountDashboard dashTopics">
        <div className="selectTopics">
          <p className="p1">Select Topic</p>
          <p className="p2">Featured Category</p>
        </div>
        <div className="SomeTopics previewTopic">
          {topics.slice(0, 12).map((topic, index) => (
            <TopicBox
              key={index}
              to={`/topics/${topic.id.toLowerCase()}`}
              image={topic.image}
              label={topic.name}
              topic={topic}
            />
          ))}
          <div className="moreBtn">
            <Link to="alltopics">
              <button>More</button>
            </Link>
          </div>
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

export default Topics;
