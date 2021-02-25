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
      <nav className="header__nav">
        <div className="header__menu-movies">
          <button type="button" className={props.nameClassBtn1}>{props.valueBtn1}</button>
          <button type="button" className={props.nameClassBtn2}>{props.valueBtn2}</button>
          <button type="button" className={props.nameClassBtn3}>
              <div className="header__icon"></div>
              <p className="header__text">Аккаунт</p>
          </button>
        </div>

      </nav>

    </>
  );
}

export default Navigation;