import React from "react";
import Simulator from "./Simulator/Simulator";
import Header from "./Header/Header";
import Footer from "./Footer/Footer";
import "../styles/common.scss";
import { Html } from "../data/courses/HTML/HTML";
import CoursePage from "../pages/CoursePage";
import MainPage from "../pages/MainPage";
import { BrowserRouter as Router, Switch, Route } from "react-router-dom";
import { useSelector } from "react-redux";
import { IRootState } from "../store/types";
import UnderConstruction from "./UnderConstruction";
import UserRegistration from "./Modals/UserRegistration";
import UserLogin from "./Modals/UserLogin";
import PasswordReminder from "./Modals/PasswordReminder";

const App = () => {
  const { exerciseUrl, lessonUrl, exerciseId } = useSelector((state: IRootState) => {
    return {
      exerciseUrl: state.currentExercise.excersiceUrl,
      lessonUrl: state.currentExercise.lessonUrl,
      exerciseId: state.currentExercise.excersiceId,
    };
  });

  // `/courses/html/html-forms`
  // Html.blocks[lessonUrl].excercises[exerciseId - 1]
  // `/courses/html/${lessonUrl}/${exerciseUrl}`
  // Html.blocks["html-forms"].excercises[0]
  return (
    <Router>
      <div className="page__wrapper">
        <div className="page__top-wrapper">
          <Header />
          <Switch>
            <Route
              path={`/courses/html/html-semantic/html-iframe`}
              render={() => <Simulator excercise={Html.lessons["html-semantic"].excercises[5]} />}
            />
            <Route path="/courses/html" render={() => <CoursePage course={Html} />} />
            <Route path="/courses/css" component={UnderConstruction} />
            <Route path="/courses/js" component={UnderConstruction} />
            <Route path="/" exact render={() => <MainPage />} />
            <Route path="/register" component={UserRegistration} />
            <Route path="/login" exact component={UserLogin} />
            <Route path="/login/reminder" component={PasswordReminder} />
            <Route path="/articles" component={UnderConstruction} />
          </Switch>
        </div>
        <Footer />
      </div>
    </Router>
  );
};

export default App;
