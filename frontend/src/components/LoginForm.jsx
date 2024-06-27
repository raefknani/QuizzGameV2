import React from "react";
import "./LoginForm.css";
import ChromeIcon from "../assets/chromeIcon.png";
function LoginForm() {
  return (
    <div className="login-container">
      <div className="paragraphs">
        <p className="LoginH1">Login to Your Account</p>
        <p className="LoginH2">with your registered Email Address</p>
      </div>
      <div className="LineBreak"></div>
      <form>
        <div>
          <label className="labelH1" htmlFor="email">
            Email address*
          </label>
          <input
            className="inputH1"
            type="email"
            id="email"
            name="email"
            placeholder="Enter email address"
            required
          />
          <label className="labelH1" htmlFor="password">
            Password*
          </label>
          <input
            className="inputH1"
            type="password"
            id="password"
            name="password"
            placeholder="Password"
            required
          />
        </div>
        <button className="buttonH1" type="submit">
          Login
        </button>
      </form>
      <div className="OORR">
        <div className="LineBreak2"></div>
        <p className="LoginH3">Or</p>
        <div className="LineBreak2"></div>
      </div>
      <div className="ChromeButton">
        <img className="chromeIcon" src={ChromeIcon} />
        <span>Login with Google
        </span>
      </div>
    </div>
  );
}

export default LoginForm;
