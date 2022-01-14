import React from "react";
import Tag from "../../components/Tag/Tag";
import CardGroup from "../../components/CardGroup/CardGroup";
import "./ExplorePage.scss";

function ExplorePage() {
  return (
    <main className="explore">
      <div className="explore__header">
        <h1>Explore Activities</h1>
        <div>
          <div className="explore__category">
            <Tag>Arts & Culture</Tag>
            <Tag>FItness & Wellness</Tag>
            <Tag>Food & Drinks</Tag>
            <Tag>Nature & Outdoors</Tag>
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
