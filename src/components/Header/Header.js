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
      <header className="header">
        <a href="/" >
          <img className="header__logo" alt="Логотип" src={logo} />
        </a>
        <div className="header__container">
          <Navigation
            valueBtn1="Фильмы"
            valueBtn2="Сохраненные фильмы"
            nameClassBtn3="header__disable"
          />
        </div>
        <div className="header__container">
          <Navigation
            valueBtn1="Регистрация"
            nameClassBtn1="header__disable"
            valueBtn="Аккаунт"
            nameClassBtn2="header__disable"
            nameClassBtn3="header__account"
          />
        </div>

      </header>
    </>
  );
}

export default Header;