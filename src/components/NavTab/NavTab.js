import React from 'react';
import { useHistory } from 'react-router-dom';
import './NavTab.css';

function NavTab(props) {

  const history = useHistory();

  function handleButtonProfile() {
    history.push('/profile');
    props.handleCloseMenu();
  }

  return (
    <>
      <section className="navtab">
        <div className={`navtab__rectangle ${props.rectangleClass} `}>
          <div className={`navtab__container ${props.menuClass}`}>
            <div className="navtab__button-container">
              <button className="navtab__close"  onClick={props.handleCloseMenu}/>
            </div>
            <ul className="navtab__list">
              <li className="nav__list-item">
                <a href="/" className="nav__link">Главная</a>
              </li>
              <li className="nav__list-item nav__list-item_border">
                <a href="/movies" className="nav__link">Фильмы</a>
              </li>
              <li className="nav__list-item">
                <a href="/save-movies" className="nav__link">Сохраненные фильмы</a>
              </li>
            </ul>
            <button className="navtab__profile" onClick={handleButtonProfile}>
              <div className="navtab__icon"></div>
              <p className="navtab__text">Аккаунт</p>
            </button>
          </div>
        </div>
      </section>
    </>
  );
}

export default NavTab;