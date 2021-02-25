import React from "react";
import "./ProgressBar.scss";

interface ProgressBarProps {
  progress: number;
  length: number;
}

const ProgressBar: React.FC<ProgressBarProps> = ({ progress, length }) => {
  const progressIndicatorWidth = Math.floor((progress / length) * 100);

  return (
    <div className="progressBar">
      <div className="progressIndicator" style={{ width: `${progressIndicatorWidth}%` }}></div>
    </div>
  );
};

export default ProgressBar;
