import React from 'react';
import './Navigation.css';

function Navigation(props) {
  return (
    <>
      <nav className="header__nav">
          <div className="header__nav-list">
            <button className="header__nav-item header__nav-item_registration">{props.registration}</button>
            <button className="header__nav-item header__nav-item_login">{props.login}</button>
          </div>
        </nav>
    </>
  );
}

export default Navigation;