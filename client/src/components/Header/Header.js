import React from "react";
import { NavLink, Link } from "react-router-dom";
import profile from "../../assets/images/mdi_account.png";
import "./Header.scss";

const Header = () => {
  return (
    <div className="header">
      <div className="header__image-wrapper">
        <Link to="/">
          <p className="header__logo">Alohomora</p>
        </Link>
      </div>

      <div className="header__left-menu">
        <NavLink
          to="/explore"
          className="header__link"
          activeClassName="active"
        >
          <p className="header__explore">Explore</p>
        </NavLink>
        <NavLink to="/about" className="header__link" activeClassName="active">
          <p className="header__about">About</p>
        </NavLink>
        <NavLink
          to="/contact"
          className="header__link"
          activeClassName="active"
        >
          <p className="header__contact">Contact</p>
        </NavLink>
        <img className="header__profile" src={profile} />
      </div>
    </div>
  );
};

export default Header;
