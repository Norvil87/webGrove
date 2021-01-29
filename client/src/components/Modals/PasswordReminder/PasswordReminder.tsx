import React, { useState } from "react";
import Popup from "reactjs-popup";
import "reactjs-popup/dist/index.css";
import "./PasswordReminder.scss";
import { Link } from "react-router-dom";
import { useForm } from "react-hook-form";

type Inputs = {
  email: string;
};

const PasswordReminder: React.FC = () => {
  const { register, handleSubmit, setError, errors } = useForm<Inputs>();
  const [email, setEmail] = useState("");
  const onFormSubmit = async () => {
    return;
  };

  return (
    <Popup open={true} position="center center" closeOnDocumentClick={false} modal className="user-modal">
      <h2>Восстановление пароля</h2>
      <form action="#" method="POST" onSubmit={handleSubmit(onFormSubmit)}>
        <div className="form-input-container">
          <label htmlFor="email">Email</label>
          <input
            id="email"
            name="email"
            type="text"
            value={email}
            ref={register({ required: true, pattern: /[a-z0-9._%+-]+@[a-z0-9.-]+\.[a-z]{2,4}$/ })}
            onChange={evt => setEmail(evt.target.value)}
          />
          {errors.email?.type === "required" && (
            <span className="form-validate-message form-validate-message--fail">
              Это поле обязательно для заполнения!
            </span>
          )}
          {errors.email?.type === "pattern" && (
            <span className="form-validate-message form-validate-message--fail">
              Неверный формат электронной почты!
            </span>
          )}
        </div>
        <div className="vertical-btnCont">
          <button type="submit" className="button button-primary password-reminder__submit">
            Выслать
          </button>
          <Link to="/" className="button user-login__cancel">
            Отмена
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
