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
  const dispatch = useDispatch();
  const { url: matchedUrl } = useRouteMatch();

  let courseProgress = 0;
  let courseLength = 0;

  const calculateProgress = (completed: number, capacity: number) => Math.floor((completed / capacity) * 100);
  const getProgressString = (completed: number, capacity: number) =>
    user?.id ? `Ваш прогресс ${completed} из ${capacity} упражнений` : "Зарегистрируйтесь, чтобы отслеживать прогресс";

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
      let className = "course__exercise";
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

    for (const lessonUrl in courseStructure.lessons) {
      const lesson = courseStructure.lessons[lessonUrl];
      const { excercises, title, id } = lesson;

      let excercisesPassed = 0;
      let lessonProgress;

      if (user?.id) {
        const userProgress = user.progress;
        lessonProgress = userProgress[lessonUrl];

        if (lessonProgress) {
          excercisesPassed = Object.keys(lessonProgress).length;
        }

        courseProgress += excercisesPassed;
        courseLength += excercises.length;
      }

      const lessonProgressString = getProgressString(excercisesPassed, excercises.length);
      const lessonProgressPercent = calculateProgress(excercisesPassed, excercises.length);

      lessons.push(
        <AccordionItem key={title + id} uuid={`${id}`}>
          <AccordionItemHeading>
            <AccordionItemButton>
              <b>{title}.</b> {lessonProgressString}
              {user?.id && <ProgressBar progress={lessonProgressPercent} />}
            </AccordionItemButton>
          </AccordionItemHeading>
          <AccordionItemPanel>
            <ul className="course__lessons">{renderExcersises(lesson, lessonProgress)}</ul>
          </AccordionItemPanel>
        </AccordionItem>
      );
    }

    return lessons;
  };

  return (
    <section className="course__structure">
      <h3>{`Проходите ${courseStructure.title} в следующем порядке:`}</h3>
      <Accordion allowMultipleExpanded allowZeroExpanded preExpanded={["1"]} className="course__lessons-container">
        {renderLessons()}
      </Accordion>
      <div className="course__progress">
        <h3>Общий прогресс курса</h3>
        {getProgressString(courseProgress, courseLength)}
        {user?.id && <ProgressBar progress={calculateProgress(courseProgress, courseLength)} />}
      </div>
    </section>
  );
};

export default CourseList;
