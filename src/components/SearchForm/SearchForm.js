import React from 'react';
import './SearchForm.css';

function SearchForm(props) {
  return (
    <>
      <section className="search">
        <form className="search__form">
          <fieldset className="seach__container">
            <input className="search__input" type="text" placeholder="Фильм" required />
            <button className="search__submit" type="submit">Поиск</button>
          </fieldset>
          <fieldset className="seach__filter">
            <button className="search__choice" type="button"></button>
            <label className="search_label">Короткометражки</label>
          </fieldset>
        </form>
      </section>
    </>
  );
}

export default SearchForm;