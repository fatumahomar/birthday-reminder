import React from "react";
import { Link } from "react-router-dom";

const Home = () => {
  return (
    <div className="container" style={{ textAlign: "center", backgroundColor: "white", padding: "20px", borderRadius: "10px" }}>
      <h3>Family and Friends Birthday</h3>
      <Link to="/details" className="button">Family And Friends Details</Link>
      <br />
      <Link to="/birthday" className="button">Today Birthday</Link>
    </div>
  );
};

export default Home;
