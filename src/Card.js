import React from "react";
import "./Card.css";

export const Card = ({ name, email, id, username }) => {
  return (
    <div className="container">
      <img
        src={`https://robohash.org/test/${id}`}
        alt="robots"
        className="cardImg"
      />
      <h2>{name}</h2>
      <p>{email}</p>
    </div>
  );
};
