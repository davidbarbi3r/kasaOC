import React from "react";

function Rating(props) {
  const rating = new Array(5)
    .fill(null)
    .map((_, index) => (
      <img
        src={index < props.rating ? "/full-star.svg" : "/empty-star.svg"}
        alt={`star-${index}`}
        key={`star-${index}`}
      />
    ));

  return <span>{rating}</span>;
}

export default Rating;
