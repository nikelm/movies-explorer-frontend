import React from 'react';
import { Route, Redirect } from "react-router-dom";
import Header from '../Header/Header';
import Footer from '../Footer/Footer';

const ProtectedRoute = ({ component: Component, ...props  }) => {

  return (
    <>
      <Header
        header="header"
        header__menu__auth_status="header__menu__auth_disable"
        header__menu__navtab_status="header__menu__navtab_disable"
        handleLogin={props.handleLogin}
      >
      </Header>

      <Route>

      {
        () => props.loggedIn ? <Component {...props} /> : <Redirect to="/signin" />
      }
      </Route>

      <Footer></Footer>
    </>
)}

export default ProtectedRoute;
