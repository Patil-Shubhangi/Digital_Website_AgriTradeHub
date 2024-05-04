// Rating.js
import React, { useState } from "react";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faStar as solidStar, faStarHalfAlt } from "@fortawesome/free-solid-svg-icons";
import { faStar as regularStar } from "@fortawesome/free-regular-svg-icons";

function Rating({ initialRating, onChange }) {
  const [rating, setRating] = useState(initialRating);

  const handleClick = (index) => {
    if (onChange) {
      onChange(index + 1); // Index is 0-based, so add 1 to make it 1-based
    }
    setRating(index + 1);
  };

  return (
    <div className="rating">
      {[...Array(5)].map((_, index) => (
        <FontAwesomeIcon
          key={index}
          icon={index < rating ? solidStar : rating - index === 0.5 ? faStarHalfAlt : regularStar}
          onClick={() => handleClick(index)}
        />
      ))}
    </div>
  );
}

export default Rating;
