import TaskAction from "./actions";
const initialState = "";

const TaskReducer = (state = initialState, action) => {
  switch (action.type) {
    case TaskAction.AddTask:
      return (state = action.payload);
    default:
      return state;
  }
};

export default TaskReducer;
