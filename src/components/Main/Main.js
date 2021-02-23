import React from 'react';
import { Route, Switch } from 'react-router-dom';

import Promo from '../Promo/Promo';
import AboutProject from '../AboutProject/AboutProject';
import Techs from '../Techs/Techs';
import AboutMe from '../AboutMe/AboutMe';
import Portfolio from '../Portfolio/Portfolio';
import Movies from '../Movies/Movies';
import SavedMovies from '../SavedMovies/SavedMovies';
import Profile from '../Profile/Profile';
import Login from '../Login/Login';
import Register from '../Register/Register';
/*
import Preloader from '../Preloader/Preloader';
import NotFound from '../NotFound/NotFound';
*/
import './Main.css'

function Main(props) {
  return (
    <>
      {/*
        <Preloader />
        <Login />
        <NotFound />
        <Register />
      */}
      <Switch>
        <Route exact path="/">
          <Promo />
          <AboutProject />
          <Techs />
          <AboutMe />
          <Portfolio />
        </Route>
        <Route exact path="/movies">
          <Movies />
        </Route>
        <Route exact path="/saved-movies">
          <SavedMovies />
        </Route>
        <Route exact path="/profile">
          <Profile
            name="Николай"
            email="user@mail.ru"
          />
        </Route>
        <Route exact path="/signin">
          <Login />
        </Route>
        <Route exact path="/signup">
          <Register />
        </Route>
      </Switch>
    </>
  );
}

export default Main;