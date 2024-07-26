import React from "react";
import Fdata from "./Fdata";
import data from '../components/data.js';
import "./Birthday.css"; 

const Birthday = () => {
  return (
    <div className="birthday-container">
      <h3>Today's Birthday</h3>
      <Fdata information={data} />
    </div>
  );
};

export default Birthday;
