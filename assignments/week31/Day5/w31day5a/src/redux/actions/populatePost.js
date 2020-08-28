import axios from "axios";
import { POPULATE_POSTS } from "../reducers/postReducer";

export default async (dispatch) => {
  const response = await axios.get("/posts", {
    baseURL: "https://jsonplaceholder.typicode.com",
    headers: {
      "X-Requested-With": "XMLHttpRequest",
      Accept: "application/json",
    },
  });
  dispatch({ type: POPULATE_POSTS, payload: response.data });
};
