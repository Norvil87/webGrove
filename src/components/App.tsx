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
  // path={`/courses/html/${blockUrl}/${exerciseUrl}`}
// Html.blocks[blockUrl].excercises[0]
  return (
    <Router>
      <div className="page__wrapper">
        <div className="page__top-wrapper">
          <Header />
          <Switch>
            <Route
              path={`/courses/html/${'html-document'}/${'html-external-links'}`}
              render={() => <Simulator excercise={Html.blocks['html-document'].excercises[5]} />}
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
