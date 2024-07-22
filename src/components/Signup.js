import React from "react";
import { useNavigate } from "react-router-dom";
import "./Auth.css";

function Signup() {
  const navigate = useNavigate();

  const handleSignup = () => {
    // Add signup logic here
    navigate("/dashboard");
  };

  return (
    <div className="auth-container">
      <div className="auth-left">
        <img src="/path/to/your/illustration.png" alt="Illustration" />
      </div>
      <div className="auth-right">
        <h1>Welcome to our website!</h1>
        <p>Please enter your details</p>
        <form>
          <input type="text" placeholder="Name" />
          <input type="text" placeholder="Lastname" />
          <input type="email" placeholder="Email" />
          <input type="password" placeholder="Password" />
          <input type="password" placeholder="Confirm Password" />
          <button type="button" onClick={handleSignup}>
            Sign Up
          </button>
          <button type="button" className="google-btn">
            Sign Up with Google
          </button>
        </form>
        <p>
          Already have an account?{" "}
          <span onClick={() => navigate("/")}>Login</span>
        </p>
      </div>
    </div>
  );
}

export default Signup;
