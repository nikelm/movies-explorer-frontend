import React from 'react';
import './Header.css';
import Navigation from '../Navigation/Navigation';
import logo from '../../images/logo.svg';


function Header(props) {
  return (
    <>
      <header className={props.header}>
        <a href="/" >
          <img className="header__logo" alt="Логотип" src={logo} />
        </a>
        <div className="header__nav">
          <p className="header__nav-title">{props.title}</p>
          <p className="header__nav-subtitle">{props.subtitle}</p>
        <Navigation
          icon_profile="icon_profile"
          login="Аккаунт"
          registration=""
          header="header__nav-item header__nav-item_login header__nav-profile"
        />
        </div>
      </header>
    </>
  );
}

export default Header;