import React from "react";
import { useSelector, useDispatch } from "react-redux";
import { IRootState } from "../../store/types";
import { IExcercise } from "../../types";
import { setCurrentExercise, setEditorValues } from "../../store/actions";
import { Link } from "react-router-dom";
import "./LessonNavigator.scss";

const LessonNavigator: React.FC = () => {
  const { currentLesson, courseStructure, exerciseId } = useSelector((state: IRootState) => {
    return {
      courseStructure: state.courseStructure,
      currentLesson: state.currentLesson,
      exerciseId: state.currentExercise.id,
    };
  });

  const courseUrl = courseStructure.url;
  const excercises = currentLesson.excercises;
  const lessonUrl = currentLesson.url;
  const numExcercises = excercises.length;
  const nextExercise = excercises[exerciseId];
  const prevExercise = excercises[exerciseId - 2];

  const forwardLinkUrl =
    exerciseId === numExcercises
      ? `/courses/${courseUrl}`
      : `/courses/${courseUrl}/lessons/${lessonUrl}/${nextExercise.url}`;
  const forwardLinkText = exerciseId === numExcercises ? "Завершить урок" : "Вперед";
  const backwardsLinkUrl = exerciseId === 1 ? "#" : `/courses/${courseUrl}/lessons/${lessonUrl}/${prevExercise.url}`;
  const dispatch = useDispatch();

  const handleBackwardsLinkClick = (exercise: IExcercise) => () => {
    if (exerciseId > 1) {
      dispatch(setEditorValues(exercise.initValues));
      dispatch(
        setCurrentExercise({
          ...exercise,
          passed: undefined,
          message: [],
        })
      );
    }
  };

  const handleForwardLinkClick = (exercise: IExcercise) => () => {
    if (exerciseId < numExcercises) {
      dispatch(setEditorValues(exercise.initValues));
      dispatch(
        setCurrentExercise({
          ...exercise,
          passed: undefined,
          message: [],
        })
      );
    }
  };

  return (
    <div className="lesson-nav">
      <Link
        to={backwardsLinkUrl}
        className={`lesson-nav_backwards ${exerciseId === 1 ? "lesson-nav_backwards--disabled" : ""}`}
        onClick={handleBackwardsLinkClick(prevExercise)}
      >
        Назад
      </Link>

      <div className="lesson-nav_position">{`Упражнение ${exerciseId} из ${numExcercises}`}</div>

      <Link to={forwardLinkUrl} className="lesson-nav_forwards" onClick={handleForwardLinkClick(nextExercise)}>
        {forwardLinkText}
      </Link>
    </div>
  );
};

export default LessonNavigator;
