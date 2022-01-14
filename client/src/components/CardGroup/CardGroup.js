import React from "react";
import Card from "../Card/Card";
import './CardGroup.scss';

function CardGroup() {
  return <div className="card-group">
      <Card />
      <Card />
      <Card />
      <Card />
  </div>;
}

export default CardGroup;
