import React from "react";
import { useSelector, useDispatch } from "react-redux";
import { IRootState } from "../../store/types";
import { ICourseLesson, IExcercise } from "../../types";
import { setCurrentExercise, setEditorValues } from "../../store/actions";
import "./LessonNavigator.scss";
import { Link } from "react-router-dom";

const LessonNavigator: React.FC = ({}) => {
  const { course, lessonUrl, exerciseUrl, exerciseId } = useSelector((state: IRootState) => {
    return {
      course: state.course,
      exerciseId: state.currentExercise.exerciseId,
      exerciseUrl: state.currentExercise.exerciseUrl,
      lessonUrl: state.lessonUrl,
    };
  });

  const courseUrl = course.url;
  const excercises = course.lessons[lessonUrl].excercises;
  const numExcercises = excercises.length;
  const nextexercise = excercises[exerciseId];
  const prevexercise = excercises[exerciseId - 2];

  const forwardLinkUrl =
    exerciseId === numExcercises
      ? `/courses/${courseUrl}`
      : `/courses/${courseUrl}/lessons/${lessonUrl}/${nextexercise.url}`;
  const forwardLinkText = exerciseId === numExcercises ? "Завершить урок" : "Вперед";
  const backwardsLinkUrl = exerciseId === 1 ? "#" : `/courses/${courseUrl}/lessons/${lessonUrl}/${prevexercise.url}`;
  const dispatch = useDispatch();

  const handleBackwardsLinkClick = (exercise: IExcercise) => () => {
    if (exerciseId > 1) {
      const { initValues, url, id, tasks } = exercise;

      dispatch(setEditorValues(initValues));
      dispatch(
        setCurrentExercise({
          exerciseId: id,
          exerciseUrl: url,
          passed: undefined,
          message: [],
          tasks,
        })
      );
    }
  };

  const handleForwardLinkClick = (exercise: IExcercise) => () => {
    if (exerciseId < numExcercises) {
      const { initValues, url, id, tasks } = exercise;

      dispatch(setEditorValues(initValues));
      dispatch(
        setCurrentExercise({
          exerciseId: id,
          exerciseUrl: url,
          passed: undefined,
          message: [],
          tasks,
        })
      );
    }
  };

  return (
    <div className="lesson-nav">
      <Link
        to={backwardsLinkUrl}
        className={`lesson-nav_backwards ${exerciseId === 1 ? "lesson-nav_backwards--disabled" : ""}`}
        onClick={handleBackwardsLinkClick(prevexercise)}
      >
        Назад
      </Link>

      <div className="lesson-nav_position">{`Упражнение ${exerciseId} из ${numExcercises}`}</div>

      <Link to={forwardLinkUrl} className="lesson-nav_forwards" onClick={handleForwardLinkClick(nextexercise)}>
        {forwardLinkText}
      </Link>
    </div>
  );
};

export default LessonNavigator;
