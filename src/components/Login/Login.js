import React from 'react';
import './Login.css';
import { useHistory } from 'react-router-dom';

function Login(props) {
  const history = useHistory();

  function handleButtonRegister() {
    history.push('/signup');
  }

  function handleButtonLogin() {
    history.push('/movies');
  }

  return (
    <>
      <section className="login">
        <p className="login__welcome">Рады видеть!</p>

        <form className="login__form">
          <fieldset className="login__form-email">E-mail</fieldset>
          <input className="login__form-input-email" required type="text" />

          <fieldset className="login__form-password">Пароль</fieldset>
          <input className="login__form-input-password" type="password" required/>

          <fieldset className="login__form-error"></fieldset>
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