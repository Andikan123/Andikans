import React from "react";
import "./Card.css";

export const SearchBox = ({ searchRobots }) => {
  return (
    <div>
      <input
        type="search"
        placeholder="Search Robots"
        className="search"
        onChange={searchRobots}
      />
    </div>
  );
};
