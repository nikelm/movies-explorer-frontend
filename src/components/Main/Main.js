import React from 'react';
import { Route, Switch } from 'react-router-dom';
import ProtectedRoute from '../ProtectedRoute/ProtectedRoute';
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
import * as auth from '../../utils/MainApi';
import CurrentUserContext from '../../contexts/CurrentUserContext';


import './Main.css';


function Main(props) {

  const [currentUser, setCurrentUser] = React.useState({});

  React.useEffect(() => {
    function checkToken() {

      const token = localStorage.getItem('token');

      if (token) {
        auth.getContent(token).then((res) => {

          if (res) {
            setCurrentUser ({
              'email': res.email,
              'name': res.name
            })
          } else {
            setCurrentUser ({
              'email': '',
              'id': ''
            })
            localStorage.removeItem('token');

          }
        })
      }
    }

    checkToken();
    // eslint-disable-next-line
  }, [])



  const [loggedIn, setLoggedIn] = React.useState(false);

  function handleLogin() {
    setLoggedIn(true);
  }

  return (
    <>
     <CurrentUserContext.Provider value={currentUser}>
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

        <Route path="/signin">
          <Login handleLogin={handleLogin}/>
        </Route>

        <ProtectedRoute path="/movies" loggedIn={loggedIn} component={Movies} handleLogin={handleLogin}/>

        <ProtectedRoute path="/saved-movies" loggedIn={loggedIn} component={SavedMovies}/>


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

        <Route exact path="/signup">
          <Register />
        </Route>
        <Route exact path="/*">
          <NotFound />
        </Route>
      </Switch>
      </CurrentUserContext.Provider>
    </>
  );
}

export default Main;