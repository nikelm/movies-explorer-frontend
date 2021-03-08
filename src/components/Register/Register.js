import React from 'react';
import { useHistory } from 'react-router-dom';
import logo from '../../images/logo.svg';
import './Register.css';

function Register(props) {
  const history = useHistory();

  function handleButtonLogin() {
    history.push('/signin');
  }

  const [valid, setValid] = React.useState(false);

  const [ name, setName ] = React.useState('');
  const [ email, setEmail ] = React.useState('');
  const [ password, setPassword ] = React.useState('');
  const [ message, setMessage] = React.useState('')

  const [validInput, setValidInput] = React.useState({
    name, password, email
  });

  function handleNameChange(evt) {
    setName(evt.target.value);
    setMessage('');
    (name.length !==0 && email.length !==0 && password.length !==0) ? setValid(true) : setValid(false)
   }

  function handleEmailChange(evt) {
    setEmail(evt.target.value);
    setMessage('');
    (name.length !==0 && email.length !==0 && password.length !==0) ? setValid(true) : setValid(false)
   }

   function handlePasswordChange(evt) {
    setPassword(evt.target.value);
    setMessage('');
    (name.length !==0 && email.length !==0 && password.length !==0) ? setValid(true) : setValid(false)

   }





  function handleSubmit(evt) {
    evt.preventDefault();

    if (!password || !email || !name ) {
      setMessage('Что-то пошло не так');
      return;
    }

    let pattern = new RegExp(/^(("[\w-\s]+")|([\w-]+(?:\.[\w-]+)*)|("[\w-\s]+")([\w-]+(?:\.[\w-]+)*))(@((?:[\w-]+\.)*\w[\w-]{0,66})\.([a-z]{2,6}(?:\.[a-z]{2})?)$)|(@\[?((25[0-5]\.|2[0-4][0-9]\.|1[0-9]{2}\.|[0-9]{1,2}\.))((25[0-5]|2[0-4][0-9]|1[0-9]{2}|[0-9]{1,2})\.){2}(25[0-5]|2[0-4][0-9]|1[0-9]{2}|[0-9]{1,2})\]?$)/i);

    if (!pattern.test(email)) {
      setMessage('Что-то пошло не так');
      return;
    }


    console.log(name, email)

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
          <input className="register__form-input-name" required type="text"
          value={name} onChange={handleNameChange}/>

          <fieldset className="register__form-email">E-mail</fieldset>
          <input className="register__form-input-email" required type="text"
          value={email} onChange={handleEmailChange}/>

          <fieldset className="register__form-password">Пароль</fieldset>
          <input className="register__form-input-password" type="password" required
          value={password} onChange={handlePasswordChange}/>

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