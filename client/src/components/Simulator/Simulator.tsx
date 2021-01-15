import React from "react";
import Challenge from "../Challenge";
import Editor from "../Editor";
import Output from "../Output";
import "./Simulator.scss";
import { IExcercise } from "../../types";
import { ReflexContainer, ReflexElement, ReflexSplitter } from "react-reflex";

interface ISimulatorProps {
  exercise: IExcercise;
}

const Simulator: React.FC<ISimulatorProps> = ({ exercise }) => {
  const minPaneWidth = 300;

  return (
    <div className="simulator__wrapper">
      <ReflexContainer orientation="vertical">
        <ReflexElement minSize={minPaneWidth}>
          <Challenge {...exercise} />
        </ReflexElement>
        <ReflexSplitter />
        <ReflexElement minSize={minPaneWidth}>
          <Editor initValues={exercise.initValues} />
        </ReflexElement>
        <ReflexSplitter />
        <ReflexElement minSize={minPaneWidth}>
          <Output />
        </ReflexElement>
      </ReflexContainer>
    </div>
  );
};

export default Simulator;
