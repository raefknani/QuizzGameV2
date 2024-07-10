import React from "react";
import "./RegisterForm.css";
import { useNavigate } from "react-router-dom"; // Change this line

function RegisterForm() {
  const navigate = useNavigate();

  const handleSubmit = (event) => {
    event.preventDefault();
    const name = event.target.name.value;
    const email = event.target.email.value;
    const password = event.target.password.value;

    // Validate email and password
    if (validateEmail(email) && validatePassword(password)) {
      // Redirect user to the welcome page
      navigate("/welcome");
    } else {
      // Display error message
      alert("Invalid email or password");
    }
  };

  const validateEmail = (email) => {
    // Add proper email validation logic here
    const regex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
    return regex.test(email);
  };

  const validatePassword = (password) => {
    // Add proper password validation logic here
    return password.length >= 6; // Example condition
  };

  return (
    <div className="register-container">
      <div className="paragraphs">
        <p className="RegisterH1">Create a New Account</p>
        <p className="RegisterH2">with your Email Address</p>
      </div>
      <div className="LineBreak"></div>
      <form onSubmit={handleSubmit}>
        <div>
          <label className="labelH1" htmlFor="name">
            Full Name*
          </label>
          <input
            className="inputH1"
            type="text"
            id="name"
            name="name"
            placeholder="Enter full name"
            required
          />
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
          Register
        </button>
      </form>
    </div>
  );
}

export default RegisterForm;
