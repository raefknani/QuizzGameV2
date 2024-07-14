import React from "react";
import "./Dashboard.css";
import "../../node_modules/bootstrap-icons/font/bootstrap-icons.css";
import profile from "../assets/profile.png";
import badge1 from "../assets/Badge1.png";
import badge2 from "../assets/Badge2.png";
import badge3 from "../assets/Badge3.png";
import { Link } from "react-router-dom";
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
              <div className="achievements">
                <p className="achievmentFont">Achievements</p>
                <div>
                  <ul className="achievementsContent">
                    <li className="badge1">
                      <img src={badge1} alt="none" />
                      <p>Comeback</p>
                    </li>
                    <li className="badge2">
                      <img src={badge2} alt="none" />
                      <p>Winner</p>
                    </li>
                    <li className="badge3">
                      <img src={badge3} alt="none" />
                      <p>Lucky</p>
                    </li>
                    <li className="breakLine">
                      <Link to="">
                        <p>View All</p>
                      </Link>
                    </li>
                  </ul>
                </div>
              </div>
            </li>
            <li>
              <div className="feachered_category">
                <p>Featured Category</p>
                <div className="viewAllBtn">
                  <Link to="/topics">
                    <p>View All</p>
                  </Link>
                </div>
                <ul>
                  <Link to="/topics/history">
                    <li className="opt1">
                      <p>History</p>
                    </li>
                  </Link>
                  <Link to="/topics/medcine">
                    <li className="opt2">
                      <p>Medcine</p>
                    </li>
                  </Link>
                </ul>
                <ul>
                  <Link to="/topics/technology">
                    <li className="opt3">
                      <p>Technology</p>
                    </li>
                  </Link>
                  <Link to="/topics/agriculture">
                    <li className="opt4">
                      <p>Agriculture</p>
                    </li>
                  </Link>
                </ul>
              </div>
            </li>
          </ul>
        </div>
      </div>
      <div>
        <h1 className="QuizzTime greyy">Quiz Time</h1>
        <div className="Navbarr">
          <input type="text" placeholder="Search" />
          <Link to="/topics">
            <button>Start Quiz</button>
          </Link>
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

export default DefaultHome;
