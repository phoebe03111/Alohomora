import React from "react";
import "./Card.scss";

function Card({ activity }) {
  // let DUMMY_DATA = {
  //   name: "Cookie Decorating",
  //   image_url:
  //     "http://s3-media2.fl.yelpcdn.com/bphoto/MmgtASP3l_t4tPCL1iAsCg/o.jpg"
  // };
  const { name, img_src, description } = activity;

  return (
    <div className="card">
      <div className="card__img-container">
        <img className="card__img" src={img_src} alt={name} />
      </div>
      <div className="card__text-container">
        <h1 className="card__title">{name}</h1>
        <p className="card__description">{description}</p>
      </div>
    </div>
  );
}

export default Card;
