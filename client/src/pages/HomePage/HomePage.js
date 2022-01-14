import React from "react";
import ReactDOM from 'react-dom';
import './HomePage.scss';
import bcTecLogo from '../../assets/images/companiesLogo/bc-tech.png';
import brainstationLogo from '../../assets/images/companiesLogo/brain-station.png';
import bcLogo from '../../assets/images/companiesLogo/british colombia.png';
import { Link } from "react-router-dom";
import "./HomePage.scss";
import CardGroup from "../../components/CardGroup/CardGroup";
import scroll from "../../assets/images/scroll-bar.png";

const HomePage = () => {
  return (
    <div className="hero">
      <div className="hero__wrapper">
        <div className="hero__content">
          <p className="hero__text">
            Find hybrid team building activities that support local BC
            businesses
          </p>
          <Link to={"/explore"}>
            <button className="hero__btn">Explore Activities</button>
          </Link>
        </div>
      </div>

      <article className="trending">
        <h3 className="trending__title">Trending Activities</h3>
        <div className="trending__content">
          <CardGroup />
        </div>
        <div className="trending__scroll">
          <img className="trending__image" src={scroll} alt="scroll-bar" />
        </div>

        <div className="trending__logos">
          <img className="trending__logo" src={bcTecLogo} alt="logo" />
          <img className="trending__logo" src={brainstationLogo} alt="logo" />
          <img className="trending__logo" src={bcLogo} alt="logo" />
        </div>
      </article>
    </div>
  );
};

export default HomePage;
