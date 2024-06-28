import React from "react";
import "./Dashboard.css";
import "./Topics.css";
import "../../node_modules/bootstrap-icons/font/bootstrap-icons.css";
import { Link } from "react-router-dom";
import history from "../assets/History.png";
function AgricultureTopic() {
  return (
    <div className="defaultHome">
      <div className="AccountDashboard">
        
      </div>
      <div>
        <h1 className="QuizzTime greyy">Quiz Time</h1>
        <div className="Navbarr">
          <input type="text" placeholder="Search" className="search" />
          <button>Start Quiz</button>
          <div className="FullProfile">
            <i class="bi bi-person-circle profile"></i>
            <span className="profileName">John Doe</span>
          </div>
        </div>
        <ul className="dashboardList">
          <div className="mainButtons">
            <Link to="/dashboard">
              <li className="greyy dashboard">
                <i class="bi bi-grid-1x2-fill icons">
                  <span>Dashboard</span>
                </i>
              </li>
            </Link>
            <Link to="/support">
              <li className="greyy">
                <i class="bi bi-headset">
                  <span>Support</span>
                </i>
              </li>
            </Link>
            <Link to="/notifications">
              <li className="greyy">
                <i class="bi bi-bell-fill">
                  <span>Notification</span>
                </i>
              </li>
            </Link>
          </div>
          <Link to="/login">
            <li className="greyy logout">
              <i class="bi bi-box-arrow-left"></i>Log Out
            </li>
          </Link>
        </ul>
      </div>
    </div>
  );
}

export default AgricultureTopic;
