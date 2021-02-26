import React from 'react';
import { Route, Switch } from 'react-router-dom';
import NavTab from '../NavTab/NavTab';
import Header from '../Header/Header';
import Promo from '../Promo/Promo';
import AboutProject from '../AboutProject/AboutProject';
import Techs from '../Techs/Techs';
import AboutMe from '../AboutMe/AboutMe';
import Portfolio from '../Portfolio/Portfolio';
import Movies from '../Movies/Movies';
/*


import SavedMovies from '../SavedMovies/SavedMovies';
import Profile from '../Profile/Profile';
import Login from '../Login/Login';
import Register from '../Register/Register';
import NotFound from '../NotFound/NotFound';

import Preloader from '../Preloader/Preloader';
import NotFound from '../NotFound/NotFound';
*/
import './Main.css'

function Main(props) {
  return (
    <>
      <Switch>
        <Route exact path="/">
          <Header
            header="header header_color"
            header__navauth="header__nav-auth"
            header__menu__movies_status="header__menu__movies_disable"
            header__account_status="header__account_disable"
            header__icon__menu_status="header__icon__menu_disable"
          />
          <Promo />
          <AboutProject />
          <Techs />
          <AboutMe />
          <Portfolio />
        </Route>
        <Route exact path="/movies">
          <Header
            header="header"
            
            header__menu__auth_status="header__menu__auth_disable"
            header__icon__menu_status="header__icon__menu_disable"
          />
          <Movies />
        </Route>
      </Switch>
      {/*
        <Preloader />
        <NotFound />


      <NavTab />

      <Switch>
        <Route exact path="/">
          <Header
            title=""
            subtitle=""
            header="header"
            icon_profile="header__disable"
            btnLogin="Войти"
            btnRegistration="Регистрация"
            nav="header__nav-item header__nav-item_login"
            visibale="header__nav-item header__nav-item_registration"
          />
          <Promo />
          <AboutProject />
          <Techs />
          <AboutMe />
          <Portfolio />
        </Route>
        <Route exact path="/saved-movies">
          <SavedMovies />
        </Route>
        <Route exact path="/movies">
          <Header
            movies="Фильмы"
            savedMovies="Сохраненные фильмы"
            header="header header_color"
            nav="header__nav-item header__nav-item-login header__nav-profile"
            icon_profile="icon_profile"
            visibale="header__disable"
            btnLogin="Аккаунт"
          />
          <Movies />
        </Route>
        <Route exact path="/profile">
          <Header
            title=""
            subtitle=""
            header="header header_color"
            nav="header__nav-item header__nav-item-login header__nav-profile"
            icon_profile="icon_profile"
            visibale="header__disable"
            btnLogin="Аккаунт"
          />
          <Profile
            name="Николай"
            email="user@mail.ru"
          />
        </Route>
        <Route exact path="/signin">
          <Header
            title=""
            subtitle=""
            header="header header_color"
            nav="header__nav-item header__nav-item-login header__nav-profile"
            icon_profile="icon_profile"
            visibale="header__disable"
            btnLogin="Аккаунт"
          />
          <Login />
        </Route>
        <Route exact path="/signup">
          <Header
            title=""
            subtitle=""
            header="header header_color"
            nav="header__nav-item header__nav-item-login header__nav-profile"
            icon_profile="icon_profile"
            visibale="header__disable"
            btnLogin="Аккаунт"
          />
          <Register />
        </Route>
        <Route exact path="/*">
          <Header
            title=""
            subtitle=""
            header="header"
            icon_profile="header__disable"
            btnLogin="Войти"
            btnRegistration="Регистрация"
            nav="header__nav-item header__nav-item_login"
            visibale="header__nav-item header__nav-item_registration"
          />
          <NotFound />
        </Route>
      </Switch>
        */}
    </>
  );
}

export default Main;