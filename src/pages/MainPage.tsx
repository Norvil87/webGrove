import React from "react";
import Roadmap from "../components/Roadmap/Roadmap";
import "./MainPage.scss";
import { Link } from "react-router-dom";

const MainPage: React.FC = () => {
  return (
    <main className="content">
      <section className="content__intro">
        <h2>Если ты заинтересовался вэб-разработкой, ты попал в правильное место</h2>
        <p>
          Не знаем, случайно ли ты забрел на эту страницу или попал сюда в стремлении стать профессиональным
          вэб-разработчиком, но ты оказался в нужном месте в нужное время.
        </p>
        <p>
          Здесь новичкам помогут научиться основам верстки и программирования, опытные разработчики смогут расширить
          свой профессиональный кругозор. Профессия вэб разработчика востребована на рынке и хорошо оплачивается.
        </p>
        <p>Достаточно слов. Кликни на кнопку внизу, узнай свой путь в профессии. И удачи тебе!</p>
      </section>
      <Roadmap />
      <section className="content__courses">
        <h2>Курсы</h2>
        <p>Доступны следующие курсы:</p>
        <ul className="course-list">
          <li className="course-list__course-card">
            <Link to="/courses/html" className="course-list__html-card">
              <h4>HTML</h4>
              <div>html logo</div>
              <div className="content__course-stats">
                <p>6 уроков</p>
                <p>43 упражнения</p>
              </div>
              <button type="button">Приступить</button>
            </Link>
          </li>
          <li className="course-list__course-card">
            <Link to="/courses/html" className="course-list__css-card">
              <h4>CSS</h4>
              <div>css logo</div>
              <div className="content__course-stats">
                <p>Статистика недоступна</p>
              </div>
              <button type="button">Приступить</button>
            </Link>
          </li>
          <li className="course-list__course-card">
            <Link to="/courses/html" className="course-list__js-card">
              <h4>JavaScript</h4>
              <div>js logo</div>
              <div className="content__course-stats">
                <p>Статистика недоступна</p>
              </div>
              <button type="button">Приступить</button>
            </Link>
          </li>
        </ul>
      </section>
      <section className="content__articles">
        <h2>Статьи</h2>
        <p>Изучение вэб-разработки невозможно без чтения статей и технической доментации.</p>
        <Link to="/articles">Все статьи</Link>
      </section>
      <section className="content__reviews">
        <h2>Отзывы</h2>
        <p>Смогли ли мы кому-то помочь?</p>
        <p>Отзывов еще нет(</p>
      </section>
    </main>
  );
};

export default MainPage;
