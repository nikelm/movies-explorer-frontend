import React from 'react';
import './Movies.css';
import SearchForm from '../SearchForm/SearchForm';
import MoviesCardList from '../MoviesCardList/MoviesCardList';
import Preloader from '../Preloader/Preloader';
import apiMovies from '../../utils/MoviesApi';
import * as auth from '../../utils/MainApi';

function Movies(props) {


  const [isPreloader, setIsPreloader] = React.useState(false);
  const [isFounded, setIsFounded] = React.useState(false);

  function closePreloader() {
    setIsFounded(false);
  }

  const [ isEnable, setIsEnable ] = React.useState(true);

  function changeFilter() {
    setIsEnable(!isEnable);
  }


  const [savedMovies, setSavedMovies] = React.useState([]);

  React.useEffect(() => {
    function handleGetMovies() {
      const token = localStorage.getItem('token');
      if (token) {
        auth.getMovies(token).then((res) => {
          setSavedMovies(res);
        }).catch((err) => {
          console.log(err);
        })
      }
    }

    handleGetMovies();
    }, [])



  const [initialMovies, setInitialMovies] = React.useState([]);

  React.useEffect(() => {

    apiMovies.getMovies()
    .then((movies) => {
        movies.forEach((item) => {
          if (item.nameEN === null || item.nameEN === '') {
            item.nameEN = 'noName'
          }
          setInitialMovies(movies);
        })
      })
      .catch((err) => {
        console.log(err);
      })
  }, [])


  const [value, setValue] = React.useState(false);

  function handleSearchMovies(movie) {

    setIsPreloader(true);

    const founded = initialMovies.filter((item) => {
      if (isEnable) {
        return ((item.nameEN.toLowerCase().includes(movie.toLowerCase()) && item.duration <= 40) || (item.nameRU.toLowerCase().includes(movie.toLowerCase()) && item.duration <= 40))
      } else {
        return (item.nameEN.toLowerCase().includes(movie.toLowerCase()) || item.nameRU.toLowerCase().includes(movie.toLowerCase()))
      }
    })

    localStorage.setItem('prevSearch', JSON.stringify(founded));
    setValue(!value);


  }



  React.useEffect(() => {
    JSON.parse(localStorage.getItem('prevSearch'));


    if (JSON.parse(localStorage.getItem('prevSearch')) != null && JSON.parse(localStorage.getItem('prevSearch')).length === 0) {
      setIsFounded(true);
    }

    setIsPreloader(false);

  }, [value])


  return (
    <>
      <SearchForm
        onSearchMovies={handleSearchMovies}
        isEnable={isEnable}
        changeFilter={changeFilter}
      />
      <MoviesCardList
        data={JSON.parse(localStorage.getItem('prevSearch'))}
        save_enable={'movies__save movies__save_enable'}
        save_text={'Сохранить'}
      />


      <Preloader
        isFounded={isFounded}
        isPreloader={isPreloader}
        closePreloader={closePreloader}
      />


    </>
  );
}

export default Movies;