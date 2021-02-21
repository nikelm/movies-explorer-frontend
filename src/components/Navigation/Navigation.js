import React from 'react';
import './Navigation.css';

function Navigation(props) {
  return (
    <>
      <nav className="header__nav">
          <div className="header__nav-list">
            <button className="header__nav-item header__nav-item_registration">{props.registration}</button>
              <button className={props.header}>
                <div className={props.icon_profile}></div>
                <p className="header__nav-profile-text">{props.login}</p>
              </button>
          </div>
        </nav>
    </>
  );
}

export default Navigation;