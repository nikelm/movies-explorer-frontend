import React from 'react';
import './NotFound.css';

function NotFound(props) {
  return (
    <>
      <section className="notfound">
        <div className="notfound__error">
          <p className="notfound__error-value">404</p>
          <p className="notfound__error-text">Страница не найдена</p>
        </div>
        <button className="notfound__button" type="button">Назад</button>
      </section>
    </>
  );
}

export default NotFound;