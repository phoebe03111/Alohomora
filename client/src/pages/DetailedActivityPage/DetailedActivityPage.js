import React, { useState } from "react";
import { Link } from "react-router-dom";
import wine from "../../assets/icons/wine.svg";
import pizza1 from "../../assets/images/pizza1.png";
import pizza2 from "../../assets/images/pizza2.jpg";
import pizza3 from "../../assets/images/pizza3.jpg";
import heart from "../../assets/icons/heart.svg";
import whiteHeart from "../../assets/icons/whiteHeart.svg";

import "./DetailedActivityPage.scss";

const DetailedActivityPage = () => {
  const [isliked, setIsliked] = useState(false);
  const handleToggleLike = () => {
    setIsliked(!isliked);
  };

  return (
    <main className="detailedActivity">
      <div className="detailedActivity__routes">
        <Link to={"/explore"}>
          <p className="detailedActivity__link">Explore Activity</p>
        </Link>
        <p className="detailedActivity__link"> > </p>
        <p className="detailedActivity__link"> Food & Drink </p>
      </div>

      <section className="detailedActivity__info">
        <div className="detailedActivity__left">
          <div className="detailedActivity__big">
            <img className="detailedActivity__image" src={pizza1} alt="pizza" />
          </div>
          <div className="detailedActivity__image-container">
            <div className="detailedActivity__mid">
              <img src={pizza2} alt="pizza" />
            </div>
            <div className="detailedActivity__small">
              <img src={pizza3} alt="pizza" />
            </div>
          </div>
        </div>

        <div className="detailedActivity__right">
          <div className="detailedActivity__bio">
            <div className="detailedActivity__headline">
              <h1 className="detailedActivity__name">Pizza Making at Nook</h1>
              {isliked && (
                <img
                  className="detailedActivity__like"
                  src={heart}
                  alt="like"
                  onClick={handleToggleLike}
                />
              )}
              {!isliked && (
                <img
                  className="detailedActivity__like"
                  src={whiteHeart}
                  alt="like"
                  onClick={handleToggleLike}
                />
              )}
            </div>
            <p className="detailedActivity__location">
              1525 Yew St, Vancouver, BC V6K 3E5
            </p>
            <p className="detailedActivity__phone">(604) 734-0099</p>
          </div>

          <div className="detailedActivity__tag-container">
            <p className="detailedActivity__tag">In-person & Online</p>
            <img className="detailedActivity__icon" src={wine} alt="drink" />
          </div>
          <div className="detailedActivity__text-container">
            <p className="detailedActivity__text">
              Make pizza with your team in-person or from the comfort of your
              home.
              <br />
              We truly believe that everybody can prepare excellent pizzas at
              home. Therefore, everyone will have fun kneading, by hand, their
              own pizza dough.
            </p>
            <p className="detailedActivity__text">
              This experience includes alcohol. Only guests who meet the legal
              drinking age will be served alcoholic beverages.
            </p>
            <ul className="detailedActivity__policy">Vaccination Policy:</ul>
            <li className="detailedActivity__policy-info">
              we require our attendees to be fully vaccinated.
            </li>
          </div>
          <div className="detailedActivity__button-container">
            <button className="detailedActivity__button">
              Check Availability
            </button>
          </div>
        </div>
      </section>

      {/*   here is for testimonials component */}
    </main>
  );
};

export default DetailedActivityPage;
