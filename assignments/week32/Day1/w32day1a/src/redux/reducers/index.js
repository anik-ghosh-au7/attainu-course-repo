import { combineReducers } from "redux";
import detailsReducer from "./detailsReducer";
import listReducer from "./listReducer";

export default combineReducers({
  list_data: listReducer,
  detail_data: detailsReducer,
});
