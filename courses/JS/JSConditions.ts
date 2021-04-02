import { ICourseLesson } from "../../shared/types";

export const JsConditions: ICourseLesson = {
  id: 3,
  title: "Условия",
  url: "js-conditions",
  excercises: [
    {
      id: 1,
      header: "Условие - if",
      url: "js-if-keyword",
      theory: ` <p>В общем случае программа на JavaScript выполняется последовательно - начиная с первой строки и до конца. В реальной жизни, однако, часто возникают условия, от выполнения которых зависит, будем мы производить то или иное действие или нет. В JavaScript для этого существуют <em>условные выражения</em> нескольких типов. Вот как выглядит самое простое:</p>

<pre><code><span class="keyword">if</span> (<span class="boolean">true</span>) {
  <span class="keyword">console</span>.<span class="function">log</span>(<span class="string">"Условие выполнилось!"</span>);
}
<span class="comment">// выведет "Условие выполнилось!"</span></pre></code>

<p>Условное выражение состоит из трех частей:</p>
<ul>
<li>Ключевое слово <code>if</code>, которое говорит движку, что дальше будет условие.</li>
<li>Условие в круглых скобках <code>(...)</code>. Условие может быть либо правдивым <code>true</code>, либо ложным <code>false</code>. Мы поместили в круглые скобки логическое значение <code>true</code>, поэтому условие, очевидно, выполняется.</li>
<li>Блок кода, заключенный в фигурные скобки <code>{...}</code>. Код в фигурных скобках выпонится только если условие вернет <code>true</code>, в данном случае выведя в консоль строку. Если условие вернет <code>false</code>, программа проигнорирует этот блок кода и продолжит выполнение со строки после него.</li>
</ul>

<p>Обратите внимание на стиль кода. Строки, находящиеся в пределах блока кода условного выражения, принято выделять отступом в 2 пробела, чтобы показать, что все они относятся к одному условному выражению.</p>`,
      goal: `Создайте условное выражение`,
      initValues: {
        html: "",
        css: "",
        js: ``,
      },
      tasks: [
        {
          id: 1,
          label: `Создайте переменную под названием <code>male</code> и присвойте ей значение <code>true</code>, используйте ключевое слово <code>let</code> для объявления переменной.`,
          testRegExp: [`let male = true;`],
          failMsg: "Убедитесь, что вы использовали правильное ключевое слово для создания переменной",
        },
        {
          id: 2,
          label: `Создайте условное выражение, которое проверяет правдивость значения переменной <code>male</code>. В случае выполнения условия выведите в консоль строку <code>"Вы - мужчина."</code>. После проверки задания попробуйте поменять значение переменной на <code>false</code>.`,
          testRegExp: [`if\\s?\\(male\\)\\s?{\\s*?console\\.log\\(("|'|\`)Вы - мужчина.("|'|\`)\\);\\s*?};`],
          failMsg: "Убедитесь, что использовали верный синтаксис условного выражения",
        },
      ],
    },

    {
      id: 2,
      header: "Условие с альтернативой - if...else",
      url: "js-else-keyword",
      theory: ` <p>Когда условное выражение содержит только <code>if</code>, мы рассматриваем только одну возможную ветку - ту, в которой условие выполняется. Чаще всего нам необходимо рассмотреть обе ветки и выполнить разный код в зависимости от выполнения и не выполнения условия. На этот случай существует ключевое слово <code>else</code>:</p>

<pre><code><span class="keyword">if</span> (<span class="boolean">true</span>) {
  <span class="keyword">console</span>.<span class="function">log</span>(<span class="string">"Условие выполнилось!"</span>);
} <span class="keyword">else</span> {
  <span class="keyword">console</span>.<span class="function">log</span>(<span class="string">"Условие провалилось!"</span>);
} <span class="comment">// выведет "Условие выполнилось!"</span>

<span class="keyword">if</span> (<span class="boolean">false</span>) {
  <span class="keyword">console</span>.<span class="function">log</span>(<span class="string">"Условие выполнилось!"</span>);
} <span class="keyword">else</span> {
  <span class="keyword">console</span>.<span class="function">log</span>(<span class="string">"Условие провалилось!"</span>);
} <span class="comment">// выведет "Условие провалилось!"</span></pre></code>

<p>Вот что происходит в этом коде.</p>
<ol>
<li>В первом случае условие в круглых скобках выполняется - <code>true</code>, следовательно, выполняется код в основной ветке. Код в блоке после <code>else</code> игнорируется.</li>
<li>Во втором случае условие в круглых скобках не выполняется - <code>false</code>, код в основной ветке игнорируется, выполняется код в блоке после <code>else</code>.</li>
</ol>

<p>Ключевое слово <code>else</code> можно использовать только в сваязке с <code>if</code> для обозначения альтернативного развития событий, без него оно не имеет смысла.</p>`,
      goal: `Создайте альтернативу в условном выражении.`,
      initValues: {
        html: "",
        css: "",
        js: `let male = true;

if (male) {
  console.log("Вы - мужчина.");
};`,
      },
      tasks: [
        {
          id: 1,
          label: `Создайте альтернативную ветку в условном выражении, в которой выведите в консоль строку <code>"Вы - женщина."</code>. Поробуйте изменить значение переменной <code>male</code>.`,
          testRegExp: [
            `if\\s?\\(male\\)\\s?{\\s*?console\\.log\\(("|'|\`)Вы - мужчина.("|'|\`)\\);\\s*?}\\s*else\\s*{\\s*?console\\.log\\(("|'|\`)Вы - женщина.("|'|\`)\\);\\s*?};`,
          ],
          failMsg: "Убедитесь, что вы создали альтернативную ветку с помощью else",
        },
      ],
    },

    {
      id: 3,
      header: "Операторы сравнения",
      url: "js-comparison",
      theory: `<p>Условия не задаются, конечно, только лишь логическими значениями <code>true</code> или <code>false</code>. Обычно приходится сравнивать между собой различные значения и результаты сравнения приводить к логическому виду, то есть верно это сравнения или нет. Для этого используются <em>операторы сравнения</em>:</p>
      <ul>
      <li><code><</code> - меньше чем</li>
      <li><code>></code> - больше чем</li>
      <li><code><=</code> - меньше или равно</li>
      <li><code>>=</code> - больше или равно</li>
      <li><code>===</code> - равно</li>
      <li><code>!==</code> - не равно</li>
      </ul>

<pre><code><span class="number">10</span> > <span class="number">5</span><span class="comment">// приводится к true</span>
<span class="number">10</span> < <span class="number">5</span><span class="comment">// приводится к false</span></pre></code>

<p>Оператор сравнения сравнивает выражения слева от него с выражением справа от него, означает <code>true</code> если результат сравнения верен, иначе <code>false</code>.</p>
<p>Первые 4 оператора используются для сравнения числовых значений, операторы равенства и неравенства можно использовать и для сравнения строк:</p>

<pre><code><span class="string">"стол"</span> === <span class="string">"стул"</span><span class="comment">// приводится к false</span>
<span class="string">"стол"</span> !== <span class="string">"стул"</span><span class="comment">// приводится к true</span></pre></code>

<p>Строки равны только если полностью совпадают символы, которые в них входят.</p>`,
      goal: `Используйте оперторы сравнения в условиях.`,
      initValues: {
        html: "",
        css: "",
        js: `const myAge = unknown;

const nativeCity = "";
const currentCity = "";
`,
      },
      tasks: [
        {
          id: 1,
          label: `Переменной <code>myAge</code> присвойте значение своего возраста.`,
          testRegExp: [`const myAge = [0-9]*;`],
          failMsg: "Убедитесь, что переменной myAge вы задали числовое значение",
        },
        {
          id: 2,
          label: `Создайте условие, по которому если ваш возраст больше или равен <code>18</code>, выведите в консоль строку <code>Мне можно покупать алкоголь.</code>, иначе строку <code>Алкоголь мне еще нельзя.</code>.`,
          testRegExp: [
            `if\\s?\\(myAge\\s?>=\\s?18\\)\\s?{\\s*?console\\.log\\(("|'|\`)Мне можно покупать алкоголь.("|'|\`)\\);\\s*?}\\s*else\\s*{\\s*?console\\.log\\(("|'|\`)Алкоголь мне еще нельзя.("|'|\`)\\);\\s*?};`,
          ],
          failMsg: "Убедитесь, что вы создали условное выражение с альтернативой",
        },
        {
          id: 3,
          label: `Переменной <code>nativeCity</code> присвойте название своего родного города, а <code>currentCity</code> - города, в котором вы сейчас живете.`,
          testRegExp: [`const nativeCity = ("|'|\`).+("|'|\`);`, `const currentCity = ("|'|\`).+("|'|\`);`],
          failMsg: "Убедитесь, что переменным вы задали строковое значение",
        },
        {
          id: 4,
          label: `Если ваш родной и текущий город одинаковы, выведите в консоль строку <code>Я никуда не переезжал.</code>.`,
          testRegExp: [
            `if\\s?\\(nativeCity\\s?===\\s?currentCity\\)\\s?{\\s*?console\\.log\\(("|'|\`)Я никуда не переезжал.("|'|\`)\\);\\s*?};`,
          ],
          failMsg: "Убедитесь, что вы создали условное выражение без альтернативной ветки",
        },
      ],
    },

    {
      id: 4,
      header: "Логические оперторы",
      url: "js-logical-operators",
      theory: `<p>Есть несколько <em>логических операторов</em>, предназначенных для работы с булевыми значениями <code>true</code> и <code>false</code>. Чаще всего они нужны, чтобы создать более сложное условие, состоящее из нескольких простых. Всего их 3:</p>
      <ul>
      <li><code>&&</code> - логическое <em>и</em></li>
      <li><code>||</code> - логическое <em>или</em></li>
      <li><code>!</code> - логическое <em>не</em></li>
      </ul>

<pre><code><span class="keyword">const</span> <span class="var">age</span> = <span class="number">50</span>;

<span class="keyword">if</span> (<span class="var">age</span> >= <span class="number">14</span> && <span class="var">age</span> < <span class="number">65</span>) {
  <span class="keyword">console</span>.<span class="function">log</span>(<span class="string">"Вы находитесь в трудоспособном возрасте"</span>);
} <span class="keyword">else</span> {
  <span class="keyword">console</span>.<span class="function">log</span>(<span class="string">"Вы не в трудоспособном возрасте"</span>);
} <span class="comment">// выведет "Вы находитесь в трудоспособном возрасте!"</span></pre></code>

<p>Для проверки выполнения двух условий мы используем оператор <code>&&</code>. Чтобы условие вернуло <code>true</code>, нужно, чтобы обе части выражения вернули <code>true</code>. Сначала проверяется выражение слева. Оно возвращает <code>true</code>, так как <code>50 >= 14</code>. Далее проверяется выражение справа от оператора. Оно тоже возвращает <code>true</code>, так как <code>50 < 65</code>. Поэтому все условие возвращает <code>true</code> и в консоль выводится строка из основной ветки условия. Если левая часть выражения вернет <code>false</code>, правая часть даже не будет проверяться.</p>
<p>Рассмотрим другой случай:</p>

<pre><code><span class="keyword">const</span> <span class="var">age</span> = <span class="number">50</span>;

<span class="keyword">if</span> (<span class="var">age</span> < <span class="number">14</span> || <span class="var">age</span> >= <span class="number">65</span>) {
  <span class="keyword">console</span>.<span class="function">log</span>(<span class="string">"Вы не в трудоспособном возрасте"</span>);
} <span class="keyword">else</span> {
  <span class="keyword">console</span>.<span class="function">log</span>(<span class="string">"Вы находитесь в трудоспособном возрасте"</span>);
} <span class="comment">// выведет "Вы находитесь в трудоспособном возрасте"</span></pre></code>

<p>Мы также проверяем две части условия, но нам достаточно, чтобы одна из них вернула <code>true</code>. Для этого подходит оператор <code>||</code>. Сначала он проверит левую часть условия. Она вернет <code>false</code>, далее правая часть условия также вернет <code>false</code>. Поскольку обе части условия не выполнились, все условие вернет <code>false</code> и в консоль будет выведена строка из альтернативной части условного выражения. Если любая из двух частей выражения вернула бы <code>true</code>, все условие стало бы правдивым.</p>
<p>Наконец, иногда нужно просто получить логическое значение, противоположное текущему. Для этого используем оператор <code>!</code></p>

<pre><code><span class="keyword">const</span> <span class="var">workingAge</span> = <span class="boolean">true</span>;
<span class="keyword">console</span>.<span class="function">log</span>(!<span class="var">workingAge</span>);<span class="comment">// выведет false</span></pre></code>

<p>Таким образом <code>!false</code> это <code>true</code>, а <code>!true</code> это <code>false</code>.</p>`,
      goal: `Используйте логические операторы для создания условий.`,
      initValues: {
        html: "",
        css: "",
        js: `const myAge = 20;
const hasDrivingLicense = false;
const category = "B";
`,
      },
      tasks: [
        {
          id: 1,
          label: `Выведите в консоль строку <code>Мне можно за руль.</code> если ваш возраст <code>myAge</code> больше 18 (включительно) и у вас есть права <code>hasDrivingLicense</code>. После этого попробуйте поменять исходные значения переменных.`,
          testRegExp: [
            `if\\s?\\(myAge\\s?>= 18\\s?&&\\s?hasDrivingLicense\\)\\s?{\\s*?console\\.log\\(("|'|\`)Мне можно за руль.("|'|\`)\\);\\s*?};`,
          ],
          failMsg: "Убедитесь, что вы использовали оператор &&",
        },
        {
          id: 2,
          label: `Выведите в консоль строку <code>Управляю легковым транспортом.</code> если ваша категория <code>category</code> "A" либо "B".`,
          testRegExp: [
            `if\\s?\\(category\\s?===\\s?"A"\\s?\\|\\|\\s?category\\s?===\\s?"B"\\)\\s?{\\s*?console\\.log\\(("|'|\`)Управляю легковым транспортом.("|'|\`)\\);\\s*?};`,
          ],
          failMsg: "Убедитесь, что вы использовали оператор ||",
        },
        {
          id: 3,
          label: `Выведите в консоль значение противоположное <code>hasDrivingLicense</code>.`,
          testRegExp: [`console\\.log\\(!hasDrivingLicense\\);`],
          failMsg: "Убедитесь, что вы использовали оператор !",
        },

        
      ],
    },

    {
      id: 5,
      header: "Правдивость, ложность",
      url: "js-truthy-falsy",
      theory: `<p>Давайте попробуем вместо логического значение вставить в логическое выражение данные другого типа:</p>

<pre><code><span class="keyword">const</span> <span class="var">number</span> = <span class="number">30</span>;

<span class="keyword">if</span> (<span class="var">number</span>) {
  <span class="keyword">console</span>.<span class="function">log</span>(<span class="string">"Число не равно нулю"</span>);
} <span class="keyword">else</span> {
  <span class="keyword">console</span>.<span class="function">log</span>(<span class="string">"Число равно нулю"</span>);
} <span class="comment">// выведет "Число не равно нулю"</span></pre></code>

<p>В проверочное выражение мы вставили число, хотя в предыдущих упражнениях говорилось о том, что там должно быть логического значение <code>true</code> или <code>false</code>. На самом деле тут нет противоречия. Данные других типов тоже имеют значение "правдивости" и "ложности". Достаточно запомнить следующие правила:</p>
<ul>
<li><code>numbers</code> - <code>0</code> приравнивается к <code>false</code>, остальные числа - к <code>true</code>.</li>
<li><code>strings</code> - <code>""</code> пустая строка приравнивается к <code>false</code>, если в строке есть хотя бы один символ - к <code>true</code>.</li>
<li><code>null, undefined</code> - приравниваются к <code>false</code>.</li>
</ul>
<p>Рассмотрим другой случай со строками:</p>

<pre><code><span class="keyword">const</span> <span class="var">string</span> = <span class="string">" "</span>;

<span class="keyword">if</span> (<span class="var">string</span>) {
  <span class="keyword">console</span>.<span class="function">log</span>(<span class="string">"Строка не пустая"</span>);
} <span class="keyword">else</span> {
  <span class="keyword">console</span>.<span class="function">log</span>(<span class="string">"Строка определенно пустая"</span>);
} <span class="comment">// выведет "Строка не пустая"</span></pre></code>

<p>Строка выглядит как будто пустой, но на самом деле в ней есть один символ - пробел, поэтому она приравнивается к <code>true</code>.</p>
<p>Строки и числа обычно передаются в условные выражения для проверки их наличия. Если выражение приводится к <code>true</code> - значит строка существует, иначе она либо пустая, либо <code>undefined</code>. Если число приводит выражение к <code>true</code>, значит оно не равно нулю и существует (не <code>undefined</code>).</p>`,
      goal: `Измените правдивость типов данных.`,
      initValues: {
        html: "",
        css: "",
        js: `const myDeposit = undefined;
const myBank = "";

if (myDeposit && myBank) {
  console.log(\`У меня есть вклад в размере \${myDeposit} рублей в банке \${myBank}\`);
};
`,
      },
      tasks: [
        {
          id: 1,
          label: `Изменить значения переменных <code>myDeposit</code> и <code>myBank</code> таким образом, чтобы в консоль попала строка.`,
          testFn: 'return myDeposit && myBank',
          failMsg: "Убедитесь, что вы сделали оба значения правдивыми",
        },  
      ],
    },
  ],
};
