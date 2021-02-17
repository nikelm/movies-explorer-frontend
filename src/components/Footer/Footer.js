import React from 'react';
import './Footer.css';


function Footer(props) {
  return (
    <>
      <section className="footer">
        <p className="footer__text">Учебный проект Яндекс.Практикум х BeatFilm.</p>
        <div className="footer__nav">
          <p className="footer__author">&copy; 2021.</p>
          <ul className="footer__links">
            <li className="footer__link-item">
              <a href="https://praktikum.yandex.ru/" lang="ru" className="footer__link">Яндекс.Практикум</a>
            </li>
            <li className="footer__link-item">
              <a href="https://github.com/" lang="ru" className="footer__link">Github</a>
            </li>
            <li className="footer__link-item">
              <a href="https://ru-ru.facebook.com/" lang="ru" className="footer__link">Facebook</a>
            </li>
          </ul>
        </div>
      </section>
    </>
  );
}

export default Footer;