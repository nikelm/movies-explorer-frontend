import React from 'react';
import './Movies.css';
import SearchForm from '../SearchForm/SearchForm';
import MoviesCardList from '../MoviesCardList/MoviesCardList';
import Preloader from '../Preloader/Preloader';
import apiMovies from '../../utils/MoviesApi';

function Movies(props) {

  const [isPreloader, setIsPreloader] = React.useState(false);
  const [isFounded, setIsFounded] = React.useState(false);

  const [initialMovies, setInitialMovies] = React.useState([{}]);
  const [foundMovies, setFoundMovies] = React.useState([]);
  //const [check, setCheck] = React.useState(0);

  function closePreloader() {
    setIsFounded(false);
  }

  React.useEffect(() => {
    apiMovies.getMovies()
    .then((movies) => {
      setInitialMovies(movies);
    }).then(() => {
      console.log(initialMovies)
      test()
    })
    .catch((err) => {
      console.log(err);
    })
  }, [])


  function test() {
    initialMovies.forEach((item) => {
      if (item.nameEN === null || item.nameEN === '') {
        item.nameEN = 'noName'
      }
    })

    initialMovies.forEach((item) => {
      console.log(item)
      if (item.nameEN.includes('noName') &&
      (!foundMovies.includes(item))) {
        setFoundMovies([...foundMovies, item])

      }
    })
  }

  React.useEffect(() => {
    test()
  }, [foundMovies])

  //var item = array.filter(item=>item.title.toLowerCase().includes('this'));

  // var filterednames = names.filter(function(obj) {
  //  return (obj.name === "Joe") && (obj.age < 30);
  // });

  function handleSearchMovies(movie) {

    // Stones in Exile
    /*
    initialMovies.forEach((item) => {
      if (item.nameEN === null || item.nameEN === '') {
        item.nameEN = 'noName'
      }
    })

    initialMovies.forEach((item) => {
      if (item.nameEN.includes('noName') &&
      (!foundMovies.includes(item))) {
        setFoundMovies([...foundMovies, item])

      }
    })
*/
    console.log(foundMovies)

    /*
    getedMovies.forEach((item) => {
      item.forEach((item) => {

        if (item.nameEN === null || item.nameEN === '') {
          item.nameEN = 'noName'
        }
      })
    })
*/
    // const result = getedMovies[0].filter((item) => item.nameEN.includes(movie))



    /*
    getedMovies.forEach((item) => {
      item.forEach((item) => {
        console.log(item.nameEN.includes(movie))
        if ((item.nameRU.toLowerCase().includes(movie) ||
            item.nameEN.toLowerCase().includes(movie)) &&
              (!foundMovies.includes(item))) {
            setFoundMovies([item, ...foundMovies])
        }
      })
    })
    */

   // console.log(foundMovies)



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