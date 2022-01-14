import React from "react";
import CardGroup from "../../components/CardGroup/CardGroup";
import "./ExplorePage.scss";

function ExplorePage() {
  return (
    <main className="explore">
      <div className="explore__header">
        <h1>Explore Activities</h1>
        <div>
          <div className="explore__category">
            <p className="explore__tag">Arts & Culture</p>
            <p className="explore__tag">FItness & Wellness</p>
            <p className="explore__tag">Food & Drinks</p>
            <p className="explore__tag">Nature & Outdoors</p>
          </div>
        </div>
      </div>

      <div className="explore__card-group">
        <h3 className="explore__topic">trending</h3>
        <CardGroup />
        <h3 className="explore__topic">new this week</h3>
        <CardGroup />
        <h3 className="explore__topic">outdoors</h3>
        <CardGroup />
      </div>
    </main>
  );
}

export default ExplorePage;
