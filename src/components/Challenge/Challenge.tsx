import React from "react";
import { useSelector, useDispatch } from "react-redux";
import "./Challenge.scss";
import TaskSuite from "../TaskSuite/TaskSuite";
import { IRootState } from "../../store/types";
import { setCurrentTasks, setCurrentExercise } from "../../store/actions";
import { ITask, ResultMessage } from "../../types";
import { ICurrentTask } from "../../store/types";

interface IChallengeProps {
  header: string;
  theory: string;
  goal: string;
  tasks: ITask[];
}

const Challenge: React.FC<IChallengeProps> = ({ header, theory, goal, tasks }) => {
  const currentTasks = useSelector((state: IRootState) => state.currentTasks);
  const { id } = useSelector((state: IRootState) => state.currentExercise);

  const dispatch = useDispatch();

  const handleClick = () => {
    let excercisePassed = true;
    let excerciseMessage = [];
    const iframe = document.body.querySelector("iframe").contentDocument.body;

    currentTasks.map((task: ICurrentTask) => {
      if (task.test(iframe)) {
        task.passed = true;
      } else {
        task.passed = false;
        excercisePassed = false;
        excerciseMessage.push(task.failMsg);
      }
    });

    excerciseMessage.push(excercisePassed ? ResultMessage.SUCCESS : ResultMessage.FAIL);

    dispatch(setCurrentTasks(currentTasks));
    dispatch(setCurrentExercise({ id, passed: excercisePassed, message: excerciseMessage }));
  };

  return (
    <section className="challenge">
      <h2>{header}</h2>
      <div className="theory" dangerouslySetInnerHTML={{ __html: theory }}></div>
      <h3>Ваша задача:</h3>
      <p className="goal" dangerouslySetInnerHTML={{ __html: goal }}></p>
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
