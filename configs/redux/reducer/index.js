import { combineReducers } from "redux";
import userReducer from "./user";
import transferReducer from "./transfer";
import historyReducer from "./history";

// COMBINED REDUCERS
const reducers = {
  user: userReducer,
  transfer: transferReducer,
  history: historyReducer,
};

export default combineReducers(reducers);
