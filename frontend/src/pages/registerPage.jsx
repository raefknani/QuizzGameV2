import React from "react";
import RegisterForm from "../components/RegisterForm";
import "./loginPage.css";

function registerPage() {
  return (
    <div>
      <div className="loginForm">
        <RegisterForm />
      </div>
      <div className="loginFormP1"></div>
    </div>
  );
}

export default registerPage;
