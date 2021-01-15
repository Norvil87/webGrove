import React from "react";
import { BrowserRouter as Router } from "react-router-dom";
import Header from "./Header";
import Footer from "./Footer";
import RouteNavigator from "./RouteNavigator";
import "../styles/common.scss";

const App = () => {
  return (
    <Router>
      <div className="page__wrapper">
        <Header />
        <main className="content">
          <RouteNavigator />
        </main>
        <Footer />
      </div>
    </Router>
  );
};

export default App;
