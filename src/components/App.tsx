import React from "react";
import Simulator from "./Simulator/Simulator";
import Header from "./Header/Header";
import Footer from "./Footer/Footer";
import "../styles/common.scss";
import { createStore } from "redux";
import { reducer } from "../store/reducers";
import { Provider } from "react-redux";

const store = createStore(reducer);

const App = () => {
  return (
    <>
      <Provider store={store}>
        <div className="container">
          <div className="page__wrapper">
            <Header />
            <Simulator />
          </div>
          <Footer />
        </div>
      </Provider>
    </>
  );
};

export default App;
