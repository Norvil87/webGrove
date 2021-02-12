import React from "react";
import Simulator from "../Simulator/Simulator";
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
import { post } from "../../../services";

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

  const getLesson = async (courseUrl: string, lessonUrl: string, exerciseUrl: string) => {
    await post("http://localhost:8081/lesson", { lessonUrl, courseUrl }).then(response => {
     
      const excersice = response.excercises.find((excersice: IExcercise) => excersice.url === exerciseUrl);
      console.log(excersice)
      dispatch(
        setCurrentExercise({
          ...excersice,
          passed: undefined,
          message: ["Тесты не запущены"],
        })
      );
      dispatch(setCurrentLesson(response));
      dispatch(setEditorValues(excersice.initValues));
    });
  };

  if (!courseStructure && window.location.href.includes("/courses/")) {
    const parsedUrl = window.location.href.split("/");
    courseUrl = parsedUrl[4];

    dispatch(setCourseStructure({ url: courseUrl, title: null, info: null, lessons: null, id: null }));

    if (window.location.href.includes("/lessons/")) {
      lessonUrl = parsedUrl[6];
      exerciseUrl = parsedUrl[7];

      getLesson(courseUrl, lessonUrl, exerciseUrl);
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

      <Route path={`/courses/${courseUrl}`} exact render={() => <CoursePage courseUrl={courseUrl} />} />
      <Route path="/register" component={UserRegistration} />
      <Route path="/login" exact component={UserLogin} />
      <Route path="/login/reminder" component={PasswordReminder} />
      <Route path="/articles" component={UnderConstruction} />
    </Switch>
  );
};

export default RouteNavigator;
