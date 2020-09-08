import React from "react";
import Simulator from "./Simulator/Simulator";
import Header from "./Header/Header";
import Footer from "./Footer/Footer";
import "../styles/common.scss";
import { createStore } from "redux";
import { reducer } from "../store/reducers";
import { Provider } from "react-redux";
import { HtmlCourse } from "../data/HtmlCourse";

export const store = createStore(reducer);

const App = () => {
  return (
    <>
      <Provider store={store}>
        <div className="container">
          <div className="page__wrapper">
            <Header />
            <Simulator data={HtmlCourse} />
          </div>
          <Footer />
        </div>
      </Provider>
    </>
  );
};

export default App;
