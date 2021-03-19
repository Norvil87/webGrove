const Solution = {
  HTML: {
    HTMLIntro: {
      1: {
        html: `<p>Завтра начну изучать вэб-разработку!</p>`,
        css: ``,
        js: ``,
      },
      2: {
        html: `<p>Пожалуй, начну изучать вэб-разработку сегодня!</p>
        <p>Начну с основ HTML</p>`,
        css: ``,
        js: ``,
      },
      3: {
        html: `<main>
        <div>
          <span>Этот элемент уже обернут в тэг div</span>
        </div>
        <div>
          <p>Пожалуй, начну изучать вэб-разработку сегодня!</p>
          <p>Начну с основ HTML</p>
        </div>
      </main>>`,
        css: ``,
        js: ``,
      },
      4: {
        html: `<h1>Москва</h1>
        <h2>Культура</h2>
        <h3>Музеи</h3>
        <h3>Театры</h3>
        <h2>Отдых</h2>
        <h3>Парки</h3>
        <h3>Кинотеатры</h3>`,
        css: ``,
        js: ``,
      },
      5: {
        html: `<div>
        <h2>Культура</h2>
        <h3>Музеи</h3>
        <h3>Театры</h3>
      </div>
      <div>
        <h2>Отдых</h2>
        <h3>Парки</h3>
        <h3>Кинотеатры</h3>
      </div>`,
        css: ``,
        js: ``,
      },
      6: {
        html: `<p>В Москве огромное количество музеев, но среди них выделяются настоящие гиганты исторических, технических и художественных экспозиций, которые необходимо посетить хотя бы один раз в жизни.</p>
        <h3>Театры</h3>
        <p>Москва славится своими театрами <span>не только на всю Россию, но и на весь мир.</span> На сценах московских театров, которых насчитывается великое множество, проходят и классические и современные постановки. И в Москву часто приезжают театралы со всего мира.</p>`,
        css: ``,
        js: ``,
      },
      7: {
        html: `<p>Москва славится своими театрами <span>не только на всю Россию, но и на весь мир.</span> На сценах московских театров, которых насчитывается <em>великое множество</em>, проходят <strong>и классические и современные постановки.</strong> И в Москву часто приезжают театралы со всего мира.</p>`,
        css: ``,
        js: ``,
      },
      8: {
        html: ` <p>Москва славится своими театрами <span>не только на всю Россию, но и на весь мир.</span><br> На сценах московских театров, которых насчитывается <em>великое множество</em>, проходят <strong>и классические и современные постановки.</strong> И в Москву часто приезжают театралы со всего мира.</p><hr>`,
        css: ``,
        js: ``,
      },
      9: {
        html: ` <ul>
        <li>Парк Горького</li>
        <li>Нескучный сад</li>
        <li>Парк Победы</li>
      </ul>`,
        css: ``,
        js: ``,
      },
      10: {
        html: ` <ol>
        <li>Москва</li>
        <li>Атриум</li>
        <li>Родина</li>
      </ol>`,
        css: ``,
        js: ``,
      },
      11: {
        html: `<div id="leisure">
        
        <h2 class="big-header">Отдых</h2>
        
        <ul style="color: darkorchid">
        
        <ol style="background-color: burlywood">`,
        css: ``,
        js: ``,
      },
      12: {
        html: `<img src="http://uploads.gazeta-moy-rayon-donskoy.ru/2020/07/парк-горького-москва-панорама-вк-пг.jpg" alt="Парк Горького" />`,
        css: ``,
        js: ``,
      },
    },
    HTMLDocument: {
      1: {
        html: `<!DOCTYPE html>
        <html>
        </html>`,
        css: ``,
        js: ``,
      },
      2: {
        html: `<head>
        <title>Достопримечательности Москвы</title>
      </head>`,
        css: ``,
        js: ``,
      },
      3: {
        html: `<body></body>`,
        css: ``,
        js: ``,
      },
      4: {
        html: `<a href="https://polymus.ru/ru/">Политехнический музей Москвы</a>`,
        css: ``,
        js: ``,
      },
      5: {
        html: `<a href="https://en.wikipedia.org/wiki/Bolshoi_Theatre">
        <img src="https://adindex.ru/files2/news/2018_12/230066_4567.jpg" alt="Большой театр" />
      </a>`,
        css: ``,
        js: ``,
      },
      6: {
        html: `<a href="./parks.html">Узнать больше о парках</a>
        
        <a href="./cinemas.html">Полный список кинотеатров</a>`,
        css: ``,
        js: ``,
      },
      7: {
        html: `<ul>
        <li>
          <a href="#culture">Культура</a>
        </li>
        <li>
          <a href="#leisure">Отдых</a>
        </li>
      </ul>`,
        css: ``,
        js: ``,
      },
      8: {
        html: `<!--Комментарий-->`,
        css: ``,
        js: ``,
      },
    },
    HTMLTable: {
      1: {
        html: `<table>

        </table>`,
        css: ``,
        js: ``,
      },
      2: {
        html: `<tr>
        </tr>
        <tr>
        </tr>
        <tr>
        </tr>
        <tr>
        </tr>`,
        css: ``,
        js: ``,
      },
      3: {
        html: ` <tr>
        <td>XR</td>
        <td>пластик</td>
        <td>40</td>
        <td>4000</td>
      </tr>
      <tr>
        <td>XR-1 PRO</td>
        <td>пластик</td>
        <td>60</td>
        <td>7000</td>
      </tr>
      <tr>
        <td>XT-8</td>
        <td>алюминий</td>
        <td>45</td>
        <td>6000</td>
      </tr>
      <tr>
        <td>XT-8 ULTRA</td>
        <td></td>
        <td></td>
        <td></td>
      </tr>`,
        css: ``,
        js: ``,
      },
      4: {
        html: ` <tr>
        <th scope="col">Модель</th>
        <th scope="col">Корпус</th>
        <th scope="col">Кол-во языков</th>
        <th scope="col">Стоимость, руб.</th>
      </tr>`,
        css: ``,
        js: ``,
      },
      5: {
        html: ` <thead>
        <tr>
          <th scope="col">Модель</th>
          <th scope="col">Корпус</th>
          <th scope="col">Кол-во языков</th>
          <th scope="col">Стоимость, руб.</th>
        </tr>
      </thead>
      <tbody>
        <tr>
          <td>XR</td>
          <td>пластик</td>
          <td>40</td>
          <td>4000</td>
        </tr>
        <tr>
          <td>XR-1 PRO</td>
          <td>пластик</td>
          <td>60</td>
          <td>7000</td>
        </tr>
        <tr>
          <td>XT-8</td>
          <td>алюминий</td>
          <td>45</td>
          <td>6000</td>
        </tr>
        <tr>
          <td>XT-8 ULTRA</td>
          <td></td>
          <td></td>
          <td></td>
        </tr>
      </tbody>`,
        css: ``,
        js: ``,
      },
      6: {
        html: ` <tr>
        <td>XR</td>
        <td rowspan="2">пластик</td>
        <td>40</td>
        <td>4000</td>
      </tr>
      <tr>
        <td>XR-1 PRO</td>
        <td>60</td>
        <td>7000</td>
      </tr>`,
        css: ``,
        js: ``,
      },
      7: {
        html: `<tr>
        <td>XT-8 ULTRA</td>
        <td colspan="3">Технические характеристики отсутствуют</td>
      </tr>`,
        css: ``,
        js: ``,
      },
    },
    HTMLForm: {
      1: {
        html: `<form action="http://webgrove/server" method="POST">

        </form>`,
        css: ``,
        js: ``,
      },
      2: {
        html: `<input type="text" name="username" value="Дмитрий Степанов" placeholder="Иван Сидоров">`,
        css: ``,
        js: ``,
      },
      3: {
        html: `<label for="username">Имя заказчика</label>
        <input id="username" type="text" name="username" placeholder="Иван Сидоров">`,
        css: ``,
        js: ``,
      },
      4: {
        html: `<label for="num-guests">Количество участников</label>
        <input type="number" id="num-guests" name="num-guests" value="4" step="1">`,
        css: ``,
        js: ``,
      },
      5: {
        html: `<label for="tel">Телефон:</label>
        <input type="tel" id="tel" name="tel" maxlength="18" placeholder="8(799)569-12-12">
        <label for="email">E-mail:</label>
        <input type="email" id="email" name="email" placeholder="example@gmail.com">`,
        css: ``,
        js: ``,
      },
      6: {
        html: `<label for="scary">Хотите страшного?</label>
        <select id="scary" name="scary">
          <option value="scary-none">Не страшно</option>
          <option value="scary-low">Немного страшно</option>
          <option value="scary-moderate">Страшновато</option>
          <option value="scary-high">Очень страшно</option>
        </select>`,
        css: ``,
        js: ``,
      },
      7: {
        html: `<input id="reality" type="checkbox" name="type" value="reality">
        <label for="reality">Квест в реальности</label>
        <input id="performance" type="checkbox" name="type" value="performance" checked>
        <label for="performance">Перформанс</label>
        <input id="vr" type="checkbox" name="type" value="vr">
        <label for="vr">Квест в VR</label> `,
        css: ``,
        js: ``,
      },
      8: {
        html: `<input type="radio" name="preference" id="popularity" value="popularity">
        <label for="popularity">Популярность</label>
        <input type="radio" name="preference" id="reviews" value="reviews" checked>
        <label for="reviews">Отзывы</label>
        <input type="radio" name="preference" id="distance" value="distance">
        <label for="distance">Расстояние</label> `,
        css: ``,
        js: ``,
      },
      9: {
        html: `<label for="message">Дополнительная информация:</label>
        <textarea id="message" name="message" cols="10" rows="10">Пожеланий нет</textarea> `,
        css: ``,
        js: ``,
      },
      10: {
        html: `<button type="submit">Показать!</button>`,
        css: ``,
        js: ``,
      },
    },
    HTMLSemantic: {
      1: {
        html: `<header>
        <div class="logo"></div>
        <nav>
          <ul>
            <li><a href="#music">Музыка</a></li>
            <li><a href="#flamenco">Фламенко</a></li>
            <li><a href="#bullfight">Коррида</a></li>
          </ul>
        </nav>
        <button type="button">Войти</button>
      </header>`,
        css: ``,
        js: ``,
      },
      2: {
        html: `<main>
        <div>
        <h1>Традиционная Андалусия</h1>
          <div id="music">
            <h2>Музыка</h2>
            <p>В профессиональной и народной ее формах представляет собой наследие богатой культуры, истоки которой ведут в 6 в. до н. э. В те времена музыкальное искусство древних обитателей той местности – иберов смешалось с кельтской музыкой.</p>
          </div>
          <div id="flamenco">
            <h2>Фламенко</h2>
            <p>Вдохновляющее испанское искусство, родиной которого является южный испанский регион Андалусия. Фламенко — это единство музыки, танца и пения, это  искусство, которое передает эмоцию момента, именно поэтому настоящие выступления фламенко включают в себя живое исполнение песен, игру на гитаре и танец. Для фламенко важна связь со зрителем, отклик и момент действа, вспышка эмоции.</p>
          </div>
          <section id="bullfight">
            <h2>Коррида</h2>
            <p>В Испании существуют тысячи ферм, где выращивают специальных быков для коррид. Все они особых агрессивных пород, легко раздражаемых и готовых атаковать.</p>
          </div>
        </div>  
        <div>
          <h4>Погода в Андалусии</h4>
          <ul>
            <li>18.03: +22</li>
            <li>19.03: +25</li>
            <li>20.03: +24</li>
          </ul>
          <a href="#">Погода подробнее</a>
        </div>
      </main>
      
      <footer>
        <div class="logo"></div>
        <p>Наш телефон: +79901002323</p>
      </footer>`,
        css: ``,
        js: ``,
      },
      3: {
        html: `<article>
        <h1>Традиционная Андалусия</h1>
          <section id="music">
            <h2>Музыка</h2>
            <p>В профессиональной и народной ее формах представляет собой наследие богатой культуры, истоки которой ведут в 6 в. до н. э. В те времена музыкальное искусство древних обитателей той местности – иберов смешалось с кельтской музыкой.</p>
          </section>
          <section id="flamenco">
            <h2>Фламенко</h2>
            <p>Вдохновляющее испанское искусство, родиной которого является южный испанский регион Андалусия. Фламенко — это единство музыки, танца и пения, это  искусство, которое передает эмоцию момента, именно поэтому настоящие выступления фламенко включают в себя живое исполнение песен, игру на гитаре и танец. Для фламенко важна связь со зрителем, отклик и момент действа, вспышка эмоции.</p>
          </section>
          <section id="bullfight">
            <h2>Коррида</h2>
            <p>В Испании существуют тысячи ферм, где выращивают специальных быков для коррид. Все они особых агрессивных пород, легко раздражаемых и готовых атаковать.</p>
          </section>
        </article> `,
        css: ``,
        js: ``,
      },
      4: {
        html: `<aside>
        <h4>Погода в Андалусии</h4>
        <ul>
          <li>18.03: +22</li>
          <li>19.03: +25</li>
          <li>20.03: +24</li>
        </ul>
        <a href="#">Погода подробнее</a>
      </aside> `,
        css: ``,
        js: ``,
      },
      5: {
        html: `<audio controls>
        <source src="http://www.openculture.ru/wp-content/uploads/2011/11/Ravel_Bolero.mp3" type="audio/mp3">
      </audio>

      <video src='https://www.youtube.com/watch?v=VdAkQjfUqJU' controls>Видео не доступно</video> `,
        css: ``,
        js: ``,
      },
      6: {
        html: ` <iframe src="https://gifer.com/embed/7PZg" title="Коррида в Андалусии" width="300" height="200"></iframe> `,
        css: ``,
        js: ``,
      },
    },
  },
  CSS: {
    CSSSelectors: {
      1: {
        html: `<p style="font-family: Tahoma; font-style: italic">Один из самых авторитетных финансово-экономических журналов мира «Forbes» опубликовал список из 10 лучших зоопарков мира. Предлагаем познакомиться с этими замечательными зоопарками.</p>`,
        css: ``,
        js: ``,
      },
      2: {
        html: `<style>
        p {
          font-family: Tahoma;
          font-style: italic;
        }
      </style>`,
        css: ``,
        js: ``,
      },
      3: {
        html: `<link href="./style.css" type="text/css" rel="stylesheet">`,
        css: `p {
          font-family: Tahoma;
          font-style: italic;
        }`,
        js: ``,
      },
      4: {
        html: ``,
        css: `p {
          font-family: Tahoma;
        }
        
        h1 {
          color: DarkSalmon;
        }`,
        js: ``,
      },
      5: {
        html: `<h1 id="main-title" class="title">Лучшие зоопарки мира</h1>`,
        css: `#main-title {
          color: Indigo;
          text-align: center;
        }`,
        js: ``,
      },
      6: {
        html: `<h2 class="destination shadowed">1. Сингапурский зоопарк</h2>`,
        css: `.title {
          color: SeaGreen;
        }
        
        .destination {
          text-align: center;
        }
        
        .shadowed {
          text-shadow: 2px 2px 2px pink;
        }`,
        js: ``,
      },
      7: {
        html: `<h1 class="title">Лучшие зоопарки мира</h1>`,
        css: `.title {
          color: SeaGreen;
          text-align: center;
        }`,
        js: ``,
      },
      8: {
        html: ``,
        css: `h4.destination {
          font-style: italic;
        }`,
        js: ``,
      },
      9: {
        html: ``,
        css: `.description h4 {
          text-shadow: 2px 2px 2px pink;
        }
        
        div a {
          text-decoration: none;
        }`,
        js: ``,
      },
      10: {
        html: ``,
        css: `ol li {
          text-transform: capitalize;
        }
        
        li {
          text-transform: uppercase;
        }`,
        js: ``,
      },
      11: {
        html: ``,
        css: `.shadowed, .description h4 {
          text-shadow: 2px 2px 2px pink;
        }`,
        js: ``,
      },
    },
    CSSText: {
      1: {
        html: ``,
        css: `.serif {
          font-family: serif;
        }
        
        .sans-serif {
          font-family: sans-serif;
        }`,
        js: ``,
      },
      2: {
        html: ``,
        css: `.serif {
          font-family: Georgia, "Times New Roman", serif;
        }
        
        .sans-serif {
          font-family: "Crimson Text", Arial, sans-serif;
        }`,
        js: ``,
      },
      3: {
        html: ``,
        css: `html {
          font-size: 14px;
        }
        
        .small-font {
          font-size: 10px;
         }
         
         .large-font {
          font-size: 1.8rem;
         }`,
        js: ``,
      },
      4: {
        html: ``,
        css: `.italic {
          font-style: italic;
        }`,
        js: ``,
      },
      5: {
        html: ``,
        css: `.bold {
          font-weight: bold;
        }`,
        js: ``,
      },
      6: {
        html: ``,
        css: `.color-keyword {
          color: tan;
        }
        
        .color-hex {
          color: #d2b48c;
        }
        
        .color-rgb {
          color: rgb(210, 180, 140);
        }
        
        .color-hsl {
          color: hsl(34, 44%, 69%);
        }`,
        js: ``,
      },
      7: {
        html: ``,
        css: `.underline {
          text-decoration: underline;
        }
        
        .line-through {
          text-decoration: line-through;
        }`,
        js: ``,
      },
      8: {
        html: ``,
        css: `.capitalize {
          text-transform: capitalize;
        }
        
        .uppercase {
          text-transform: uppercase;
        }`,
        js: ``,
      },
      9: {
        html: ``,
        css: `.simple-shadow {
          text-shadow: 2px 4px;
        }
        
        .blurred-shadow {
          text-shadow: -5px -5px 2px #d55813;
        }`,
        js: ``,
      },
      10: {
        html: ``,
        css: `.right {
          text-align: right;
        }
        
        .center {
          text-align: center;
        }`,
        js: ``,
      },
      11: {
        html: ``,
        css: `.line-height-small {
          line-height: 9px;
        }
        
        .line-height-big {
          line-height: 2;
        }`,
        js: ``,
      },
      12: {
        html: ``,
        css: `.broad-space {
          letter-spacing: 3px;
        }
        
        .narrow-space {
          word-spacing: -0.15rem;
        }`,
        js: ``,
      },
      13: {
        html: ``,
        css: `.overflow-wrapped {
          overflow-wrap: break-word;
        }`,
        js: ``,
      },
      14: {
        html: ``,
        css: `ol {
          list-style-type: upper-roman;
          list-style-position: inside;
        }
        
        ul {
          list-style: none;
        }
        
        .done {
          list-style-type: "\\1F44D";
        }`,
        js: ``,
      },
    },
    CSSUnit: {
      1: {
        html: ``,
        css: `.unit-px {
          width: 200px;
        }`,
        js: ``,
      },
      2: {
        html: ``,
        css: `html {
          font-size: 18px;
        }
        
        .unit-rem li {
          font-size: 1.2rem;
        }
        
        .unit-em li {
          font-size: 1.2em;
        }`,
        js: ``,
      },
      3: {
        html: ``,
        css: `.wrapper {
          width: 80%;
        }
        
        .unit-percent {
          width: 60%;
        }`,
        js: ``,
      },
      4: {
        html: ``,
        css: `.unit-vw {
          width: 70vw;
        }
        
        .unit-vh {
          height: 20vh;
        }`,
        js: ``,
      },
      5: {
        html: ``,
        css: `.named-color {
          background-color: mistyrose;
          color: transparent; 
        }`,
        js: ``,
      },
      6: {
        html: ``,
        css: `.hex-color {
          background-color: #66cdaa;
          color: #0000ff;
        }`,
        js: ``,
      },
      7: {
        html: ``,
        css: `.rgb-color {
          background-color: rgb(136, 94, 160);
          color: rgb(0, 0, 0);
        }
        
        .rgba-color {
          background-color: rgba(103, 75, 60, 0.7);
        }`,
        js: ``,
      },
      8: {
        html: ``,
        css: `.hsl-color {
          background-color: hsl(249, 80%, 67%);
          color: hsl(120, 100%, 50%);
        }
        
        .hsla-color {
          background-color: hsla(220, 85%, 50%, 0.4);
        }`,
        js: ``,
      },
      9: {
        html: `<link href="https://fonts.googleapis.com/css2?family=Lato:ital@1&display=swap" rel="stylesheet">`,
        css: `body {
          font-family: Lato, Arial, sans-serif;
        }`,
        js: ``,
      },
      10: {
        html: ``,
        css: `@font-face {
          font-family: Lato;
          font-weight: 700;
          font-style: italic;
          src: url("./fonts/Lato-italic-bold.woff2") format("woff2"),
               url("./fonts/Lato-italic-bold.woff") format("woff");
        }`,
        js: ``,
      },
    },
    CSSBoxModel: {
      1: {
        html: ``,
        css: `.header-wrapper {
          height: 400px;
        }
        
        .header-wrapper h1{
          width: 400px;
        }
        
        .content {
          width: 70%;
        }`,
        js: ``,
      },
      2: {
        html: ``,
        css: `
        .header-wrapper h1{
          border: 2px dotted white;
        }
        
        .share {
          border: 3px solid rgb(0, 188, 212);
        }`,
        js: ``,
      },
      3: {
        html: ``,
        css: `
        .header-wrapper h1{
          padding-top: 25px;
  padding-bottom: 25px;
  padding-left: 25px;
  padding-right: 25px;
        }
        
        .share {
          padding-top: 15px;
  padding-bottom: 15px;
  padding-left: 5px;
  padding-right: 5px;
        }`,
        js: ``,
      },
      4: {
        html: ``,
        css: `
        .header-wrapper h1{
          padding: 25px;
        }
        
        .share {
          padding: 15px 5px;
        }`,
        js: ``,
      },
      5: {
        html: ``,
        css: `
        .navigation li {
          margin-bottom: 10px;
        }
        
        .share {
          margin: 1rem 2rem;
        }`,
        js: ``,
      },
      6: {
        html: ``,
        css: `
        .header-wrapper h1 {
          margin: 0 auto;
        }
        
        .content {
          margin: 0 auto;
        }`,
        js: ``,
      },
      7: {
        html: ``,
        css: `
        body {
          margin: 0;
          padding: 0;
        }`,
        js: ``,
      },
      8: {
        html: ``,
        css: `
        p {
          min-width: 350px;
          min-height: 100px;
        }`,
        js: ``,
      },
      9: {
        html: ``,
        css: `
        p {
          max-width: 600px;
          max-height: 700px;
        }`,
        js: ``,
      },
      10: {
        html: ``,
        css: `
        .content {
          overflow: auto;
          height: 400px;
        }`,
        js: ``,
      },
      11: {
        html: ``,
        css: `
        .block {
          height: 50px;
          padding-top: 30px;
          display: block;
        }`,
        js: ``,
      },
      12: {
        html: ``,
        css: `
        .inline {
          height: 40px;
          display: inline;
          margin: 3rem;
        }`,
        js: ``,
      },
      13: {
        html: ``,
        css: `
        li {
          display: inline-block;
          height: 45px;
          margin: 2rem;
        }`,
        js: ``,
      },
      14: {
        html: ``,
        css: `
        .parent {
          width: 500px;
        }
        
        .child {
          width: 440px;
        }`,
        js: ``,
      },
      15: {
        html: ``,
        css: `
        * {
          box-sizing: border-box;
        }
        
        .child {
          width: 100%;
        }`,
        js: ``,
      },
    },
  },
  JS: {
    JSIntro: {
      1: {
        html: ``,
        css: ``,
        js: `console.log("Мое любимое число: ");
        console.log(77)`,
      },
      2: {
        html: ``,
        css: ``,
        js: `console.log('dv ffg');
        console.log(-111);
        console.log(false);
        console.log(undefined);`,
      },
      3: {
        html: ``,
        css: ``,
        js: `console.log(-4 + 1);
        console.log(400 - 399);
        console.log(40 * 0);
        console.log(250 / 45);
        console.log(13 % 3);`,
      },
      4: {
        html: ``,
        css: ``,
        js: `console.log("Мне" + " " + "определенно" + " " + "нравится" + " " + "JavaScript" + "!");`,
      },
      5: {
        html: ``,
        css: ``,
        js: `cconsole.log("3" * 3);
        console.log("3" / 3);`,
      },
      6: {
        html: ``,
        css: ``,
        js: `console.log("Я узнал(a) о том, как использовать свойства в JavaScript.".length);
        console.log("".length);`,
      },
      7: {
        html: ``,
        css: ``,
        js: `console.log("СТРОКА В НИЖНЕМ РЕГИСТРЕ".toLowerCase());
        console.log("Понедельник начинается в субботу".includes("Понедельник"));
        console.log("Понедельник начинается в субботу".includes("Вторник"));`,
      },
      8: {
        html: ``,
        css: ``,
        js: `console.log(Math.ceil(Math.random() * 30));
        console.log(Math.PI);
        console.log(Number.isInteger(30));`,
      },
      9: {
        html: ``,
        css: ``,
        js: `// Раскомментировать код, когда смогу его понять
        /* const postfix = idParamName.substr(idParamName.lastIndexOf("$") + 1);
        let resolver = state.filters[filterClientId].idResolvers[idParamName];
        
        if (["MO", "MI", "LOWERDIVERT", "UPPERDIVERT"].includes(postfix)) {
          resolver = state.filters[filterClientId].idResolvers[idParamName.substr(0, idParamName.lastIndexOf("$"))];
          if (resolver) {
            resolver = {
              ...resolver,
              idParamName: resolver.idParamName,
              mcParamName: resolver.mcParamName,
              hlParamName: resolver.hlParamName
            };
          }
        } */`,
      },
    },
    JSVariables: {
      1: {
        html: ``,
        css: ``,
        js: `var myFavoriteFood = "Potato";
        console.log(myFavoriteFood);
        var myAge = 33;
        console.log(myAge);`,
      }
    }
  },
};
