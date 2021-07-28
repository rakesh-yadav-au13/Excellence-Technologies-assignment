import React, { useState, useEffect } from "react";
import { useDispatch } from "react-redux";
import Actions from "../reducers/actions";

const EditModal = ({ editData }) => {
  const [overRideData, setOverRideData] = useState({
    title: editData.title || "",
    index: editData.index || "",
  });
  const [error, setError] = useState("");

  const dispatch = useDispatch();
  const cencelHendler = () => {
    document.getElementById("myModal").style.display = "none";
    setError("");
  };

  useEffect(() => {
    setOverRideData({
      title: editData.title,
      index: editData.index,
    });
  }, [editData]);

  const enterHandler = (e) => {
    if (e.key === "Enter") {
      taskEdotHandler();
    }
  };

  const taskEdotHandler = () => {
    if (overRideData.title !== "") {
      setError("");
      let lsTask = JSON.parse(localStorage.getItem("task"));
      lsTask.splice(overRideData.index, 1, overRideData.title);
      localStorage.setItem("task", JSON.stringify(lsTask));
      dispatch({
        type: Actions.AddTask,
        payload: lsTask,
      });
      document.getElementById("myModal").style.display = "none";
    } else {
      setError("Please enter your task");
    }
  };

  return (
    <div className="modal-content">
      <div className="close_menu">
        <span onClick={cencelHendler} className="close">
          &times;
        </span>
      </div>

      <small className="text-danger text-center">{error ? error : ""}</small>
      <div>
        <div className="form-group">
          <label htmlFor="Id">Title</label>
          <input
            className="form-control"
            type="text"
            value={overRideData.title}
            onKeyDown={(e) => enterHandler(e)}
            onChange={(e) =>
              setOverRideData({
                ...overRideData,
                title: e.target.value,
              })
            }
          />
        </div>
      </div>

      <div className="d-flex align-items-center justify-content-center">
        <button className="addTaskBtn btn_width" onClick={taskEdotHandler}>
          Edit Task
        </button>
      </div>
    </div>
  );
};

export default EditModal;
