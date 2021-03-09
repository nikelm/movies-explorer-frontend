import React from 'react';
import './Movies.css';
import SearchForm from '../SearchForm/SearchForm';
import MoviesCardList from '../MoviesCardList/MoviesCardList';
import Preloader from '../Preloader/Preloader';
import apiMovies from '../../utils/MoviesApi';

function Movies(props) {

  const [isPreloader, setIsPreloader] = React.useState(false);
  const [isFounded, setIsFounded] = React.useState(false);
  const [errorMessage, setErorMessage] = React.useState('');

  const [initialMovies, setInitialMovies] = React.useState([]);
  const [foundMovies, setFoundMovies] = React.useState([]);
  const [value, setValue] = React.useState('');

  function closePreloader() {
    setIsFounded(false);
  }

  function moviesGet() {
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
      setErorMessage('Во время запроса произошла ошибка. Возможно, проблема с соединением или сервер недоступен. Подождите немного и попробуйте ещё раз')
      setIsFounded(true);
    })
  }

  React.useEffect(() => {

    moviesGet();
  }, [], [initialMovies])

  React.useEffect(() => {
    const founded = initialMovies.filter((item) => {
      return (item.nameEN.toLowerCase().includes(value) || item.nameRU.toLowerCase().includes(value))
    })

    if (founded.length === 0 && value !== '') {
      setErorMessage('Ничего не найдено!')
      setIsFounded(true);
    }
    //localStorage.setItem('prevSearch', JSON.stringify(founded));
    //setFoundMovies(JSON.parse(localStorage.getItem('prevSearch')),...foundMovies)
    setFoundMovies(founded,...foundMovies)
    setIsPreloader(false)
  }, [value], [initialMovies])



  function handleSearchMovies(movie) {
    setIsPreloader(true)

    moviesGet()

    if (movie.length < 3) {
      setErorMessage('Ведите в поиск минимум 3 символа')
      setIsFounded(true);
      setIsPreloader(false)
      return
    }
    if (movie === value) {
      setErorMessage('Ничего нового не найдено!!')
      setIsPreloader(false)
      setIsFounded(true);
      return
    }

    setValue(movie.toLowerCase())
  }


  return (
    <>
      <SearchForm
        onSearchMovies={handleSearchMovies}
      />

      <MoviesCardList
        foundMovies={foundMovies}
      />

      <Preloader
        isPreloader={isPreloader}
        isFounded={isFounded}
        errorMessage={errorMessage}
        closePreloader={closePreloader}
      />
    </>
  );
}

export default Movies;