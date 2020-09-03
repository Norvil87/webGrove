import React from "react";
import "./Challenge.scss";
import TaskSuite from "../TaskSuite/TaskSuite";

const Challenge = () => {
  return (
    <section className="challenge">
      <div className="theory">
        <h2>Basic HTML and HTML5: Say Hello to HTML Elements</h2>
        <p>
          Welcome to freeCodeCamp's HTML coding challenges. These will walk you through web development step-by-step.
        </p>
        <p>
          First, you'll start by building a simple web page using HTML. You can edit code in your code editor, which is
          embedded into this web page.
        </p>
        <p>
          Do you see the code in your code editor that says <code>{"<h1>Hello</h1>"}</code>? That's an HTML element.
        </p>
        <p>Most HTML elements have an opening tag and a closing tag.</p>
        <p>Opening tags look like this:</p>
        <p>
          <code>{"<h1>"}</code>
        </p>
        <p>Closing tags look like this:</p>
        <p>
          <code>{"</h1>"}</code>
        </p>
        <p>
          The only difference between opening and closing tags is the forward slash after the opening bracket of a
          closing tag.
        </p>
        <p>
          Each challenge has tests you can run at any time by clicking the "Run tests" button. When you pass all tests,
          you'll be prompted to submit your solution and go to the next coding challenge.
        </p>
        <p className="goal">
          To pass the test on this challenge, change your <code>{"<h1>"}</code> element's text to say "Hello World".
        </p>
      </div>
      <div className="buttonContainer">
        <button type="button" className="button runCode-button">
          Запустить код!
        </button>
        <button type="button" className="button resetCode-button">
          Сбросить код
        </button>
      </div>
      <TaskSuite />
    </section>
  );
};

export default Challenge;
