import React, { useState } from "react";
import { useSelector, useDispatch } from "react-redux";
import "./Challenge.scss";
import TaskSuite from "../TaskSuite";
import LessonNavigator from "../LessonNavigator";
import ResetConfirmModal from "../Modals/ResetConfirmModal";
import { IRootState } from "../../store/types";
import { setCurrentExercise, setEditorValues, setUserProgress } from "../../store/actions";
import { ITask, ResultMessage, IEditorValues } from "../../../../shared/types";
import { ICurrentTask } from "../../store/types";
import { Link } from "react-router-dom";
import { post } from "../../../services";

interface IChallengeProps {
  header: string;
  theory: string;
  goal: string;
  tasks: ITask[];
  initValues: IEditorValues;
}

const Challenge: React.FC<IChallengeProps> = ({ header, theory, goal, initValues }) => {
  const { currentExercise, currentLesson, courseUrl, user } = useSelector((state: IRootState) => {
    return {
      courseUrl: state.courseStructure?.url,
      currentLesson: state.currentLesson,
      currentExercise: state.currentExercise,
      user: state.user,
    };
  });

  const [resetModalVisible, setResetModalVisible] = useState(false);
  const dispatch = useDispatch();

  const iframe = document.body.querySelector("iframe");

  const updateUserProgress = (lessonUrl: string, excerciseUrl: string) => {
    const { id, progress } = user;
    const updatedProgress = JSON.parse(JSON.stringify(progress));
    const lesson = updatedProgress[lessonUrl];
    if (lesson) {
      lesson[excerciseUrl] = true;
    } else {
      updatedProgress[lessonUrl] = { [excerciseUrl]: true };
    }

    dispatch(setUserProgress(updatedProgress));
    localStorage.setItem("webgroveUser", JSON.stringify({ ...user, updatedProgress }));
    post("http://localhost:8081/userProgress", { id, updatedProgress });
  };

  const checkTaskPassed = (task: ICurrentTask): boolean => {
    let taskPassed;
    let textContent = "";
    const userScript = iframe.contentDocument.getElementById("userScript");

    if (userScript) {
      textContent += userScript.textContent;
    }

    if (task.testRegExp) {
      const userStyle = iframe.contentDocument.querySelector("style").textContent;
      textContent += userStyle;

      taskPassed = task.testRegExp.every(expression => {
        const noGlobalFlags = typeof expression === "string";
        const regExp = noGlobalFlags ? new RegExp(expression as string) : new RegExp(expression[0], expression[1]);

        return regExp.test(textContent);
      });
    } else {
      textContent += task.testFn;
      taskPassed = new Function("iframe", textContent)(iframe);
    }

    return taskPassed;
  };

  const handleRunButtonClick = () => {
    let excercisePassed = true;
    let excerciseMessage = [];

    currentExercise.tasks.map((task: ICurrentTask) => {
      const taskPassed = checkTaskPassed(task);

      if (taskPassed) {
        task.passed = true;
      } else {
        task.passed = false;
        excercisePassed = false;
        excerciseMessage.push(task.failMsg);
      }
    });

    excerciseMessage.push(excercisePassed ? ResultMessage.SUCCESS : ResultMessage.FAIL);

    if (user && excercisePassed) {
      updateUserProgress(currentLesson.url, currentExercise.url);
    }

    dispatch(
      setCurrentExercise({
        ...currentExercise,
        passed: excercisePassed,
        message: excerciseMessage,
      })
    );
  };

  const handleModalCancelClick = () => {
    setResetModalVisible(false);
  };

  const handleModalConfirmClick = () => {
    dispatch(setEditorValues(initValues));
    setResetModalVisible(false);
  };

  const handleResetButtonClick = () => {
    setResetModalVisible(true);
  };

  return (
    <section className="challenge">
      <Link to={`/courses/${courseUrl}`} className="challenge__linkToCourse">
        Вернуться к странице курса
      </Link>
      <h2>{header}</h2>
      <div className="challenge__theory" dangerouslySetInnerHTML={{ __html: theory }}></div>
      <h3>Ваша задача:</h3>
      <p className="challenge__goal" dangerouslySetInnerHTML={{ __html: goal }}></p>
      <div className="challenge__buttonContainer">
        <button type="button" className="button challenge__runCode-button" onClick={handleRunButtonClick}>
          Запустить код!
        </button>
        <button type="button" className="button challenge__resetCode-button" onClick={handleResetButtonClick}>
          Сбросить код
        </button>
      </div>
      <TaskSuite />
      <LessonNavigator />
      <ResetConfirmModal
        open={resetModalVisible}
        onModalCancelClick={handleModalCancelClick}
        onModalConfirmClick={handleModalConfirmClick}
      />
    </section>
  );
};

export default Challenge;
