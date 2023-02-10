import React from "react";
import "../styles/WikiCard.css";

const WikiCard = ({ title, description, image }) => {
  return (
    <div className="card">
      <img src={image} alt={title} />
      <h2>{title}</h2>
      <p>{description}</p>
    </div>
  );
};

export default WikiCard;