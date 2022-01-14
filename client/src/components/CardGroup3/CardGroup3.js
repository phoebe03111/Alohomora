import React from "react";
import Card from "../Card/Card";
import data from "../../data/data.js";
import "./CardGroup3.scss";

const ActivitiesData = data();

function CardGroup3() {
  return (
    <div className="card-group">
      {ActivitiesData.slice(8, 12).map((activity) => {
        return <Card key={activity.id} activity={activity} />;
      })}
    </div>
  );
}

export default CardGroup3;

