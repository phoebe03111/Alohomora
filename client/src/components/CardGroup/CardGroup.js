import React from "react";
import Card from "../Card/Card";
import cookieImg from "../../assets/images/activities/cookie.png";
import pizzaImg from "../../assets/images/activities/pizza.png";
import golfImg from "../../assets/images/activities/golf.png";
import potteryImg from "../../assets/images/activities/pottery.png";
import "./CardGroup.scss";

function CardGroup() {
  let ACTIVITIES_DATA = [
    {
      id: 1,
      name: "Cookie Decorating",
      img_src: cookieImg,
      description: "description",
    },
    {
      id: 2,
      name: "Pizaa Making",
      img_src: pizzaImg,
      description: "description",
    },
    {
      id: 3,
      name: "Mini Golf",
      img_src: golfImg,
      description: "description",
    },
    {
      id: 4,
      name: "Pottery Painting",
      img_src: potteryImg,
      description: "description",
    },
  ];

  return (
    <div className="card-group">
      {ACTIVITIES_DATA.map((activity) => {
        return <Card key={activity.id} activity={activity} />;
      })}
    </div>
  );
}

export default CardGroup;
