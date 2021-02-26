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
          <button type="button" className="header__movies">Фильмы</button>
          <button type="button" className="header__saved-movies">Сохраненные фильмы</button>
        </div>
        <div className={`${(props.header__menu__auth_status) === undefined ? 'header__menu-auth' : props.header__menu__auth_status}`}>
          <button type="button" className="header__register">Регистрация</button>
          <button type="button" className="header__login">Войти</button>
        </div>
        <div className="header__menu-nav">
          <button type="button" className={`header__account ${props.header__account_status === undefined ? '' : props.header__account_status}`}>
            <div className="header__icon"></div>
            <p className="header__text">Аккаунт</p>
          </button>
          <div className={`header__menu-navtab ${props.header__icon__menu_status === undefined ? '' : props.header__icon__menu_status}`}></div>
        </div>
      </nav>
      <NavTab />
    </>
  );
}

export default Navigation;