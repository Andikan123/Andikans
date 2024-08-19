import React from "react";
import { Card } from "./Card";
import "./App.css";

export const CardList = ({ robots }) => {
  return (
    <div className="dady">
      {robots.map((user, i, key) => {
        return (
          <Card
            name={robots[i].name}
            email={robots[i].email}
            id={robots[i].id}
            key={i}
          />
        );
      })}
    </div>
  );
};
