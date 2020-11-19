import React from "react";
import { Link } from "react-router-dom";
import roadmap from "../../img/roadmap_ru.png";
import "./Roadmap.scss";
import { setCourse } from "../../store/actions";
import { useDispatch } from "react-redux";
import { ICourse } from "../../types";

import { Html } from "../../data/courses/HTML/HTML";
import { Css } from "../../data/courses/CSS/СSS";
import { Js } from "../../data/courses/JS/JS";

const Roadmap: React.FC = () => {
  const dispatch = useDispatch();
  const handleCourseLinkClick = (course: ICourse) => () => {
    dispatch(setCourse(course));
  };

  return (
    <section id="roadmap" className="roadmap content__roadmap">
      <h2>Путь разработчика</h2>
      <div className="roadmap__container">
        <img src={roadmap} />
        <Link
          to="/courses/html"
          className="roadmap__link roadmap__course-link html-link"
          onClick={handleCourseLinkClick(Html)}
        >
          <span>HTML</span> Пройти курс
        </Link>
        <Link
          to="/courses/css"
          className="roadmap__link roadmap__course-link css-link"
          onClick={handleCourseLinkClick(Css)}
        >
          <span>CSS</span> Пройти курс
        </Link>
        <Link
          to="/courses/js"
          className="roadmap__link roadmap__course-link js-link"
          onClick={handleCourseLinkClick(Js)}
        >
          <span>Javascript</span> Пройти курс
        </Link>

        <a
          href="https://developer.mozilla.org/ru/docs/%D0%A1%D0%BB%D0%BE%D0%B2%D0%B0%D1%80%D1%8C/DNS"
          target="_blank"
          className="roadmap__link  roadmap__article-link dns-link"
        >
          <span>Как работает DNS</span>
        </a>
        <a
          href="https://developer.mozilla.org/ru/docs/Learn/Understanding_domain_names"
          target="_blank"
          className="roadmap__link  roadmap__article-link domain-link"
        >
          <span>Что такое доменное имя</span>
        </a>
        <a
          href="https://developer.mozilla.org/ru/docs/%D0%A1%D0%BB%D0%BE%D0%B2%D0%B0%D1%80%D1%8C/Host"
          target="_blank"
          className="roadmap__link  roadmap__article-link hosting-link"
        >
          <span>Что такое хост</span>
        </a>
        <a
          href="https://developer.mozilla.org/ru/docs/Learn/How_the_Internet_works"
          target="_blank"
          className="roadmap__link  roadmap__article-link internet-link"
        >
          <span>Как работает Интернет</span>
        </a>
        <a
          href="https://developer.mozilla.org/ru/docs/%D0%A1%D0%BB%D0%BE%D0%B2%D0%B0%D1%80%D1%8C/HTTP"
          target="_blank"
          className="roadmap__link  roadmap__article-link http-link"
        >
          <span>Что такое HTTP</span>
        </a>
        <a
          href="https://ru.wikipedia.org/wiki/%D0%91%D1%80%D0%B0%D1%83%D0%B7%D0%B5%D1%80"
          target="_blank"
          className="roadmap__link  roadmap__article-link browser-link"
        >
          <span>Как работают браузеры</span>
        </a>
      </div>
    </section>
  );
};

export default Roadmap;
