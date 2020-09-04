import { createStore } from "redux";

export const POPULATE_DETAILS = "@@details/populate";
export const CLEAR_DETAILS = "@@details/clear";

let initial_state = {};

const reducer = (state, action) => {
  state = state || initial_state;

  switch (action.type) {
    case POPULATE_DETAILS:
      return action.payload;

    case CLEAR_DETAILS:
      return {};

    default:
      return state;
  }
};

const store = createStore(reducer);

export default store;
