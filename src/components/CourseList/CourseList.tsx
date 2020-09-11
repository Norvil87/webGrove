import React from "react";
import "./CourseList.scss";
import TaskSuite from "../TaskSuite/TaskSuite";
import { Link } from "react-router-dom";
import { useDispatch } from "react-redux";
import { setCurrentExercise } from "../../store/actions";
import { ICourse, IExcercise } from "../../types";

interface ICourseListProps {
  course: ICourse;
}

const CourseList: React.FC<ICourseListProps> = ({ course }) => {
  const dispatch = useDispatch();

  const renderLessons = () => {
    const array: JSX.Element[] = [];
    course.excercises.map((exercise: IExcercise, i: number) => {
      array.push(
        <li key={exercise.id} className="course__lessonItem">
          <span>{i + 1}. </span>
          <Link
            to="/Simulator"
            className="course__lessonLink"
            onClick={() => dispatch(setCurrentExercise({ id: exercise.id, passed: undefined, message: [] }))}
          >
            {exercise.header}
          </Link>
        </li>
      );
    });

    return array;
  };

  return (
    <section className="course">
      <h2>Курс Базовый HTML. Перечень упражнений:</h2>
      <ul className="course__list">{renderLessons()}</ul>
    </section>
  );
};

export default CourseList;
