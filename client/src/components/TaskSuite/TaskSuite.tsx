import React, { useEffect } from "react";
import "./TaskSuite.scss";
import { useSelector, useDispatch } from "react-redux";
import { IRootState } from "../../store/types";
import { setCurrentTasks } from "../../store/actions";
import { ITask } from "../../../../shared/types";
import { ICurrentTask } from "../../store/types";

const TaskSuite: React.FC = () => {
  const tasks = useSelector((state: IRootState) => state.currentExercise.tasks);
  if (!tasks) {
    return null;
  }

  const dispatch = useDispatch();

  const setTasks = () => {
    let array: ITask[] = [];
    tasks.map((task: ICurrentTask) => {
      task.passed = undefined;
      array.push(task);
    });

    dispatch(setCurrentTasks(array));
  };

  useEffect(() => {
    if (tasks) {
      setTasks();
    }
  }, []);

  let taskClassName: string;
  const renderTasks = () => {
    let elems: JSX.Element[] = [];
    tasks.map((task: ICurrentTask) => {
      if (task.passed === true) {
        taskClassName = "task_passed";
      } else if (task.passed === false) {
        taskClassName = "task_failed";
      }
      elems.push(<li className={taskClassName} key={task.id} dangerouslySetInnerHTML={{ __html: task.label }}></li>);
    });

    return elems;
  };

  return <ul className="tasks">{renderTasks()}</ul>;
};

export default TaskSuite;
