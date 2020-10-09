import React from "react";
import Challenge from "../Challenge";
import Editor from "../Editor";
import Output from "../Output";
import "./Simulator.scss";
import { IExcercise } from "../../types";
import { ReflexContainer, ReflexElement, ReflexSplitter } from "react-reflex";

interface ISimulatorProps {
  excercise: IExcercise;
}

const Simulator: React.FC<ISimulatorProps> = ({ excercise }) => {
  const minPaneWidth = 300;

  return (
    <div className="content__wrapper">
      <ReflexContainer orientation="vertical">
        <ReflexElement minSize={minPaneWidth}>
          <Challenge {...excercise} />
        </ReflexElement>
        <ReflexSplitter />
        <ReflexElement minSize={minPaneWidth}>
          <Editor initValues={excercise.initValues} />
        </ReflexElement>
        <ReflexSplitter  />
        <ReflexElement minSize={minPaneWidth}>
          <Output />
        </ReflexElement>
      </ReflexContainer>
    </div>
  );
};

export default Simulator;
