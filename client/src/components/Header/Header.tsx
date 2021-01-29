import React from "react";
import "./Header.scss";
import { Link, Redirect } from "react-router-dom";
import { useSelector } from "react-redux";
import { IRootState } from "../../store/types";

const Header = () => {
  const user = useSelector((state: IRootState) => state.user);

  return (
    <div className="header-wrapper">
      <header className="header centrifier">
        <div className="logo">
          <Link to="/" aria-label="Логотип сайта webgrove">
            <svg width="50" height="50" x="0px" y="0px" viewBox="0 0 441.302 441.302" xmlSpace="preserve">
              <g>
                <path
                  d="M7.096,296.19c69.199-20.968,141.049-31.6,213.555-31.6s144.355,10.632,213.555,31.6c0.531,0.161,1.068,0.238,1.597,0.238   c2.36,0,4.542-1.531,5.262-3.906c0.881-2.907-0.762-5.978-3.669-6.859c-26.28-7.963-52.936-14.456-79.863-19.466v-17.581   c8.04-0.821,19.7-4.621,19.7-22.228c0-8.15-2.421-19.426-6.169-28.727c-5.099-12.658-11.68-19.348-19.031-19.348   s-13.933,6.69-19.031,19.348c-3.748,9.301-6.169,20.577-6.169,28.727c0,17.607,11.66,21.407,19.7,22.228v15.627   c-17.035-2.906-34.172-5.224-51.385-6.942v-21.031c8.969-0.779,22.591-4.724,22.591-24.748c0-15.765-9.844-54.323-28.091-54.323   c-8.073,0-15.361,7.498-21.075,21.682c-4.262,10.578-7.015,23.39-7.015,32.641c0,20.024,13.621,23.969,22.59,24.748v20.016   c-19.258-1.636-38.602-2.528-57.996-2.669v-28.064c10.119-0.684,25.48-4.618,25.48-27.283c0-17.578-10.856-60.57-30.98-60.57   c-20.125,0-30.981,42.991-30.981,60.57c0,22.666,15.362,26.599,25.481,27.283v28.064c-19.394,0.142-38.737,1.034-57.994,2.669   v-20.016c8.969-0.779,22.588-4.726,22.588-24.748c0-15.765-9.844-54.323-28.09-54.323c-8.073,0-15.361,7.498-21.076,21.682   c-4.262,10.578-7.015,23.39-7.015,32.641c0,20.026,13.624,23.97,22.593,24.748v21.031c-17.214,1.718-34.351,4.036-51.387,6.942   v-15.627c8.04-0.821,19.7-4.621,19.7-22.228c0-8.15-2.421-19.426-6.168-28.727c-5.1-12.658-11.681-19.348-19.032-19.348   s-13.932,6.69-19.031,19.348c-3.747,9.301-6.168,20.577-6.168,28.727c0,17.607,11.66,21.407,19.7,22.228v17.581   c-26.927,5.01-53.583,11.503-79.863,19.466c-2.907,0.881-4.55,3.952-3.669,6.859C1.119,295.428,4.192,297.07,7.096,296.19z    M337.832,226.387c0-6.749,2.159-16.642,5.372-24.617c4.097-10.17,7.84-12.459,8.828-12.459s4.731,2.289,8.828,12.459   c3.213,7.975,5.372,17.868,5.372,24.617c0,7.761-2.125,11.455-14.2,11.455C342.411,237.842,337.832,236.128,337.832,226.387z    M272.558,211.52c0-7.833,2.499-19.298,6.218-28.53c4.714-11.701,9.173-14.792,10.872-14.792s6.159,3.092,10.873,14.792   c3.719,9.232,6.218,20.698,6.218,28.53c0,10.555-4.153,13.943-17.091,13.943S272.558,222.075,272.558,211.52z M134.564,211.52   c0-7.833,2.499-19.298,6.218-28.53c4.714-11.701,9.173-14.792,10.873-14.792s6.158,3.092,10.872,14.792   c3.719,9.232,6.218,20.698,6.218,28.53c0,10.555-4.153,13.943-17.09,13.943C138.717,225.463,134.564,222.075,134.564,211.52z    M75.07,226.387c0-6.749,2.159-16.642,5.372-24.617c4.097-10.17,7.84-12.459,8.828-12.459s4.731,2.289,8.829,12.459   c3.213,7.975,5.372,17.868,5.372,24.617c0,7.761-2.125,11.455-14.2,11.455C79.649,237.842,75.07,236.128,75.07,226.387z    M200.67,198.268c0-19.92,11.951-49.57,19.981-49.57c8.029,0,19.98,29.649,19.98,49.57c0,12.438-4.855,16.43-19.98,16.43   C205.525,214.699,200.67,210.706,200.67,198.268z"
                  fill="#48bd48"
                />
                <path
                  d="M437.396,316.663c-70.233-21.281-143.157-32.072-216.744-32.072c-73.587,0-146.511,10.791-216.745,32.072   c-2.907,0.881-4.55,3.952-3.669,6.859c0.881,2.907,3.954,4.55,6.858,3.669c69.199-20.968,141.049-31.6,213.555-31.6   s144.355,10.632,213.555,31.6c0.531,0.161,1.068,0.238,1.597,0.238c2.36,0,4.542-1.531,5.262-3.906   C441.945,320.615,440.303,317.544,437.396,316.663z "
                  fill="#dede11"
                />
                <path
                  d="M437.396,347.664c-70.233-21.281-143.157-32.072-216.744-32.072c-73.587,0-146.511,10.791-216.745,32.072   c-2.907,0.881-4.55,3.952-3.669,6.859c0.881,2.907,3.954,4.55,6.858,3.669c69.199-20.968,141.049-31.6,213.555-31.6   s144.355,10.632,213.555,31.6c0.531,0.161,1.068,0.238,1.597,0.238c2.36,0,4.542-1.531,5.262-3.906   C441.945,351.616,440.303,348.545,437.396,347.664z "
                  fill="#bd4f4f"
                />
              </g>
            </svg>
          </Link>
        </div>
        <nav>
          <ul>
            <li>
              <Link to="/#roadmap">Путь разработчика</Link>
            </li>
            <li>
              <Link to="/#courses">Курсы</Link>
            </li>
            <li>
              <Link to="/articles">Статьи</Link>
            </li>
          </ul>
        </nav>
        {user.username ? (
          <p className="header__greeting">{` ${user.username}, ты опять хакнул систему?`}</p>
        ) : (
          <div className="header__buttonCont">
            <Link to="/login" className="button header__login-button">
              Войти
            </Link>
            <Link to="/register" className="button button-primary header__registration-button">
              Регистрация
            </Link>
          </div>
        )}
      </header>
    </div>
  );
};

export default Header;
