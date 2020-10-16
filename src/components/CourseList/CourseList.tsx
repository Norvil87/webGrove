import React from "react";
import "./CourseList.scss";
import { Link } from "react-router-dom";
import { useDispatch } from "react-redux";
import { setCurrentExercise } from "../../store/actions";
import { ICourse, IExcercise } from "../../types";

interface ICourseListProps {
  course: ICourse;
}

const CourseList: React.FC<ICourseListProps> = ({ course }) => {
  const dispatch = useDispatch();

  const renderExcersises = (excercises: IExcercise[], blockUrl: string) => {
    const array: JSX.Element[] = [];
  
    excercises.map((excercise: IExcercise, i: number) => {
      array.push(
        <li key={excercise.id} className="course__lessonItem">
          <span>{i + 1}. </span>
          <Link
            to={`/courses/html/${blockUrl}/${excercise.url}`}
            className="course__lessonLink"
            onClick={() =>
              dispatch(
                setCurrentExercise({
                  blockUrl: blockUrl,
                  excersiceId: excercise.id,
                  excersiceUrl: excercise.url,
                  passed: undefined,
                  message: [],
                })
              )
            }
          >
            {excercise.header}
          </Link>
        </li>
      );
    });

    return array;
  };

  const renderBlocks = () => {
    const blocks: JSX.Element[] = [];
    for (const title in course.blocks) {
      const currentBlock = course.blocks[title];
      blocks.push(
        <li key={title + currentBlock.id} className="course__block">
          <h3>{currentBlock.title}</h3>
          <ul className='course__blockExcercises'>{renderExcersises(currentBlock.excercises, currentBlock.url)}</ul>
        </li>
      );
    }

    return blocks;
  };

  return (
    <section className="course">
      <h2>{`${course.title}. Перечень упражнений: `}</h2>
      <ul className="course__blocks">{renderBlocks()}</ul>
    </section>
  );
};

export default CourseList;
