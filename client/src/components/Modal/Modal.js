import "./Modal.scss";
import close from "../../assets/icons/close.svg";
import { Link } from "react-router-dom";

import React from "react";

const Modal = (props) => {
  return (
    <div className="modal">
      <form className="filter-form">
        <div className="filter-form__head">
          <h1 className="filter-form__title">More Filters</h1>
          <img
            src={close}
            alt="close"
            className="filter-form__close"
            onClick={props.handleClose}
          />
        </div>

        <div className="filter-form__access">
          <h2 className="filter-form__subtitle">Access</h2>
          <div className="filter-form__access-options">
            <div className="filter-form__access-item">
              <input
                type="radio"
                id="in-person"
                name="access"
                value="in-person"
              />
              <label className="filter-form__label" htmlFor="in-person">
                In person
              </label>
            </div>
            <div className="filter-form__access-item">
              <input type="radio" id="online" name="access" value="online" />
              <label className="filter-form__label" htmlFor="online">
                Online
              </label>
            </div>
            <div className="filter-form__access-item">
              <input type="radio" id="both" name="access" value="both" />
              <label className="filter-form__label" htmlFor="both">
                Both
              </label>
            </div>
          </div>
        </div>

        <div className="filter-form__entries">
          <h2 className="filter-form__subtitle"> Price Range</h2>
          <p className="filter-form__description">
            The average price of an activity per person is $38
          </p>
          <div className="filter-form__range">
            <input type="text" name="min" placeholder="min $5" />
            <p className="filter-form__range-mid"> —— </p>
            <input type="text" name="max" placeholder="max $600" />
          </div>
        </div>

        <div className="filter-form__entries">
          <h2 className="filter-form__subtitle"> Numer of People</h2>
          <div className="filter-form__range">
            <input type="text" name="min" placeholder="min 2" />
            <div className="filter-form__range-mid"> —— </div>
            <input type="text" name="max" placeholder="max 500+" />
          </div>
        </div>

        <div className="filter-form__entries">
          <h2 className="filter-form__subtitle"> Activity Type</h2>
          <div className="filter-form__activity">
            <div className="filter-form__activity-part">
              <div className="filter-form__activity-item">
                <input type="checkbox" id="art-culture" value="art-culture" />
                <label className="filter-form__label" htmlFor="art-culture">
                  Art & Culture
                </label>
              </div>
              <div className="filter-form__activity-item">
                <input
                  type="checkbox"
                  id="fitness-wellness"
                  value="fitness-wellness"
                />
                <label
                  className="filter-form__label"
                  htmlFor="fitness-wellness"
                >
                  Fitness & Wellness
                </label>
              </div>
            </div>
            <div className="filter-form__activity-part">
              <div className="filter-form__activity-item">
                <input type="checkbox" id="food-drink" value="food-drink" />
                <label className="filter-form__label" htmlFor="food-drink">
                  Food & Drink
                </label>
              </div>
              <div className="filter-form__activity-item">
                <input
                  type="checkbox"
                  id="nature-outdoors"
                  value="nature-outdoors"
                />
                <label className="filter-form__label" htmlFor="nature-outdoors">
                  Nature & Outdoors
                </label>
              </div>
            </div>
          </div>
        </div>
        <div className="filter-form__bottom">
          <Link to="/explore/result">
            <button className="filter-form__button">Apply Filters</button>
          </Link>
        </div>
      </form>
    </div>
  );
};

export default Modal;
