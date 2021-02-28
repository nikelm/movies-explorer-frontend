import React from 'react';
import './Portfolio.css';

function Portfolio(props) {
  return (
    <>
      <section className="portfolio">
        <p className="portfolio__title">Портфолио</p>
        <div className="portfolio__container-portfolio">
          <p className="portfolio__container-text">Статичный сайт</p>
          <a href="http://localhost:3000" target="_blank" rel="noreferrer">
            <div className="portfolio__container-link"></div>
          </a>
        </div>
        <div className="portfolio__container-portfolio">
          <p className="portfolio__container-text">Адаптивный сайт</p>
          <a href="https://nikelm.github.io/russian-travel/" target="_blank" rel="noreferrer">
            <div className="portfolio__container-link"></div>
          </a>
        </div>
        <div className="portfolio__container-portfolio">
          <p className="portfolio__container-text portfolio_border-disable">Одностраничное приложение</p>
          <a href="https://nikelm.github.io/mesto/" target="_blank" rel="noreferrer">
            <div className="portfolio__container-link portfolio_border-disable"></div>
          </a>
        </div>
      </section>
    </>
  );
}

export default Portfolio;