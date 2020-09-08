import React from "react";
import "./TaskSuite.scss";

interface ITaskSuiteProps {
  tasks: any;
}

const TaskSuite: React.FC<ITaskSuiteProps> = ({ tasks }) => {
  const renderTasks = () => {
    let elems: any[] = [];
    tasks.map((task: any) => elems.push(<li key={task.id}>{task.text}</li>));

    return elems;
  };

  return <ul className="tasks">{renderTasks()}</ul>;
};

export default TaskSuite;
