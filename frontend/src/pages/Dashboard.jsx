import React from "react";
import "./Dashboard.css";
import "../../node_modules/bootstrap-icons/font/bootstrap-icons.css";
import profile from "../assets/profile.png";

function DefaultHome() {
  return (
    <div className="defaultHome">
      <div className="AccountDashboard">
        <div className="Account">
          <div className="profileImage">
            <img src={profile} alt="none" />
          </div>
          <div className="AccountData">
            <div className="profileName">
              <h1>Oluwatobi Olowu</h1>
              <p>Bonus booster 24lv</p>
              <div className="progress_barr">
                <div className="progress"></div>
              </div>
              <div className="data_boxes">
                <ul>
                  <li>
                    <div className="quizz_passed">
                      <ul>
                        <li>
                          <i class="bi bi-flag-fill"></i>
                        </li>
                        <li className="iconContent">
                          <p>27</p>
                          <p>Quizz Passed</p>
                        </li>
                      </ul>
                    </div>
                  </li>
                  <li>
                    <div className="fastest_time">
                      <ul>
                        <li>
                          <i class="bi bi-clock-fill"></i>
                        </li>
                        <li className="iconContent">
                          <p>27min</p>
                          <p>Fastest Time</p>
                        </li>
                      </ul>
                    </div>
                  </li>
                  <li>
                    <div className="correct_answers">
                      <ul>
                        <li>
                          <i class="bi bi-check-circle-fill"></i>
                        </li>
                        <li className="iconContent">
                          <p>200</p>
                          <p>Correct Answers</p>
                        </li>
                      </ul>
                    </div>
                  </li>
                </ul>
              </div>
            </div>
          </div>
        </div>
        <div className="second_part_category">
          <ul>
            <li>
              <div className="achievements"></div>
            </li>
            <li>
              <div className="feachered_category"></div>
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
            <i class="bi bi-person-circle profile"></i>
            <span className="profileName">John Doe</span>
          </div>
        </div>
        <ul className="dashboardList">
          <div className="mainButtons">
            <li className="greyy dashboard">
              <i class="bi bi-grid-1x2-fill icons">
                <span>Dashboard</span>
              </i>
            </li>
            <li className="greyy">
              <i class="bi bi-headset">
                <span>Support</span>
              </i>
            </li>
            <li className="greyy">
              <i class="bi bi-bell-fill">
                <span>Notification</span>
              </i>
            </li>
          </div>
          <li className="greyy logout">
            <i class="bi bi-box-arrow-left"></i>Log Out
          </li>
        </ul>
      </div>
    </div>
  );
}

export default DefaultHome;
