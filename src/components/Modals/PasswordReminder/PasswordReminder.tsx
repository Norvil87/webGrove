import React from "react";
import Popup from "reactjs-popup";
import "reactjs-popup/dist/index.css";
import "./PasswordReminder.scss";
import { Link, BrowserRouter as Router, Route } from "react-router-dom";

const PasswordReminder: React.FC = () => {
  return (
    <Popup open={true} position="center center" closeOnDocumentClick={false} modal className="user-modal">
      <h2>Восстановление пароля</h2>
      <form action="#" method="POST">
        <div className="form-input-container">
          <label htmlFor="email">Email</label>
          <input id="email" name="email" type="email" />
        </div>
        <div className="vertical-btnCont">
          <Link to="/" className="button button-primary password-reminder__submit">
            Выслать
          </Link>
        </div>
      </form>
      <p className="password-reminder__nav">
        <Link to="/login">Войдите</Link> или <Link to="/register">зарегистрируйтесь</Link>
      </p>
    </Popup>
  );
};

export default PasswordReminder;
