import React from "react";
import { Route, Routes, Link, useNavigate } from "react-router-dom";
import FitnessAI from "./FitnessAI";
import Profile from "./Profile";
import Workout from "./Workout";

function Dashboard() {
  const navigate = useNavigate();

  const handleLogout = () => {
    // Clear any authentication tokens or user data here if needed
    navigate("/");
  };

  return (
    <div>
      <nav>
        <Link to="fitnessAI">FitnessAI</Link>
        <Link to="profile">Profile</Link>
        <Link to="workout">Workout</Link>
        <button onClick={handleLogout}>Logout</button>
      </nav>
      <Routes>
        <Route path="fitnessAI" element={<FitnessAI />} />
        <Route path="profile" element={<Profile />} />
        <Route path="workout" element={<Workout />} />
      </Routes>
    </div>
  );
}

export default Dashboard;
