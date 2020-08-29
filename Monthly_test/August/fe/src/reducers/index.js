import { combineReducers } from "redux";
import loginReducer from "./loginReducer";
// import todoReducer from './todoReducer';

export default combineReducers({
  login_data: loginReducer,
  // todos: todoReducer,
});
