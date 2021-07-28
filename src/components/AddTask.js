import React, { useState } from "react";
import TaskAction from "../reducers/actions";
import { useDispatch } from "react-redux";
const AddTask = () => {
  const [taskTitle, settaskTitle] = useState("");
  const [error, setError] = useState("");

  const dispatch = useDispatch();

  const addDatatoRedux = () => {
    let TaskData = JSON.parse(localStorage.getItem("task"));
    dispatch({
      type: TaskAction.AddTask,
      payload: TaskData,
    });
  };
  const enterHandler = (e) => {
    if (e.key === "Enter") {
      addtaskHandler();
    }
  };
  const addtaskHandler = () => {
    if (!taskTitle) {
      setError("Please enter title");
    } else {
      setError("");
      let taskArr = [];
      let lsTask = JSON.parse(localStorage.getItem("task"));
      if (lsTask) {
        taskArr = [...lsTask, taskTitle];
        localStorage.setItem("task", JSON.stringify(taskArr));
        settaskTitle("");
        addDatatoRedux();
      } else {
        taskArr = [taskTitle];
        localStorage.setItem("task", JSON.stringify(taskArr));
        settaskTitle("");
        addDatatoRedux();
      }
    }
  };

  return (
    <div className="addTask">
      <div className="heading">
        <h3>Task Manager</h3>
      </div>
      <small className="text-danger">{error ? error : ""}</small>

      <div className="form-group">
        <input
          className="form-control"
          type="text"
          placeholder="title"
          value={taskTitle}
          onChange={(e) => settaskTitle(e.target.value)}
          onKeyDown={(e) => enterHandler(e)}
        />
      </div>
      <button className="addTaskBtn" onClick={addtaskHandler}>
        Add Task
      </button>
    </div>
  );
};

export default AddTask;
