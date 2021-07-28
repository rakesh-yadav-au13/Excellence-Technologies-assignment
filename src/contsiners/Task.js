import React, { useEffect, useCallback } from "react";
import actions from "../reducers/actions";
import { useDispatch } from "react-redux";
import AddTask from "../components/AddTask";
import TaskCard from "../components/TaskCard";

const Task = () => {
  const dispatch = useDispatch();

  const checkTaskData = useCallback(() => {
    const item = JSON.parse(localStorage.getItem("task"));
    if (item) {
      dispatch({
        type: actions.AddTask,
        payload: item,
      });
    }
  }, [dispatch]);

  useEffect(() => {
    checkTaskData();
  }, [checkTaskData]);

  return (
    <div className="container">
      <AddTask />
      <div className="task-container">
        <TaskCard />
      </div>
    </div>
  );
};

export default Task;
