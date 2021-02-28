import React from 'react';
import { Route, Switch } from 'react-router-dom';
import Header from '../Header/Header';
import Promo from '../Promo/Promo';
import AboutProject from '../AboutProject/AboutProject';
import Techs from '../Techs/Techs';
import AboutMe from '../AboutMe/AboutMe';
import Portfolio from '../Portfolio/Portfolio';
import Movies from '../Movies/Movies';
import Profile from '../Profile/Profile';
import SavedMovies from '../SavedMovies/SavedMovies';
import Login from '../Login/Login';
import Register from '../Register/Register';
import NotFound from '../NotFound/NotFound';
import Footer from '../Footer/Footer';

import './Main.css';


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
            header__menu__navtab_status="header__menu__navtab_disable"
            header__menu__icon_status="header__menu__icon_disable"
          />
          <Promo />
          <AboutProject />
          <Techs />
          <AboutMe />
          <Portfolio />
          <Footer />
        </Route>
        <Route exact path="/movies">
          <Header
            header="header"
            header__menu__auth_status="header__menu__auth_disable"
            header__menu__navtab_status="header__menu__navtab_disable"
          />
          <Movies />
          <Footer />
        </Route>
        <Route exact path="/saved-movies">
        <Header
            header="header"
            header__menu__auth_status="header__menu__auth_disable"
            header__menu__navtab_status="header__menu__navtab_disable"
          />
          <SavedMovies />
          <Footer />
        </Route>
        <Route exact path="/profile">
          <Header
            header="header"
            header__menu__auth_status="header__menu__auth_disable"
            header__menu__navtab_status="header__menu__navtab_disable"
          />
          <Profile
            name="Николай"
            email="user@mail.ru"
          />
          <Footer />
        </Route>
        <Route exact path="/signin">
          <Login />
        </Route>
        <Route exact path="/signup">
          <Register />
        </Route>
        <Route exact path="/*">
          <NotFound />
        </Route>
      </Switch>
    </>
  );
}

export default Main;