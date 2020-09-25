import React from "react";
import Simulator from "./Simulator/Simulator";
import Header from "./Header/Header";
import Footer from "./Footer/Footer";
import "../styles/common.scss";

import { HtmlCourse } from "../data/HtmlCourse";
import CoursePage from "../pages/CoursePage";
import { BrowserRouter as Router, Switch, Route } from "react-router-dom";
import { useSelector } from "react-redux";
import { IRootState } from "../store/types";

const App = () => {
  const exerciseId = useSelector((state: IRootState) => state.currentExercise.id);
  // (exerciseId as number) - 1
  return (
    <Router>
      <div className="page__wrapper">
        <div className="page__top-wrapper">
          <Header />
          <Switch>
            <Route path="/Simulator" render={() => <Simulator excercise={HtmlCourse.excercises[5]} />} />
            <Route path="/" exact render={() => <CoursePage course={HtmlCourse} />} />
          </Switch>
        </div>
        <Footer />
      </div>
    </Router>
  );
};

export default App;
