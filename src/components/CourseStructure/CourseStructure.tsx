import React from "react";
import "./CourseStructure.scss";
import { Link, useRouteMatch } from "react-router-dom";
import { useDispatch } from "react-redux";
import { setCurrentExercise, setLessonUrl } from "../../store/actions";
import { ICourse, IExcercise, ITask } from "../../types";
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
  const { url: matchedUrl } = useRouteMatch();

  const onExcerciseLinkClick = (id: number, url: string, lessonUrl: string, tasks: ITask[]) => () => {
    dispatch(
      setCurrentExercise({
        exerciseId: id,
        exerciseUrl: url,
        passed: undefined,
        message: [],
        tasks,
      })
    );
    dispatch(setLessonUrl(lessonUrl));
  };

  const renderExcersises = (excercises: IExcercise[], lessonUrl: string) => {
    const array: JSX.Element[] = [];

    excercises.map(({ id, url, header, tasks }: IExcercise, i: number) => {
      array.push(
        <li key={id + url} className="course-structure__exercise">
          <span>{i + 1}. </span>
          <Link
            to={`${matchedUrl}/lessons/${lessonUrl}/${url}`}
            onClick={onExcerciseLinkClick(id, url, lessonUrl, tasks)}
          >
            {header}
          </Link>
        </li>
      );
    });

    return array;
  };

  const renderLessons = () => {
    const lessons: JSX.Element[] = [];

    for (const title in course.lessons) {
      const currentBlock = course.lessons[title];

      lessons.push(
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

    return lessons;
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
