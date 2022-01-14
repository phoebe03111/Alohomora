import React from "react";
import "./Card.scss";

function Card() {
  let fakeData = {
    name: "Four Barrel Coffee",
    image_url:
      "http://s3-media2.fl.yelpcdn.com/bphoto/MmgtASP3l_t4tPCL1iAsCg/o.jpg",
  };
  return (
    <div className="card">
      <h1 className="card__title">{fakeData.name}</h1>
      <div className="card__img-container">
        <img className="card__img" src={fakeData.image_url} alt="" />
      </div>
    </div>
  );
}

export default Card;
