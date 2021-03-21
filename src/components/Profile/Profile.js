import React from 'react';
import { useHistory } from 'react-router-dom';
import PopupWithForm from '../PopupWithForm/PopupWithForm';
import InfoTooltip from '../InfoToolTip/InfoToolTip';
import './Profile.css';
import CurrentUserContext from '../../contexts/CurrentUserContext';
import * as auth from '../../utils/MainApi';
import logoIconValid from '../../images/Union.svg';
import logoIconNotValid from '../../images/UnionInValid.svg';


function Profile(props) {

  const currentUser = React.useContext(CurrentUserContext);

  const history = useHistory();

  const [ isOpen, setIsOpen ] = React.useState(false);
  const [ isInfo, setIsInfo ] = React.useState(false);
  const [valid, setValid] = React.useState(false);
  const [logoIcon, setLogoIcon] = React.useState(false);

  function openPopup() {
    setIsOpen(true);
  }

  function closePopup() {
    setIsOpen(false);
  }

/*
  function openInfo() {
    setIsInfo(true);
  }
*/

  function closeInfo() {
    setIsInfo(false);
  }


  function handleButtonLogout() {
    history.push('/signin');
    localStorage.removeItem('token');
  }

  function handleUpdateUser(currentUser) {
   auth.updateContent(currentUser).then((res) => {
    if (!res) {
      setIsOpen(false);
      setIsInfo(true);
    } else {
      setIsOpen(false);
      setValid(true);
      setLogoIcon(true);
      setIsInfo(true);

      props.onChange();
    }
  }).catch((err) => {
    console.log(err);
    })
  }


  return (
    <>
      <section className="profile">
        <p className="profile__user-name">Привет, {currentUser.name}!</p>
        <div className="profile__data">
          <ul className="profile__data-list">
            <li className="profile__data-list-item">Имя</li>
            <li className="profile__data-list-item profile_pad">Почта</li>
          </ul>
          <ul className="profile__data-user">
            <li className="profile__data-list-user">{currentUser.name}</li>
            <li className="profile__data-list-user profile_pad">{currentUser.email}</li>
          </ul>
        </div>
        <div className="profile__button">
          <button className="profile__button-change" onClick={openPopup}>Редактировать</button>
          <button className="profile__button-logout" onClick={handleButtonLogout}>Выйти из аккаунта</button>
        </div>
      </section>
      <PopupWithForm
        isOpen={isOpen}
        onClose={closePopup}
        handleUpdateUser={handleUpdateUser}
      />
      <InfoTooltip
        isInfo={isInfo ? 'info_opened': ''}
        onClose={closeInfo}
        logoIcon={logoIcon ? logoIconValid : logoIconNotValid}
        text={valid ? 'Успешно!' : 'Что-то пошло не так.'}
      />
    </>
  );
}

export default Profile;