export const POPULATE_COMMENTS = "@@comment/populate";
export const CLEAR_COMMENTS = "@@comment/clear";

let initial_state = { comments: [], isLoading: true };

const commentReducer = (state, action) => {
  state = state || initial_state;

  switch (action.type) {
    case POPULATE_COMMENTS:
      return { ...state, comments: action.payload, isLoading: false };

    case CLEAR_COMMENTS:
      return { ...state, comments: [], isLoading: true };

    default:
      return state;
  }
};

export default commentReducer;
