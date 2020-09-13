import React from "react";

const Data = (props) => {
  return (
    <div>
      {props.data.map((element, index) => (
        <p key={index}>
          Name: {element.name}
          <br /> Email: {element.email}
        </p>
      ))}
    </div>
  );
};

export default Data;
