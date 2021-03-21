import React from 'react';
import  './PopupWithForm.css'

function PopupWithForm(props) {

  const [valid, setValid] = React.useState(false);

  const [ inputData, setInputData ] = React.useState({ email: "", name: ""});
  const [ inputDataValid, setInputDataValid ] = React.useState({ email: false, name: false});

  React.useEffect(() => {
    if (inputDataValid.email && inputDataValid.name) {
      setValid(true);
    } else {
      setValid(false);
    }
  }, [inputData, inputDataValid.email, inputDataValid.name])

  function handleNameChange(evt) {
    setInputData({...inputData, name: evt.target.value});

    let pattern = new RegExp(/[а-яА-Я0-9\-\s]+$/);
    setInputDataValid({ ...inputDataValid, name: (pattern).test(evt.target.value)});
  }

  function handleEmailChange(evt) {
    setInputData({...inputData, email: evt.target.value});

    let pattern = new RegExp(/^(("[\w-\s]+")|([\w-]+(?:\.[\w-]+)*)|("[\w-\s]+")([\w-]+(?:\.[\w-]+)*))(@((?:[\w-]+\.)*\w[\w-]{0,66})\.([a-z]{2,6}(?:\.[a-z]{2})?)$)|(@\[?((25[0-5]\.|2[0-4][0-9]\.|1[0-9]{2}\.|[0-9]{1,2}\.))((25[0-5]|2[0-4][0-9]|1[0-9]{2}|[0-9]{1,2})\.){2}(25[0-5]|2[0-4][0-9]|1[0-9]{2}|[0-9]{1,2})\]?$)/i);

    setInputDataValid({ ...inputDataValid, email: (pattern).test(evt.target.value)})
  }

  function handleButtonSave(evt) {
    evt.preventDefault();

    props.handleUpdateUser(inputData);
  }


  return (
    <section className={`popup ${props.isOpen ? 'popup_opened' : ''}`}>
    <form onSubmit={props.onSubmit} className="popup__form" name={props.name} noValidate>
      <button onClick={props.onClose} className="popup__close"  type="button"></button>
      <fieldset className="popup__profile">
        <label className="popup__label">Редактировать профиль</label>
        <input id="name-input" type="text" className={inputDataValid.name ? 'popup__input popup__input_type_name' : 'popup__input popup__input_type_error' } name="name" placeholder="Имя" required minLength="2" maxLength="30" value={inputData.name} onChange={handleNameChange}/>

        <span id="name-input-error" className="popup__error"></span>
        <label></label>

        <input id="job-input" type="text" className={inputDataValid.email ? 'popup__input popup__input_type_description' : 'popup__input popup__input_type_error'} name="email" placeholder="Почта" required minLength="2" maxLength="30" value={inputData.email} onChange={handleEmailChange}/>

        <span id="job-input-error" className="popup__error"></span>

      </fieldset>
      <button disabled={!valid} className="popup__button" type="submit" onClick={handleButtonSave}>Сохранить</button>
    </form>
  </section>

  )
}

export default PopupWithForm;
