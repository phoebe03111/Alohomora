import React from "react";
import { Link } from "react-router-dom";
import profile from "../../assets/images/mdi_account.png";
import "./Header.scss";

const Header = () => {
  return (
    <div className="header">
      <div className="header__image-wrapper">
        <Link to="/">
          <p className="header__logo">Alohamora</p>
        </Link>
      </div>

      <div className="header__left-menu">
        <Link to="/explore">
          <p className="header__explore">Explore</p>
        </Link>
        <Link to="/about">
          <p className="header__about">About</p>
        </Link>
        <Link to="/contact">
          <p className="header__contact">Contact</p>
        </Link>
        <img className="header__profile" src={profile} />
      </div>
    </div>
  );
};

export default Header;
