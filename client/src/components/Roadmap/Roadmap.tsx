import React from "react";
import { Link } from "react-router-dom";
import roadmap from "../../img/roadmap_ru.png";
import "./Roadmap.scss";
import { setCourseStructure } from "../../store/actions";
import { useDispatch } from "react-redux";

const Roadmap: React.FC = () => {
  const dispatch = useDispatch();
  const handleCourseLinkClick = (courseUrl: string) => () => {
    dispatch(setCourseStructure({ url: courseUrl, title: null, info: null, lessons: null, id: null }));
  };

  return (
    <section id="roadmap" className="roadmap content__roadmap">
      <h2>Путь разработчика</h2>
      <div className="roadmap__container">
        <img src={roadmap} width="1000" height="1000" alt="Карта развития Frontend разработчика" />
        <Link
          to="/courses/html"
          className="roadmap__link roadmap__course-link html-link"
          onClick={handleCourseLinkClick('html')}
        >
          <span>HTML</span> Пройти курс
        </Link>
        <Link
          to="/courses/css"
          className="roadmap__link roadmap__course-link css-link"
          onClick={handleCourseLinkClick('css')}
        >
          <span>CSS</span> Пройти курс
        </Link>
        <Link
          to="/courses/js"
          className="roadmap__link roadmap__course-link js-link"
          onClick={handleCourseLinkClick('js')}
        >
          <span>Javascript</span> Пройти курс
        </Link>

        <a
          href="https://finfocus.today/kak-rabotaet-internet.html"
          target="_blank"
          className="roadmap__link roadmap__article-link internet-link"
        >
          <span>Интернет</span>
        </a>
        <a
          href="https://www.cloudflare.com/learning/dns/what-is-dns/"
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
          href="https://www.ntchosting.com/encyclopedia/hosting/host/"
          target="_blank"
          className="roadmap__link  roadmap__article-link hosting-link"
        >
          <span>Что такое хост</span>
        </a>
        <a
          href="https://developer.mozilla.org/ru/docs/Web"
          target="_blank"
          className="roadmap__link  roadmap__article-link web-overview-link"
        >
          <span>Как работает Интернет</span>
        </a>
        <a
          href="https://developer.mozilla.org/en-US/docs/Web/HTTP/Overview"
          target="_blank"
          className="roadmap__link  roadmap__article-link http-link"
        >
          <span>Что такое HTTP</span>
        </a>
        <a
          href="https://developer.mozilla.org/ru/docs/Web/Performance/How_browsers_work"
          target="_blank"
          className="roadmap__link  roadmap__article-link browser-link"
        >
          <span>Как работают браузеры</span>
        </a>

        <a
          href="https://webdesign-master.ru/blog/html-css/4.html"
          target="_blank"
          className="roadmap__link  roadmap__article-link htmlbase-link"
        >
          <span>Изучение основ</span>
        </a>
        <a
          href="https://rightblog.ru/2757"
          target="_blank"
          className="roadmap__link  roadmap__article-link htmlsemantics-link"
        >
          <span>Семантический HTML</span>
        </a>
        <a
          href="https://developer.mozilla.org/ru/docs/Learn/HTML/Forms"
          target="_blank"
          className="roadmap__link  roadmap__article-link htmlforms-link"
        >
          <span>Формы и валидация</span>
        </a>
        <a
          href="https://developer.mozilla.org/ru/docs/HTML/HTML5"
          target="_blank"
          className="roadmap__link  roadmap__article-link html5-link"
        >
          <span>Стандарт HTML5</span>
        </a>
        <a
          href="https://netpeak.net/ru/blog/optimizatsiya-dlya-novichkov-html-tegi-i-atributy-v-seo/"
          target="_blank"
          className="roadmap__link  roadmap__article-link htmlseo-link"
        >
          <span>Основы SEO</span>
        </a>
        <a
          href="https://developer.mozilla.org/en-US/docs/Learn/Accessibility/HTML"
          target="_blank"
          className="roadmap__link  roadmap__article-link htmlaccessability-link"
        >
          <span>Доступность</span>
        </a>
      </div>
    </section>
  );
};

export default Roadmap;
