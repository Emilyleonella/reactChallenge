import React from "react";

const BasicInfo = (props) => {
  return (
    <div className="information-container">
      <p className="item">{props.firstName} </p>
      <p className="item">{props.lastName} </p>
      <p className="item">{props.phoneNumber} </p>
      <p className="item">{props.dob}</p>
      <p className="item">{props.id}</p>
    </div>
  );
};

export default BasicInfo;
