import React from "react";
import Card from "../Card/Card";
import data from "../../data/data.js";
import "./CardGroup2.scss";

const ActivitiesData = data();

function CardGroup2() {
  return (
    <div className="card-group">
      {ActivitiesData.slice(4, 8).map((activity) => {
        return <Card key={activity.id} activity={activity} />;
      })}
    </div>
  );
}

export default CardGroup2;
