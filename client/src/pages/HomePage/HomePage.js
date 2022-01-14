import React from "react";
import ReactDOM from 'react-dom';
import "react-responsive-carousel/lib/styles/carousel.min.css"; // requires a loader
import { Carousel } from 'react-responsive-carousel';
import './HomePage.scss';
import CardGroup from "../../components/CardGroup/CardGroup";
import scroll from '../../assets/images/scroll-bar.png';
import bcTecLogo from '../../assets/images/companiesLogo/bc-tech.png';
import brainstationLogo from '../../assets/images/companiesLogo/brain-station.png';
import bcLogo from '../../assets/images/companiesLogo/british colombia.png';

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
      {/* <Carousel> */}
      <div className="trending__content">
        <CardGroup/>
      </div>
        
      {/* </Carousel> */}
      <div className="trending__scroll" >
        <img className="trending__image" src={scroll} alt="scroll-bar" />
      </div>

      <h3 className="trending__partner">In partnership with</h3>

      <div className="trending__logos" >
        <img className="trending__logo" src={bcTecLogo} alt="logo" />
        <img className="trending__bs" src={brainstationLogo} alt="logo" />
        <img className="trending__bc" src={bcLogo} alt="logo" />

      </div>
    </article>

    </div>
  );
};

export default HomePage;
