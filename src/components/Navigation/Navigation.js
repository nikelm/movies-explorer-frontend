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
          <div className="header__nav-list">
            <button className={props.visibale} onClick={props.handleButtonRegister}>{props.btnRegistration}</button>
              <button className={props.nav} onClick={handleClickMenu}>
                <div className={props.icon_profile}></div>
                <p className="header__nav-profile-text">{props.btnLogin}</p>
              </button>
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