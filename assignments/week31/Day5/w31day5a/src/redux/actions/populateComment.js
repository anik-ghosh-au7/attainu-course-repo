import axios from "axios";
import { POPULATE_COMMENTS } from "../reducers/commentReducer";

export default (id) => async (dispatch, getState) => {
  const response = await axios.get(`/posts/${id}/comments`, {
    baseURL: "https://jsonplaceholder.typicode.com",
    headers: {
      "X-Requested-With": "XMLHttpRequest",
      Accept: "application/json",
    },
  });
  dispatch({ type: POPULATE_COMMENTS, payload: response.data });
};
