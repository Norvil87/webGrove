import React from "react";
import Roadmap from "../components/Roadmap/Roadmap";
import "./MainPage.scss";
import { Link } from "react-router-dom";
import { setCourseStructure } from "../store/actions";
import { useDispatch } from "react-redux";

const MainPage: React.FC = () => {
  const dispatch = useDispatch();

  const handleCourseLinkClick = (courseUrl: string) => () => {
    dispatch(setCourseStructure({ url: courseUrl, title: null, info: null, lessons: null, id: null }));
  };

  return (
    <>
      <section className="content__intro centrifier">
        <h2>Если ты заинтересовался вэб-разработкой, ты попал в правильное место</h2>
        <p>Здесь должен быть небольшой текст про очередность выполнения заданий</p>
      </section>
      <Roadmap />
      <section id="courses" className="content__courses centrifier">
        <h2>Курсы</h2>
        <ul className="course-list">
          <li className="course-list__course-card course-list__html-card">
            <Link to="/courses/html" onClick={handleCourseLinkClick("html")}>
              <h3>HTML</h3>
              <button className="button" type="button">
                Приступить
              </button>
            </Link>
          </li>
          <li className="course-list__course-card course-list__css-card">
            <Link to="/courses/css" onClick={handleCourseLinkClick("css")}>
              <h3>CSS</h3>
              <button className="button" type="button">
                Приступить
              </button>
            </Link>
          </li>
          <li className="course-list__course-card course-list__js-card">
            <Link to="/courses/js" onClick={handleCourseLinkClick("js")}>
              <h3>JavaScript</h3>
              <button className="button" type="button">
                Приступить
              </button>
            </Link>
          </li>
        </ul>
      </section>
      <section id="articles" className="content__articles">
        <h2>Статьи</h2>
        <Link to="/articles" style={{ display: "block", textAlign: "center", fontSize: 18 }}>
          Статей еще нет, но обязательно будут
        </Link>
      </section>
    </>
  );
};

export default MainPage;
