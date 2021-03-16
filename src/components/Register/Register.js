import React from 'react';
import { useHistory } from 'react-router-dom';
import logo from '../../images/logo.svg';
import './Register.css';
import * as auth from '../../utils/MainApi';


function Register(props) {
  const history = useHistory();

  function handleButtonLogin() {
    history.push('/signin');
  }

  const [valid, setValid] = React.useState(false);

  const [ inputData, setInputData ] = React.useState({ name: '', email: '', password: ''})
  const [ inputDataValid, setInputDataValid ] = React.useState({ name: false, email: false, password: false});

  const [ message, setMessage] = React.useState('')


  React.useEffect(() => {
    if (inputDataValid.name && inputDataValid.email && inputDataValid.password) {
      setValid(true);
    } else {
      setValid(false);
    }
  }, [inputData, inputDataValid.email, inputDataValid.name, inputDataValid.password])

  function handleNameChange(evt) {
    setInputData({...inputData, name: evt.target.value});
    setInputDataValid({ ...inputDataValid, name: (/^[а-яА-ЯёЁ0-9]+$/).test(evt.target.value)})
    setMessage('');
   }

  function handleEmailChange(evt) {
    setInputData({...inputData, email: evt.target.value});

    let pattern = new RegExp(/^(("[\w-\s]+")|([\w-]+(?:\.[\w-]+)*)|("[\w-\s]+")([\w-]+(?:\.[\w-]+)*))(@((?:[\w-]+\.)*\w[\w-]{0,66})\.([a-z]{2,6}(?:\.[a-z]{2})?)$)|(@\[?((25[0-5]\.|2[0-4][0-9]\.|1[0-9]{2}\.|[0-9]{1,2}\.))((25[0-5]|2[0-4][0-9]|1[0-9]{2}|[0-9]{1,2})\.){2}(25[0-5]|2[0-4][0-9]|1[0-9]{2}|[0-9]{1,2})\]?$)/i);

    setInputDataValid({ ...inputDataValid, email: (pattern).test(evt.target.value)})
    setMessage('');
   }

   function handlePasswordChange(evt) {
    setInputData({ ...inputData, password: evt.target.value});
    setInputDataValid({...inputDataValid, password: (evt.target.value.length >= 8 && (/^[a-zA-Z0-9]+$/).test(evt.target.value))});
    setMessage('');

   }

  function handleSubmit(evt) {
    evt.preventDefault();

    if (!inputData.password || !inputData.email || !inputData.name ) {
      setMessage('Что-то пошло не так');
      return;
    }
/*
    let pattern = new RegExp(/^(("[\w-\s]+")|([\w-]+(?:\.[\w-]+)*)|("[\w-\s]+")([\w-]+(?:\.[\w-]+)*))(@((?:[\w-]+\.)*\w[\w-]{0,66})\.([a-z]{2,6}(?:\.[a-z]{2})?)$)|(@\[?((25[0-5]\.|2[0-4][0-9]\.|1[0-9]{2}\.|[0-9]{1,2}\.))((25[0-5]|2[0-4][0-9]|1[0-9]{2}|[0-9]{1,2})\.){2}(25[0-5]|2[0-4][0-9]|1[0-9]{2}|[0-9]{1,2})\]?$)/i);

    if (!pattern.test(email)) {
      setMessage('Что-то пошло не так');
      return;
    }
*/

    //console.log(name, email)
    auth.register(inputData.name, inputData.password, inputData.email).then((res) => {
      if (!res) {
        setMessage('некорректно заполнено одно из полей');
        return message;
      } else {
        setMessage('');
        auth.authorize(inputData.password, inputData.email).then((data) => {
          if (data.message) {
            setMessage('401 - пользователь с email не найден');
            console.log(message);
            return (message);
          }
          if (data.token) {
            setValid(false);
            history.push('/movies');
          }
        })
        .catch(err => console.log(err));
      }
    })

  }




  return (
    <>
      <section className="register">
      <div className="register__logo-container">
          <a href="/" >
            <img className="register__logo" alt="Логотип" src={logo} />
          </a>
        </div>
        <p className="register__welcome">Добро пожаловать!</p>

        <form className="register__form" noValidate>
          <fieldset className="register__form-name">Имя</fieldset>
          <input className={inputDataValid.name ? 'register__form-input-name': 'register__form-input-name register__form-input-error'} required type="text"
          value={inputData.name} onChange={handleNameChange} name="name"/>

          <fieldset className="register__form-email">E-mail</fieldset>
          <input className={inputDataValid.email ? 'register__form-input-email' : 'register__form-input-email register__form-input-error'} required type="text"
          value={inputData.email} onChange={handleEmailChange} name="email"/>

          <fieldset className="register__form-password">Пароль</fieldset>
          <input className={inputDataValid.password ? 'register__form-input-password' : 'register__form-input-password register__form-input-error'} type="password" required
          value={inputData.password} onChange={handlePasswordChange} name="password"/>

          <fieldset className="register__form-error">
            {message}
          </fieldset>
          <button className={valid ? 'register__form-submit' : 'register__form-submit register__form-submit_disable'} type="submit" onClick={handleSubmit} disabled={!valid}>Зарегистрироваться</button>
        </form>

        <div className="register__container">
          <p className="register__text">Уже зарегистрированы?</p>
          <button className="register__login" type="button" onClick={handleButtonLogin}>Войти</button>
        </div>

      </section>
    </>
  );
}

export default Register;