import React from "react";
import { Html } from "../../data/courses/HTML/HTML";
import { useSelector, useDispatch } from "react-redux";
import { IRootState } from "../../store/types";
import { ICourseBlock } from "../../types";
import { setCurrentExercise, setEditorValue } from "../../store/actions";
import "./LessonNavigator.scss";
import { Link } from "react-router-dom";

const LessonNavigator: React.FC = ({}) => {
  const { blockUrl, excersiceId, excersiceUrl } = useSelector((state: IRootState) => state.currentExercise);
  const block: ICourseBlock = Html.blocks[blockUrl];
  const numExcercises = block.excercises.length;
  const dispatch = useDispatch();
  const handleBackwardsButtonClick = () => {
    if (excersiceId > 1) {
      const excercise = block.excercises[excersiceId - 2];

      dispatch(setEditorValue({ html: excercise.initValues.html, css: excercise.initValues.css, js: "" }));
      dispatch(
        setCurrentExercise({
          blockUrl: blockUrl,
          excersiceId: excersiceId - 1,
          excersiceUrl: excersiceUrl,
          passed: undefined,
          message: [],
        })
      );
    }
  };

  const handleForwardsButtonClick = () => {
    if (excersiceId < numExcercises) {
      const excercise = block.excercises[excersiceId];

      dispatch(setEditorValue({ html: excercise.initValues.html, css: excercise.initValues.css, js: "" }));
      dispatch(
        setCurrentExercise({
          blockUrl: blockUrl,
          excersiceId: excersiceId + 1,
          excersiceUrl: excersiceUrl,
          passed: undefined,
          message: [],
        })
      );
    }
  };

  return (
    <div className="block-nav">
      <button
        className={`block-nav_backwards ${excersiceId === 1 ? "block-nav_backwards--disabled" : ""}`}
        type="button"
        onClick={handleBackwardsButtonClick}
      >
        Назад
      </button>
      <div className="block-nav_position">{`Упражнение ${excersiceId} из ${numExcercises}`} </div>
      <button className="block-nav_forwards" type="button" onClick={handleForwardsButtonClick}>
        {excersiceId === numExcercises ? (
          <Link to="courses/html" className="block-nav__linkToCoursePage">
            Завершить урок
          </Link>
        ) : (
          "Вперед"
        )}
      </button>
    </div>
  );
};

export default LessonNavigator;
