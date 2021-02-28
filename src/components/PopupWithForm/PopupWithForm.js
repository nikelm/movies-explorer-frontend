import React from 'react';
import  './PopupWithForm.css'

function PopupWithForm(props) {

  return (
    <section className={`popup ${props.isOpen ? 'popup_opened' : ''}`}>
    <form onSubmit={props.onSubmit} className="popup__form" name={props.name} noValidate>
      <button onClick={props.onClose} className="popup__close"  type="button"></button>
      <fieldset className="popup__profile">
        <label className="popup__label">Редактировать профиль</label>
        <input id="name-input" type="text" className="popup__input popup__input_type_name" name="name" placeholder="Имя" required minLength="2" maxLength="30" />

        <span id="name-input-error" className="popup__error"></span>
        <label></label>

        <input id="job-input" type="text" className="popup__input popup__input_type_description" name="email" placeholder="Почта" required minLength="2" maxLength="30" />

        <span id="job-input-error" className="popup__error"></span>

      </fieldset>
      <button className="popup__button" type="submit">Сохранить</button>
    </form>
  </section>

  )
}

export default PopupWithForm;
