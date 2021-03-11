import React from 'react';
import './MoviesCard.css';


function MoviesCard(props) {

  const [isLiked, setIsLiked] = React.useState(props.save);

  function handleSaveMovie() {
    if (!isLiked) {
      setIsLiked(true);
    } else {
      setIsLiked(false);
    }

    setIsLiked(!isLiked);
  }



  function handleDeleteMovie() {
    if (!isLiked) {
      setIsLiked(false);
    } else {
      setIsLiked(true);
    }

    setIsLiked(!isLiked);
  }

  return (
    <>
      <div className='movies__container'>
        <div className="movies__container-title">
          <p className="movies__title">{props.title}</p>
          <p className="movies__duration">{`${props.duration} мин.`}</p>
        </div>
        <img className="movies__poster" alt="Постер к фильму" src={ `https://api.nomoreparties.co${props.thumbnail}`} />
        <button className={isLiked ? props.save_enable : 'movies__save'} type="button" onClick={!isLiked ? handleSaveMovie : handleDeleteMovie}>
          {isLiked ? '' : props.save_text}
        </button>
      </div>
    </>
  );
}

export default MoviesCard;