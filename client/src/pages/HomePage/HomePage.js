import React from "react";
import './HomePage.scss';
import CardGroup from "../../components/CardGroup/CardGroup";
import scroll from '../../assets/images/scroll-bar.png'

const HomePage = () => {
  return (
    <div className="hero">
      <div className="hero__wrapper">
        <div className="hero__content">
          <p className="hero__text">Find hybrid team building activities that support local BC businesses</p>
          <button className="hero__btn">Explore Activities</button>
        </div>
      </div>

    <article className="trending">
      <h3 className="trending__title">Trending Activities</h3>
      <div className="trending__content">
        <CardGroup/>
      </div>
      <div className="trending__scroll" >
        <img className="trending__image" src={scroll} alt="scroll-bar" />
      </div>

      <div className="trending__logos" >
        <img className="trending__logo" src="#" alt="logo" />
        <img className="trending__logo" src="#" alt="logo" />
        <img className="trending__logo" src="#" alt="logo" />

      </div>
    </article>

    </div>
  );
};

export default HomePage;
