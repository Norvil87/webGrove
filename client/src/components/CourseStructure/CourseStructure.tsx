import React from "react";
import "./CourseStructure.scss";
import { Link, useRouteMatch } from "react-router-dom";
import { useDispatch, useSelector } from "react-redux";
import { setCurrentExercise, setCurrentLesson } from "../../store/actions";
import { ICourse, IExcercise, ICourseLesson } from "../../../../shared/types";
import ProgressBar from "../ProgressBar";
import {
  Accordion,
  AccordionItem,
  AccordionItemHeading,
  AccordionItemButton,
  AccordionItemPanel,
} from "react-accessible-accordion";
import "react-accessible-accordion/dist/fancy-example.css";
import { post } from "../../../services";
import { IRootState } from "../../store/types";

interface ICourseListProps {
  courseStructure: ICourse;
}

const CourseList: React.FC<ICourseListProps> = ({ courseStructure }) => {
  const user = useSelector((state: IRootState) => state.user);
  let courseProgress = 0;
  let courseLength = 0;

  const dispatch = useDispatch();
  const { url: matchedUrl } = useRouteMatch();

  const onExcerciseLinkClick = (id: number, lessonUrl: string) => async () => {
    const { url: courseUrl } = courseStructure;
    const lesson = await post("http://localhost:8081/lesson", { lessonUrl, courseUrl });
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

  const renderExcersises = (lesson: ICourseLesson, lessonProgress: any) => {
    const excercises: JSX.Element[] = [];

    lesson.excercises.map(({ id, url, header }: IExcercise, i: number) => {
      let className = "course-structure__exercise";
      if (lessonProgress && lessonProgress[url]) {
        className += " passed";
      }

      excercises.push(
        <li key={id + url} className={className}>
          <span>{i + 1}. </span>
          <Link to={`${matchedUrl}/lessons/${lesson.url}/${url}`} onClick={onExcerciseLinkClick(id, lesson.url)}>
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

      let excercisesPassed = 0;
      let lessonProgressString = "Зарегистрируйтесь, чтобы отслеживать прогресс";
      let lessonProgress;

      if (user && user.id) {
        const userProgress = user.progress;
        lessonProgress = userProgress[title];
        if (lessonProgress) {
          excercisesPassed = Object.keys(lessonProgress).length;
        }

        lessonProgressString = `Ваш прогресс ${excercisesPassed} из ${lesson.excercises.length} упражнений`;
        courseProgress += excercisesPassed;
        courseLength += lesson.excercises.length;
      }

      const lessonProgressPercent = Math.floor((excercisesPassed / lesson.excercises.length) * 100);

      lessons.push(
        <AccordionItem key={title + lesson.id} uuid={`${lesson.id}`}>
          <AccordionItemHeading>
            <AccordionItemButton>
              <span style={{ marginRight: 20 }}>
                <b>{lesson.title}.</b> {lessonProgressString}
                <ProgressBar progress={lessonProgressPercent}></ProgressBar>
                {lessonProgressPercent} %
              </span>
            </AccordionItemButton>
          </AccordionItemHeading>
          <AccordionItemPanel>
            <ul className="course-structure__lessons">{renderExcersises(lesson, lessonProgress)}</ul>
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
