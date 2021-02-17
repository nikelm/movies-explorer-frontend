import React from 'react';
import './Header.css';
import Navigation from '../Navigation/Navigation';
import logo from '../../images/logo.svg';


function Header(props) {
  return (
    <>
      <header className={props.header}>
        <img className="header__logo" alt="Логотип" src={logo} />
        <div className="header__nav">
          <p className="header__nav-title">{props.title}</p>
          <p className="header__nav-subtitle">{props.subtitle}</p>
        <Navigation
          login="Войти"
          registration="Регистрация"
          header="header"
        />
        </div>
      </header>
    </>
  );
}

export default Header;