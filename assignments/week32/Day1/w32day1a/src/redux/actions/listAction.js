import axios from "axios";
import { POPULATE_LIST } from "../reducers/listReducer";

export default (region, country) => async (dispatch, getState) => {
  let response;

  try {
    if (country) {
      response = await axios.get(`/name/${country}?fullText=true`, {
        baseURL: "https://restcountries.eu/rest/v2",
        headers: {
          "X-Requested-With": "XMLHttpRequest",
          Accept: "application/json",
        },
      });
    } else if (region) {
      response = await axios.get(`/region/${region}`, {
        baseURL: "https://restcountries.eu/rest/v2",
        headers: {
          "X-Requested-With": "XMLHttpRequest",
          Accept: "application/json",
        },
      });
    } else {
      response = await axios.get(`/all`, {
        baseURL: "https://restcountries.eu/rest/v2",
        headers: {
          "X-Requested-With": "XMLHttpRequest",
          Accept: "application/json",
        },
      });
    }
    dispatch({ type: POPULATE_LIST, payload: response.data });
  } catch (error) {
    console.log(error);
    dispatch({ type: POPULATE_LIST, payload: [] });
  }
};
