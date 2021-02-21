import React from 'react';
import './Profile.css'

function Profile(props) {
  return (
    <>
      <section className="profile">
        <p className="profile__user-name">Привет, {props.name}!</p>
        <div className="profile__data">
          <ul className="profile__data-list">
            <li className="profile__data-list-item">Имя</li>
            <li className="profile__data-list-item profile_pad">Почта</li>
          </ul>
          <ul className="profile__data-user">
            <li className="profile__data-list-user">{props.name}</li>
            <li className="profile__data-list-user profile_pad">{props.email}</li>
          </ul>
        </div>
        <div className="profile__button">
          <button className="profile__button-change">Редактировать</button>
          <button className="profile__button-logout">Выйти из аккаунта</button>
        </div>
      </section>

    </>
  );
}

export default Profile;