import React from 'react';
import  './PopupWithForm.css'

function PopupWithForm(props) {

  return (
    <section className={`popup ${props.isOpen ? 'popup_opened' : ''}`}>
    <form onSubmit={props.onSubmit} className="popup__form" name={props.name} noValidate>
      <button onClick={props.onClose} className={`popup__close popup__close_${props.name}`} type="button"></button>
      <fieldset className="popup__profile">
        <label className="popup__label">{ props.title }</label>
        {props.children}
      </fieldset>
      <button className={`popup__button popup__button_${props.name}`} type="submit">{props.textButton}</button>
    </form>
  </section>

  )
}

export default PopupWithForm;
