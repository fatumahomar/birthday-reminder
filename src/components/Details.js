import React from "react";
import data from '../components/data.js';
import "./Details.css"; 

const Details = () => {
  return (
    <div className="details-container">
      <h3>Family and Friends Details</h3>
      <div className="family-friends-details">
        {data.map(({ id, name, dob, age, gender, image }) => (
          <div key={id} className="person">
            <img src={image} alt={name} className="person-image" />
            <div className="person-info">
              <p>Name: {name}</p>
              <p>Date of Birth: {dob}</p>
              <p>Age: {age}</p>
              <p>Gender: {gender}</p>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};

export default Details;
