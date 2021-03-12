import React from 'react';
import './Login.css';
import logo from '../../images/logo.svg';
import { useHistory } from 'react-router-dom';
import * as auth from '../../utils/MainApi';


function Login(props) {
  const history = useHistory();

  React.useEffect(() => {
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
      }
    }

    checkToken();

  // eslint-disable-next-line
  }, [])

  const [valid, setValid] = React.useState(false);
  const [ email, setEmail ] = React.useState('');
  const [ password, setPassword ] = React.useState('');
  const [ message, setMessage] = React.useState('');

  function handleButtonRegister() {
    history.push('/signup');
  }

    function handleEmailChange(evt) {
    setEmail(evt.target.value);
    setMessage('');
    (email.length !==0 && password.length !==0) ? setValid(true) : setValid(false)
   }

   function handlePasswordChange(evt) {
    setPassword(evt.target.value);
    setMessage('');
    (email.length !==0 && password.length !==0) ? setValid(true) : setValid(false)
   }

   function handleButtonLogin(evt) {
    evt.preventDefault();

    auth.authorize(password, email).then((data) => {
      if (!data) {
        setMessage('401 - пользователь с email не найден');
        console.log(message);
        return (message);
      }
      if (data.token) {
        props.handleLogin();

        history.push('/movies');
      }
    })
    .catch(err => console.log(err));

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
          <input className="login__form-input-email" required type="text"  value={email} onChange={handleEmailChange} />

          <fieldset className="login__form-password">Пароль</fieldset>
          <input className="login__form-input-password" type="password" required value={password} onChange={handlePasswordChange}/>

          <fieldset className="login__form-error">
            {message}
          </fieldset>
          <button className="login__form-submit" type="submit" onClick={handleButtonLogin}>Войти</button>
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