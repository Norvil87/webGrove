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
              path={`/courses/html/${lessonUrl}/${exerciseUrl}`}
              render={() => <Simulator excercise={Html.lessons[lessonUrl].excercises[exerciseId - 1]} />}
            />
            <Route path="/courses/html" render={() => <CoursePage course={Html} />} />
            <Route path="/courses/css" component={UnderConstruction} />
            <Route path="/courses/js" component={UnderConstruction} />
            <Route path="/" exact render={() => <MainPage />} />
          </Switch>
        </div>
        <Footer />
      </div>
    </Router>
  );
};

export default App;
