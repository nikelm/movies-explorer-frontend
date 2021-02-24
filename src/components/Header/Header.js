import React from 'react';
import './Header.css';
import Navigation from '../Navigation/Navigation';
import logo from '../../images/logo.svg';
import { useHistory } from 'react-router-dom';


function Header(props) {
  const history = useHistory();

  function handleButtonRegister() {
    history.push('/signup');
  }

  function handleButtonLogin() {
    history.push('/signin');
  }

  function handleButtonProfile() {
    history.push('/profile');
  }

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
          icon_profile={props.icon_profile}
          btnLogin={props.btnLogin}
          btnRegistration={props.btnRegistration}
          visibale={props.visibale}
          nav={props.nav}
          handleButtonRegister={handleButtonRegister}
          handleButtonLogin={handleButtonLogin}
          handleButtonProfile={handleButtonProfile}
        />
        </div>
      </header>
    </>
  );
}

export default Header;