import React from "react";
import "../styles/WikiPage.css";

const WikiPage = ({ title, description, image }) => {
  return (
    <div className="wiki-page">
      <h1>{title}</h1>
      <img src={image} alt={title} />
      <p>{description}</p>
    </div>
  );
};

export default WikiPage;
