import React, { useState } from "react";
import Popup from "reactjs-popup";
import "reactjs-popup/dist/index.css";
import "./UserRegistration.scss";
import { Link } from "react-router-dom";
import { post } from "../../../../services";
import { useForm } from "react-hook-form";
import { useDispatch } from "react-redux";
import { setUser } from "../../../store/actions";

type Inputs = {
  email: string;
  username: string;
  password: string;
  passwordConfirm: string;
};

interface RegisterDataInResponse {
  message: string;
  success: boolean;
  id: string;
}

const UserRegistration: React.FC = () => {
  const [userProfile, setUserProfile] = useState({
    id: "",
    email: "user@user.ru",
    username: "User",
    password: "useruser",
    passwordConfirm: "useruser",
  });

  const [responseMessage, setResponseMessage] = useState(null);
  const [registerSuccess, setRegisterSuccess] = useState(null);
  const { register, handleSubmit, setError, errors } = useForm<Inputs>();
  const dispatch = useDispatch();

  const handleLoginLinkClick = () => {
    const { email, username, id } = userProfile;
    dispatch(setUser({ email, username, id }));
  };

  const onFormSubmit = async () => {
    const data: RegisterDataInResponse = await post("http://localhost:8081/register", {
      ...userProfile,
      roles: ["user"],
    });

    setResponseMessage(data.message);
    setRegisterSuccess(data.success);
    if (data.success) {
      setUserProfile({ ...userProfile, id: data.id });
    }
  };

  return (
    <Popup open={true} position="center center" closeOnDocumentClick={false} modal className="user-modal">
      <h2>Регистрация</h2>

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
          <label htmlFor="username">Имя пользователя</label>
          <input
            id="username"
            name="username"
            type="text"
            value={userProfile.username}
            ref={register({ required: true, minLength: 3 })}
            onChange={evt => setUserProfile({ ...userProfile, username: evt.target.value })}
          />
          {errors.username?.type === "required" && (
            <span className="form-validate-message form-validate-message--fail">
              Это поле обязательно для заполнения!
            </span>
          )}
          {errors.username?.type === "minLength" && (
            <span className="form-validate-message form-validate-message--fail">
              Имя пользователя должно состоять минимум из 3 символов!
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
            ref={register({ required: true, minLength: 6 })}
            onChange={evt => setUserProfile({ ...userProfile, password: evt.target.value })}
          />
          {errors.password?.type === "required" && (
            <span className="form-validate-message form-validate-message--fail">
              Это поле обязательно для заполнения!
            </span>
          )}
          {errors.password?.type === "minLength" && (
            <span className="form-validate-message form-validate-message--fail">
              Пароль должен состоять минимум из 6 символов!
            </span>
          )}
        </div>
        <div className="form-input-container">
          <label htmlFor="passwordConfirm">Повторите пароль</label>
          <input
            id="passwordConfirm"
            name="passwordConfirm"
            type="password"
            ref={register({ required: true })}
            value={userProfile.passwordConfirm}
            onChange={evt => {
              setUserProfile({ ...userProfile, passwordConfirm: evt.target.value });
              setError("passwordConfirm", {
                type: "manual",
              });
            }}
          />
          {errors.passwordConfirm?.type === "required" && (
            <span className="form-validate-message form-validate-message--fail">
              Это поле обязательно для заполнения!
            </span>
          )}
          {errors.passwordConfirm?.type === "manual" && (
            <span
              className={`form-validate-message ${
                userProfile.password !== userProfile.passwordConfirm
                  ? "form-validate-message--fail"
                  : "form-validate-message--success"
              }`}
            >
              {userProfile.password === userProfile.passwordConfirm ? "Пароли совпадают!" : "Пароли не совпадают!"}
            </span>
          )}
        </div>

        <p
          className={`form-register-status ${
            registerSuccess ? "form-validate-message--success" : "form-validate-message--fail"
          }`}
        >
          {responseMessage}
        </p>

        <div className="vertical-btnCont">
          {registerSuccess ? (
            <Link to="/" className="button button-primary user-registration__submit" onClick={handleLoginLinkClick}>
              Войти
            </Link>
          ) : (
            <button type="submit" className="button button-primary user-registration__submit">
              Зарегистрироваться
            </button>
          )}

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
