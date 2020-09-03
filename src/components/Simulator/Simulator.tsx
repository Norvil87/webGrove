import React from "react";
import Challenge from "../Challenge/Challenge";
import Editor from "../Editor/Editor";
import Output from "../Output/Output";
import "./Simulator.scss";

const Simulator = () => {
  return (
    <div className="content__wrapper">
      <Challenge />
      <Editor />
      <Output />
    </div>
  );
};

export default Simulator;
