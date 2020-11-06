import React from "react";
import { Html } from "../../data/courses/HTML/HTML";
import { useSelector, useDispatch } from "react-redux";
import { IRootState } from "../../store/types";
import { ICourseLesson, IExcercise } from "../../types";
import { setCurrentExercise, setEditorValue } from "../../store/actions";
import "./LessonNavigator.scss";
import { Link } from "react-router-dom";

const LessonNavigator: React.FC = ({}) => {
  const { lessonUrl, excersiceId, excersiceUrl } = useSelector((state: IRootState) => state.currentExercise);
  const block: ICourseLesson = Html.lessons[lessonUrl];
  const numExcercises = block.excercises.length;
  const nextExcersice = block.excercises[excersiceId];
  const prevExcersice = block.excercises[excersiceId - 2];

  const forwardLinkUrl =
    excersiceId === numExcercises ? "/courses/html" : `/courses/html/${lessonUrl}/${nextExcersice.url}`;
  const forwardLinkText = excersiceId === numExcercises ? "Завершить урок" : "Вперед";
  const backwardsLinkUrl = excersiceId === 1 ? "#" : `/courses/html/${lessonUrl}/${prevExcersice.url}`;
  const dispatch = useDispatch();

  const handleBackwardsLinkClick = (excercise: IExcercise) => () => {
    if (excersiceId > 1) {
      const { initValues, url, id } = excercise;
      dispatch(setEditorValue({ html: initValues.html, css: initValues.css, js: "" }));
      dispatch(
        setCurrentExercise({
          lessonUrl: lessonUrl,
          excersiceId: id,
          excersiceUrl: url,
          passed: undefined,
          message: [],
        })
      );
    }
  };

  const handleForwardLinkClick = (excercise: IExcercise) => () => {
    if (excersiceId < numExcercises) {
      const { initValues, url, id } = excercise;

      dispatch(setEditorValue({ html: initValues.html, css: initValues.css, js: "" }));
      dispatch(
        setCurrentExercise({
          lessonUrl: lessonUrl,
          excersiceId: id,
          excersiceUrl: url,
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
        className={`lesson-nav_backwards ${excersiceId === 1 ? "lesson-nav_backwards--disabled" : ""}`}
        onClick={handleBackwardsLinkClick(prevExcersice)}
      >
        Назад
      </Link>

      <div className="lesson-nav_position">{`Упражнение ${excersiceId} из ${numExcercises}`} </div>
      <Link to={forwardLinkUrl} className="lesson-nav_forwards" onClick={handleForwardLinkClick(nextExcersice)}>
        {forwardLinkText}
      </Link>
    </div>
  );
};

export default LessonNavigator;
