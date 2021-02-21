import React from 'react';
import './Login.css';

function Login(props) {
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
          <button className="login__form-submit" type="submit">Войти</button>
        </form>

        <div className="login__container">
          <p className="login__text">Ещё не зарегистрированы?</p>
          <button className="login__register" type="button">Регистрация</button>
        </div>

      </section>
    </>
  );
}

export default Login;