import React from "react";
import Tag from "../../components/Tag/Tag";
import ColoredTag from "../../components/ColoredTag/ColoredTag";
import filterIcon from "../../assets/icons/filter.png";
import "./FilteredResultsPage.scss";
import CardGroup3 from "../../components/CardGroup3/CardGroup3";

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
            <div className="search__category">
              <ColoredTag>In Person & Online</ColoredTag>
              <ColoredTag>Max. $50 per person</ColoredTag>
              <ColoredTag>60-70 people</ColoredTag>
              <div className="explore__divide-line"></div>
              <Tag>Reset Filters</Tag>
            </div>
          </div>
        </div>
      </div>

      <div className="search__cards">
        <CardGroup3 />
      </div>
    </main>
  );
}

export default FilteredResultsPage;
