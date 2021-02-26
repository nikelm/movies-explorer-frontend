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

  function handleButtonMovies() {
    history.push('/movies');
  }

  function handleButtonSavedMovies() {
    history.push('/saved-movies');
  }

  return (
    <>
      <header className={props.header}>
        <a href="/" >
          <img className="header__logo" alt="Логотип" src={logo} />
        </a>
        <div className="header__container">
          <Navigation
            header__navauth={props.header__navauth}
            header__menu__movies_status={props.header__menu__movies_status}
            header__menu__auth_status={props.header__menu__auth_status}
            header__account_status={props.header__account_status}
            header__icon__menu_status={props.header__icon__menu_status}
          />
        </div>


      </header>
    </>
  );
}

export default Header;