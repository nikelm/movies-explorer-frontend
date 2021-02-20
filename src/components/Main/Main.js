import React from 'react';
import Profile from '../Profile/Profile';
/*
import Promo from '../Promo/Promo';
import AboutProject from '../AboutProject/AboutProject';
import Techs from '../Techs/Techs';
import AboutMe from '../AboutMe/AboutMe';
import Portfolio from '../Portfolio/Portfolio';
*/
import './Main.css'

function Main(props) {
  return (
    <>
      <Profile
        name="Николай"
        email="user@mail.ru"
      />
    {/*
      <Promo />
      <AboutProject />
      <Techs />
      <AboutMe />
      <Portfolio />
    */}
    </>
  );
}

export default Main;