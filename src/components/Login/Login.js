import React from 'react';
import './Login.css';
import logo from '../../images/logo.svg';
import { useHistory } from 'react-router-dom';
import * as auth from '../../utils/MainApi';


function Login(props) {

  const history = useHistory();

  React.useEffect(() => {
    props.onChange();
  // eslint-disable-next-line
  }, [])

  function checkToken() {
    const token = localStorage.getItem('token');
    if (token) {
      auth.getContent(token).then((res) => {
        if (res) {
          props.handleLogin();
          history.push("/movies");
        } else {
          localStorage.removeItem('token');
          setMessage('401 — Переданный токен некорректен или просрочен');
        }
      })
    } else {
      setMessage('');
      history.push('/signin');
    }
  }

  React.useEffect(() => {
    checkToken()
  }, [])

  //console.log(currentUser)

  const [valid, setValid] = React.useState(false);

  const [ inputData, setInputData ] = React.useState({ email: "", password: ""});
  const [ inputDataValid, setInputDataValid ] = React.useState({ email: false, password: false});

  const [ message, setMessage] = React.useState('');

  React.useEffect(() => {
    if (inputDataValid.email && inputDataValid.password) {
      setValid(true);
    } else {
      setValid(false);
    }
  }, [inputData, inputDataValid.email, inputDataValid.password])


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

   function handleButtonLogin(evt) {
    evt.preventDefault();

    auth.authorize(inputData.password, inputData.email).then((data) => {
      if (!data) {
        setMessage('401 - пользователь с email не найден');
        console.log(message);
        return (message);
      }
      if (data.token) {
        props.handleLogin();
        setValid(false);
        props.onChange();
        history.push('/movies');

      }
    })
    .catch(err => console.log(err));


  }


  function handleButtonRegister() {
    history.push('/signup');
  }

  return (
    <>
      <section className="login">
        <div className="login__logo-container">
          <a href="/" >
            <img className="login__logo" alt="Логотип" src={logo} />
          </a>
        </div>
        <p className="login__welcome">Рады видеть!</p>

        <form className="login__form">
          <fieldset className="login__form-email">E-mail</fieldset>
          <input className={inputDataValid.email ? 'login__form-input-email' : 'login__form-input-email login__form-input-error'} required type="text"  value={inputData.email} onChange={handleEmailChange} name="email"/>

          <fieldset className="login__form-password">Пароль</fieldset>
          <input className={inputDataValid.password ? 'login__form-input-password' : 'login__form-input-password login__form-input-error'} type="password" required value={inputData.password} onChange={handlePasswordChange} name="password"/>

          <fieldset className="login__form-error">
            {message}
          </fieldset>
          <button disabled={!valid} className={valid ? 'login__form-submit' : 'login__form-submit login__form-submit_disable'}type="submit" onClick={handleButtonLogin}>Войти</button>
        </form>

        <div className="login__container">
          <p className="login__text">Ещё не зарегистрированы?</p>
          <button className="login__register" type="button" onClick={handleButtonRegister}>Регистрация</button>
        </div>

      </section>
    </>
  );
}

export default Login;