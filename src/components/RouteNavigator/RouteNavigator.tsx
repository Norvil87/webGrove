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
import { setCourse, setCurrentExercise, setEditorValues, setLessonUrl } from "../../store/actions";

const courseNavigator: any = {
  html: Html,
  css: Css,
  js: Js,
};

const RouteNavigator = () => {
  let { course, courseUrl, exerciseUrl, lessonUrl, exerciseId } = useSelector((state: IRootState) => {
    return {
      course: state.course,
      courseUrl: state.course?.url,
      exerciseUrl: state.currentExercise.exerciseUrl,
      lessonUrl: state.lessonUrl,
      exerciseId: state.currentExercise.exerciseId,
    };
  });

  const dispatch = useDispatch();

  if (!course && window.location.href.includes("/courses/")) {
    const parsedUrl = window.location.href.split("/");
    courseUrl = parsedUrl[4];
    course = courseNavigator[courseUrl];

    dispatch(setCourse(course));

    if (window.location.href.includes("/lessons/")) {
      lessonUrl = parsedUrl[6];
      exerciseUrl = parsedUrl[7];

      const { id, url, tasks, initValues } = course.lessons[lessonUrl].excercises.find(
        excersice => excersice.url === exerciseUrl
      );

      dispatch(
        setCurrentExercise({
          exerciseId: id,
          exerciseUrl: url,
          passed: undefined,
          message: ["Тесты не запущены"],
          tasks: tasks,
        })
      );
      dispatch(setLessonUrl(lessonUrl));
      dispatch(setEditorValues(initValues));

      exerciseId = id;
    }
  }

  return (
    <Switch>
      <Route path="/" exact component={MainPage} />
      <Route
        path={`/courses/${courseUrl}/lessons/${lessonUrl}/${exerciseUrl}`}
        /* path={`/courses/html/html-form/html-submit`} */
        render={() => <Simulator exercise={course.lessons[lessonUrl].excercises[exerciseId - 1]} />}
        /* render={() => <Simulator exercise={Html.lessons["html-form"].excercises[9]} />} */
      />
      <Route path={`/courses/${courseUrl}`} exact render={() => <CoursePage course={courseNavigator[courseUrl]} />} />
      <Route path="/register" component={UserRegistration} />
      <Route path="/login" exact component={UserLogin} />
      <Route path="/login/reminder" component={PasswordReminder} />
      <Route path="/articles" component={UnderConstruction} />
    </Switch>
  );
};

export default RouteNavigator;
