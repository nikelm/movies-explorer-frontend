import React from 'react';
import './SavedMovies.css';
import SearchForm from '../SearchForm/SearchForm';
import MoviesCardList from '../MoviesCardList/MoviesCardList';
import * as auth from '../../utils/MainApi';


function SavedMovies(props) {

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

  return (
    <>
      <SearchForm />
      <MoviesCardList
        data={JSON.parse(localStorage.getItem('prevSaved'))}
        buttonSaved="movies__save_disable"
        save_enable={'movies__save movies__save_disable'}
        save_text={''}
        save={true}
      />

    </>
  );
}

export default SavedMovies;