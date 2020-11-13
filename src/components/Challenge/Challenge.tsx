import React, { useState } from "react";
import { useSelector, useDispatch } from "react-redux";
import "./Challenge.scss";
import TaskSuite from "../TaskSuite";
import LessonNavigator from "../LessonNavigator";
import ResetConfirmModal from "../Modals/ResetConfirmModal";
import { IRootState } from "../../store/types";
import { setCurrentTasks, setCurrentExercise, setEditorValue } from "../../store/actions";
import { ITask, ResultMessage } from "../../types";
import { ICurrentTask } from "../../store/types";
import { Link } from "react-router-dom";

interface IChallengeProps {
  header: string;
  theory: string;
  goal: string;
  tasks: ITask[];
  initValues: any;
}

const Challenge: React.FC<IChallengeProps> = ({ header, theory, goal, tasks, initValues }) => {
  const currentTasks = useSelector((state: IRootState) => state.currentTasks);
  const { excersiceId, excersiceUrl, lessonUrl } = useSelector((state: IRootState) => state.currentExercise);
  const { html, css, js } = initValues;

  const [resetModalVisible, setResetModalVisible] = useState(false);

  const dispatch = useDispatch();

  const handleRunButtonClick = () => {
    let excercisePassed = true;
    let excerciseMessage = [];
    const iframe = document.body.querySelector("iframe");

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
    dispatch(
      setCurrentExercise({ excersiceId, excersiceUrl, lessonUrl, passed: excercisePassed, message: excerciseMessage })
    );
  };

  const handleModalCancelClick = () => {
    setResetModalVisible(false);
  };

  const handleModalConfirmClick = () => {
    dispatch(setEditorValue({ html, css, js }));
    setResetModalVisible(false);
  };

  const handleResetButtonClick = () => {
    setResetModalVisible(true);
  };

  return (
    <section className="challenge">
      <Link to="/courses/html" className="challenge__linkToCourse">
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
      <TaskSuite tasks={tasks} />
      {/* <LessonNavigator /> */}
      <ResetConfirmModal
        open={resetModalVisible}
        onModalCancelClick={handleModalCancelClick}
        onModalConfirmClick={handleModalConfirmClick}
      />
    </section>
  );
};

export default Challenge;
