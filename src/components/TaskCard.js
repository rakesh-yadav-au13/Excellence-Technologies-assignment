import React, { useState } from "react";
import Actions from "../reducers/actions";
import { useDispatch, useSelector } from "react-redux";
import EditModal from "./EditModal";

const TaskCard = () => {
  const TaskData = useSelector((state) => state);
  const dispatch = useDispatch();
  const [editData, setEditData] = useState({
    title: "",
    index: "",
  });

  const editHandler = (task, i) => {
    setEditData({
      title: task,
      index: i,
    });
    document.getElementById("myModal").style.display = "block";
  };

  const deleteHandler = (i) => {
    let newdata = TaskData.filter((task, idx) => {
      return idx !== i;
    });
    localStorage.setItem("task", JSON.stringify(newdata));
    dispatch({
      type: Actions.AddTask,
      payload: newdata,
    });
  };

  return (
    <div className="row">
      {TaskData &&
        TaskData.map((task, i) => {
          return (
            <div key={i} className="col-sm-6 col-md-3">
              <div className="taskCard">
                <div className="task_title">{task ? task : ""}</div>
                <div className="task_btns">
                  <button
                    onClick={() => editHandler(task, i)}
                    className="btn_1"
                  >
                    <i className="fa fa-edit"></i>
                  </button>
                  <button onClick={() => deleteHandler(i)} className="btn_2">
                    <i className="fa fa-trash-o"></i>
                  </button>
                </div>
              </div>
            </div>
          );
        })}
      <div id="myModal" className="modal">
        <EditModal editData={editData} />
      </div>
    </div>
  );
};

export default TaskCard;
