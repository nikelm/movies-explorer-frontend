import React, { useEffect } from 'react';
import './Movies.css';
import SearchForm from '../SearchForm/SearchForm';
import MoviesCardList from '../MoviesCardList/MoviesCardList';
import Preloader from '../Preloader/Preloader';
import apiMovies from '../../utils/MoviesApi';

function Movies(props) {

  const [initialMovies, setInitialMovies] = React.useState([]);
  const [isPreloader, setIsPreloader] = React.useState(false);

  function handleSearchMovies() {
    setIsPreloader(true);
    useEffect(() => {
      apiMovies.getMovies()
        .then((movies) => {
          console.log(movies);
          setInitialMovies(movies);
        })
      .catch((err) => {
        console.log(err);
      }).finally(() => {
        setIsPreloader(false);
      })
      console.log(initialMovies);
    }, [])
  }


  return (
    <>
      <SearchForm
        onSearchMovies={handleSearchMovies}
      />
      <MoviesCardList />
      <Preloader isPreloader={isPreloader} />
    </>
  );
}

export default Movies;