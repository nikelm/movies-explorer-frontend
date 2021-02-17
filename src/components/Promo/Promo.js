import React from 'react';
import './Promo.css';
import baner from '../../images/baner.svg'

function Promo(props) {
  return (
    <>
      <section className="promo">
        <p className="promo__text">Учебный проект студента факультета Веб-разработки.</p>
        <img className="promo__image" alt="баннер" src={baner} />
      </section>
    </>
  );
}

export default Promo;