import React from "react";
import Tag from "../../components/Tag/Tag";
import "./FilteredResultsPage.scss";

function FilteredResultsPage() {
  return (
    <main className="search">
      <div className="search__header">
        <h1>Search Results</h1>
        <div className="search__tags">
          <div className="search__tags-left">
            <div className="explore__category">
              <Tag>Arts & Culture</Tag>
              <Tag>FItness & Wellness</Tag>
              <Tag>Food & Drinks</Tag>
              <Tag>Nature & Outdoors</Tag>
            </div>
            <div className="explore__category">
              <Tag>In Person & Online</Tag>
              <Tag>Max. $50 per person</Tag>
              <Tag>60-70 people</Tag>
            </div>
          </div>

          <div className="search__tags-right">
            <p className="explore__tag">Reset Filter</p>
          </div>
        </div>
      </div>
    </main>
  );
}

export default FilteredResultsPage;
