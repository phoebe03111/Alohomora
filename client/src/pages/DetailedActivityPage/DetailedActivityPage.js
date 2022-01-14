import React from "react";
import { Link } from "react-router-dom";
import wine from "../../assets/icons/wine.svg";
import storeImage from "../../assets/images/vancouver.jpg";
import "./DetailedActivityPage.scss";

const DetailedActivityPage = () => {
  return (
    <main className="detailedActivity">
      <div className="detailedActivity__routes">
        <Link to={"/explore"}>
          <p className="detailedActivity__link">Explore Activity</p>
        </Link>
        <p className="detailedActivity__link"> > </p>
        <p className="detailedActivity__link"> Food & Drink </p>
      </div>

      <section className="detailedActivity__left">
        <div className="detailedActivity__image-container">
          <img
            className="detailedActivity__image"
            src={storeImage}
            alt="store-image"
          />
        </div>

        <div className="detailedActivity__right">
          <h1 className="detailedActivity__name">Pizza Making at Nook</h1>
          <p className="detailedActivity__location">
            1525 Yew St, Vancouver, BC V6K 3E5
          </p>
          <p className="detailedActivity__phone">(604) 734-0099</p>
        </div>
        <div className="detailedActivity__tag">
          <p>In-person & Online</p>
          <img className="detailedActivity__icon" src={wine} alt="drink" />
          <p className="detailedActivity__text">
            Make pizza with your team in-person or from the comfort of your
            home. We truly believe that everybody can prepare excellent pizzas
            at home. Therefore, everyone will have fun kneading, by hand, their
            own pizza dough. This experience includes alcohol. Only guests who
            meet the legal drinking age will be served alcoholic beverages.
          </p>
          <ul className="detailedActivity__policy">Vaccination Policy:</ul>
          <li className="detailedActivity__policy-info">
            we require our attendees to be fully vaccinated.
          </li>
        </div>
      </section>
    </main>
  );
};

export default DetailedActivityPage;
