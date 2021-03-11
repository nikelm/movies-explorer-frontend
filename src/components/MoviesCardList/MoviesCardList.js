import React from 'react';
import './MoviesCardList.css';
import MoviesCard from '../MoviesCard/MoviesCard';


function MoviesCardList(props) {

  const [buttonSave, setButtonSave] = React.useState('');

  function handleSaveMovie() {
    setButtonSave('movies__save_enable');
  }


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

  console.log(displayCount)
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
                movies='movies__container'
                button = {buttonSave}
                handleSaveMovie={handleSaveMovie}
                buttonSaved={props.buttonSaved}
                foundMovies={props.foundMovies}
                title={item.nameRU}
                duration={item.duration}
                thumbnail={item.image.url}

              />
            )}

        </div>
        <button className={(moviesListLength !== displayCount) && (moviesListLength >= displayCount) ? 'movies__more' : 'movies__disable' } onClick={addMovies}>Ещё</button>
      </section>

    </>
  );
}

export default MoviesCardList;