import React from 'react';
import './MoviesCardList.css';
import MoviesCard from '../MoviesCard/MoviesCard';


function MoviesCardList(props) {
  const [buttonSave, setButtonSave] = React.useState('');

  function handleSaveMovie() {
    setButtonSave('movies__save_enable');
  }

  //console.log(props.foundMovies)
  const [newArray, setNewArray] = React.useState(props.foundMovies);

  const [dimensions, setDimensions] = React.useState({
    width: window.innerWidth,
    height: window.innerHeight,
  });

  console.log(dimensions);

  const handleResize = () => {
    setDimensions({
      width: window.innerWidth,
      height: window.innerHeight,
    });

  }


  React.useEffect(() => {
    window.addEventListener("resize", handleResize, false);
  }, [] );




  return (
    <>

      <section className="movies">
        <div className="movies__grid">
        {newArray.map(item =>
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
        <button className="movies__more" >Ещё</button>
      </section>

    </>
  );
}

export default MoviesCardList;