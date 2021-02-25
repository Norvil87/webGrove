import React from "react";
import "./ProgressBar.scss";

interface ProgressBarProps {
  progress: number;
}

const ProgressBar: React.FC<ProgressBarProps> = ({ progress }) => {
  console.log(progress)
  return (
    <>
      <div className="progressBar">
        <div className="progressIndicator" style={{ width: `${progress}%` }}></div>
      </div>
      {progress} %
    </>
  );
};

export default ProgressBar;
