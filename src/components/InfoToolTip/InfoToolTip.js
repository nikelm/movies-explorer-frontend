import React from 'react';
import './InfoToolTip.css';

function InfoTooltip(props) {

  return (
    <section className={`info ${props.isInfo}`}>
      <button className="info__button-close" onClick={props.onClose}></button>
      <div className="info__block">
        <img src={props.logoIcon} alt="Icon" className="info__icon"></img>
        <p className="info__text">{props.text}</p>
      </div>
    </section>

  )
}


export default InfoTooltip;
