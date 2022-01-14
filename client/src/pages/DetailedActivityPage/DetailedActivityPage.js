import React, { useState } from "react";
import { Link } from "react-router-dom";
import wine from "../../assets/icons/wine.svg";
import star from "../../assets/icons/star.svg";
import pizza1 from "../../assets/images/pizza1.png";
import pizza2 from "../../assets/images/pizza2.jpg";
import pizza3 from "../../assets/images/pizza3.jpg";
import heart from "../../assets/icons/heart.svg";
import whiteHeart from "../../assets/icons/whiteHeart.svg";
import TestimonyGroup from "../../components/TestimonyGroup/TestimonyGroup";

import "./DetailedActivityPage.scss";

const DetailedActivityPage = () => {
  const [isLiked, setIsLiked] = useState(false);
  const handleToggleLike = () => {
    setIsLiked(!isLiked);
  };

  return (
    <main className="detailedActivity">
      <div className="detailedActivity__routes">
        <Link to={"/explore"}>
          <p className="detailedActivity__link">Explore Activity</p>
        </Link>
        <p className="detailedActivity__link">  </p>
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

              <img
                className="detailedActivity__like"
                src={isLiked ? heart : whiteHeart}
                alt="like"
                onClick={handleToggleLike}
              />
            </div>
            <div className="detailedActivity__star-line">
              <img className="detailedActivity__star" src={star} alt="star" />
              <span className="detailedActivity__star-count">4.5 </span>
              <span>(4)</span>
            </div>
            <p className="detailedActivity__location">
              1525 Yew St, Vancouver, BC V6K 3E5
            </p>
            <p className="detailedActivity__phone">(604) 734-0099</p>
          </div>

          <div className="detailedActivity__tag-container">
            <p className="detailedActivity__tag">In-person & Online</p>
            <p className="detailedActivity__tag">Duration - 4hrs</p>
            <p className="detailedActivity__tag">$50 CAD / person</p>
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
            <div className="detailedActivity__warning">
              <img className="detailedActivity__icon" src={wine} alt="drink" />
              <span>This experience includes alcohol.</span>
            </div>
          </div>
          <div className="detailedActivity__button-container">
            <button className="detailedActivity__button">
              Check Availability
            </button>
          </div>
        </div>
      </section>

      <TestimonyGroup/>

      {/*   here is for testimonials component */}
    </main>
  );
};

export default DetailedActivityPage;
