import React from 'react';
import './MoviesCard.css';

function MoviesCard(props) {

  return (
    <>
      <div className={props.movies}>
        <div className="movies__container-title">
          <p className="movies__title">В погоне за Бенкси</p>
          <p className="movies__duration">27 минут</p>
        </div>
        <img className="movies__poster" alt="Постер к фильму" src={props.movie} />
        <button className={`movies__save ${props.button}`} type="button" onClick={props.handleSaveMovie}>
          {props.button === ("movies__save_enable" || "movies__save_disable") ? '' :'Сохранить'}
        </button>
      </div>
    </>
  );
}

export default MoviesCard;