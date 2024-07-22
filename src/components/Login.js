import React from "react";
import { useNavigate } from "react-router-dom";
import "./Auth.css";

function Login() {
  const navigate = useNavigate();

  const handleLogin = () => {
    // Add login logic here
    navigate("/dashboard");
  };

  return (
    <div className="auth-container">
      <div className="auth-left">
        <img src="/path/to/your/illustration.png" alt="Illustration" />
      </div>
      <div className="auth-right">
        <h1>Welcome back!</h1>
        <p>Please enter your details</p>
        <form>
          <input type="email" placeholder="Email" />
          <input type="password" placeholder="Password" />
          <div className="auth-options">
            <label>
              <input type="checkbox" /> Remember for 30 days
            </label>
            <span>Forgot password?</span>
          </div>
          <button type="button" onClick={handleLogin}>
            Log In
          </button>
          <button type="button" className="google-btn">
            Log In with Google
          </button>
        </form>
        <p>
          Don't have an account?{" "}
          <span onClick={() => navigate("/signup")}>Sign Up</span>
        </p>
      </div>
    </div>
  );
}

export default Login;
