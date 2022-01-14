import React from "react";
import Tag from "../../components/Tag/Tag";
import CardGroup from "../../components/CardGroup/CardGroup";
import filterIcon from "../../assets/icons/filter.png";
import "./ExplorePage.scss";

function ExplorePage() {
  return (
    <main className="explore">
      <div className="explore__top">
        <h1 className="explore__header">Explore Activities</h1>
        <div>
          <div>
            <div className="explore__category">
              <Tag>Arts & Culture</Tag>
              <Tag>FItness & Wellness</Tag>
              <Tag>Food & Drinks</Tag>
              <Tag>Nature & Outdoors</Tag>
              <div className="explore__divide-line"></div>
              <Tag>
                <img
                  className="filter-icon"
                  src={filterIcon}
                  alt="filter icon"
                />
                More Filters
              </Tag>
            </div>
            <div className="explore__search-bar"></div>
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
