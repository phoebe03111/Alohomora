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
      <div className="card__img-container">
        <img className="card__img" src={fakeData.image_url} alt="" />
      </div>
      <div className="card__text-container">
        <h1 className="card__title">{fakeData.name}</h1>
        <p className="card__description">Description of the activity</p>
      </div>
    </div>
  );
}

export default Card;
