import React from 'react';
import './Navigation.css';

function Navigation(props) {

  return (
    <>
      <nav className="header__nav">
          <div className="header__nav-list">
            <button className={props.visibale} onClick={props.handleButtonRegister}>{props.btnRegistration}</button>
              <button className={props.nav} onClick={props.btnLogin === "Аккаунт" ? props.handleButtonProfile : props.handleButtonLogin}>
                <div className={props.icon_profile}></div>
                <p className="header__nav-profile-text">{props.btnLogin}</p>
              </button>
          </div>
        </nav>
    </>
  );
}

export default Navigation;