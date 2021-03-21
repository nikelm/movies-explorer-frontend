import React from 'react';
import './MoviesCard.css';
import * as auth from '../../utils/MainApi';

function MoviesCard(props) {

  const [isLiked, setIsLiked] = React.useState(props.movie.liked);
  const [isVisiable, setIsVisiable] = React.useState('movies__container')

  function handleSaveMovie() {
    if (!isLiked) {
      saveCurrentMovie();
      setIsLiked(true);
    } else {
      setIsLiked(false);
    }

  }

  console.log(props.movie)

  function handleDeleteMovie() {
    if (isLiked) {
      auth.getMovies(localStorage.getItem('token'))
      .then((data) => {
        data.filter((item) => {
          if (item.nameEN === props.movie.nameEN) {
            deleteMovie(item._id);
          }
        })
      })
      setIsVisiable('movies__container_disable');
      setIsLiked(false);
    } else {
      setIsLiked(true);
    }
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

      //console.log(data)
    }).catch(err => console.log(err));
  }

  function deleteMovie(id) {
    auth.deleteMyMovies(id)
  }



  return (
    <>
      <div className={`movies__container ${isVisiable}`}>
        <div className="movies__container-title">
          <p className="movies__title">{props.title}</p>
          <p className="movies__duration">{`${props.duration} мин.`}</p>
        </div>
        <a href={props.movie.trailer ? props.movie.trailer: props.movie.trailerLink} target="_blank" rel="noreferrer">
          <img className="movies__poster" alt="Постер к фильму" src={props.linkimage ? props.linkimage : `https://api.nomoreparties.co${props.thumbnail}`} />
        </a>
        <button className={props.alreadyLike || isLiked ? props.save_enable : 'movies__save'} type="button" onClick={isLiked ? handleDeleteMovie  : handleSaveMovie}>
          {isLiked ? '' : props.save_text}
        </button>
      </div>
    </>
  );
}

export default MoviesCard;