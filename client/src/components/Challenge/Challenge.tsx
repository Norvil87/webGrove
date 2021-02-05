import React, { useState } from "react";
import { useSelector, useDispatch } from "react-redux";
import "./Challenge.scss";
import TaskSuite from "../TaskSuite";
import LessonNavigator from "../LessonNavigator";
import ResetConfirmModal from "../Modals/ResetConfirmModal";
import { IRootState } from "../../store/types";
import { setCurrentExercise, setEditorValues } from "../../store/actions";
import { ITask, ResultMessage, IEditorValues } from "../../types";
import { ICurrentTask } from "../../store/types";
import { Link } from "react-router-dom";

interface IChallengeProps {
  header: string;
  theory: string;
  goal: string;
  tasks: ITask[];
  initValues: IEditorValues;
}

const Challenge: React.FC<IChallengeProps> = ({ header, theory, goal, initValues }) => {
  const { currentExercise, courseUrl } = useSelector((state: IRootState) => {
    return {
      courseUrl: state.courseStructure?.url,
      currentExercise: state.currentExercise,
    };
  });

  const [resetModalVisible, setResetModalVisible] = useState(false);
  const dispatch = useDispatch();

  const handleRunButtonClick = () => {
    let excercisePassed = true;
    let excerciseMessage = [];
    const iframe = document.body.querySelector("iframe");

    currentExercise.tasks.map((task: ICurrentTask) => {
      let taskPassed;
      if (task.testRegExp) {
        const textContent = iframe.contentDocument.querySelector("style").textContent;
        taskPassed = task.testRegExp.every(regexp => regexp.test(textContent));
      } else {
        taskPassed = task.testFn(iframe);
      }

      if (taskPassed) {
        task.passed = true;
      } else {
        task.passed = false;
        excercisePassed = false;
        excerciseMessage.push(task.failMsg);
      }
    });

    excerciseMessage.push(excercisePassed ? ResultMessage.SUCCESS : ResultMessage.FAIL);

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
