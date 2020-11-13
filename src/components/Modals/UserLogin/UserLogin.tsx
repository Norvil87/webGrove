import React from "react";
import Popup from "reactjs-popup";
import "reactjs-popup/dist/index.css";
import "./UserLogin.scss";
import { Link, BrowserRouter as Router, Route, Switch } from "react-router-dom";

const UserLogin: React.FC = () => {
  return (
    <Popup open={true} position="center center" closeOnDocumentClick={false} modal className="user-modal">
      <h2>Вход</h2>
      <form action="#" method="POST">
        <div className="form-input-container">
          <label htmlFor="email">Email</label>
          <input id="email" name="email" type="email" />
        </div>
        <div className="form-input-container">
          <label htmlFor="password">Пароль</label>
          <input id="password" name="password" type="password" />
        </div>
        <div className="vertical-btnCont">
          <Link to="/" className="button button-primary user-login__submit">
            Войти
          </Link>
          <Link to="/" className="button user-login__cancel">
            Отмена
          </Link>
        </div>
      </form>
      <Link to="/login/reminder" className="user-login__reminder-link">
        Забыли пароль?
      </Link>
      <p className="user-login__register">
        Если у вас еще нет аккаунта, <Link to="/register">зарегистрируйтесь</Link>
      </p>
    </Popup>
  );
};

export default UserLogin;
