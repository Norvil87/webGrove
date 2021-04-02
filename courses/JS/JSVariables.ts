import { ICourseLesson } from "../../shared/types";

export const JsVariables: ICourseLesson = {
  id: 2,
  title: "Переменные",
  url: "js-variables",
  excercises: [
    {
      id: 1,
      header: "Объявление переменной через let",
      url: "js-let-keyword",
      theory: ` <p>Переменные - это своего рода контейнеры, в которые вы можете записать свои данные. Эти контейнеры хранятся в памяти компьютера и имеют имя. По имени вы можете вызвать данные из памяти и обратиться к ним.</p>
      <p>Важно понимать, что переменные = это не сами данные, они хранят данные в себе и предоставляют к ним досту по удобному описательному имени.</p>
      <p>Существует несколько ключевых слов с помощью которых можно создать или, что более правильно, <em>объявить</em> (declare) переменную. Одно из них это ключевое слово <code>let</code>. Вот как выглядит объявление переменной:</p>
      
      <pre><code><span class="keyword">let</span> <span class="var">mySurname</span> = <span class="string">"Иванов"</span>;</pre></code>

      <ol>
<li>Объявление начинается с ключевого слова <code>let</code>. Оно говорит движку, что следом будет название переменной.</li>
<li>Далее идет название переменной.  В данном случае название <code>mySurname</code> говорит о том, что в переменной зранится "моя фамилия". Также обратите внимание на синтаксис названия - эта форма записи называется "camel case". В ней первое слово начинается с маленькой буквы, а каждое последующее - с заглавной, при этом пробелов в названии не может быть.</li>
<li>Далее идет оператор <code>=</code>. Это оператор присваивания. Он говорит движку, что теперь переменной будут присвоены данные.</li>
<li>Наконец, мы присваиваем переменной данные. В данном случае строку <code>"Иванов"</code>.</li>
</ol>
<p>Теперь строка <code>"Иванов"</code> хранится в переменной <code>mySurname</code> и мы можем к ней обратится:</p>

<pre><code><span class="keyword">let</span> <span class="var">mySurname</span> = <span class="string">"Иванов"</span>;
<span class="keyword">console</span>.<span class="function">log</span>(<span class="var">mySurname</span>); <span class="comment">// выведет "Иванов"</span></pre></code>

<p>Как правильно выбрать имя для переменной?</p>
<ul>
<li>Оно должно быть описательным, то есть давать хорошее представление о том, какие именно данные в ней хранятся.</li>
<li>Необходимо учитывать регистр, так как <code>mySurname</code> и <code>mysurname</code> - это две разные переменные.</li>
<li>Название не может начинаться с цифры или совпадать с одним из ключевых слов в JavaScript. Например, не может быть переменной под нвзванием <code>var</code>.</li>
</ul>

      <p class="external-resource">Прочитать больше о <a href="https://developer.mozilla.org/ru/docs/Web/JavaScript/Reference/Statements/let" target="_blank">ключевом слове let</a>.</p>`,
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
          testRegExp: [`let myFavoriteFood = ("|'|\`).*("|'|\`);`, `\console\\.log\\(myFavoriteFood\\);`],
          failMsg: "Убедитесь, что вы присвоили строку в качестве значения переменной",
        },
        {
          id: 2,
          label:
            "Создайте переменную, в которой будет храниться ваш возраст. Дайте переменной описательное имя и выведите ее в консоль",
          testRegExp: [`let [a-zA-Z]+ = [0-9]{1,2};`, `\console\\.log\\([a-zA-Z]+\\);`],
          failMsg: "Убедитесь, что вы присвоили число в качестве значения переменной",
        },
      ],
    },

    {
      id: 2,
      header: "Объявление переменной через const",
      url: "js-const-keyword",
      theory: ` <p>Вы можете изменить значение переменной, объявленной с помощью ключевого слова <code>let</code>:</p>

      <pre><code><span class="keyword">let</span> <span class="var">animal</span> = <span class="string">"Cow"</span>;
<span class="keyword">console</span>.<span class="function">log</span>(<span class="var">animal</span>); <span class="comment">// выведет "Cow"</span>
<span class="var">animal</span> = <span class="string">"Wolf"</span>;
<span class="keyword">console</span>.<span class="function">log</span>(<span class="var">animal</span>); <span class="comment">// выведет "Wolf"</span>
</pre></code>

      <p>Обратите внимание, что переменная объявляется только один раз. Чтобы поменять значение переменной, достаточно присвоить ей новое значение с помощью оператора <code>=</code>.</p>
      <p>Часто бывает так, что значение переменной должно оставать неизменным при выполнении программы. Такие переменные следует объявить с помощью ключевого слова <code>const</code> (от <i>constant</i> - постоянное значение):</p>
      
      <pre><code><span class="keyword">const</span> <span class="var">animal</span> = <span class="string">"Cow"</span>;
<span class="keyword">console</span>.<span class="function">log</span>(<span class="var">animal</span>); <span class="comment">// выведет "Cow"</span>
<span class="var">animal</span> = <span class="string">"Cow"</span>; <span class="comment">// Uncaught TypeError: Assignment to constant variable.</span>
</pre></code>

<p>Программа завершится с ошибкой типа <code>TypeError</code> - присвоение значения переменной, объявленной через <code>const</code>.</p>

<p>Как правильно выбрать способ объявления переменной? По-умолчанию объявляйте переменные через <code>const</code>, а если значение переменной будет меняться, измените объявление на <code>let</code>.</p>

      <p class="external-resource">Прочитать больше о <a href=https://developer.mozilla.org/ru/docs/Web/JavaScript/Reference/Statements/const" target="_blank">ключевом слове const</a>.</p>`,
      goal: `Измените значение переменных`,
      initValues: {
        html: "",
        css: "",
        js: `let anyNumber = 44;`,
      },
      tasks: [
        {
          id: 1,
          label: `Измените значение переменной <code>anyNumber</code> на любое другое числовое значение.`,
          testFn: `return typeof anyNumber === 'number' && anyNumber !== 44`,
          failMsg: "Убедитесь, что вы присвоили новое число в качестве значения переменной",
        },
        {
          id: 2,
          label: `Для проверки выведите <code>anyNumber</code> в консоль. Убедитесь, что значение изменилось.`,
          testRegExp: [`\console\\.log\\(anyNumber\\);`],
          failMsg: "Убедитесь, что вы вывели переменную в консоль после присвоения нового значения",
        },
        {
          id: 3,
          label:
            "Создайте переменную под названием <code>constantNumber</code> со значением <code>77</code>. Значение переменной должно оставаться неизменным.",
          testRegExp: [`const constantNumber = 77;`],
          failMsg: "Убедитесь, что вы использовали правильное ключевое слово",
        },
        {
          id: 4,
          label:
            "Попробуйте присвоить переменной <code>constantNumber</code> другое числовое значение. Для проверки выведите переменную в консоль. Убедитесь, что новое значение не вывелось в консоль, так как на этапе присвоения нового значения возникла ошибка",
          testRegExp: [`\console\\.log\\(constantNumber\\);`],
          failMsg: "Убедитесь, что вы вывели переменную в консоль после присвоения нового значения",
        },
      ],
    },

    {
      id: 3,
      header: "Объявление переменной через var",
      url: "js-var-keyword",
      theory: ` <p>Оба способа объявления переменной - через <code>let</code> и <code>const</code> появились в языке сравнительно недавно - с момента принятия стандарта ES6. До этого переменные объявлялись с помощью ключевого слова <code>var</code>. Вы можете менять значение переменной, объявленной с помощью <code>var</code>:</p>
      <pre><code><span class="keyword">var</span> <span class="var">mySurname</span> = <span class="string">"Иванов"</span>;
<span class="var">mySurname</span> = <span class="string">"Петров"</span>;
<span class="keyword">console</span>.<span class="function">log</span>(<span class="var">mySurname</span>); <span class="comment">// выведет "Петров"</span>
      </pre></code>

<p>Надо также знать, что на самом деле объявление переменной состоит из двух этапов:</p>
<ol>
<li>Инициализация переменной с помощью ключевого слова. На этом этапе значение переменной еще не определено, то есть <code>undefined</code>.</li>
<li>Присвоение переменной значения.</li>
</ol>

<pre><code><span class="keyword">var</span> <span class="var">mySurname</span>;
<span class="keyword">console</span>.<span class="function">log</span>(<span class="var">mySurname</span>); <span class="comment">// выведет undefined</span>
<span class="var">mySurname</span> = <span class="string">"Петров"</span>;
<span class="keyword">console</span>.<span class="function">log</span>(<span class="var">mySurname</span>); <span class="comment">// выведет "Петров"</span>
      </pre></code>

<p>Для удобства все это обычно записывают в одну строку, но с точки зрения движка это две разные операции.</p>
<p>Такое поведение характерно для переменных, объявленных с помощью <code>let</code> и <code>var</code>. Переменной, объявленной с помощью <code>const</code> значение необходимо присвоить сразу.</p>
<p>У переменных, объявленных с помощью <code>let</code> и <code>var</code>, есть ряд отличий. Однако они выходят за пределы этого урока. Эти отличия будут рассмотрены в разделе, посвященном функциям. Скажем только, что ключевое слово <code>var</code> имеет ряд недостатков и в современном коде почти не используется, однако большая часть прошлых проектов на JavaScript написана с использованием <code>var</code> и необходимо знать это ключевое слово.</p>
      
<p class="external-resource">Прочитать больше о <a href="https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Statements/var" target="_blank">ключевом слове var</a>.</p>`,
      goal: `Объявите переменные через var`,
      initValues: {
        html: "",
        css: "",
        js: ``,
      },
      tasks: [
        {
          id: 1,
          label: `Создайте переменную под названием <code>myHomeTown</code> с помощью ключевого слова <code>var</code>. Выведите переменную в консоль.`,
          testRegExp: [`var myHomeTown;`, `\console\\.log\\(myHomeTown\\);`],
          failMsg: "Убедитесь, что вы не присваивали значение переменной",
        },
        {
          id: 2,
          label:
            "Присвойте переменной <code>myHomeTown</code> значение с названием вашего родного города. Еще раз выведите переменную в консоль.",
          testRegExp: [`myHomeTown = ("|'|\`).+("|'|\`);`, `\console\\.log\\(myHomeTown\\);`],
          failMsg: "Убедитесь, что вы не использовали ключевое слово при присвоении значения переменной",
        },
      ],
    },

    {
      id: 4,
      header: "Операторы математического присваивания",
      url: "js-math-assignment",
      theory: `<p>Есть группа операторов <em>математического присваивания</em>, которые помогают комбинировать арифметические операции и операцию присваивания. Пусть, например, нам нужно увеличить значение какой-то переменной на 10:</p>
      
      <pre><code><span class="keyword">let</span> <span class="var">x</span> = <span class="number">10</span>;
<span class="var">x</span> = <span class="var">x</span> + <span class="number">10</span>;
<span class="keyword">console</span>.<span class="function">log</span>(<span class="var">x</span>); <span class="comment">// выведет 20</span></pre></code>

<p>Строку, в которой происходит увеличение переменной <code>x</code> на 10, можно переписать удобнее:</p>

<pre><code><span class="keyword">let</span> <span class="var">x</span> = <span class="number">10</span>;
<span class="var">x</span> += <span class="number">10</span>;
<span class="keyword">console</span>.<span class="function">log</span>(<span class="var">x</span>); <span class="comment">// выведет 20</span></pre></code>

<p>Оператор <code>+=</code> сначала увеличит значение переменной на 10, затем присвоит переменной новое значение. Аналогичные операторы математического присваивания есть для всех других арифметических операций:</p>

<pre><code><span class="keyword">let</span> <span class="var">abstracted</span> = <span class="number">10</span>;
<span class="var">abstracted</span> -= <span class="number">20</span>; <span class="comment">// иначе abstracted = abstracted - 20</span>
<span class="keyword">console</span>.<span class="function">log</span>(<span class="var">abstracted</span>); <span class="comment">// выведет -10</span>

<span class="keyword">let</span> <span class="var">multiplied</span> = <span class="number">5</span>;
<span class="var">multiplied</span> *= <span class="number">5</span>; <span class="comment">// иначе multiplied = multiplied * 5</span>
<span class="keyword">console</span>.<span class="function">log</span>(<span class="var">multiplied</span>); <span class="comment">// выведет 25</span>

<span class="keyword">let</span> <span class="var">divided</span> = <span class="number">100</span>;
<span class="var">divided</span> /= <span class="number">100</span>; <span class="comment">// иначе divided = divided / 100</span>
<span class="keyword">console</span>.<span class="function">log</span>(<span class="var">divided</span>); <span class="comment">// выведет 1</span></pre></code>`,
      goal: `Используйте операторы математического присваивания`,
      initValues: {
        html: "",
        css: "",
        js: `let strangeNumber = 500100;
          
console.log("Значение strangeNumber: ", strangeNumber);
  
let numMonths = 730;

console.log("730 дней это ", numMonths, " месяцев");`,
      },
      tasks: [
        {
          id: 1,
          label: `С помощью операции математического присваивания вычтите из переменной <code>strangeNumber</code> значение <code>500100</code>.`,
          testRegExp: [`strangeNumber -= 500100;`],
          failMsg: "Убедитесь, что вы использовали оператор -=",
        },
        {
          id: 2,
          label: "К этой  же переменной прибавьте число <code>100500</code>.",
          testRegExp: [`strangeNumber \\+= 100500;`],
          failMsg: "Убедитесь, что вы использовали оператор +=",
        },
        {
          id: 3,
          label: "Узнайте сколько лет в 730 днях, разделив переменную <code>numMonths</code> на <code>365</code>.",
          testRegExp: [`numMonths \/= 365;`],
          failMsg: "Убедитесь, что вы использовали оператор /=",
        },
        {
          id: 4,
          label: "Теперь узнайте, сколько это месяцев, умножив эту же переменную на <code>12</code>.",
          testRegExp: [`numMonths \\*= 12;`],
          failMsg: "Убедитесь, что вы использовали оператор *=",
        },
      ],
    },

    {
      id: 5,
      header: "Инкремент и декремент",
      url: "js-increment-decrement",
      theory: `<p>В программировании очень часто приходится увеличивать или уменьшать значение переменной на 1. Настольео часто, что для этого введены 2 специальных оператора. Оператор инкремента <code>++</code> увеличивает значение переменной на 1 и присваивает ей увеличенное значение, оператор декремента <code>--</code>, соответственно, уменьшает значение переменной на 1:</p>
      
      <pre><code><span class="keyword">let</span> <span class="var">x</span> = <span class="number">1</span>;
<span class="var">x</span>++;
<span class="keyword">console</span>.<span class="function">log</span>(<span class="var">x</span>); <span class="comment">// выведет 2</span>

<span class="keyword">let</span> <span class="var">y</span> = <span class="number">2</span>;
<span class="var">y</span>--;
<span class="keyword">console</span>.<span class="function">log</span>(<span class="var">y</span>); <span class="comment">// выведет 1</span>
</pre></code>`,
      goal: `Используйте операторы инкремента и декремента.`,
      initValues: {
        html: "",
        css: "",
        js: `let scoreGained = 19;

console.log(scoreGained);
  
let scoreLost = 21;

console.log(scoreLost);`,
      },
      tasks: [
        {
          id: 1,
          label: `Увеличьте значение переменной <code>scoreGained</code> с помощью оператора инкремента.`,
          testRegExp: [`scoreGained\\+\\+;`],
          failMsg: "Убедитесь, что вы использовали оператор ++",
        },
        {
          id: 2,
          label: "Уменьшите значение переменной <code>scoreLost</code> с помощью оператора декремента.",
          testRegExp: [`scoreLost--;`],
          failMsg: "Убедитесь, что вы использовали оператор --",
        },
      ],
    },

    {
      id: 6,
      header: "Сложение строк и переменных",
      url: "js-string-vars-concatenation",
      theory: `<p>Помимо обычной конкатенации (сложения) строк, вы можете складывать обычные строки со строками, хранящимися в переменной:</p>
      
      <pre><code><span class="keyword">const</span> <span class="var">language</span> = <span class="string">"JavaScript"</span>;
<span class="keyword">console</span>.<span class="function">log</span>(<span class="string">"My first programming language is: "</span> + <span class="var">language</span> + <span class="string">"."</span>);
<span class="comment">// выведет "My first programming language is: JavaScript."</span></pre></code>

<p>В данном случае значение переменной и значение строки, с которой происходит сложение имеют одинаковый тип <code>String</code>, поэтому действует уже известное вам правило конкатенации строк. Точно так же можно было бы сложить 2 переменные строкового типа.</p>`,
      goal: `Сложите переменные со строками.`,
      initValues: {
        html: "",
        css: "",
        js: ``,
      },
      tasks: [
        {
          id: 1,
          label: `Создайте переменную <code>favoriteCity</code> с названием вашего любимого города.`,
          testRegExp: [`const favoriteCity = ("|'|\`).+("|'|\`);`],
          failMsg: "Убедитесь, что вы использовали const при создании переменной",
        },
        {
          id: 2,
          label: "Cоздайте переменную <code>country</code> с названием страны, в которой расположен этот город.",
          testRegExp: [`const country = ("|'|\`).+("|'|\`);`],
          failMsg: "Убедитесь, что вы использовали const при создании переменной",
        },
        {
          id: 3,
          label: `Используя сложение строк и переменных, выведите в консоль такую строку: <code>Мой любимый город favoriteCity, который расположен в country.</code>. Не делайте пробелы отдельными строками.`,
          testRegExp: [
            `\console\\.log\\(("|'|\`)Мой любимый город ("|'|\`) \\+ favoriteCity \\+ ("|'|\`), который расположен в ("|'|\`) \\+ country \\+ ("|'|\`)\\.("|'|\`)\\);`,
          ],
          failMsg: "Убедитесь, что вы правильно расставили пробелы",
        },
      ],
    },

    {
      id: 7,
      header: "Интерполяция строк",
      url: "js-string-interpolation",
      theory: `<p>Использовать переменные совместно со строками приходится настолько часто, что начиная со стандарта ES6 у нас появилась возможность вставлять (<em>interpolate</em>) переменные в строки. Такая форма записи называется <em>шаблонные строки</em> (<em>template literals</em>). Давайте попробуем пример из предыдущего упражнения переписать с использованием шаблонных строк:</p>
      
      <pre><code><span class="keyword">const</span> <span class="var">language</span> = <span class="string">"JavaScript"</span>;

<span class="comment">// пример со сложением строк</span>
<span class="keyword">console</span>.<span class="function">log</span>(<span class="string">"My first programming language is: "</span> + <span class="var">language</span> + <span class="string">"."</span>);

<span class="comment">// пример с шаблонными строками</span>
<span class="keyword">console</span>.<span class="function">log</span>(<span class="string">\`My first programming language is: </span>\${<span class="var">language</span>}<span class="string">.</span>\`</span>);

<span class="comment">// оба варианта выведут</span>
<span class="comment">// "My first programming language is: JavaScript."</span></pre></code>

<p>Для того, чтобы использовать шаблонные литералы, вам нужно:</p>
<ul>
  <li>Всю строку, в которую будут включены переменные, заключить в обратные кавычки <code>\`...\`</code>. Обратные кавычки на клавиатурах с поддержкой кириллицы расположены, как правило, на одной клавише с буквой Ё и знаком тильда <code>~</code>. Шаблонные строки не будут работать с обычными одинарными и двойными кавычками!</li>
  <li>В месте вставки переменной необходимо поместить набор символов <code>\${ }</code>. Между фигурными скобками необходимо написать название переменной. Теперь переменная встроена в строку.</li>
</ul>
<p>Поначалу использование такой записи может показаться сложнее конкатенации строк из-за использования большего количества знаков, но на самом деле использование шаблонных литералов компактнее и код становится чище, особенно для более сложных строк.</p>`,
      goal: `Используйте шаблонные литералы.`,
      initValues: {
        html: "",
        css: "",
        js: `const favoriteCity = "Москва";
const country = "Россия";

console.log("Мой любимый город " + favoriteCity + ", который расположен в " + country + ".");
`,
      },
      tasks: [
        {
          id: 1,
          label: `Перепишите строку из предыдущего задания, используя шаблонные литералы.`,
          testRegExp: [
            '\console\\.log\\(\`Мой любимый город \\${favoriteCity}, который расположен в \\${country}\\.\`\\);',
          ],
          failMsg: "Убедитесь, что обе переменные заключены в ${}",
        },
      ],
    },

    {
      id: 8,
      header: "Оператор typeof",
      url: "js-typeof",
      theory: `<p>Бывает полезно узнать тип переменной, с которой вы работаете. В предыдущих упражнениях вы узнали, что JavaScript - слаботипизированный язык, а это значит, что тип каждой из переменных может меняться в ходе выполнения программы. Чтобы отследить текущий тип переменной можно использовать оператор <code>typeof</code>:</p>
      
      <pre><code><span class="keyword">const</span> <span class="var">x</span> = <span class="string">"some string"</span>;
<span class="keyword">console</span>.<span class="function">log</span>(<span class="keyword">typeof</span> <span class="var">x</span>);<span class="comment">// выведет string</span>

<span class="keyword">const</span> <span class="var">y</span> = <span class="number">0</span>;
<span class="keyword">console</span>.<span class="function">log</span>(<span class="keyword">typeof</span> <span class="var">y</span>);<span class="comment">// выведет number</span></pre></code>

<p>Переменной <code>x</code> в качестве значения мы присвоили строку, поэтому <code>typeof x</code> вернет <code>string</code>, переменной <code>y</code> мы присвоили число, поэтому <code>typeof y</code> вернет <code>number</code>.</p>`,
      goal: `Узнайте тип переменной.`,
      initValues: {
        html: "",
        css: "",
        js: `const unknownVariable1 = false;
let unknownVariable2;
const unknownVariable3 = () => {};
const unknownVariable4 = {};
`,
      },
      tasks: [
        {
          id: 1,
          label: `Выведите в консоль тип переменной <code>unknownVariable1</code>.`,
          testRegExp: [
            '\console\\.log\\(typeof unknownVariable1\\);',
          ],
          failMsg: "Убедитесь, что вы используете оператор typeof",
        },
        {
          id: 2,
          label: `Выведите в консоль тип переменной <code>unknownVariable2</code>.`,
          testRegExp: [
            '\console\\.log\\(typeof unknownVariable2\\);',
          ],
          failMsg: "Убедитесь, что вы используете оператор typeof",
        },
        {
          id: 3,
          label: `Выведите в консоль тип переменной <code>unknownVariable3</code>.`,
          testRegExp: [
            '\console\\.log\\(typeof unknownVariable3\\);',
          ],
          failMsg: "Убедитесь, что вы используете оператор typeof",
        },
        {
          id: 4,
          label: `Выведите в консоль тип переменной <code>unknownVariable4</code>. Последние два типа будут изучены позже.`,
          testRegExp: [
            '\console\\.log\\(typeof unknownVariable4\\);',
          ],
          failMsg: "Убедитесь, что вы используете оператор typeof",
        },
      ],
    },
  ],
};
