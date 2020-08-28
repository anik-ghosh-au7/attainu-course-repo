export const POPULATE_POSTS = "@@post/populate";
export const SELECT_POST = "@@post/select";
export const BACK_TO_POST = "@@post/back";

let initial_state = { posts: [], selectedPost: null, isLoading: true };

const postReducer = (state, action) => {
  state = state || initial_state;

  switch (action.type) {
    case POPULATE_POSTS:
      return { ...state, posts: action.payload, isLoading: false };

    case SELECT_POST:
      return { ...state, selectedPost: action.payload };

    case BACK_TO_POST:
      return { ...state, selectedPost: null };

    default:
      return state;
  }
};

export default postReducer;
