import React from "react";
import { useNavigate } from "react-router-dom";
import "../App.css";

function Home() {
  const navigate = useNavigate();

  return (
    <div className="container" style={{ textAlign: "center", padding: "50px" }}>
      <h1 style={{ color: "#007bff" }}>Welcome to CommunionHub</h1>
      <p style={{ fontSize: "18px" }}>Connecting people across faiths & interests through events.</p>
      <button onClick={() => navigate("/events")}>Explore Events</button>
    </div>
  );
}

export default Home;