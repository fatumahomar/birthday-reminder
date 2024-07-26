import React from "react";
import "./Fdata.css";

const Fdata = ({ information }) => {
  let currDate = new Date();
  let newDate = currDate.getDate();
  let newDate1 = newDate < 10 ? `0${newDate}` : `${newDate}`;
  let month = ["January", "February", "March", "April", "May", "June", "July", "August", "September", "October", "November", "December"];
  let currentMonth = month[currDate.getMonth()];
  let actualDate = `${newDate1} ${currentMonth}`;

  const filteredInformation = information.filter(({ dob }) => dob === actualDate);

  if (filteredInformation.length === 0) {
    return <div>No data available</div>;
  }

  return (
    <div className="today-birthday-details">
      {filteredInformation.map(({ id, name, dob, age, gender, image }) => (
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
  );
};

export default Fdata;
