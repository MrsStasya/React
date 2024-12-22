import React from "react";
// import { Link } from "react-router-dom";
// теги <a> заменить на Link, чтобы избежать полной перезагрузки страницы
import logo from "../img/logo.png";
import searchIcon from "../img/search.svg";
import regIcon from "../img/reg.svg";
import cartIcon from "../img/cart.svg";
import menuIcon from "../img/menu.svg";
import "../pages/styles.css";

function Header() {
  return (
    <header className="header center">
      <div className="header__left">
        <a href="/">
          <img src={logo} alt="logo" />
        </a>
        <a href="#">
          <img src={searchIcon} alt="search" />
        </a>
      </div>
      <nav className="header__right">
        <label htmlFor="header__check">
          <img className="menu_img" src={menuIcon} alt="menu" />
        </label>
        <a
          className="header__link-site header__link-site_icons"
          href="/registration"
        >
          <img src={regIcon} alt="reg" />
        </a>
        <a className="header__link-site header__link-site_icons" href="/cart">
          <img src={cartIcon} alt="cart" />
        </a>
      </nav>
      <input className="header__checkbox" id="header__check" type="checkbox" />
      {/* Мобильное меню далее */}
    </header>
  );
}

export default Header;
