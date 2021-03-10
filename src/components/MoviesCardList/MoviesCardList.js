import React from 'react';
import './MoviesCardList.css';
import MoviesCard from '../MoviesCard/MoviesCard';


function MoviesCardList(props) {
  const [buttonSave, setButtonSave] = React.useState('');

  function handleSaveMovie() {
    setButtonSave('movies__save_enable');
  }

  //console.log(props.foundMovies)
  //const prevSearch = JSON.parse(localStorage.getItem('prevSearch'));
  //console.log(JSON.parse(localStorage.getItem('prevSearch')))
  //console.log(prevSearch)


  const [dimensions, setDimensions] = React.useState({
    width: window.innerWidth,
    height: window.innerHeight,
  });

 // console.log(dimensions);


  const handleResize = () => {
    setDimensions({
      width: window.innerWidth,
      height: window.innerHeight,
    });

  }


  React.useEffect(() => {

    window.addEventListener("resize", handleResize, false);
  }, [] );

/*

  let displayCount;

  const data = props.foundMovies;

  for (let i = 0; i < data.length; i++) {

    data[i].value = true;

  }

/*
  if (dimensions.width < 1280 && dimensions.width >= 768) {
    displayCount = 2;
    for (let i = 0; i < displayCount; i++) {

      data[i].value = true;

    }

  }

  if (dimensions.width  >= 1280) {
    displayCount = 3;
    for (let i = 0; i < displayCount; i++) {

      data[i].value = true;

    }
  }
*/

//const data = JSON.parse(localStorage.getItem('prevSearch'));





/*
  let newArray = props.foundMovies.slice(0, displayCount);
  let otherArray = props.foundMovies.slice(displayCount, props.foundMovies.length)

  const [moreMovie, setMoreMovie] = React.useState([]);

  function addMore() {
    let start = moreMovie.length;
    let end = moreMovie.length + displayCount;
    if (moreMovie.length !== (newArray.length + displayCount)) {
      setMoreMovie(otherArray.slice(start, end),...moreMovie)

    }

    //console.log(displayCount)
    //console.log( props.foundMovies.length)
  }
*/
  //console.log(moreMovie.length)
  //console.log(moreMovie)


 // console.log(displayCount)


  let displayCount;
  //const [displayCount, setDisplayCount] = React.useState(0);
  const [number, setNumber] = React.useState(0);

  function checkDisplay() {

    if (dimensions.width < 1280 && dimensions.width >= 768) {
      return displayCount = 2;
    }

    if (dimensions.width  >= 1280) {
      return displayCount = 3;
    }

    if (dimensions.width <  768) {
      return displayCount = 5;
    }

  }


  React.useEffect(() => {
    checkDisplay()
  }, [dimensions])

  let count = checkDisplay()

  const moviesList = props.data.slice(0,count);

  const [newCount, setNewCount] = React.useState(count);

  function addMovies() {
    if (props.data.length >= newCount+count) {
      setNewCount(newCount+count);
    }
  }
  console.log(newCount)
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

         {/*
         {moreMovie.map(item =>
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
         )} */}
        </div>
        <button className="movies__more" onClick={addMovies}>Ещё</button>
      </section>

    </>
  );
}

export default MoviesCardList;