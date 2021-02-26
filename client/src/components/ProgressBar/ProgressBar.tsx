import React from "react";
import "./ProgressBar.scss";

interface ProgressBarProps {
  progress: number;
}

const ProgressBar: React.FC<ProgressBarProps> = ({ progress }) => {
  return (
    <>
      <div className="progressBar">
        <div className="progressIndicator" style={{ width: `${progress}%` }}>
          {progress} %
        </div>
      </div>
    </>
  );
};

export default ProgressBar;
