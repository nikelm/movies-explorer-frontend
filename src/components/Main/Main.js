import React from 'react';
import { Route, Switch, useHistory } from 'react-router-dom';
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

  const history = useHistory();

  const token = localStorage.getItem('token');

    function getUserData() {
      const token = localStorage.getItem('token');
      if (token) {
        auth.getContent(token).then((res) => {
          if (res) {
            setCurrentUser ({
              'email': res.email,
              'name': res.name
            });
           
          } else {
            localStorage.removeItem('token');
          }
        })
      } else {
        setCurrentUser ({
          'email': 'no email',
          'name': 'no name'
        });
        history.push('/');
      }
    }



  React.useEffect(() => {
    getUserData();
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
            header={token ? 'header' : 'header header_color'}
            header__navauth={token ? '' : 'header__nav-auth'}
            header__menu__auth_status={token ? 'header__menu__auth_disable': undefined}
            header__menu__movies_status={token ? undefined : 'header__menu__movies_disable'}
            header__account_status={token ? undefined : 'header__account_disable'}
            header__menu__navtab_status={token ? 'header__menu__navtab_disable' : undefined}
            header__menu__icon_status={token ? undefined : 'header__menu__icon_disable'}
          />
          <Promo />
          <AboutProject />
          <Techs />
          <AboutMe />
          <Portfolio />
          <Footer />
        </Route>

        <Route path="/signin">
          <Login handleLogin={handleLogin} onChange={getUserData}/>
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
            name={currentUser.name}
            email={currentUser.email}
            onChange={getUserData}
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