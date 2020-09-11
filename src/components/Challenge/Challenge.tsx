import React from "react";
import { useSelector, useDispatch } from "react-redux";
import "./Challenge.scss";
import TaskSuite from "../TaskSuite/TaskSuite";
import { IRootState } from "../../store/types";
import { setCurrentTasks, setCurrentExercise } from "../../store/actions";
import { ITask } from "../../types";
import { ICurrentTask } from "../../store/types";

interface IChallengeProps {
  header: string;
  theory: JSX.Element;
  goal: JSX.Element;
  tasks: ITask[];
}

const Challenge: React.FC<IChallengeProps> = ({ header, theory, goal, tasks }) => {
  const currentTasks = useSelector((state: IRootState) => state.currentTasks);
  const { id, passed, message } = useSelector((state: IRootState) => state.currentExercise);

  const dispatch = useDispatch();

  const handleClick = () => {
    let excercisePassed = true;
    let excerciseMessage: string[] = [];

    currentTasks.map((task: ICurrentTask) => {
      if (
        document.body.querySelector("iframe").contentDocument.body.querySelector("h2") &&
        document.body.querySelector("iframe").contentDocument.body.querySelector("h2").textContent === "Привет HTML"
      ) {
        task.passed = true;
      } else {
        task.passed = false;
        excercisePassed = false;
        excerciseMessage.push("У тэга h2 должен быть текст Привет HTML");
      }
    });

    excerciseMessage.push(
      excercisePassed ? "Поздравляем! Все тесты пройдены" : "Некоторые тесты не пройдены. Внимательно просмотрите код"
    );

    dispatch(setCurrentTasks(currentTasks));
    dispatch(setCurrentExercise({ id, passed: excercisePassed, message: excerciseMessage }));
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
