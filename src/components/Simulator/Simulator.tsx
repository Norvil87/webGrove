import React from "react";
import Challenge from "../Challenge/Challenge";
import Editor from "../Editor/Editor";
import Output from "../Output/Output";
import "./Simulator.scss";
import { IExcercise } from "../../types";

interface ISimulatorProps {
  excercise: IExcercise;
}

const Simulator: React.FC<ISimulatorProps> = ({ excercise }) => {
  return (
    <div className="content__wrapper">
      <Challenge {...excercise} />
      <Editor initValues={excercise.initValues} />
      <Output />
    </div>
  );
};

export default Simulator;
