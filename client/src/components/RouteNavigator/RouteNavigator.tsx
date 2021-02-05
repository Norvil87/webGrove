import React from "react";
import Simulator from "../Simulator/Simulator";
import { Html } from "../../data/courses/HTML/HTML";
import { Css } from "../../data/courses/CSS/СSS";
import { Js } from "../../data/courses/JS/JS";
import CoursePage from "../../pages/CoursePage";
import MainPage from "../../pages/MainPage";
import { Switch, Route } from "react-router-dom";
import { useSelector, useDispatch } from "react-redux";
import { IRootState } from "../../store/types";
import UnderConstruction from "./../UnderConstruction";
import UserRegistration from "./../Modals/UserRegistration";
import UserLogin from "./../Modals/UserLogin";
import PasswordReminder from "./../Modals/PasswordReminder";
import { setCurrentExercise, setEditorValues, setCourseStructure, setCurrentLesson } from "../../store/actions";
import { IExcercise } from "../../types";
import { createCourseStructure } from "../../../services";

// temp. Remove CourseNavigator when course structure is fetched from server
const courseNavigator: any = {
  html: Html,
  css: Css,
  js: Js,
};

const RouteNavigator = () => {
  let { courseUrl, courseStructure, exerciseUrl, lessonUrl, currentExercise } = useSelector((state: IRootState) => {
    return {
      courseStructure: state.courseStructure,
      courseUrl: state.courseStructure?.url,
      exerciseUrl: state.currentExercise.url,
      exerciseId: state.currentExercise.id,
      currentExercise: state.currentExercise,
      currentLesson: state.currentLesson,
      lessonUrl: state.currentLesson?.url,
    };
  });

  const dispatch = useDispatch();

  if (!courseStructure && window.location.href.includes("/courses/")) {
    const parsedUrl = window.location.href.split("/");
    courseUrl = parsedUrl[4];
    let course = courseNavigator[courseUrl];
    const courseStructure = createCourseStructure(course);

    dispatch(setCourseStructure(courseStructure));

    if (window.location.href.includes("/lessons/")) {
      lessonUrl = parsedUrl[6];
      exerciseUrl = parsedUrl[7];

      let lesson;
      for (const url in course.lessons) {
        if (url === lessonUrl) {
          lesson = course.lessons[url];
        }
      }
      const excersice = lesson.excercises.find((excersice: IExcercise) => excersice.url === exerciseUrl);

      dispatch(
        setCurrentExercise({
          ...excersice,
          passed: undefined,
          message: ["Тесты не запущены"],
        })
      );
      dispatch(setCurrentLesson(lesson));
      dispatch(setEditorValues(excersice.initValues));
    }
  }

  return (
    <Switch>
      <Route path="/" exact component={MainPage} />
      <Route
        path={`/courses/${courseUrl}/lessons/${lessonUrl}/${exerciseUrl}`}
        //path={`/courses/css/lessons/css-box-model/css-border-box`}
        render={() => <Simulator exercise={currentExercise} />}
        //render={() => <Simulator exercise={Css.lessons["css-box-model"].excercises[14]} />}
      />

      <Route
        path={`/courses/${courseUrl}`}
        exact
        render={() => <CoursePage courseStructure={courseNavigator[courseStructure?.url]} />}
      />
      <Route path="/register" component={UserRegistration} />
      <Route path="/login" exact component={UserLogin} />
      <Route path="/login/reminder" component={PasswordReminder} />
      <Route path="/articles" component={UnderConstruction} />
    </Switch>
  );
};

export default RouteNavigator;
