import React from 'react';
import './MoviesCard.css';

function MoviesCard(props) {

  return (
    <>
      <div className={props.button === "movies__save movies__save_disable" ? 'props.movies' : 'movies__disable'}>
        <div className="movies__container-title">
          <p className="movies__title">В погоне за Бенкси</p>
          <p className="movies__duration">27 минут</p>
        </div>
        <img className="movies__poster" alt="Постер к фильму" src={props.movie} />
        <button className={props.button} type="button">
          {props.button === "movies__save movies__save_disable" ? '' :'Сохранить'}
        </button>
      </div>
    </>
  );
}

export default MoviesCard;