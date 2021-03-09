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
const [count, setCount] = React.useState(true);

  function addMovies() {
    for (let i = 0; i < data.length; i++) {

      //console.log(data[i] = false)
      data[i].value = false;
      setCount(false);
    }
  }

React.useEffect(()=> {
  addMovies()
}, [data])

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

  return (
    <>

      <section className="movies">
        <div className="movies__grid">
        {
            data.map(item =>
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
                value={item.value}
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