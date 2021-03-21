import React from 'react';
import { useHistory } from 'react-router-dom';
import './NavTab.css';

function NavTab(props) {

  const history = useHistory();

  function handleButtonProfile() {
    history.push('/profile');
    props.handleCloseMenu();
  }

  function handleButtonSavedMovies() {
    history.push('/saved-movies');
    props.handleCloseMenu();
  }

  function handleButtonMovies() {
    history.push('/movies');
    props.handleCloseMenu();
  }

  function handleButtonRoot() {
    history.push('/');
    props.handleCloseMenu();
  }

  return (
    <>
      <section className="navtab">
        <div className={`navtab__rectangle ${props.rectangleClass} `}>
          <div className={`navtab__container ${props.menuClass}`}>
            <div className="navtab__button-container">
              <button type="button" className="navtab__close"  onClick={props.handleCloseMenu}/>
            </div>
            <ul className="navtab__list">
              <li className="nav__list-item">
                <button type="button" className="nav__link" onClick={handleButtonRoot}>Главная</button>
              </li>
              <li className="nav__list-item nav__list-item_border">
                <button type="button" className="nav__link" onClick={handleButtonMovies}>Фильмы</button>
              </li>
              <li className="nav__list-item">
                <button type="button" className="nav__link" onClick={handleButtonSavedMovies}>Сохраненные фильмы</button>
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