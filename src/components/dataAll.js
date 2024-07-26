import React from "react";

const DataAll = ({information}) => {
    console.log(information);
    return information.map((item) => {
      const {id, name, dob, gender, image} = item
    return (
        <div key={id} className="person">  
          
          <img src={image} alt={name} />
          <div className="details">
            <h4>{name}</h4>
            <p>Gender: {gender}</p>
            <p>DOB: {dob}</p>

          </div>


          </div>
         
    )

    })
}

export default DataAll;