import React from 'react';
import './SavedMovies.css';
import SearchForm from '../SearchForm/SearchForm';
import MoviesCardList from '../MoviesCardList/MoviesCardList';
import * as auth from '../../utils/MainApi';


function SavedMovies(props) {

  const [ isEnable, setIsEnable ] = React.useState(true);
  const [prevSearch, setPrevSearch] = React.useState(false);

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


  const myMovies = savedMovies.filter((item) => {

      item['id'] = item['_id'];
      item['linkimage'] = item['image'];
      item['liked'] = true;
      return item;
  })


  localStorage.setItem('prevSaved', JSON.stringify(myMovies));

  const mySavedMovie = JSON.parse(localStorage.getItem('prevSaved'));

  const [value, setValue] = React.useState(false);

  function handleSearchMovies(movie) {

    const foundedSaved = mySavedMovie.filter((item) => {
      if (isEnable) {
        return ((item.nameEN.toLowerCase().includes(movie.toLowerCase()) && item.duration <= 40) || (item.nameRU.toLowerCase().includes(movie.toLowerCase()) && item.duration <= 40))
      } else {
        return (item.nameEN.toLowerCase().includes(movie.toLowerCase()) || item.nameRU.toLowerCase().includes(movie.toLowerCase()))
      }
    })
    console.log(foundedSaved)
    localStorage.setItem('prevMySaved', JSON.stringify(foundedSaved));
    setValue(!value);
    setPrevSearch(true);
  }

  React.useEffect(() => {
    JSON.parse(localStorage.getItem('prevMySaved'));

  }, [value])



  return (
    <>
      <SearchForm
        isEnable={isEnable}
        changeFilter={changeFilter}
        onSearchMovies={handleSearchMovies}
      />
      <MoviesCardList
        data={prevSearch ? JSON.parse(localStorage.getItem('prevMySaved')) : JSON.parse(localStorage.getItem('prevSaved'))}
        buttonSaved="movies__save_disable"
        save_enable={'movies__save movies__save_disable'}
        save_text={''}
        save={true}

      />

    </>
  );
}

export default SavedMovies;