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
  const [foundMovies, setFoundMovies] = React.useState([{}]);
  //const [check, setCheck] = React.useState(0);

  function closePreloader() {
    setIsFounded(false);
  }

  React.useEffect(() => {
    handleSearchMovies()
  }, [])

  function handleSearchMovies(movie) {
    setIsPreloader(true);
    apiMovies.getMovies()
      .then((movies) => {
        setInitialMovies(movies);
      }).then(() => {
        initialMovies.forEach((item) => {
          if ((item.nameRU) === movie || (item.nameEN) === movie) {
            //setCheck(check + 1);
            setFoundMovies([...foundMovies, item])
          }

         // if (check === 0) {
           // setIsPreloader(false);
           // setIsFounded(true);
         // }
          //console.log(typeof(item.nameRU))
          //if ((item.nameRU).toString() !== movie || (item.nameEN).toString() !== movie) {
            //setIsPreloader(false);
            //setIsFounded(true);
           //console.log('false')
          //} else {
         //   setFoundMovies(...item)
          //console.log('true')
          //}
        })
      })
      .catch((err) => console.log(err)).finally(() => {
        setIsPreloader(false);
      })

  }


  return (
    <>
      <SearchForm
        onSearchMovies={handleSearchMovies}

      />
       <section>
      {foundMovies.map(item => <div>{item.nameRU}</div>)}
      </section>
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