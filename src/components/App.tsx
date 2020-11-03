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

const App = () => {
  const { exerciseUrl, blockUrl, exerciseId } = useSelector((state: IRootState) => {
    return {
      exerciseUrl: state.currentExercise.excersiceUrl,
      blockUrl: state.currentExercise.blockUrl,
      exerciseId: state.currentExercise.excersiceId,
    };
  });
  // `/courses/html/html-forms`
  // Html.blocks[blockUrl].excercises[exerciseId - 1]
  // `/courses/html/${blockUrl}/${exerciseUrl}`
  // Html.blocks["html-forms"].excercises[0]
  return (
    <Router>
      <div className="page__wrapper">
        <div className="page__top-wrapper">
          <Header />
          <Switch>
            <Route
              path={`/courses/html/html-semantic/html-iframe`}
              render={() => <Simulator excercise={Html.blocks["html-semantic"].excercises[5]} />}
            />
            <Route path="/courses/html" render={() => <CoursePage course={Html} />} />
            <Route path="/" exact render={() => <MainPage />} />
          </Switch>
        </div>
        <Footer />
      </div>
    </Router>
  );
};

export default App;
