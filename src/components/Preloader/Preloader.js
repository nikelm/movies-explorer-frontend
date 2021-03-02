import React from 'react';
import './Preloader.css';

const Preloader = (props) => {


    return (
      <>
        <div className={props.isPreloader ? 'preloader': 'preloader_disable'}>
            <div className="preloader__container">
                <span className="preloader__round"></span>
            </div>
        </div>
        <div className={props.isFounded ? 'preloader' : 'preloader_disable'} >
          <p className="preloader__text">Ничего не найдено!</p>
          <button type="button" onClick={props.closePreloader}>ОК</button>
        </div>
      </>
    )
};

export default Preloader;