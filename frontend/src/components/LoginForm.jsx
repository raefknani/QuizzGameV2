import React from "react";
import "./LoginForm.css";
import ChromeIcon from "../assets/chromeIcon.png";
import { Link } from "react-router-dom";

function LoginForm() {
  const handleSubmit = (event) => {
    event.preventDefault();
    const email = event.target.email.value;
    const password = event.target.password.value;

    // Validate email and password
    if (validateEmail(email) && validatePassword(password)) {
      // Redirect user to the dashboard
      window.location.href = "/dashboard";
    } else {
      // Display error message
      alert("Invalid email or password");
    }
  };

  const handleLoginWithGoogle = () => {
    // Redirect user to the dashboard
    window.location.href = "/dashboard";
  };

  const validateEmail = (email) => {
    if (email === "root@gmail.com") {
      return true;
    }
    // Replace with your validation logic
  };

  const validatePassword = (password) => {
    if (password === "root") {
      return true;
    }
  };

  return (
    <div className="login-container">
      <div className="paragraphs">
        <p className="LoginH1">Login to Your Account</p>
        <p className="LoginH2">with your registered Email Address</p>
      </div>
      <div className="LineBreak"></div>
      <form onSubmit={handleSubmit}>
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
      <div className="ChromeButton" onClick={handleLoginWithGoogle}>
        <img className="chromeIcon" src={ChromeIcon} alt="Chrome Icon" />
        <span>Login with Google</span>
      </div>
    </div>
  );
}

export default LoginForm;
