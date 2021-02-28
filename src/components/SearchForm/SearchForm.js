import React from 'react';
import './SearchForm.css';

function SearchForm(props) {

  const [ isEnable, setIsEnable ] = React.useState(true);

  function handleButtonFilter() {
    setIsEnable(!isEnable);
  }

  return (
    <>
      <section className="search">
        <form className="search__form">
          <fieldset className="seach__container">
            <input className="search__input" type="text" placeholder="Фильм" required />
            <button className="search__submit" type="submit">Поиск</button>
          </fieldset>
          <fieldset className="seach__filter">
            <button className={isEnable ? 'search__choice' : 'search__choice_disable'} type="button" onClick={handleButtonFilter}></button>
            <label className="search_label">Короткометражки</label>
          </fieldset>
        </form>
      </section>
    </>
  );
}

export default SearchForm;