import React from 'react';
import './AboutProject.css';

function AboutProject(props) {
  return (
    <>
      <section className="about-project">
        <p className="about-project__title">О проекте</p>
        <div className="about-project__table">
          <div className="about-project__column">
            <p className="about-project__subtitle">Дипломный проект включал 5 этапов</p>
            <p className="about-project__text">Составление плана, работу над бэкендом, вёрстку, добавление функциональности и финальные доработки.</p>
          </div>
          <div className="about-project__column about-project__column_margin-left">
            <p className="about-project__subtitle">На выполнение диплома ушло 5 недель</p>
            <p className="about-project__text">У каждого этапа был мягкий и жёсткий дедлайн, которые нужно было соблюдать, чтобы успешно защититься.</p>
          </div>
        </div>
        <div className="about-project__table">
          <div className="about-project__column-backend">
            <p className="about-project__backend-progress">1 неделя</p>
            <p className="about-project__text-progress">Back-end</p>
          </div>
          <div className="about-project__column-frontend">
            <p className="about-frontend-progress">4 недели</p>
            <p className="about-project__text-progress">Front-end</p>
          </div>
        </div>
      </section>
    </>
  );
}

export default AboutProject;