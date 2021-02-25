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
        <div className="header__nav">
          <button className="header__nav-movies" onClick={handleButtonMovies}>{props.movies}</button>
          <button className="header__nav-savedMovies" onClick={handleButtonSavedMovies}>{props.savedMovies}</button>
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