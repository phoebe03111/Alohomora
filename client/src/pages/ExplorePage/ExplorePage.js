import React, { useState } from "react";
import Tag from "../../components/Tag/Tag";
import CardGroup from "../../components/CardGroup/CardGroup";
import CardGroup2 from "../../components/CardGroup2/CardGroup2";
import filterIcon from "../../assets/icons/filter.png";
import "./ExplorePage.scss";
import Modal from "../../components/Modal/Modal";

function ExplorePage() {
  const [isModalShowing, setIsModalShowing] = useState(false);

  const handleOpenModal = () => {
    setIsModalShowing(true);
  };

  const handleCloseModal = () => {
    setIsModalShowing(false);
  };

  return (
    <main className="explore">
      {isModalShowing && <Modal handleClose={handleCloseModal} />}
      <div className="explore__top">
        <h1 className="explore__header">Explore Activities</h1>
        <div>
          <div className="explore__content">
            <div className="explore__category">
              <Tag>Arts & Culture</Tag>
              <Tag>FItness & Wellness</Tag>
              <Tag>Food & Drinks</Tag>
              <Tag>Nature & Outdoors</Tag>
              <div className="explore__divide-line"></div>
              <Tag onClick={handleOpenModal}>
                <img
                  className="filter-icon"
                  src={filterIcon}
                  alt="filter icon"
                />
                More Filters
              </Tag>
            </div>

            <div className="explore__search-container">
              <input
                type="text"
                className="explore__search-bar"
                placeholder="search"
              />
            </div>
          </div>
        </div>
      </div>

      <div className="explore__card-container">
        <div className="explore__card-group">
          <h3 className="explore__topic">trending</h3>
          <CardGroup />
        </div>
        <div className="explore__card-group">
          <h3 className="explore__topic">new this week</h3>
          <CardGroup />
        </div>
        <div className="explore__card-group">
          <h3 className="explore__topic">outdoors</h3>
          <CardGroup2 />
        </div>
      </div>

     
    </main>
  );
}

export default ExplorePage;
