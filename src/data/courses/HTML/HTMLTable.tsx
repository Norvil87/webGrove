export const HtmlTable = {
  id: 3,
  title: "Таблицы в HTML",
  url: "html-table",
  excercises: [
    {
      id: 1,
      header: "Объявление HTML таблицы - тэг table",
      url: "html-table-declaration",
      theory: `<p>Существует большое количество разнообразных данных, которые удобно отображать в виде последовательности строк и столбцов, т. е. таблиц. В HTML существует группа элементов, предназначенных для отображения табличных данных.</p>
      <p> HTML таблица создается с помощью элемента <code>table</code>: </p>
      
      <pre><code><span class="tag"><<span>table</span>></span>
      
      <span class="tag"><<span>/table</span>></span>
      </code></pre>`,
      goal: `Создайте таблицу.`,
      initValues: {
        html: `<h3>Сравнительные характеристики электронных голосовых переводчиков</h3>
<p>На рынке представлено большое количество <em>электронных голосовых переводчиков</em>, решающих самые разнообразные задачи. Для вашего удобства, технические зарактеристики некоторых наиболее распространенных моделей сведены в таблицу.</p>`,
        css: `h3 {
  text-align: center
}`,
        js: "",
      },
      tasks: [
        {
          id: 1,
          label: "Под параграфом с текстом создайте пустую таблицу.",
          test: (iframe: HTMLIFrameElement) => {
            const table = iframe.contentDocument.body.querySelector("table");
            return table && table.previousElementSibling && table.previousElementSibling.tagName === "P";
          },
          failMsg: "Убедитесь, что вы создали таблицу с помощью элемента table",
        },
      ],
      solution: `<h3>Сравнительные характеристики электронных голосовых переводчиков</h3>
<p>На рынке представлено большое количество <em>электронных голосовых переводчиков</em>, решающих самые разнообразные задачи. Для вашего удобства, технические зарактеристики некоторых наиболее распространенных моделей сведены в таблицу.</p>

<table>

</table>`,
    },

    {
      id: 2,
      header: "Строки таблицы - тэг tr",
      url: "html-table-rows",
      theory: `<p>Создавить структуру таблицы мы начнем со строк. Строки задаются с помощью элемента <code>tr</code> (<i>table row</i>), вот так:</p>
  
  <pre><code><span class="tag"><<span>table</span>></span>  
  <span class="tag"><<span>tr</span>></span>
  
  <span class="tag"><<span>/tr</span>></span>
  <span class="tag"><<span>tr</span>></span>
  
  <span class="tag"><<span>/tr</span>></span>
<span class="tag"><<span>/table</span>></span>
</code></pre>

      <p>В этой таблице 2 пустые строки.</p>`,
      goal: `Добавьте строки в таблицу.`,
      initValues: {
        html: `<h3>Сравнительные характеристики электронных голосовых переводчиков</h3>
<p>На рынке представлено большое количество <em>электронных голосовых переводчиков</em>, решающих самые разнообразные задачи. Для вашего удобства, технические зарактеристики некоторых наиболее распространенных моделей сведены в таблицу.</p>

<table>
  <tr>
  </tr>
</table>`,
        css: `h3 {
  text-align: center
}`,
        js: "",
      },
      tasks: [
        {
          id: 1,
          label: "Добавьте в таблицу еще 3 пустые строки.",
          test: (iframe: HTMLIFrameElement) => {
            const table = iframe.contentDocument.body.querySelector("table");
            if (!table) {
              return false;
            }
            const rows = table.querySelectorAll("tr");
            return rows.length === 4;
          },
          failMsg: "Убедитесь, что в таблице 4 строки tr",
        },
      ],
      solution: `<h3>Сравнительные характеристики электронных голосовых переводчиков</h3>
<p>На рынке представлено большое количество <em>электронных голосовых переводчиков</em>, решающих самые разнообразные задачи. Для вашего удобства, технические зарактеристики некоторых наиболее распространенных моделей сведены в таблицу.</p>

<table>
  <tr>
  </tr>
  <tr>
  </tr>
  <tr>
  </tr>
  <tr>
  </tr>
</table>`,
    },

    {
      id: 3,
      header: "Данные таблицы - тэг td",
      url: "html-table-data",
      theory: `<p>Давайте начнем заполнять таблицу данными. Для этого в строки таблицы <code>tr</code> вложим ячейки, содержащие данные - элемент <code>td</code> (<i>table data</i>).</p>

<pre><code><span class="tag"><<span>table</span>></span>  
  <span class="tag"><<span>tr</span>></span>
    <span class="tag"><<span>td</span>></span>Ячейка 1 строки 1<span class="tag"><<span>/td</span>></span>
    <span class="tag"><<span>td</span>></span>Ячейка 2 строки 1<span class="tag"><<span>/td</span>></span>
  <span class="tag"><<span>/tr</span>></span>
  <span class="tag"><<span>tr</span>></span>
    <span class="tag"><<span>td</span>></span>Ячейка 1 строки 2<span class="tag"><<span>/td</span>></span>
    <span class="tag"><<span>td</span>></span>Ячейка 2 строки 2<span class="tag"><<span>/td</span>></span>
  <span class="tag"><<span>/tr</span>></span>
<span class="tag"><<span>/table</span>></span>
</code></pre>

      <p><table style='margin: 0 auto'><tr><td style='border: 1px solid grey'>Ячейка 1 строки 1</td><td style='border: 1px solid grey'>Ячейка 2 строки 1</td><tr><td style='border: 1px solid grey'>Ячейка 1 строки 2</td><td style='border: 1px solid grey'>Ячейка 2 строки 2</td></table></p>
      <p>Такая разметка отобразит таблицу с двумя строками, в каждой из которых 2 ячейки с данными. Таким образом у нас получится таблица из 2 строк и 2 столбцов. Обратите внимание, что количество элементов с данными должно быть одинаковым в каждой строке, иначе таблица может отобразиться неверно.</p>`,
      goal: `Добавьте данные в таблицу.`,
      initValues: {
        html: `<h3>Сравнительные характеристики электронных голосовых переводчиков</h3>
<p>На рынке представлено большое количество <em>электронных голосовых переводчиков</em>, решающих самые разнообразные задачи. Для вашего удобства, технические зарактеристики некоторых наиболее распространенных моделей сведены в таблицу.</p>

<table>
  <tr>
    <td>XR</td>
    <td>пластик</td>
    <td>40</td>
    <td>4000</td>
  </tr>
  <tr>
  </tr>
  <tr>
  </tr>
  <tr>
  </tr>
</table>`,
        css: `h3 {
  text-align: center
}

table {
  margin: 20px auto;
  width: 80%;
}

tr {
  background: #f4f7f8;
  border-bottom: 1px solid #FFF;
  margin-bottom: 5px;
}

th, td {
  padding: 15px;
} `,
        js: "",
      },
      tasks: [
        {
          id: 1,
          label:
            "Добавьте во вторую строку таблицы ячейки с данными: <ul> <li style='background: none'>XR-1 PRO</li> <li style='background: none'>пластик</li> <li style='background: none'>60</li> <li style='background: none'>7000</li></ul>",
          test: (iframe: HTMLIFrameElement) => {
            const secondRow = iframe.contentDocument.body.querySelectorAll("tr")[1];
            if (!secondRow) {
              return false;
            }
            const cells = secondRow.querySelectorAll("td");
            return (
              cells.length === 4 &&
              cells[0].textContent === "XR-1 PRO" &&
              cells[1].textContent === "пластик" &&
              cells[2].textContent === "60" &&
              cells[3].textContent === "7000"
            );
          },
          failMsg: "Убедитесь, что во второй строке tr таблицы 4 ячейки td с правильным текстовым содержанием",
        },
        {
          id: 2,
          label:
            "Добавьте в третью строку таблицы ячейки с данными: <ul> <li style='background: none'>XT-8</li> <li style='background: none'>алюминий</li> <li style='background: none'>45</li> <li style='background: none'>6000</li></ul>",
          test: (iframe: HTMLIFrameElement) => {
            const thirdRow = iframe.contentDocument.body.querySelectorAll("tr")[2];
            if (!thirdRow) {
              return false;
            }
            const cells = thirdRow.querySelectorAll("td");
            return (
              cells.length === 4 &&
              cells[0].textContent === "XT-8" &&
              cells[1].textContent === "алюминий" &&
              cells[2].textContent === "45" &&
              cells[3].textContent === "6000"
            );
          },
          failMsg: "Убедитесь, что в третьей строке tr таблицы 4 ячейки td с правильным текстовым содержанием",
        },
        {
          id: 3,
          label:
            "Добавьте в четвертую строку таблицы ячейки с данными: <ul> <li style='background: none'>XT-8 ULTRA</li> </ul> Остальные ячейки оставьте пустыми.",
          test: (iframe: HTMLIFrameElement) => {
            const fourthRow = iframe.contentDocument.body.querySelectorAll("tr")[3];
            if (!fourthRow) {
              return false;
            }
            const cells = fourthRow.querySelectorAll("td");

            return (
              cells.length === 4 &&
              cells[0].textContent === "XT-8 ULTRA" &&
              cells[1].textContent === "" &&
              cells[2].textContent === "" &&
              cells[3].textContent === ""
            );
          },
          failMsg: "Убедитесь, что в четвертой строке tr таблицы 4 ячейки td с правильным текстовым содержанием",
        },
      ],
      solution: `<h3>Сравнительные характеристики электронных голосовых переводчиков</h3>
<p>На рынке представлено большое количество <em>электронных голосовых переводчиков</em>, решающих самые разнообразные задачи. Для вашего удобства, технические зарактеристики некоторых наиболее распространенных моделей сведены в таблицу.</p>

<table>
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
</table>`,
    },

    {
      id: 4,
      header: "Заголовки таблицы - тэг th",
      url: "html-table-data",
      theory: `<p>В данный момент наша таблица заполнена данными, но не понятно, что эти данные означают. Чтобы придать данным смысл, таблице необходимы заголовки. Мы создадим заголовки с помощью элемента <code>th</code> (<i>table heading</i>). Вот пример табицы с заголовками:</p>

<pre><code><span class="tag"><<span>table</span>></span>
  <span class="tag"><<span>tr</span>></span>
    <span class="tag"><<span>th</span> <span class="attr-name">scope=</span><span class="attr-value">"col"</span>></span>Заголовок 1<span class="tag"><<span>/th</span>></span>
    <span class="tag"><<span>th</span> <span class="attr-name">scope=</span><span class="attr-value">"col"</span>></span>Заголовок 2<span class="tag"><<span>/th</span>></span>
  <span class="tag"><<span>/tr</span>></span>
  <span class="tag"><<span>tr</span>></span>
    <span class="tag"><<span>td</span>></span>Ячейка 1 строки 1<span class="tag"><<span>/td</span>></span>
    <span class="tag"><<span>td</span>></span>Ячейка 2 строки 1<span class="tag"><<span>/td</span>></span>
  <span class="tag"><<span>/tr</span>></span>
  <span class="tag"><<span>tr</span>></span>
    <span class="tag"><<span>td</span>></span>Ячейка 1 строки 2<span class="tag"><<span>/td</span>></span>
    <span class="tag"><<span>td</span>></span>Ячейка 2 строки 2<span class="tag"><<span>/td</span>></span>
  <span class="tag"><<span>/tr</span>></span>
<span class="tag"><<span>/table</span>></span>
</code></pre>

      <p><table style='margin: 0 auto'><tr><th scope="col">Заголовок 1</th><th scope="col">Заголовок 2</th><tr><tr><td style='border: 1px solid grey'>Ячейка 1 строки 1</td><td style='border: 1px solid grey'>Ячейка 2 строки 1</td><tr><td style='border: 1px solid grey'>Ячейка 1 строки 2</td><td style='border: 1px solid grey'>Ячейка 2 строки 2</td></table></p>
      <p>Подобно обычным ячейкам с данными заголовки расположены в строках таблицы.</p>
      <p>Заголовкам можно указать аттрибут <code>scope</code>. Значение аттрибута <code>col</code> означает, что это заголовок колонки. Если вы создаете заголовок для ряда, значение аттрибута должно быть <code>row</code>.</p>`,
      goal: `Добавьте заголовки в таблицу.`,
      initValues: {
        html: `<h3>Сравнительные характеристики электронных голосовых переводчиков</h3>
<p>На рынке представлено большое количество <em>электронных голосовых переводчиков</em>, решающих самые разнообразные задачи. Для вашего удобства, технические зарактеристики некоторых наиболее распространенных моделей сведены в таблицу.</p>

<table>
  <tr>

  </tr>
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
</table>`,
        css: `h3 {
  text-align: center
}

table {
  margin: 20px auto;
  width: 80%;
}

 th {
  background: rgb(37, 194, 160);;
  color: #FFF;
  font-size: 16px;
  letter-spacing: 1.5px;
  text-transform: uppercase;
}

tr {
  background: #f4f7f8;
  border-bottom: 1px solid #FFF;
  margin-bottom: 5px;
}

th, td {
  padding: 15px;
} `,
        js: "",
      },
      tasks: [
        {
          id: 1,
          label:
            "Добавьте в первую строку таблицы заголовки с данными: <ul> <li style='background: none'>Модель</li> <li style='background: none'>Корпус</li> <li style='background: none'>Кол-во языков</li> <li style='background: none'>Стоимость, руб.</li></ul>",
          test: (iframe: HTMLIFrameElement) => {
            const firstRow = iframe.contentDocument.body.querySelectorAll("tr")[0];
            if (!firstRow) {
              return false;
            }
            const headings = firstRow.querySelectorAll("th");
            return (
              headings.length === 4 &&
              headings[0].textContent === "Модель" &&
              headings[1].textContent === "Корпус" &&
              headings[2].textContent === "Кол-во языков" &&
              headings[3].textContent === "Стоимость, руб."
            );
          },
          failMsg: "Убедитесь, что в первой строке tr таблицы 4 заголовка th с правильным текстовым содержанием",
        },
        {
          id: 2,
          label: "Укажите, что заголовки являются заголовками столбцов.",
          test: (iframe: HTMLIFrameElement) => {
            const firstRow = iframe.contentDocument.body.querySelectorAll("tr")[0];
            if (!firstRow) {
              return false;
            }
            const headings = firstRow.querySelectorAll("th");
            const result = Array.from(headings).every(heading => heading.scope && heading.scope === "col");
            return headings.length === 4 && result;
          },
          failMsg: "Убедитесь, что заголовкам правльно задан аттрибут scope",
        },
      ],
      solution: `<h3>Сравнительные характеристики электронных голосовых переводчиков</h3>
<p>На рынке представлено большое количество <em>электронных голосовых переводчиков</em>, решающих самые разнообразные задачи. Для вашего удобства, технические зарактеристики некоторых наиболее распространенных моделей сведены в таблицу.</p>

<table>
  <tr>
    <th scope="col">Модель</th>
    <th scope="col">Корпус</th>
    <th scope="col">Кол-во языков</th>
    <th scope="col">Стоимость, руб.</th>
  </tr>
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
</table>`,
    },

    {
      id: 5,
      header: "Структура таблицы - тэги thead, tbody",
      url: "html-table-thead-tbody",
      theory: `<p>Наша таблица пока еще сравнительно небольшая, но по мере ее увеличения может возникнуть необходимость структурировать ее содержание. Подобно обычной HTML странице, у которой есть <code>head</code> и <code>body</code> у таблицы есть <code>thead</code> (<i>table head</i>) и <code>tbody</code> (<i>table body</i>)</p>

<pre><code><span class="tag"><<span>table</span>></span>
  <span class="tag"><<span>thead</span>></span>
    <span class="tag"><<span>tr</span>></span>
      <span class="tag"><<span>th</span> <span class="attr-name">scope=</span><span class="attr-value">"col"</span>></span>Заголовок 1<span class="tag"><<span>/th</span>></span>
      <span class="tag"><<span>th</span> <span class="attr-name">scope=</span><span class="attr-value">"col"</span>></span>Заголовок 2<span class="tag"><<span>/th</span>></span>
    <span class="tag"><<span>/tr</span>></span>
  <span class="tag"><<span>/thead</span>></span>
  <span class="tag"><<span>tbody</span>></span>
    <span class="tag"><<span>tr</span>></span>
      <span class="tag"><<span>td</span>></span>Ячейка 1 строки 1<span class="tag"><<span>/td</span>></span>
      <span class="tag"><<span>td</span>></span>Ячейка 2 строки 1<span class="tag"><<span>/td</span>></span>
    <span class="tag"><<span>/tr</span>></span>
    <span class="tag"><<span>tr</span>></span>
      <span class="tag"><<span>td</span>></span>Ячейка 1 строки 2<span class="tag"><<span>/td</span>></span>
      <span class="tag"><<span>td</span>></span>Ячейка 2 строки 2<span class="tag"><<span>/td</span>></span>
    <span class="tag"><<span>/tr</span>></span>
  <span class="tag"><<span>/tbody</span>></span>
<span class="tag"><<span>/table</span>></span>
</code></pre>

      <p><table style='margin: 0 auto'><tr><th scope="col">Заголовок 1</th><th scope="col">Заголовок 2</th><tr><tr><td style='border: 1px solid grey'>Ячейка 1 строки 1</td><td style='border: 1px solid grey'>Ячейка 2 строки 1</td><tr><td style='border: 1px solid grey'>Ячейка 1 строки 2</td><td style='border: 1px solid grey'>Ячейка 2 строки 2</td></table></p>
      <p>В <code>thead</code> помещают заголовки таблицы вместе с их <code>tr</code> элементом (только заголовки столбцов! Аттрибут <code>scope</code> со значением <code>col</code> либо без аттрибута).</p>
      <p>В <code>tbody</code> помещают все данные таблицы вместе с их <code>tr</code> элементами.</p>
      <p><code>thead</code> и <code>tbody</code> никак не отображаются на странице, но вашу таблицу становится легче читать.</p>`,
      goal: `Структурируйте таблицу.`,
      initValues: {
        html: `<h3>Сравнительные характеристики электронных голосовых переводчиков</h3>
<p>На рынке представлено большое количество <em>электронных голосовых переводчиков</em>, решающих самые разнообразные задачи. Для вашего удобства, технические зарактеристики некоторых наиболее распространенных моделей сведены в таблицу.</p>

<table>
  <tr>
    <th scope="col">Модель</th>
    <th scope="col">Корпус</th>
    <th scope="col">Кол-во языков</th>
    <th scope="col">Стоимость, руб.</th>
  </tr>
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
</table>`,
        css: `h3 {
  text-align: center
}

table {
  margin: 20px auto;
  width: 80%;
}

 th {
  background: rgb(37, 194, 160);;
  color: #FFF;
  font-size: 16px;
  letter-spacing: 1.5px;
  text-transform: uppercase;
}

tr {
  background: #f4f7f8;
  border-bottom: 1px solid #FFF;
  margin-bottom: 5px;
}

th, td {
  padding: 15px;
} `,
        js: "",
      },
      tasks: [
        {
          id: 1,
          label: "Оберните заголовки таблицы в элемент <code>thead</code>.",
          test: (iframe: HTMLIFrameElement) => {
            const thead = iframe.contentDocument.body.querySelector("thead");

            return (
              thead &&
              thead.parentElement &&
              thead.parentElement.tagName === "TABLE" &&
              thead.children &&
              thead.children.length === 1 &&
              thead.children[0].tagName === "TR"
            );
          },
          failMsg: "Убедитесь, что ряд таблицы с заголовками обернут в thead",
        },
        {
          id: 2,
          label: "Оберните данные таблицы в элемент <code>tbody</code>.",
          test: (iframe: HTMLIFrameElement) => {
            const tbody = iframe.contentDocument.body.querySelector("tbody");

            return (
              tbody &&
              tbody.parentElement &&
              tbody.parentElement.tagName === "TABLE" &&
              tbody.children &&
              tbody.children.length === 4 &&
              tbody.children[0].tagName === "TR"
            );
          },
          failMsg: "Убедитесь, что ряды таблицы с данными обернуты в tbody",
        },
      ],
      solution: `<h3>Сравнительные характеристики электронных голосовых переводчиков</h3>
<p>На рынке представлено большое количество <em>электронных голосовых переводчиков</em>, решающих самые разнообразные задачи. Для вашего удобства, технические зарактеристики некоторых наиболее распространенных моделей сведены в таблицу.</p>

<table>
  <thead>
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
  </tbody>
</table>`,
    },

    {
      id: 6,
      header: "Объединение ячеек в строках - аттрибут rowspan",
      url: "html-rowspan",
      theory: `<p>Иногда у вас может возникнуть необходимость объединить ячейки в нескольких рядах. К примеру, добиться такого результата:</p>
      <p><table style='margin: 0 auto'><tr><th scope="col">Заголовок 1</th><th scope="col">Заголовок 2</th></tr>
      <tr><td rowspan="2" style='border: 1px solid grey'>Объединенная ячейка</td><td style='border: 1px solid grey'>Ячейка 2 строки 1</td></tr>
      <tr><td style='border: 1px solid grey'>Ячейка 2 строки 2</td></tr>
      </table></p>
      <p>Для этого зададим первой ячейке первой строки аттрибут <code>rowspan</code> со значением <code>2</code>.</p>

<pre><code><span class="tag"><<span>table</span>></span>
  <span class="tag"><<span>thead</span>></span>
    <span class="tag"><<span>tr</span>></span>
      <span class="tag"><<span>th</span> <span class="attr-name">scope=</span><span class="attr-value">"col"</span>></span>Заголовок 1<span class="tag"><<span>/th</span>></span>
      <span class="tag"><<span>th</span> <span class="attr-name">scope=</span><span class="attr-value">"col"</span>></span>Заголовок 2<span class="tag"><<span>/th</span>></span>
    <span class="tag"><<span>/tr</span>></span>
  <span class="tag"><<span>/thead</span>></span>
  <span class="tag"><<span>tbody</span>></span>
    <span class="tag"><<span>tr</span>></span>
      <span class="tag"><<span>td</span> <span class="attr-name">rowspan=</span><span class="attr-value">"2"</span>></span>></span>Ячейка 1 строки 1<span class="tag"><<span>/td</span>></span>
      <span class="tag"><<span>td</span>></span>Ячейка 2 строки 1<span class="tag"><<span>/td</span>></span>
    <span class="tag"><<span>/tr</span>></span>
    <span class="tag"><<span>tr</span>></span>
      <span class="tag"><<span>td</span>></span>Ячейка 1 строки 2<span class="tag"><<span>/td</span>></span>
      <span class="tag"><<span>td</span>></span>Ячейка 2 строки 2<span class="tag"><<span>/td</span>></span>
    <span class="tag"><<span>/tr</span>></span>
  <span class="tag"><<span>/tbody</span>></span>
<span class="tag"><<span>/table</span>></span>
</code></pre>

      <p>Аттрибут <code>rowspan</code> принимает целое число в качестве значения и означает, сколько строк в таблице займет та или иная ячейка. В данном случае первая ячейка первой строки должна визуально занять 2 строки. Разметка выше на странице будет выглядить так:</p>
      <table style='margin: 0 auto'><tr><th scope="col">Заголовок 1</th><th scope="col">Заголовок 2</th></tr>
      <tr><td rowspan="2" style='border: 1px solid grey'>Объединенная ячейка</td><td style='border: 1px solid grey'>Ячейка 2 строки 1</td></tr>
      <tr><td style='border: 1px solid grey'>Ячейка 1 строки 2</td><td style='border: 1px solid grey'>Ячейка 2 строки 2</td></tr>
      </table><br>

      <p>Упс, что-то не то с форматированием. Действительно, первая ячейка первой строки занимает теперь в 2 раза больше места. Но ведь первая ячейка второй строки по прежнему в таблице и она тоже занимает свое место. В результате она просто вытесняется в третий столбец, что приводит к проблемам с отображением таблицы. Лишнюю ячейку нужно удалить. Вот правильная разметка:</p>

<pre><code><span class="tag"><<span>table</span>></span>
  <span class="tag"><<span>thead</span>></span>
    <span class="tag"><<span>tr</span>></span>
      <span class="tag"><<span>th</span> <span class="attr-name">scope=</span><span class="attr-value">"col"</span>></span>Заголовок 1<span class="tag"><<span>/th</span>></span>
      <span class="tag"><<span>th</span> <span class="attr-name">scope=</span><span class="attr-value">"col"</span>></span>Заголовок 2<span class="tag"><<span>/th</span>></span>
    <span class="tag"><<span>/tr</span>></span>
  <span class="tag"><<span>/thead</span>></span>
  <span class="tag"><<span>tbody</span>></span>
    <span class="tag"><<span>tr</span>></span>
      <span class="tag"><<span>td</span> <span class="attr-name">rowspan=</span><span class="attr-value">"2"</span>></span>></span>Ячейка 1 строки 1<span class="tag"><<span>/td</span>></span>
      <span class="tag"><<span>td</span>></span>Ячейка 2 строки 1<span class="tag"><<span>/td</span>></span>
    <span class="tag"><<span>/tr</span>></span>
    <span class="tag"><<span>tr</span>></span>
      <span class="tag"><<span>td</span>></span>Ячейка 2 строки 2<span class="tag"><<span>/td</span>></span>
    <span class="tag"><<span>/tr</span>></span>
  <span class="tag"><<span>/tbody</span>></span>
<span class="tag"><<span>/table</span>></span>
</code></pre>

      <p>Теперь таблица выглядит как в начале упражнения. При объединении ячеек в строках всегда внимательно проверяйте поведение таблицы и удаляйте лишние ячейки.</p>`,
      goal: `Объедините ячейки в рядах таблицы.`,
      initValues: {
        html: `<h3>Сравнительные характеристики электронных голосовых переводчиков</h3>
<p>На рынке представлено большое количество <em>электронных голосовых переводчиков</em>, решающих самые разнообразные задачи. Для вашего удобства, технические зарактеристики некоторых наиболее распространенных моделей сведены в таблицу.</p>

<table>
  <thead>
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
  </tbody>
</table>`,
        css: `h3 {
  text-align: center
}

table {
  margin: 20px auto;
  width: 80%;
}

 th {
  background: rgb(37, 194, 160);;
  color: #FFF;
  font-size: 16px;
  letter-spacing: 1.5px;
  text-transform: uppercase;
}

tr {
  background: #f4f7f8;
  border-bottom: 1px solid #FFF;
  margin-bottom: 5px;
}

th, td {
  padding: 15px;
} `,
        js: "",
      },
      tasks: [
        {
          id: 1,
          label: "Корпус моделей XR и XR-1 PRO сделан из одинакового материала - пластика. Объедините эти ячейки.",
          test: (iframe: HTMLIFrameElement) => {
            const tbody = iframe.contentDocument.body.querySelector("tbody");
            if (!tbody) {
              return false;
            }
            const firstRow = tbody.querySelectorAll("tr")[0];
            if (!firstRow) {
              return false;
            }
            const secondCell = firstRow.querySelectorAll("td")[1];
            return secondCell && secondCell.rowSpan && secondCell.rowSpan === 2;
          },
          failMsg: "Убедитесь, что ячейке в первой строке с данными правильно задан аттрибут rowspan",
        },
        {
          id: 2,
          label: "Удалите лишние ячейки.",
          test: (iframe: HTMLIFrameElement) => {
            const tbody = iframe.contentDocument.body.querySelector("tbody");
            if (!tbody) {
              return false;
            }
            const secondRow = tbody.querySelectorAll("tr")[1];
            if (!secondRow) {
              return false;
            }
            const cells = secondRow.querySelectorAll("td");
            return cells && cells.length === 3;
          },
          failMsg: "Убедитесь, что удалена правильная ячейка",
        },
      ],
      solution: `<h3>Сравнительные характеристики электронных голосовых переводчиков</h3>
<p>На рынке представлено большое количество <em>электронных голосовых переводчиков</em>, решающих самые разнообразные задачи. Для вашего удобства, технические зарактеристики некоторых наиболее распространенных моделей сведены в таблицу.</p>

<table>
  <thead>
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
      <td rowspan="2">пластик</td>
      <td>40</td>
      <td>4000</td>
    </tr>
    <tr>
      <td>XR-1 PRO</td>
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
  </tbody>
</table>`,
    },

    {
      id: 7,
      header: "Объединение ячеек в столбцах - аттрибут colspan",
      url: "html-colspan",
      theory: `<p>Ячейки в столбцах можно объединять точно так же, как ячейки в строках:</p>
      <p><table style='margin: 0 auto'><tr><th scope="col">Заголовок 1</th><th scope="col">Заголовок 2</th></tr>
      <tr><td style='border: 1px solid grey'>Ячейка 1 строки 1</td><td style='border: 1px solid grey'>Ячейка 2 строки 1</td></tr>
      <tr><td colspan="2" style='border: 1px solid grey'>Объединенная ячейка</td></tr>
      </table></p>
      <p>Для этого первой ячейке второй строки задается аттрибут <code>colspan</code> со значением <code>2</code>.</p>

<pre><code><span class="tag"><<span>table</span>></span>
  <span class="tag"><<span>thead</span>></span>
    <span class="tag"><<span>tr</span>></span>
      <span class="tag"><<span>th</span> <span class="attr-name">scope=</span><span class="attr-value">"col"</span>></span>Заголовок 1<span class="tag"><<span>/th</span>></span>
      <span class="tag"><<span>th</span> <span class="attr-name">scope=</span><span class="attr-value">"col"</span>></span>Заголовок 2<span class="tag"><<span>/th</span>></span>
    <span class="tag"><<span>/tr</span>></span>
  <span class="tag"><<span>/thead</span>></span>
  <span class="tag"><<span>tbody</span>></span>
    <span class="tag"><<span>tr</span>></span>
      <span class="tag"><<span>td</span>></span>></span>Ячейка 1 строки 1<span class="tag"><<span>/td</span>></span>
      <span class="tag"><<span>td</span>></span>Ячейка 2 строки 1<span class="tag"><<span>/td</span>></span>
    <span class="tag"><<span>/tr</span>></span>
    <span class="tag"><<span>tr</span>></span>
      <span class="tag"><<span>td</span> <span class="attr-name">colspan=</span><span class="attr-value">"2"</span>></span>Ячейка 1 строки 2<span class="tag"><<span>/td</span>></span>
      <span class="tag"><<span>td</span>></span>Ячейка 2 строки 2<span class="tag"><<span>/td</span>></span>
    <span class="tag"><<span>/tr</span>></span>
  <span class="tag"><<span>/tbody</span>></span>
<span class="tag"><<span>/table</span>></span>
</code></pre>

      <p>Аттрибут <code>colspan</code> принимает целое число в качестве значения и означает, сколько столбцов в таблице займет та или иная ячейка. Вок как выглядит наша таблица:</p>
      <table style='margin: 0 auto'><tr><th scope="col">Заголовок 1</th><th scope="col">Заголовок 2</th></tr>
      <tr><td style='border: 1px solid grey'>Ячейка 1 строки 1</td><td style='border: 1px solid grey'>Ячейка 2 строки 1</td></tr>
      <tr><td colspan="2" style='border: 1px solid grey'>Объединенная ячейка</td><td style='border: 1px solid grey'>Ячейка 2 строки 2</td></tr>
      </table><br>

      <p>Та же проблема. Ячейка, которая теперь занимает в 2 раза больше места в таблице, сдвигает соседнюю ячейку вправо. Но мы уже знаем, как с этим бороться. Удалим соседнюю ячейку:</p>

<pre><code><span class="tag"><<span>table</span>></span>
  <span class="tag"><<span>thead</span>></span>
    <span class="tag"><<span>tr</span>></span>
      <span class="tag"><<span>th</span> <span class="attr-name">scope=</span><span class="attr-value">"col"</span>></span>Заголовок 1<span class="tag"><<span>/th</span>></span>
      <span class="tag"><<span>th</span> <span class="attr-name">scope=</span><span class="attr-value">"col"</span>></span>Заголовок 2<span class="tag"><<span>/th</span>></span>
    <span class="tag"><<span>/tr</span>></span>
  <span class="tag"><<span>/thead</span>></span>
  <span class="tag"><<span>tbody</span>></span>
    <span class="tag"><<span>tr</span>></span>
      <span class="tag"><<span>td</span>></span>></span>Ячейка 1 строки 1<span class="tag"><<span>/td</span>></span>
      <span class="tag"><<span>td</span>></span>Ячейка 2 строки 1<span class="tag"><<span>/td</span>></span>
    <span class="tag"><<span>/tr</span>></span>
    <span class="tag"><<span>tr</span>></span>
      <span class="tag"><<span>td</span> <span class="attr-name">colspan=</span><span class="attr-value">"2"</span>></span>Ячейка 1 строки 2<span class="tag"><<span>/td</span>></span>
    <span class="tag"><<span>/tr</span>></span>
  <span class="tag"><<span>/tbody</span>></span>
<span class="tag"><<span>/table</span>></span>
</code></pre>

      <p>Теперь таблица выглядит правильно.</p>`,
      goal: `Объедините ячейки в столбцах таблицы.`,
      initValues: {
        html: `<h3>Сравнительные характеристики электронных голосовых переводчиков</h3>
<p>На рынке представлено большое количество <em>электронных голосовых переводчиков</em>, решающих самые разнообразные задачи. Для вашего удобства, технические зарактеристики некоторых наиболее распространенных моделей сведены в таблицу.</p>

<table>
  <thead>
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
      <td rowspan="2">пластик</td>
      <td>40</td>
      <td>4000</td>
    </tr>
    <tr>
      <td>XR-1 PRO</td>
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
  </tbody>
</table>`,
        css: `h3 {
  text-align: center
}

table {
  margin: 20px auto;
  width: 80%;
}

 th {
  background: rgb(37, 194, 160);;
  color: #FFF;
  font-size: 16px;
  letter-spacing: 1.5px;
  text-transform: uppercase;
}

tr {
  background: #f4f7f8;
  border-bottom: 1px solid #FFF;
  margin-bottom: 5px;
}

th, td {
  padding: 15px;
} `,
        js: "",
      },
      tasks: [
        {
          id: 1,
          label:
            "У модели XT-8 ULTRA отсутствуют технические характеристики. Объедините пустые ячейки в одну, добавьте в нее текст 'Технические характеристики отсутствуют'.",
          test: (iframe: HTMLIFrameElement) => {
            const tbody = iframe.contentDocument.body.querySelector("tbody");
            if (!tbody) {
              return false;
            }
            const fourthRow = tbody.querySelectorAll("tr")[3];
            if (!fourthRow) {
              return false;
            }
            const secondCell = fourthRow.querySelectorAll("td")[1];
            return (
              secondCell &&
              secondCell.colSpan &&
              secondCell.colSpan === 3 &&
              secondCell.textContent === "Технические характеристики отсутствуют"
            );
          },
          failMsg:
            "Убедитесь, что ячейке в последней строке с данными правильно задан аттрибут colspan и текстовое содержание",
        },
        {
          id: 2,
          label: "Удалите лишние ячейки.",
          test: (iframe: HTMLIFrameElement) => {
            const tbody = iframe.contentDocument.body.querySelector("tbody");
            if (!tbody) {
              return false;
            }
            const fourthRow = tbody.querySelectorAll("tr")[3];
            if (!fourthRow) {
              return false;
            }
            const cells = fourthRow.querySelectorAll("td");
            return cells && cells.length === 2;
          },
          failMsg: "Убедитесь, что удалены правильные ячейки",
        },
      ],
      solution: `<h3>Сравнительные характеристики электронных голосовых переводчиков</h3>
<p>На рынке представлено большое количество <em>электронных голосовых переводчиков</em>, решающих самые разнообразные задачи. Для вашего удобства, технические зарактеристики некоторых наиболее распространенных моделей сведены в таблицу.</p>

<table>
  <thead>
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
      <td rowspan="2">пластик</td>
      <td>40</td>
      <td>4000</td>
    </tr>
    <tr>
      <td>XR-1 PRO</td>
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
      <td colspan="3">Технические характеристики отсутствуют</td>
    </tr>
  </tbody>
</table>`,
    },
  ],
};
