import React from "react";
import Tag from "../../components/Tag/Tag";
import ColoredTag from "../../components/ColoredTag/ColoredTag";
import Card from "../../components/Card/Card";
import filterIcon from "../../assets/icons/filter.png";
import "./FilteredResultsPage.scss";

function FilteredResultsPage() {
  return (
    <main className="search">
      <div className="search__top">
        <h1 className="search__header">Search Results</h1>
        <div className="search__tags">
          <div className="search__tags-left">
            <div className="search__category">
              <Tag>Arts & Culture</Tag>
              <Tag>FItness & Wellness</Tag>
              <Tag>Food & Drinks</Tag>
              <Tag>Nature & Outdoors</Tag>
            </div>
            <div className="search__category">
              <ColoredTag>In Person & Online</ColoredTag>
              <ColoredTag>Max. $50 per person</ColoredTag>
              <ColoredTag>60-70 people</ColoredTag>
            </div>
          </div>

          <div className="search__tags-right">
            <Tag>Reset Filter</Tag>
            <img src={filterIcon} alt="filter icon" className="filter-icon" />
          </div>
        </div>
      </div>

      <div className="search__cards">
        <Card />
        <Card />
      </div>
    </main>
  );
}

export default FilteredResultsPage;
