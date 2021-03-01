import React, { useEffect } from 'react';
import './Movies.css';
import SearchForm from '../SearchForm/SearchForm';
import MoviesCardList from '../MoviesCardList/MoviesCardList';
import Preloader from '../Preloader/Preloader';
import apiMovies from '../../utils/MoviesApi';

function Movies(props) {

  const [initialMovies, setInitialMovies] = React.useState([]);
  const [isPreloader, setIsPreloader] = React.useState(false);

  useEffect(() => {
    handleSearchMovies()
  }, [])

  function handleSearchMovies(movie) {
    setIsPreloader(true);
    apiMovies.getMovies()
      .then((movies) => {
        movies.forEach(item => {
          if (item.nameRU === movie || item.nameEN === movie) {
            setInitialMovies(...item);
          }
        });
      })
      .catch((err) => {
      }).finally(() => {
        setIsPreloader(false);
      })

  }


  return (
    <>
      <SearchForm
        onSearchMovies={handleSearchMovies}
        initialMovies={initialMovies}
      />
      <MoviesCardList />
      <Preloader isPreloader={isPreloader} />
    </>
  );
}

export default Movies;