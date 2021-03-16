import React from 'react';
import './MoviesCard.css';
import * as auth from '../../utils/MainApi';

function MoviesCard(props) {



      console.log(props.movie)



  const [isLiked, setIsLiked] = React.useState(props.movie.liked);

  function handleSaveMovie() {
    if (!isLiked) {
      saveCurrentMovie();
      setIsLiked(true);
    } else {
      setIsLiked(false);
    }

    setIsLiked(!isLiked);
  }



  function handleDeleteMovie() {
    if (!isLiked) {
      deleteMovie(props.movie.movieId);
      setIsLiked(false);
    } else {
      setIsLiked(true);
    }

    setIsLiked(!isLiked);
  }

  function saveCurrentMovie() {
    auth.saveMovie({
      country: props.movie.country.toString(),
      director: props.movie.director,
      duration: props.movie.duration,
      movieId: props.movie.id,
      year: props.movie.year,
      description: props.movie.description,
      image: props.linkimage ? props.linkimage : `https://api.nomoreparties.co${props.movie.image.url}`,
      trailer: props.movie.trailerLink,
      nameRU: props.movie.nameRU,
      nameEN: props.movie.nameEN,
      thumbnail: props.linkimage ? props.image : `https://api.nomoreparties.co${props.movie.image.url}`,
    }).then((data) => {
      console.log(data)
    }).catch(err => console.log(err));
  }

  function deleteMovie(id) {
    auth.deleteMyMovies(id)
  }

/*
  console.log({
    country: props.movie.country,
    director: props.movie.director,
    duration: props.movie.duration,
    movieId: props.movie.id,
    year: props.movie.year,
    description: props.movie.description,
    image: (props.movie.image === null ? '' : props.movie.image.url),
    trailer: props.movie.trailerLink,
    nameRU: props.movie.nameRU,
    nameEN: props.movie.nameEN,
    thumbnail: (props.movie.image === null ? '' : props.movie.image.url),
  })
  */



  return (
    <>
      <div className='movies__container'>
        <div className="movies__container-title">
          <p className="movies__title">{props.title}</p>
          <p className="movies__duration">{`${props.duration} мин.`}</p>
        </div>
        <img className="movies__poster" alt="Постер к фильму" src={props.linkimage ? props.linkimage : `https://api.nomoreparties.co${props.thumbnail}`} />
        <button className={isLiked ? props.save_enable : 'movies__save'} type="button" onClick={!isLiked ? handleSaveMovie : handleDeleteMovie}>
          {isLiked ? '' : props.save_text}
        </button>
      </div>
    </>
  );
}

export default MoviesCard;