import React from 'react';
import './AboutMe.css';
import profile from '../../images/profile.jpg'

function AboutMe(props) {
  return (
    <>
      <section className="aboutme">
        <p className="aboutme__title">Студент</p>
        <div className="aboutme__container">
          <div className="aboutme__profile">
            <p className="aboutme__name">Николай</p>
            <p className="aboutme__profession">Фронтенд-разработчик, 34 года</p>
            <p className="aboutme__myself">Я родился и живу в Москве, закончил факультет экономики и информатики МИСиС. У меня есть жена и дочь. Я люблю слушать музыку, а ещё увлекаюсь электромонтажом. Недавно начал кодить. После того, как прошёл курс по веб-разработке, начал заниматься фриланс-заказами, ищу постоянную работу.
            </p>
            <div className="aboutme__social-list">
              <a href="https://ru-ru.facebook.com/" target="_blank" rel="noreferrer" className="aboutme__social-item">Facebook</a>
              <a href="https://github.com/nikelm" target="_blank" rel="noreferrer" className="aboutme__social-item">Github</a>
            </div>
          </div>
          <div className="aboutme__photo-container">
            <img className="aboutme__photo" alt="Мой профиль" src={profile} />
          </div>
        </div>
        <p className="aboutme__subtitle">Портфолио</p>
        <div className="aboutme__container-portfolio">
          <p className="aboutme__container-text">Статичный сайт</p>
          <a href="http://localhost:3000" target="_blank" rel="noreferrer">
            <div className="aboutme__container-link"></div>
          </a>
        </div>
        <div className="aboutme__container-portfolio">
          <p className="aboutme__container-text">Адаптивный сайт</p>
          <a href="http://localhost:3000" target="_blank" rel="noreferrer">
            <div className="aboutme__container-link"></div>
          </a>
        </div>
        <div className="aboutme__container-portfolio">
          <p className="aboutme__container-text aboutme_border-disable">Одностраничное приложение</p>
          <a href="http://localhost:3000" target="_blank" rel="noreferrer">
            <div className="aboutme__container-link aboutme_border-disable"></div>
          </a>
        </div>
      </section>
    </>
  );
}

export default AboutMe;
