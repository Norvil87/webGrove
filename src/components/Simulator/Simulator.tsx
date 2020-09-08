import React from "react";
import Challenge from "../Challenge/Challenge";
import Editor from "../Editor/Editor";
import Output from "../Output/Output";
import "./Simulator.scss";

interface ISimulatorProps {
  data: any;
}

const Simulator: React.FC<ISimulatorProps> = ({ data }) => {
  return (
    <div className="content__wrapper">
      <Challenge header={data[0].header} theory={data[0].theory} tasks={data[0].tasks} goal={data[0].goal} />
      <Editor initValues={data[0].initValues} />
      <Output />
    </div>
  );
};

export default Simulator;
