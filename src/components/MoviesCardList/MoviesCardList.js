import React from 'react';
import './MoviesCardList.css';
import MoviesCard from '../MoviesCard/MoviesCard';
import * as auth from '../../utils/MainApi';
import CurrentUserContext from '../../contexts/CurrentUserContext';


function MoviesCardList(props) {

  const currentUser = React.useContext(CurrentUserContext);
  console.log(currentUser);

  const [dimensions, setDimensions] = React.useState({
    width: window.innerWidth,
    height: window.innerHeight,
  });


  const [displayCount, setDisplayCount] = React.useState(0);


  const handleResize = () => {
    setDimensions({
      width: window.innerWidth,
      height: window.innerHeight,
    });
  }

  const handleDisplayMovies = () => {
    if (dimensions.width < 1280 && dimensions.width >= 768) {
      setDisplayCount(8);
    }

    if (dimensions.width  >= 1280) {
      setDisplayCount(12);
    }

    if (dimensions.width <  768) {
      setDisplayCount(5);
    }
  }

  React.useEffect(() => {

    handleDisplayMovies()
  }, [dimensions] );

  React.useEffect(() => {

    window.addEventListener("resize", handleResize, false);
  }, [] );



  function addMovies() {
    if (displayCount <= 8) {
      setDisplayCount(displayCount + 2);
    } else {
      setDisplayCount(displayCount + 3)
    }
  }

  function onMovieSave() {

  }
  console.log(props.data)

  const moviesList = props.data.slice(0, displayCount);
  const moviesListLength = props.data.length;

  return (
    <>

      <section className="movies">
        <div className="movies__grid">
          {
            moviesList.map(item =>
              <MoviesCard
                key = {item.id}
                movie={item}
                movieList={props.data}
                buttonSaved={props.buttonSaved}
                foundMovies={props.foundMovies}
                title={item.nameRU}
                duration={item.duration}
                thumbnail={item.image.url}
                onMovieSave={onMovieSave}
                save_enable={props.save_enable}
                save_text={props.save_text}
                save={props.save}
              />
            )}

        </div>
        <button className={(moviesListLength !== displayCount) && (moviesListLength >= displayCount) ? 'movies__more' : 'movies__disable' } onClick={addMovies}>Ещё</button>
      </section>

    </>
  );
}

export default MoviesCardList;