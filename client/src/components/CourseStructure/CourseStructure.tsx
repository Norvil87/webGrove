import React from "react";
import "./CourseStructure.scss";
import { Link, useRouteMatch } from "react-router-dom";
import { useDispatch } from "react-redux";
import { setCurrentExercise, setCurrentLesson } from "../../store/actions";
import { ICourse, IExcercise, ICourseLesson } from "../../types";
import {
  Accordion,
  AccordionItem,
  AccordionItemHeading,
  AccordionItemButton,
  AccordionItemPanel,
} from "react-accessible-accordion";
import "react-accessible-accordion/dist/fancy-example.css";

interface ICourseListProps {
  courseStructure: ICourse;
}

const CourseList: React.FC<ICourseListProps> = ({ courseStructure }) => {
  const dispatch = useDispatch();
  const { url: matchedUrl } = useRouteMatch();

  const onExcerciseLinkClick = (id: number, lesson: ICourseLesson) => () => {
    const excercise = lesson.excercises[id - 1];

    dispatch(
      setCurrentExercise({
        ...excercise,
        passed: undefined,
        message: [],
      })
    );
    dispatch(setCurrentLesson(lesson));
  };

  const renderExcersises = (lesson: ICourseLesson) => {
    const excercises: JSX.Element[] = [];

    lesson.excercises.map(({ id, url, header }: IExcercise, i: number) => {
      excercises.push(
        <li key={id + url} className="course-structure__exercise">
          <span>{i + 1}. </span>
          <Link to={`${matchedUrl}/lessons/${lesson.url}/${url}`} onClick={onExcerciseLinkClick(id, lesson)}>
            {header}
          </Link>
        </li>
      );
    });

    return excercises;
  };

  const renderLessons = () => {
    const lessons: JSX.Element[] = [];

    for (const title in courseStructure.lessons) {
      const lesson = courseStructure.lessons[title];

      lessons.push(
        <AccordionItem key={title + lesson.id} uuid={`${lesson.id}`}>
          <AccordionItemHeading>
            <AccordionItemButton>{`${lesson.title}. ${lesson.excercises.length} упражнений`}</AccordionItemButton>
          </AccordionItemHeading>
          <AccordionItemPanel>
            <ul className="course-structure__lessons">{renderExcersises(lesson)}</ul>
          </AccordionItemPanel>
        </AccordionItem>
      );
    }

    return lessons;
  };

  return (
    <section className="course-structure">
      <h3>{`Проходите ${courseStructure.title} в следующем порядке:`}</h3>
      <Accordion allowMultipleExpanded allowZeroExpanded preExpanded={["1"]}>
        {renderLessons()}
      </Accordion>
    </section>
  );
};

export default CourseList;
