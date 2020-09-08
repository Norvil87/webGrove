import React from "react";
import "./Challenge.scss";
import TaskSuite from "../TaskSuite/TaskSuite";

interface IChallengeProps {
  header: string;
  theory: any;
  goal: string;
  tasks: any;
}

const Challenge: React.FC<IChallengeProps> = ({ header, theory, goal, tasks }) => {
  const handleClick = () => {
    let header = document.body.querySelector("iframe").contentDocument.body.querySelector("h1");
    let passed = undefined;
    passed = header.textContent === "Привет HTML" ? true : false;
  };

  return (
    <section className="challenge">
      <h2>{header}</h2>
      <div className="theory">{theory}</div>
      <p className="goal">{goal}</p>
      <div className="buttonContainer">
        <button type="button" className="button runCode-button" onClick={handleClick}>
          Запустить код!
        </button>
        <button type="button" className="button resetCode-button">
          Сбросить код
        </button>
      </div>
      <TaskSuite tasks={tasks} />
    </section>
  );
};

export default Challenge;
