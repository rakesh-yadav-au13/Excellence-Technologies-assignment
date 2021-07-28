import { createStore } from "redux";
import reducers from "./reducers/TaskReducer";

const store = createStore(reducers);

export default store;
