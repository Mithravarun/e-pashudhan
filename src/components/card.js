import React, { useState } from "react";
import useCollapse from "react-collapsed";

const Card = ({ item }) => {
  const [isExpanded, setExpanded] = useState(false);
  const { getCollapseProps, getToggleProps } = useCollapse({ isExpanded });
  return (
    <div className="card">
      <img src={item.img} alt={item.alt} />
      <div className="card-body">
        <h2>{item.heading}</h2>
        <p>{item.para}</p>
        <p {...getCollapseProps()}>{item.show}</p>
        <button
          {...getToggleProps({
            onClick: () => setExpanded((prevExpanded) => !prevExpanded),
          })}
        >
          {isExpanded ? "Read Less" : "Read More"}
        </button>
      </div>
    </div>
  );
};

export default Card;
