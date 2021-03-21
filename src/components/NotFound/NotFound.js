import React from 'react';
import './NotFound.css';
import { useHistory } from 'react-router-dom';

function NotFound(props) {
  const history = useHistory();
/*
  function handleButtonGoBack() {
    history.push('/');
  }
*/
  return (
    <>
      <section className="notfound">
        <div className="notfound__error">
          <p className="notfound__error-value">404</p>
          <p className="notfound__error-text">Страница не найдена</p>
        </div>
        <button type="button" className="notfound__button" onClick={history.goBack}>Назад</button>
      </section>
    </>
  );
}

export default NotFound;