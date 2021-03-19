import { ICourseLesson } from "../../shared/types";

export const JsVariables: ICourseLesson = {
  id: 1,
  title: "Переменные",
  url: "js-variables",
  excercises: [
    {
      id: 1,
      header: "Объявление переменной через var",
      url: "js-var-keyword",
      theory: ` <p>Переменные - это своего рода контейнеры, в которые вы можете записать свои данные. Эти контейнеры хранятся в памяти компьютера и имеют имя. По-имени вы можете вызвать данные из памяти и обратиться к ним.</p>
      <p>Важно понимать, что переменные = это не сами данные, они хранят данные в себе и предоставляют к ним досту по удобному описательному имени.</p>
      <p>Существует несколько ключевых слов с помощью которых можно создать или, что более правильно, <em>объявить</em> (declare) переменную. Одно из них это ключевое слово <code>var</code> (сокращение от <i>variable</i> - переменная). Вот как выглядит объявление переменной:</p>
      
      <pre><code><span class="keyword">var</span> <span class="var">mySurname</span> = <span class="string">"Иванов"</span>;</pre></code>

      <ol>
<li>Объявление начинается с ключевого слова <code>var</code>. Оно говорит движку, чито следом будет название переменной.</li>
<li>Далее идет название переменной.  В данном случае название <code>mySurname</code> говорит о том, что в переменной зранится "моя фамилия". Также обратите внимание на синтаксис названия - эта форма записи называется "camel case". В ней первое слово начинается с маленькой буквы, а каждое последующее - с заглавной, при этом пробелов в названии не может быть.</li>
<li>Далее идет оператор <code>=</code>. Это оператор присваивания. Он говорит движку, что теперь переменной будут присвоены данные.</li>
<li>Наконец, мы присваиваем переменной данные. В данном случае строку <code>"Иванов"</code>.</li>
</ol>
<p>Теперь строка <code>"Иванов"</code> хранится в переменной <code>mySurname</code> и мы можем к ней обратится:</p>

<pre><code><span class="keyword">var</span> <span class="var">mySurname</span> = <span class="string">"Иванов"</span>;
<span class="keyword">console</span>.<span class="function">log</span>(<span class="var">mySurname</span>); <span class="comment">// выведет "Иванов"</span></pre></code>

<p>Как правильно выбрать имя для переменной?</p>
<ul>
<li>Оно должно быть описательным, то есть давать хорошее представление о том, какие именно данные в ней хранятся.</li>
<li>Необходимо учитывать регистр, так как <code>mySurname</code> и <code>mysurname</code> - это две разные переменные.</li>
<li>Название не может начинаться с цифры или совпадать с одним из ключевых слов в JavaScript. Например, не может быть переменной под нвзванием <code>var</code>.</li>
</ul>

      <p class="external-resource">Прочитать больше о <a href="https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Statements/var" target="_blank">ключевом слове var</a>.</p>`,
      goal: `Создайте ваши первые переменные`,
      initValues: {
        html: "",
        css: "",
        js: ``,
      },
      tasks: [
        {
          id: 1,
          label: `Создайте переменную под названием <code>myFavoriteFood</code>, присвойте ей название вашей любимой еды. Выведите переменную в консоль`,
          testRegExp: [`var myFavoriteFood = ("|'|\`).*("|'|\`);`, `\console\\.log\\(myFavoriteFood\\);`],
          failMsg: "Убедитесь, что вы присвоили строку в качестве значения переменной",
        },
        {
          id: 2,
          label: "Создайте переменную, в которой будет храниться ваш возраст. Дайте переменной описательное имя и выведите ее в консоль",
          testRegExp: [`var [a-zA-Z]+ = [0-9]{1,2};`, `\console\\.log\\([a-zA-Z]+\\);`],
          failMsg: "Убедитесь, что вы присвоили число в качестве значения переменной",
        },
      ],
    },
  ],
};
