import React from 'react';
import './SearchForm.css';

function SearchForm(props) {

  const [ isEnable, setIsEnable ] = React.useState(true);
  const [ isError, setIsError ] = React.useState(false);
  const [movie, setMovie] = React.useState('');


  function handleButtonFilter() {
    setIsEnable(!isEnable);
  }

  function handleMovieChange(evt) {
    setMovie(evt.target.value);
    if (evt.target.value === '') {
      setIsError(true);
    } else {
      setIsError(false);
    }
  }

  function handleFormSubmit(evt) {
    evt.preventDefault();
    props.onSearchMovies(movie);
    console.log(props.initialMovies);

  }


  return (
    <>
      <section className="search">
        <form className="search__form" noValidate>
          <fieldset className="seach__container">
            <input id="movie-input" className="search__input" type="text" placeholder="Фильм" required name="movie" value={movie} onChange={handleMovieChange}/>
            <button className="search__submit" type="submit" onClick={handleFormSubmit} disabled={isError}>Поиск</button>
          </fieldset>
          <fieldset className="seach__filter">
            <button className={isEnable ? 'search__choice' : 'search__choice_disable'} type="button" onClick={handleButtonFilter}></button>
            <label className="search_label">Короткометражки</label>
            <span id="movie-input-error" className={isError ? 'search__error' : 'search__error_disable'}>Нужно ввести ключевое слово</span>
          </fieldset>
        </form>
      </section>
    </>
  );
}

export default SearchForm;