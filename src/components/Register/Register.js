import React from 'react';
import './Register.css';

function Register(props) {
  return (
    <>
      <section className="register">
        <p className="register__welcome">Добро пожаловать!</p>

        <form className="register__form">
          <fieldset className="register__form-name">Имя</fieldset>
          <input className="register__form-input-name" required type="text" />

          <fieldset className="register__form-email">E-mail</fieldset>
          <input className="register__form-input-email" required type="text" />

          <fieldset className="register__form-password">Пароль</fieldset>
          <input className="register__form-input-password" type="password" required/>

          <fieldset className="register__form-error"></fieldset>
          <button className="register__form-submit" type="submit">Зарегистрироваться</button>
        </form>

        <div className="register__container">
          <p className="register__text">Уже зарегистрированы?</p>
          <button className="register__login" type="button">Войти</button>
        </div>

      </section>
    </>
  );
}

export default Register;