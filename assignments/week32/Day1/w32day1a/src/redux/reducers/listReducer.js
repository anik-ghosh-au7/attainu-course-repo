export const POPULATE_LIST = "@@list/populate";
export const SELECT_COUNTRY = "@@list/select";
export const BACK_TO_LIST = "@@list/back";
export const CLEAR_LIST = "@@list/clear";

let initial_state = {
  countries: [],
  loading: true,
};

const listReducer = (state, action) => {
  state = state || initial_state;

  switch (action.type) {
    case POPULATE_LIST:
      return { ...state, countries: action.payload, loading: false };

    // case SELECT_COUNTRY:
    //   return { ...state, selectedCountry: action.payload };

    // case BACK_TO_LIST:
    //   return { ...state, selectedCountry: null };

    case CLEAR_LIST:
      return { ...state, countries: [], loading: true };

    default:
      return state;
  }
};

export default listReducer;
