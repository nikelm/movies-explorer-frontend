import React from 'react';
import NavTab from '../NavTab/NavTab';
import './Navigation.css';

function Navigation(props) {

  const [ menuClass, setMenuClass ] = React.useState('');
  const [ rectangleClass, setRectangleClass ] = React.useState('');

  function handleClickMenu() {
    setMenuClass('navtab__container_opened');
    setRectangleClass('navtab__rectangle_opened')
  }

  function handleCloseMenu() {
    setMenuClass('');
    setRectangleClass('');
  }

  return (
    <>
      <nav className={`header__nav ${props.header__navauth === undefined ? '' : props.header__navauth}`}>
        <div className={`${props.header__menu__movies_status === undefined ? 'header__menu-movies' : props.header__menu__movies_status}`}>
          <button type="button" className="header__movies" onClick={props.handleButtonMovies}>Фильмы</button>
          <button type="button" className="header__saved-movies" onClick={props.handleButtonSavedMovies}>Сохраненные фильмы</button>
        </div>
        <div className={`${(props.header__menu__auth_status) === undefined ? 'header__menu-auth' : props.header__menu__auth_status}`}>
          <button type="button" className="header__register" onClick={props.handleButtonRegister}>Регистрация</button>
          <button type="button" className="header__login" onClick={props.handleButtonLogin}>Войти</button>
        </div>
        <div className={`header__menu-nav ${props.header__menu__icon_status === undefined ? '' : props.header__menu__icon_status}`}>
          <button type="button" className={`header__account ${props.header__account_status === undefined ? '' : props.header__account_status}`} onClick={props.handleButtonProfile}>
            <div className="header__icon"></div>
            <p className="header__text">Аккаунт</p>
          </button>
          <button className={`header__menu-navtab ${props.header__menu__navtab_status === undefined ? '' : props.header__menu__navtab_status}`} onClick={handleClickMenu}></button>
        </div>
      </nav>
      <NavTab
        menuClass={menuClass}
        rectangleClass={rectangleClass}
        handleCloseMenu={handleCloseMenu}
      />
    </>
  );
}

export default Navigation;