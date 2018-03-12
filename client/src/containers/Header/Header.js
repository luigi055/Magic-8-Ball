import React from "react";
import { NavLink } from "react-router-dom";
import "./Header.css";

const Header = () => (
  <header className="header">
    <div className="header__wrapper">
      <h1 className="header__title">Magic 8 Ball</h1>
      <nav>
        <NavLink
          to="/"
          exact
          className="header__link"
          activeClassName="header__active"
        >
          Home
        </NavLink>
        <NavLink
          to="/about"
          exact
          className="header__link"
          activeClassName="header__active"
        >
          About
        </NavLink>
      </nav>
    </div>
  </header>
);

export default Header;
