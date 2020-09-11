import React, { useEffect } from "react";
import "./TaskSuite.scss";
import { useSelector, useDispatch } from "react-redux";
import { IRootState } from "../../store/types";
import { setCurrentTasks } from "../../store/actions";
import { ITask } from "../../types";
import { ICurrentTask } from "../../store/types";

interface ITaskSuiteProps {
  tasks: ITask[];
}

const TaskSuite: React.FC<ITaskSuiteProps> = ({ tasks }) => {
  const currentTasks = useSelector((state: IRootState) => state.currentTasks);
  const dispatch = useDispatch();

  const setTasks = () => {
    let array: ITask[] = [];
    tasks.map((task: ICurrentTask) => {
      task.passed = undefined;
      array.push(task);
    });

    dispatch(setCurrentTasks(array));
  };

  useEffect(() => setTasks(), []);
  let taskClassName: string;
  const renderTasks = () => {
    let elems: JSX.Element[] = [];
    currentTasks.map((task: ICurrentTask) => {
      if (task.passed === true) {
        taskClassName = "task_passed";
      } else if (task.passed === false) {
        taskClassName = "task_failed";
      }
      console.log(taskClassName);
      elems.push(
        <li className={taskClassName} key={task.id}>
          {task.label}
        </li>
      );
    });

    return elems;
  };

  return <ul className="tasks">{renderTasks()}</ul>;
};

export default TaskSuite;
