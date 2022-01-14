import React from "react";
import { Link } from "react-router-dom";
import profile from "../../assets/icons/user-circle-solid.svg";
import "./Header.scss";

const Header = () => {
  return (
    <div className="header">
      <div className="header__image-wrapper">
        <Link to="/">
          <p>Alohamora</p>
        </Link>
      </div>

      <div className="header__left-menu">
        <Link to="/explore">
          <p className="header__about">Explore</p>
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
