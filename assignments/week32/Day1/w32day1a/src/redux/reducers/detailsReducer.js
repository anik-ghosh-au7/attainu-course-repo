export const POPULATE_DETAILS = "@@details/populate";
export const CLEAR_DETAILS = "@@details/clear";

let initial_state = { details: [], loading: true };

const detailsReducer = (state, action) => {
  state = state || initial_state;
  switch (action.type) {
    case POPULATE_DETAILS:
      return { ...state, details: action.payload, loading: false };

    case CLEAR_DETAILS:
      return { ...state, details: [], loading: true };

    default:
      return state;
  }
};

export default detailsReducer;
