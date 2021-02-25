import React from 'react';
import './SavedMovies.css';
import SearchForm from '../SearchForm/SearchForm';
import MoviesCardList from '../MoviesCardList/MoviesCardList';


function SavedMovies(props) {


  return (
    <>
      <SearchForm />
      <MoviesCardList
        buttonSaved="movies__save_disable"
      />

    </>
  );
}

export default SavedMovies;