import React from "react";
import Popup from "reactjs-popup";
import "reactjs-popup/dist/index.css";
import "./UserRegistration.scss";
import { Link } from "react-router-dom";

const UserRegistration: React.FC = () => {
  return (
    <Popup open={true} position="center center" closeOnDocumentClick={false} modal className="user-modal">
      <h2>Регистрация</h2>
      <form action="#" method="POST">
        <div className="form-input-container">
          <label htmlFor="email">Email</label>
          <input id="email" name="email" type="email" />
        </div>
        <div className="form-input-container">
          <label htmlFor="nickname">Никнейм</label>
          <input id="nickname" name="nickname" type="text" />
        </div>
        <div className="form-input-container">
          <label htmlFor="password">Пароль</label>
          <input id="password" name="password" type="password" />
        </div>
        <div className="form-input-container">
          <label htmlFor="password-confirm">Повторите пароль</label>
          <input id="password-confirm" name="password-confirm" type="password" />
        </div>
        <div className="vertical-btnCont">
          <Link to="/" className="button button-primary user-registration__submit">
            Зарегистрироваться
          </Link>
          <Link to="/" className="button user-registration__cancel">
            Отмена
          </Link>
        </div>
      </form>
      <p className="user-registration__login">
        Если у вас уже есть аккаунт, <Link to="/login">войдите</Link>
      </p>
    </Popup>
  );
};

export default UserRegistration;
