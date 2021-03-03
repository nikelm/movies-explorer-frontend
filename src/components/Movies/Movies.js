import React from 'react';
import './Movies.css';
import SearchForm from '../SearchForm/SearchForm';
import MoviesCardList from '../MoviesCardList/MoviesCardList';
import Preloader from '../Preloader/Preloader';
import apiMovies from '../../utils/MoviesApi';

function Movies(props) {

  const [isPreloader, setIsPreloader] = React.useState(false);
  const [isFounded, setIsFounded] = React.useState(false);

  const [initialMovies, setInitialMovies] = React.useState([]);
  const [foundMovies, setFoundMovies] = React.useState([]);
  //const [check, setCheck] = React.useState(0);

  function closePreloader() {
    setIsFounded(false);
  }

  React.useEffect(() => {
    apiMovies.getMovies()
    .then((movies) => {
      setInitialMovies([...initialMovies, movies]);
    }).catch((err) => {
      console.log(err);
    })
  }, [])

  React.useEffect(() => {
    handleSearchMovies()
  }, [foundMovies])

  //var item = array.filter(item=>item.title.toLowerCase().includes('this'));

  // var filterednames = names.filter(function(obj) {
  //  return (obj.name === "Joe") && (obj.age < 30);
  // });

  function handleSearchMovies(movie) {
    let ru = [];
    initialMovies.forEach((item) => {
      item.forEach((item) => {ru.push(item.nameRU)})
    });

    let en = [];
    initialMovies.forEach((item) => {
      item.forEach((item) => {en.push(item.nameEN)})
    });


    //const ru = initialMovies.filter(item=>item.nameRU.includes(movie));

    console.log(en)
    console.log(ru)


      /*
      if ((item.nameEN.toLowerCase().includes(movie)) || item.nameRU === movie)) && (!foundMovies.includes(item))) {
        setFoundMovies([item, ...foundMovies])
      }
      */


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
        closePreloader={closePreloader}
      />
    </>
  );
}

export default Movies;