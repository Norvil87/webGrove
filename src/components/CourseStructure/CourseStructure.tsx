import React from "react";
import "./CourseStructure.scss";
import { Link } from "react-router-dom";
import { useDispatch } from "react-redux";
import { setCurrentExercise } from "../../store/actions";
import { ICourse, IExcercise } from "../../types";

import {
  Accordion,
  AccordionItem,
  AccordionItemHeading,
  AccordionItemButton,
  AccordionItemPanel,
} from "react-accessible-accordion";
import "react-accessible-accordion/dist/fancy-example.css";

interface ICourseListProps {
  course: ICourse;
}

const CourseList: React.FC<ICourseListProps> = ({ course }) => {
  const dispatch = useDispatch();

  const renderExcersises = (excercises: IExcercise[], lessonUrl: string) => {
    const array: JSX.Element[] = [];

    excercises.map((excercise: IExcercise, i: number) => {
      array.push(
        <li key={excercise.id} className="course-structure__excersice">
          <span>{i + 1}. </span>
          <Link
            to={`/courses/html/${lessonUrl}/${excercise.url}`}
            onClick={() =>
              dispatch(
                setCurrentExercise({
                  lessonUrl: lessonUrl,
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

  const renderLessons = () => {
    const blocks: JSX.Element[] = [];
    for (const title in course.lessons) {
      const currentBlock = course.lessons[title];
      blocks.push(
        <AccordionItem key={title + currentBlock.id} uuid={`${currentBlock.id}`}>
          <AccordionItemHeading>
            <AccordionItemButton>{`${currentBlock.title}. ${currentBlock.excercises.length} упражнений`}</AccordionItemButton>
          </AccordionItemHeading>
          <AccordionItemPanel>
            <ul className="course-structure__lessons">{renderExcersises(currentBlock.excercises, currentBlock.url)}</ul>
          </AccordionItemPanel>
        </AccordionItem>
      );
    }

    return blocks;
  };

  return (
    <section className="course-structure">
      <h3>{`Проходите ${course.title} в следующем порядке:`}</h3>
      <Accordion allowMultipleExpanded allowZeroExpanded preExpanded={["1"]}>
        {renderLessons()}
      </Accordion>
    </section>
  );
};

export default CourseList;
