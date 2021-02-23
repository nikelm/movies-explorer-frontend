import React from 'react';
import './MoviesCardList.css';
import MoviesCard from '../MoviesCard/MoviesCard';
import movie1 from '../../images/movies/pic__1.png';
import movie2 from '../../images/movies/pic__2.png';
import movie3 from '../../images/movies/pic__3.png';
import movie4 from '../../images/movies/pic__4.png';
import movie5 from '../../images/movies/pic__5.png';
import movie6 from '../../images/movies/pic__6.png';
import movie7 from '../../images/movies/pic__7.png';
import movie8 from '../../images/movies/pic__8.png';
import movie9 from '../../images/movies/pic__9.png';
import movie10 from '../../images/movies/pic__10.png';
import movie11 from '../../images/movies/pic__11.png';
import movie12 from '../../images/movies/pic__12.png';

function MoviesCardList(props) {
  return (
    <>
      <section className="movies">
        <div className="movies__grid">
          <MoviesCard
            movies='movies__container'
            movie = {movie1}
            button = 'movies__save'
          />
          <MoviesCard
            movies='movies__container'
            movie = {movie2}
            button = 'movies__save movies__save_disable'
          />
          <MoviesCard
            movies='movies__container'
            movie = {movie3}
            button = 'movies__save'
          />
          <MoviesCard
            movies='movies__container'
            movie = {movie4}
            button = 'movies__save movies__save_disable'
          />
          <MoviesCard
            movies='movies__container movies__hidden_320'
            movie = {movie5}
            button = 'movies__save'
          />
          <MoviesCard
            movies='movies__container movies__hidden_320'
            movie = {movie6}
            button = 'movies__save movies__save_disable'
          />
          <MoviesCard
            movies='movies__container movies__hidden_320'
            movie = {movie7}
            button = 'movies__save movies__save_disable'
          />
          <MoviesCard
            movies='movies__container movies__hidden_320'
            movie = {movie8}
            button = 'movies__save'
          />
          <MoviesCard
            movies='movies__container movies__hidden_768'
            movie = {movie9}
            button = 'movies__save'
          />
          <MoviesCard
            movies='movies__container movies__hidden_768'
            movie = {movie10}
            button = 'movies__save'
          />
          <MoviesCard
            movies='movies__container movies__hidden_768'
            movie = {movie11}
            button = 'movies__save'
          />
          <MoviesCard
            movies='movies__container movies__hidden_768'
            movie = {movie12}
            button = 'movies__save'
          />
        </div>
        <button className="movies__more">Ещё</button>
      </section>
    </>
  );
}

export default MoviesCardList;