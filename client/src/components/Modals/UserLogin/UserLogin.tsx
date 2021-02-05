import React, { useState } from "react";
import Popup from "reactjs-popup";
import "reactjs-popup/dist/index.css";
import "./UserLogin.scss";
import { Link, Redirect } from "react-router-dom";
import { post } from "../../../../services";
import { useForm } from "react-hook-form";
import { useDispatch } from "react-redux";
import { setUser } from "../../../store/actions";

type Inputs = {
  email: string;
  password: string;
};

interface LoginDataInResponse {
  id: string;
  message: string;
  success: boolean;
  username: string;
  email: string;
  accessToken: string;
}

const UserLogin: React.FC = () => {
  const [userProfile, setUserProfile] = useState({
    username: "",
    email: "user@user.ru",
    password: "useruser",
  });
  const [responseMessage, setResponseMessage] = useState(null);
  const [loginSuccess, setLoginSuccess] = useState(false);
  const { register, handleSubmit, errors } = useForm<Inputs>();
  const dispatch = useDispatch();

  const onFormSubmit = async () => {
    const data: LoginDataInResponse = await post("http://localhost:8081/login", userProfile);
    const { id, username, email, accessToken, success, message } = data;

    if (!data || !success) {
      setResponseMessage(message);
    } else {
      dispatch(setUser({ id, username, email }));
      setLoginSuccess(true);
      if (accessToken) {
        localStorage.setItem("webgroveUser", JSON.stringify(data));
      }
    }
  };

  return (
    <Popup open={true} position="center center" closeOnDocumentClick={false} modal className="user-modal">
      <h2>Вход</h2>
      <form action="#" method="POST" onSubmit={handleSubmit(onFormSubmit)}>
        <div className="form-input-container">
          <label htmlFor="email">Email</label>
          <input
            id="email"
            name="email"
            type="text"
            value={userProfile.email}
            ref={register({ required: true, pattern: /[a-z0-9._%+-]+@[a-z0-9.-]+\.[a-z]{2,4}$/ })}
            onChange={evt => setUserProfile({ ...userProfile, email: evt.target.value })}
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
        <div className="form-input-container">
          <label htmlFor="password">Пароль</label>
          <input
            id="password"
            name="password"
            type="password"
            value={userProfile.password}
            ref={register({ required: true })}
            onChange={evt => setUserProfile({ ...userProfile, password: evt.target.value })}
          />
          {errors.password?.type === "required" && (
            <span className="form-validate-message form-validate-message--fail">
              Это поле обязательно для заполнения!
            </span>
          )}
        </div>
        <p className="form-register-status form-validate-message--fail">{responseMessage}</p>
        <div className="vertical-btnCont">
          <button type="submit" className="button button-primary user-login__submit">
            Войти{" "}
          </button>
          {loginSuccess && <Redirect to="/" />}
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
